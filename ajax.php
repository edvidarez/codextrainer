<?php 
session_start();
if(!isset($_SESSION['UserID']))
{
	echo '<script>window.location="index.php"; </script>';
}
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
switch($_REQUEST['cmd'])
{
	case "eventos":
		fetch_eventos($_REQUEST['uid']);
		break;
	case "guardarMundo":
		guardar_mundo();
		break;
	case "UX":
		UX();
		break;
}
 ?>