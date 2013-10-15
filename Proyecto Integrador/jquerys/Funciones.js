$(document).ready(function(){
//Listas De seleccion 

				$('#ListAdministrador').click(function()
					{
						$('#Administrador').fadeIn();
						$('#Vendedores').hide();
						$('#Clientes').hide();	
					});

				$('#ListVendedor').click(function()
					{
						$('#Administrador').hide();
						$('#Vendedores').fadeIn();
						$('#Clientes').hide();	
					});
				$('#ListClientes').click(function()
					{
						$('#Administrador').hide;
						$('#Vendedores').hide();
						$('#Clientes').fadeIn();	
					});

				//Abrir ventana modal Administracion---------------------------------------------------------------------
				$('#Img_boton_AAdministrador').click(function()
					{
						$('#ContAdministrador').show();	
						$('#Fondo_Modal').fadeIn('slow');
						$('#ContAdministradorBaja').hide();
						$('#ContAdministradorCambio').hide();
						$('#ContVendedor').hide();
						$('#ContVendedorEliminar').hide();
						$('#ContVendedorCambiar').hide();
					});

				$('#Img_boton_BAdministrador').click(function()
					{
						$('#ContAdministrador').hide();
						$('#ContAdministradorCambio').hide();
						$('#ContAdministradorBaja').show();	
						$('#Fondo_Modal').fadeIn('slow');
						$('#ContVendedor').hide();
						$('#ContVendedorEliminar').hide();
						$('#ContVendedorCambiar').hide();
					});

				$('#Img_boton_CAdministrador').click(function()
					{
						$('#ContAdministrador').hide();
						$('#ContVendedor').hide();	
						$('#ContAdministradorBaja').hide();
						$('#ContAdministradorCambio').show();	
						$('#Fondo_Modal').fadeIn('slow');
						$('#ContVendedorEliminar').hide();
						$('#ContVendedorCambiar').hide();
					});

				//Abrir ventana modal Vendedores----------------------------------------------------------
					$('#Img_boton_AVendedores').click(function()
					{
						$('#ContVendedor').show();	
						$('#Fondo_Modal').fadeIn('slow');
						$('#ContAdministrador').hide();	
						$('#ContAdministradorBaja').hide();
						$('#ContAdministradorCambio').hide();
						$('#ContVendedorEliminar').hide();
						$('#ContVendedorCambiar').hide();
					});

					$('#Img_boton_BVendedores').click(function()
					{
						$('#ContVendedorEliminar').show();	
						$('#Fondo_Modal').fadeIn('slow');
						$('#ContVendedor').hide();
						$('#ContAdministrador').hide();	
						$('#ContAdministradorBaja').hide();
						$('#ContAdministradorCambio').hide();
						$('#ContVendedorCambiar').hide();
					});

					$('#Img_boton_CVendedores').click(function()
					{
						$('#ContVendedorCambiar').show();	
						$('#Fondo_Modal').fadeIn('slow');
						$('#ContVendedor').hide();
						$('#ContAdministrador').hide();	
						$('#ContAdministradorBaja').hide();
						$('#ContAdministradorCambio').hide();
						$('#ContVendedorEliminar').hide();	
					});

					//CLIENTES





				//Cerrar Ventana modal
    			$('#Cerrar').click(function(){$('#Fondo_Modal').fadeOut('slow');});
    			$('#BotonRegresar').click(function(){$('#Fondo_Modal').fadeOut('slow');});
			});	


		
