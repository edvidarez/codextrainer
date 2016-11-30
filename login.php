<!DOCTYPE html>
<html>

<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php 
    include("DB/conexion.php");
    session_start();
    if(isset($_SESSION['UserID']))
    {
         header("location:home.php");
    }
    else
    if(isset($_POST['correo']) && isset($_POST['pass']))
    {
    	$correo = $_POST['correo'];
    	$pass = $_POST['pass'];
    	$cnx = new Conexion();
    	$query = "Select * from usuarios where correo = '".$correo."';";
    	//echo $query;
	    $rs=$cnx->ejecutar($query);
	    echo $cnx->getNumRows($rs);
	    if($cnx->numRows===1)
	    {
            $ar=$cnx->fetchArray();
            if( $ar['password']=== MD5($_POST['pass']))
            {
               // echo "session iniciada correctamente";
                $_SESSION['UserID']=$ar['id'];
                //echo $_SESSION['UserID'];
                header("location:home.php");
            }
            else
            {
            echo "Contraseña incorrecta";    
            }
	    	
	    }
	    else
	    {
	    	echo "No existe ese usuario";
	    }
    }
    else
    {
     ?>
    
    <title>CXT+ | Ingreso</title>

    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="font-awesome/css/font-awesome.css" rel="stylesheet">

    <link href="css/animate.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">

</head>

<body class="gray-bg">

    <div class="middle-box text-center loginscreen animated fadeInDown">
        <div>
            <div>

                <h1 class="logo-name">CXT+</h1>

            </div>
            <h3>Bienvenido a CXT+</h3>
            <p>Comunidad enfocada a programacion individual y en equipos.
                <!--Continually expanded and constantly improved Inspinia Admin Them (IN+)-->
            </p>
            <p>Ingresa y aprovecha de la herramienta al máximo.</p>
            <form class="m-t" role="form" action="login.php" method="POST">
                <div class="form-group">
                    <input type="email" class="form-control" placeholder="Correo electronico" required="" name="correo">
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" placeholder="Constraseña" required="" name="pass">
                </div>
                <button type="submit" class="btn btn-primary block full-width m-b">Ingresa</button>

                <a href="#"><small>Olvidaste tu contraseña?</small></a>
                <p class="text-muted text-center"><small>No tienes cuenta?</small></p>
                <a class="btn btn-sm btn-white btn-block" href="register.html">Crea una cuenta</a>
            </form>
            <p class="m-t"> <small>Juez mexicano	-	 &copy; 2016</small> </p>
        </div>
    </div>

    <!-- Mainly scripts -->
    <script src="js/jquery-2.1.1.js"></script>
    <script src="js/bootstrap.min.js"></script>

</body>

</html>
<?php } ?>