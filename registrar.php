<!DOCTYPE html>
<html>

<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>CXT+ | Registrar</title>

    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="font-awesome/css/font-awesome.css" rel="stylesheet">
    <link href="css/plugins/iCheck/custom.css" rel="stylesheet">
    <link href="css/animate.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">

</head>
<?php 
	include ("DB/conexion.php");
	if(isset($_POST['usuario']))
	{
		$correo = $_POST['correo'];
		$usuario = $_POST['usuario'];
    	$pass = $_POST['pass'];
    	$cnx = new Conexion();
    	$query = "Select * from usuarios where correo = '".$correo."';";
    	echo $query;
	    $cnx->ejecutar($query);
	    echo $cnx->numRows;
	    if($cnx->numRows===1)
	    {
	    	echo "El correo ya está registrado";
	    }
	    else
	    {
	    	$query = "INSERT into usuarios (usuario,nombre,correo,password,telefono,puntos,fecha_ingreso,estado,rol) values ('".$usuario."','','".$correo."','".MD5($pass)."','',0,NOW(),0,1)";
	    		if($cnx->ejecutar($query))
	    		{
	    			echo "se inserto";
	    		}
	    		else
	    		{
	    			echo "no se inserto";
	    		}
	    }
	}
 ?>
<body class="gray-bg">

    <div class="middle-box text-center loginscreen   animated fadeInDown">
        <div>
            <div>

                <h1 class="logo-name">CXT+</h1>

            </div>
            <h3>Registrate en CXT+</h3>
            <p>Crea una nueva cuenta para entrar en accion</p>
            <form class="m-t" role="form" action="registrar.php">
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Usuario" required="" name="usuario">
                </div>
                <div class="form-group">
                    <input type="email" class="form-control" placeholder="Email" required="" name="correo">
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" placeholder="Contraseña" required="true" name="passw">
                </div>
                 <div class="form-group">
                    <input type="password" class="form-control" placeholder="Contraseña" required="true">
                </div>
                <div class="form-group">
                        <div class="checkbox i-checks"><label> <input type="checkbox"><i></i> Acepto los terminos y condiciones </label></div>
                </div>
                <button type="submit" class="btn btn-primary block full-width m-b">Registrar</button>

                <p class="text-muted text-center"><small>Ya tienes una cuenta?</small></p>
                <a class="btn btn-sm btn-white btn-block" href="login.php">Ingresa</a>
            </form>
            <p class="m-t"> <small>Juez mexicano	-	2016</small> </p>
        </div>
    </div>

    <!-- Mainly scripts -->
    <script src="js/jquery-2.1.1.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <!-- iCheck -->
    <script src="js/plugins/iCheck/icheck.min.js"></script>
    <script>
        $(document).ready(function(){
            $('.i-checks').iCheck({
                checkboxClass: 'icheckbox_square-green',
                radioClass: 'iradio_square-green',
            });
        });
    </script>
</body>

</html>
