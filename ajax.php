<?php 
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
switch($_REQUEST['cmd'])
{
	case "eventos":
	fetch_eventos($_REQUEST['uid']);
	break;
}
 ?>