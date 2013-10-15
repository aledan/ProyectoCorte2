
var ClaveAdmin=100;




//Validar solo Para solo NUMEROS__________________________________________________________________________________________________________________________________
	function ValidaSoloNumeros() 
	{
 		if ((event.keyCode < 48) || (event.keyCode > 57)) 
  		event.returnValue = false;
	}

//Validar solo para LETRAS______________________________________________________________________________________________________________________________________
	function ValidaSoloLetras() 
	{
 		if ((event.keyCode != 32) && (event.keyCode < 65) || (event.keyCode > 90) && (event.keyCode < 97) || (event.keyCode > 122))
  		event.returnValue = false;
	}

	function Limpiar()
	{
		document.getElementById('AdminitradorClave').value="";
		document.getElementById('AdminitradorNombre').value="";
		document.getElementById('AdminitradorApellido').value="";
		document.getElementById('AdminitradorUsuario').value="";
		document.getElementById('AdministradorContra1').value="";
		document.getElementById('AdministradorContra2').value="";
	}

//Validando Registro Administrador____________________________________________________________________________________________________________________________
	function Validar ()
	{
		var Caja1 = document.getElementById('TxtContraseña1');
		var Caja2 = document.getElementById('TxtContraseña2');

		if (Caja1.value==Caja2.value) 
			{
				if (Caja1.value!="" && Caja2.value!="") {alert('Contraseña correcta')};
				if (Caja1.value=="" || Caja2.value=="") {alert('No puede dejar campo vacios')};

			};
		if (Caja1.value!=Caja2.value) {alert('La Contraseña es Incorrecta')};

	}

//Validando Panel de contorl registro de administradores-----------------------------------------------------------------------------------------------------

	function AdministradoresContraseñas()
	{
		var ACaja1 = document.getElementById('AdministradorContra1');
		var ACaja2 = document.getElementById('AdministradorContra2');

		if (ACaja1.value==ACaja2.value) 
			{
				if (ACaja1.value!="" && ACaja2.value!="") {alert('Contraseña correcta'); BanderaAdministradores=1;};
				if (ACaja1.value=="" || ACaja2.value=="") {alert('No puede dejar campo vacios'); ACaja1.focus(); BanderaAdministradores=0; };

			};
		if (ACaja1.value!=ACaja2.value) {alert('La Contraseña es Incorrecta'); ACaja1.focus(); BanderaAdministradores=0;};
	}

//Validar todo lo de Administradores------------------------------------------------------------------------------------------------------------------------
	function ComprobandoCamposAdministrador()
	{

		var NombreAdmin = document.getElementById('AdminitradorNombre').value;
		var ApellidosAdmin = document.getElementById('AdminitradorApellido').value;
		var UsuarioAdmin = document.getElementById('AdminitradorUsuario').value;

		if (NombreAdmin!="" && ClaveAdmin!="" && ApellidosAdmin!="" && UsuarioAdmin!="" && BanderaAdministradores==1) {	document.getElementById('AdminitradorClave').value=ClaveAdmin; ClaveAdmin+=1; alert('Puedes Continuar');};
	}

//Validando Panel de contorl registro de Vendedores______________________________________________________________________________________________________________
	function VendedoresContraseñas()
	{
		var VCaja1 = document.getElementById('VendedorContra1');
		var VCaja2 = document.getElementById('VendedorContra2');

		if (VCaja1.value==VCaja2.value) 
			{
				if (VCaja1.value!="" && VCaja2.value!="") {alert('Contraseña correcta');BanderaVendedores=1;};
				if (VCaja1.value=="" || VCaja2.value=="") {alert('No puede dejar campo vacios');BanderaVendedores=0; VCaja1.focus();};

			};
		if (VCaja1.value!=VCaja2.value) {alert('La Contraseña es Incorrecta'); BanderaVendedores=0; VCaja1.focus();};
	}

	//Comprobando campos Vendedores
	function ComprobandoCamposVendedores() 
	{
		var ClaveVende= document.getElementById('VendedorClave').value;
		var NombreVende  = document.getElementById('VendedorNombre').value;
		var ApellidoVende = document.getElementById('VendedorApellido').value;
		var UsuarioVende = document.getElementById('VendedorUsuario').value;
			
		if (ClaveVende!="" && NombreVende!="" && ApellidoVende!="" && UsuarioVende!="" && BanderaVendedores==1) {alert('Puedes Continuar');};
	}





		
