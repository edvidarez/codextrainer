<?php 
session_start();

include 'DB/conexion.php';

function fetch_eventos($uid)
{ 
	$link=mysqli_connect('31.170.166.58','u234139896_todo','edmundo01','u234139896_todo') or die("nop");
	$query = "SELECT * from eventos where id_usuario = $uid";
	$rs=mysqli_query($link,$query);
	$rows=array();
	$total = mysqli_num_rows($rs);
			if($total > 0) {
				while($row = mysqli_fetch_assoc($rs)) {
					$row['allDay'] = (bool)$row['allDay']; 
					$rows[]=$row;

				}
			}

		echo json_encode($rows);
}
function guardar_mundo()
{
	$cnx = new Conexion();
	//echo $_POST['world'];
	$query = "INSERT INTO contribuciones (id_usuario,titulo,descripcion,tipo) VALUES(".$_SESSION['UserID'].",'".$_POST['titulo']."','".$_POST['world']."',2);";
	//echo $query;
	$response=$cnx->ejecutar($query);
	echo $response;
	
}
function UX()  //no jala
{
	$cnx = new Conexion();
	$query = "SELECT * from UX where id_usuario = ".$_SESSION['UserID'].";";
	$rs=$cnx->ejecutar($query);
	$numr = mysqli_num_rows($rs);
	if($numr>0)
	{
		$response = $cnx->fetchArray($rs);
		echo $response[$_POST['element']];
	}
	else
	{
		$query = "INSERT INTO UX (id_usuario,".$_POST['element'].")values(".$_SESSION['UserID'].",1);";
		$rs2 = $cnx->ejecutar($query);
		if($rs2)
		{
			echo 0;
		}
		else
		{
			echo "error";
		}
	}
	
	
}
function renderWorld()
{
	//echo $world;

	//echo $_POST['world'];
	$_SESSION['tmp_world']=$_POST['world'];
	$_SESSION['x']=$_POST['x'];
	$_SESSION['y']=$_POST['y'];
	echo 1;
	//echo $_SESSION['tmp_world'];
	//echo "<script>console.log('".$world."');</script>";
	//echo '<script>window.open("render_world.php", "", "width=800,height=600"); </script>';
}


switch($_REQUEST['cmd'])
{
	case "eventos":
		fetch_eventos($_REQUEST['uid']);
		break;
	case "guardarMundo":
		guardar_mundo();
		break;
	case "renderWorld":

		 renderWorld();
		 break;
	case "UX":
		UX();
		break;
}


$data=	 array("world"=>$_SESSION['tmp_world'],"x"=>$_SESSION['x'],"y"=>$_SESSION['y']);
echo json_encode($data); 	

 ?>
