import React, { useState } from 'react';
import { useFormikContext } from 'formik';
import { Typography, Grid, IconButton } from '@material-ui/core';
import { FileCopy as FileCopyIcon } from '@material-ui/icons';
import ShippingDetails from './ShippingDetails';

export default function ReviewOrder() {
  const { values: formValues } = useFormikContext();
  const orderNumber = '925465788'; // Número de pedido

  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(orderNumber);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000); // Restablecer el estado después de 2 segundos
  };

  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <ShippingDetails formValues={formValues} />
      </Grid>
      <Typography
        variant="h6"
        gutterBottom
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '20px auto',
          border: '1px solid #ccc',
          padding: '10px',
          borderRadius: '5px',
        }}
      >
        <span style={{ marginRight: '10px' }}>{orderNumber} - Efrain Vitorino</span>
        <IconButton
          aria-label="Copy"
          onClick={copyToClipboard}
          color="primary"
        >
          <FileCopyIcon />
        </IconButton>
        {isCopied && <span style={{ color: 'green', marginLeft: '10px' }}>Copiado!</span>}
      </Typography>
    </React.Fragment>
  );
}
