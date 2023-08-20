const messages = {
	es: {
	  translations: {
		signup: {
		  title: "Registrarse",
		  toasts: {
			success: "¡Usuario creado con éxito! ¡¡¡Acceso!!!.",
			fail: "Error al crear usuario. Verifique la información proporcionada.",
		  },
		  form: {
			name: "Nombre",
			email: "Email",
			password: "Contraseña",
		  },
		  buttons: {
			submit: "Registrar",
			login: "ya tienen una cuenta!",
		  },
		},
		login: {
		  title: "Login",
		  form: {
			email: "Email",
			password: "Contraseña",
		  },
		  buttons: {
			submit: "Entrar",
			register: "¿No tienes una cuenta? Registro!",
		  },
		},
		companies: {
		  title: "Registrar Empresa",
		  form: {
			name: "Nombre de Empresa",
			plan: "Plan",
			token: "Token",
			submit: "registar",
			success: "Empresa creada con exito!",
		  },
		},
		auth: {
		  toasts: {
			success: "Bienvenido a whasapo!",
		  },
		  token: "Token",
		},
		dashboard: {
		  charts: {
			perDay: {
			  title: "Atenciones de Hoy: ",
			},
		  },
		},
		connections: {
		  title: "Conexiones",
		  toasts: {
			deleted: "Conexión de WhatsApp eliminada con éxito!",
		  },
		  confirmationModal: {
			deleteTitle: "Eliminar",
			deleteMessage: "¿Estás seguro? Esta acción no se puede revertir..",
			disconnectTitle: "Desconectar",
			disconnectMessage:
			  "¿Está seguro? Deberá escanear el código QR nuevamente.",
		  },
		  buttons: {
			add: "Añadir WhatsApp",
			disconnect: "desconectar",
			tryAgain: "Intentar nuevamente",
			qrcode: "QR CODE",
			newQr: "Nuevo CÓDIGO QR",
			connecting: "Conectando",
		  },
		  toolTips: {
			disconnected: {
			  title: "Error al iniciar sesión en WhatsApp",
			  content:
				"Asegúrese de que su teléfono esté conectado a Internet y vuelva a intentarlo, o solicite un nuevo código QR",
			},
			qrcode: {
			  title: "Esperando la lectura del código QR",
			  content:
				"Haga clic en el botón 'CÓDIGO QR' y escanee el Código QR con su teléfono celular para iniciar la sesión",
			},
			connected: {
			  title: "Conexión establecida!",
			},
			timeout: {
			  title: "Se ha perdido la conexión con el teléfono móvil.",
			  content:
				"Asegúrese de que su teléfono esté conectado a Internet y WhatsApp esté abierto, o haga clic en el botón 'Desconectar' para obtener un nuevo código QR",
			},
		  },
		  table: {
			name: "Nombre",
			status: "Estado",
			lastUpdate: "ultima actualizacion",
			default: "Estándar",
			actions: "Accion",
			session: "Sesión",
		  },
		},
		internalChat:{
		  title: "Chat Interno"
			
		},
		whatsappModal: {
		  title: {
			add: "Agregar WhatsApp",
			edit: "Editar WhatsApp",
		  },
		  form: {
			name: "Nombre",
			default: "Estado",
		  },
		  buttons: {
			okAdd: "Agregar",
			okEdit: "Guardar",
			cancel: "Cancelar",
		  },
		  success: "WhatsApp guardado con éxito.",
		},
		qrCode: {
		  message: "Escanea el QrCode para iniciar la sesión",
		},
		contacts: {
		  title: "Contactos",
		  toasts: {
			deleted: "Contacto eliminado con éxito!",
		  },
		  searchPlaceholder: "Buscar...",
		  confirmationModal: {
			deleteTitle: "Eliminar ",
			importTitlte: "importar contactos",
			deleteMessage:
			  "¿Está seguro de que desea eliminar este contacto? Todas las citas relacionadas se perderán.",
			importMessage: "Quiere importar todos los contactos del teléfono?",
		  },
		  buttons: {
			import: "Importar Contactos",
			add: "Añadir Contacto",
		  },
		  table: {
			name: "Nombre",
			whatsapp: "WhatsApp",
			email: "Email",
			actions: "Acciones",
		  },
		},
		contactModal: {
		  title: {
			add: "Agregar contacto",
			edit: "Editar contacto",
		  },
		  form: {
			mainInfo: "datos de contacto",
			extraInfo: "Informacion adicional",
			name: "Nombre",
			number: "Número de Whatsapp",
			email: "Email",
			extraName: "Nombre del campo",
			extraValue: "Valor",
		  },
		  buttons: {
			addExtraInfo: "Añadir informacion",
			okAdd: "Añadir",
			okEdit: "Guardar",
			cancel: "Cancelar",
		  },
		  success: "Contacto guardado correctamente.",
		},
		queueModal: {
		  title: {
			add: "Añadir Area & sector",
			edit: "Editar",
		  },
		  form: {
			name: "Nombre",
			color: "Color",
			greetingMessage: "mensaje de saludo",
			complationMessage: "mensaje de finalización",
			outOfHoursMessage: "Mensaje fuera de horario",
			ratingMessage: "mensaje de evaluación",
			transferMessage: "Transferir mensaje",
			token: "Token",
		  },
		  buttons: {
			okAdd: "Añadir",
			okEdit: "guardar",
			cancel: "Cancelar",
		  },
		},
		userModal: {
		  title: {
			add: "Agregar Nuevo Colaborador",
			edit: "Editar Colaborador",
		  },
		  form: {
			name: "Nombre",
			email: "Email",
			password: "Contraseña",
			profile: "Cargo",
		  },
		  buttons: {
			okAdd: "Agregar",
			okEdit: "Guardar",
			cancel: "Cancelar",
		  },
		  success: "Colaborador guardado con éxito.",
		},
		scheduleModal: {
		  title: {
			add: "Nueva Agendamiento",
			edit: "Editar Agendamiento",
		  },
		  form: {
			body: "Mensaje",
			contact: "Contacto & cliente",
			sendAt: "Fecha de Agendamiento",
			sentAt: "Fecha de Envio",
		  },
		  buttons: {
			okAdd: "Agregar",
			okEdit: "Guardar",
			cancel: "Cancelar",
		  },
		  success: "Agendamiento Realizado con exito.",
		},
		tagModal: {
		  title: {
			add: "Nueva Tag & Etiqueta",
			edit: "Editar Tag & Etiqueta",
		  },
		  form: {
			name: "Nombre",
			color: "Color",
			 kanban: "Kanban",
		  },
		  buttons: {
			okAdd: "Agregar",
			okEdit: "Guardar",
			cancel: "Cancelar",
		  },
		  success: "Tag guardado con exito.",
		},
		chat: {
		  noTicketMessage: "Seleccione un ticket para comenzar a chatear.",
		},
		uploads: {
		  titles: {
			titleUploadMsgDragDrop: "ARRASTRAR Y SOLTAR ARCHIVOS EN EL CAMPO DE ABAJO",
			titleFileList: "Lista de archivo(s)"
		  },
		},      
		ticketsManager: {
		  buttons: {
			newTicket: "Nuevo",
		  },
		},
		ticketsQueueSelect: {
		  placeholder: "Areas & Sectores",
		},
		tickets: {
		  toasts: {
			deleted: "el cliente en la que estabas ha sido eliminado.",
		  },
		  notification: {
			message: "Mensaje de",
		  },
		  tabs: {
			open: { title: "Abiertas" },
			closed: { title: "Atendidos" },
			search: { title: "Buscar" },
		  },
		  search: {
			placeholder: "Servicio de búsqueda y mensajes",
		  },
		  buttons: {
			showAll: "Todos",
		  },
		},
		transferTicketModal: {
		  title: "Transferir Ticket",
		  fieldLabel: "Digite para buscar colaborador",
		  fieldQueueLabel: "Transferir a otra Area",
		  fieldQueuePlaceholder: "Seleccione Area",
		  noOptions: "No se encontró ningún Colaborador con ese nombre",
		  buttons: {
			ok: "Transferir",
			cancel: "Cancelar",
		  },
		},
		ticketsList: {
		  pendingHeader: "Esperando",
		  assignedHeader: "Atendiendo",
		  noTicketsTitle: "Nada aqui!",
		  noTicketsMessage:
			"No se encontró ningún servicio con este estado o término de búsqueda",
		  buttons: {
			accept: "Aceptar",
		  },
		},
		newTicketModal: {
		  title: "Crear Ticket",
		  fieldLabel: "Escriba para buscar contacto",
		  add: "Agregar",
		  buttons: {
			ok: "Guardar",
			cancel: "Cancelar",
		  },
		},
		mainDrawer: {
		  listItems: {
			dashboard: "Dashboard",
			connections: "Conexiones",
			tickets: "Tickets",
			quickMessages: "Respuestas Rápidas",
			contacts: "Contactos",
			queues: "Areas & Chatbot",
			tags: "Tags & Etiquetas",
			administration: "Administracion",
			service: "Panel de Atencion",
			users: "Equipo",
			settings: "Configuraciones",
			helps: "Central de Ayuda",
			messagesAPI: "documentacion de API",
			schedules: "Agendamientos",
			campaigns: "Campañas",
			annoucements: "Boletin Informativo",
			chats: "Chat en Equipo",
			financeiro: "Facturacion",
			logout: "Cerrar Secion",
			management: "Administracion"
		  },
		  appBar: {
			user: {
			  profile: "Perfil de ccolaborador",
			  logout: "Cerrar Secion",
			},
		  },
		},
		messagesAPI: {
		  title: "API",
		  textMessage: {
			number: "Número",
			body: "Mensaje",
			token: "Token registrado",
		  },
		  mediaMessage: {
			number: "Número",
			body: "nombre de archivo",
			media: "Archivo",
			token: "Token registrado",
		  },
		},
		notifications: {
		  noTickets: "sin notificación.",
		},
		quickMessages: {
		  title: "Respuestas Rápidas",
		  buttons: {
			add: "Nueva Resposta",
		  },
		  dialog: {
			shortcode: "Atajo",
			message: "Respuesta",
		  },
		},
		contactLists: {
		  title: "Lista de Contactos",
		  table: {
			name: "Nombre",
			contacts: "Contactos",
			actions: "Acciones",
		  },
		  buttons: {
			add: "Nueva Lista",
		  },
		  dialog: {
			name: "Nombre",
			company: "Empresa",
			okEdit: "Editar",
			okAdd: "Agregar",
			add: "Adicionar",
			edit: "Editar",
			cancel: "Cancelar",
		  },
		  confirmationModal: {
			deleteTitle: "Eliminar",
			deleteMessage: "Esta acción no se puede revertir..",
		  },
		  toasts: {
			deleted: "Registro Borrado",
		  },
		},
		contactListItems: {
		  title: "Contactos",
		  searchPlaceholder: "Buscar",
		  buttons: {
			add: "Nuevo",
			lists: "Listas",
			import: "Importar",
		  },
		  dialog: {
			name: "Nombre",
			number: "Número",
			whatsapp: "Whatsapp",
			email: "E-mail",
			okEdit: "Editar",
			okAdd: "Agregar",
			add: "Adicionar",
			edit: "Editar",
			cancel: "Cancelar",
		  },
		  table: {
			name: "Nombre",
			number: "Número",
			whatsapp: "Whatsapp",
			email: "E-mail",
			actions: "Acciones",
		  },
		  confirmationModal: {
			deleteTitle: "Eliminar",
			deleteMessage: "Esta acción no se puede revertir..",
			importMessage: "¿Desea importar contactos de esta hoja de trabajo? ",
			importTitlte: "Importar",
		  },
		  toasts: {
			deleted: "Registro borrado",
		  },
		},
		campaigns: {
		  title: "Campañas",
		  searchPlaceholder: "buscar",
		  buttons: {
			add: "Nuva Campaña",
			contactLists: "Lista de Contactos",
		  },
		  table: {
			name: "Nombre",
			whatsapp: "Conexion",
			contactList: "Lista de Contatos",
			status: "Estado",
			scheduledAt: "Agendamiento",
			completedAt: "Concluída",
			confirmation: "Confirmacion",
			actions: "Aciones",
		  },
		  dialog: {
			new: "Nueva Campaña",
			update: "Editar Campaña",
			readonly: "Sólo vista",
			form: {
			  name: "Nombre",
			  message1: "Mensaje 1",
			  message2: "Mensaje 2",
			  message3: "Mensaje 3",
			  message4: "Mensaje 4",
			  message5: "Mensaje 5",
			  confirmationMessage1: "Mensaje de confirmacion 1",
			  confirmationMessage2: "Mensaje de confirmacion 2",
			  confirmationMessage3: "Mensaje de confirmacion 3",
			  confirmationMessage4: "Mensaje de confirmacion 4",
			  confirmationMessage5: "Mensaje de confirmacion 5",
			  messagePlaceholder: "contenido del mensaje",
			  whatsapp: "Conexion",
			  status: "Status",
			  scheduledAt: "Agendamiento",
			  confirmation: "Confirmacion",
			  contactList: "Lista de Contato",
			},
			buttons: {
			  add: "Agregar",
			  edit: "Atualizar",
			  okadd: "Ok",
			  cancel: "Cancelar Campaña",
			  restart: "Reiniciar campaña",
			  close: "Cerrar",
			  attach: "Agregar Archivo ",
			},
		  },
		  confirmationModal: {
			deleteTitle: "ELiminar",
			deleteMessage: "Esta acción no se puede revertir..",
		  },
		  toasts: {
			success: "Operación realizada con éxito",
			cancel: "Campaña cancelada",
			restart: "Campaña reiniciada",
			deleted: "registro eliminado",
		  },
		},
		announcements: {
		  title: "Boletin Informativo",
		  searchPlaceholder: "Buscar",
		  buttons: {
			add: "Nuevo informativo",
			contactLists: "Listas de boletines",
		  },
		  table: {
			priority: "Prioridades",
			title: "Titulo",
			text: "Texto",
			mediaName: "Archivo",
			status: "Estado",
			actions: "Accion",
		  },
		  dialog: {
			edit: "Edición de boletín",
			add: "Nuevo boletín",
			update: "Editar boletín",
			readonly: "Sólo vista",
			form: {
			  priority: "Prioridad",
			  title: "Titulo",
			  text: "Texto",
			  mediaPath: "Archivo",
			  status: "Estado",
			},
			buttons: {
			  add: "Agregar",
			  edit: "Atualizar",
			  okadd: "Ok",
			  cancel: "Cancelar",
			  close: "Cervidor",
			  attach: "Adjuntar archivo",
			},
		  },
		  confirmationModal: {
			deleteTitle: "Excluir",
			deleteMessage: "Esta acción no se puede revertir.",
		  },
		  toasts: {
			success: "Operación realizada con éxito",
			deleted: "registro eliminado",
		  },
		},
		campaignsConfig: {
		  title: "Configuración de la campaña",
		},
		queues: {
		  title: "Areas & Chatbot",
		  table: {
			name: "Nombre",
			color: "Color",
			greeting: "mensaje de saludo",
			actions: "Aciones",
		  },
		  buttons: {
			add: "Añadir Area",
		  },
		  confirmationModal: {
			deleteTitle: "eliminar",
			deleteMessage:
			  "¿Estás seguro? ¡Esta acción no se puede revertir! Las llamadas en esta cola seguirán existiendo, pero ya no tendrán ninguna cola asignada.",
		  },
		},
		queueSelect: {
		  inputLabel: "Areas & Sectores",
		},
		users: {
		  title: "Colaboradores ",
		  table: {
			name: "Nombre",
			email: "Email",
			profile: "Perfil",
			actions: "Acciones",
		  },
		  buttons: {
			add: "Añadir colaborador",
		  },
		  toasts: {
			deleted: "Colaborador Borrado con exito.",
		  },
		  confirmationModal: {
			deleteTitle: "Eliminar",
			deleteMessage:
			  "Todos los datos del usuario se perderán. Las llamadas abiertas de este usuario se moverán a la cola.",
		  },
		},
		helps: {
		  title: "Central de Ayuda",
		},
		schedules: {
		  title: "Agendamientos",
		  confirmationModal: {
			deleteTitle: "¿Está seguro de que desea eliminar este agendamiento?",
			deleteMessage: "Esta acción no se puede revertir..",
		  },
		  table: {
			contact: "Contacto",
			body: "Mensaje",
			sendAt: "fecha de Agendamiento",
			sentAt: "fecha de Envio",
			status: "Estado",
			actions: "Acciones",
		  },
		  buttons: {
			add: "Nuevo Agendamiento",
		  },
		  toasts: {
			deleted: "Agendamiento borrado con exito.",
		  },
		},
		tags: {
		  title: "Tags & Etiquetas",
		  confirmationModal: {
			deleteTitle: "¿Está seguro de que desea eliminar esta etiqueta?",
			deleteMessage: "Esta acción no se puede revertir..",
		  },
		   table: {
			name: "Nombre",
			color: "Color",
			tickets: "Registros",
			actions: "Aciones",
			id: "Id",
			kanban: "Kanban",
		  },
		  buttons: {
			add: "Nueva Tag",
		  },
		  toasts: {
			deleted: "Tag borrado con exito.",
		  },
		},
		settings: {
		  success: "Configuración guardada con éxito.",
		  title: "Configuraciones",
		  settings: {
			userCreation: {
			  name: "Crear colaborador",
			  options: {
				enabled: "Ativado",
				disabled: "Desativado",
			  },
			},
		  },
		},
		messagesList: {
		  header: {
			assignedTo: "Asignado A:",
			buttons: {
			  return: "Retornar",
			  resolve: "Resolver",
			  reopen: "Reabrir",
			  accept: "Aceptar",
			},
		  },
		},
		messagesInput: {
		  placeholderOpen: "escribe un mensaje",
		  placeholderClosed:
			"Reabrir o aceptar este ticket para enviar un mensaje.",
		  signMessage: "Asignar",
		},
		contactDrawer: {
		  header: "Datos de contacto",
		  buttons: {
			edit: "Editar contacto",
		  },
		  extraInfo: "Informacion Adicional",
		},
		ticketOptionsMenu: {
		  schedule: "Agendamiento",
		  delete: "Eliminar",
		  transfer: "Transferir",
		  registerAppointment: "Notas Adicionales",
		  appointmentsModal: {
			title: "Notas de contacto",
			textarea: "Observaciones",
			placeholder: "Ingresa los datos que deseas registrar aquí",
		  },
		  confirmationModal: {
			title: "borrar  ticket de contacto",
			message:
			  "¡Atención! Todos los mensajes relacionados con el ticket se perderán.",
		  },
		  buttons: {
			delete: "Eliminar",
			cancel: "Cancelar",
		  },
		},
		confirmationModal: {
		  buttons: {
			confirm: "Ok",
			cancel: "Cancelar",
		  },
		},
		messageOptionsMenu: {
		  delete: "eliminar",
		  reply: "Responder",
		  confirmationModal: {
			title: "Borrar Mensaje?",
			message: "Esta acción no se puede revertir..",
		  },
		},
		backendErrors: {
		  ERR_NO_OTHER_WHATSAPP: "Debe haber al menos un WhatsApp predeterminado.",
		  ERR_NO_DEF_WAPP_FOUND:
			"No se encontró WhatsApp predeterminado. Revisa la página de conexiones.",
		  ERR_WAPP_NOT_INITIALIZED:
			"Esta sesión de WhatsApp no ​​se ha inicializado. Revisa la página de conexiones.",
		  ERR_WAPP_CHECK_CONTACT:
			"No se puede verificar el contacto de WhatsApp. Revisa la página de conexiones",
		  ERR_WAPP_INVALID_CONTACT: "Este no es un número de whatsapp válido.",
		  ERR_WAPP_DOWNLOAD_MEDIA:
			"No se pueden descargar medios de WhatsApp. Revisa la página de conexiones.",
		  ERR_INVALID_CREDENTIALS:
			"Error de autenticación. Inténtalo de nuevo.",
		  ERR_SENDING_WAPP_MSG:
			"Error al enviar mensaje de WhatsApp. Revisa la página de conexiones.",
		  ERR_DELETE_WAPP_MSG: "No se puede eliminar el mensaje de WhatsApp.",
		  ERR_OTHER_OPEN_TICKET: "Ya hay un ticket abierto para este contacto.",
		  ERR_SESSION_EXPIRED: "Sesión expirada. Por favor entre.",
		  ERR_USER_CREATION_DISABLED:
			"El administrador ha inhabilitado la creación de usuarios.",
		  ERR_NO_PERMISSION: "No tienes permiso para acceder a este recurso..",
		  ERR_DUPLICATED_CONTACT: "Ya existe un contacto con este número.",
		  ERR_NO_SETTING_FOUND: "No se encontró ninguna configuración con este ID.",
		  ERR_NO_CONTACT_FOUND: "Nenhum contato encontrado com este ID.",
		  ERR_NO_TICKET_FOUND: "No se encontraron boletos con esta ID.",
		  ERR_NO_USER_FOUND: "No se encontró ningún usuario con este ID.",
		  ERR_NO_WAPP_FOUND: "No se encontró WhatsApp con este ID.",
		  ERR_CREATING_MESSAGE: "Error al crear el mensaje en la base de datos.",
		  ERR_CREATING_TICKET: "Error al crear ticket en la base de datos.",
		  ERR_FETCH_WAPP_MSG:
			"Error al obtener el mensaje en WhatsApp, tal vez sea demasiado antiguo.",
		  ERR_QUEUE_COLOR_ALREADY_EXISTS:
			"Este color ya está en uso, elija otro.",
		  ERR_WAPP_GREETING_REQUIRED:
			"El mensaje de saludo es obligatorio cuando hay más de una cola.",
		},
	  },
	},
  };
  
  export { messages };
  
  