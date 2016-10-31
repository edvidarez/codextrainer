<?php 
class Conexion{
	public $link;
	public $rs;
	public $numRows;
	function Conexion()
	{
		$this->link = mysqli_connect("31.170.166.58","u234139896_mundo","C0deao1","u234139896_codea") or die("No se pudo conectar :'c ");
		//echo "se creo conexion";
	}
	
	function getNumRows()
	{
		//echo typeof $rs;
		$this->numRows = mysqli_num_rows($this->rs);
	}
	function ConexionServ($host,$user,$pass,$db)
	{
		$this->link = mysqli_connect($host,$user,$pass,$db) or die("No se pudo conectar :'c ");
	}
	function ejecutar($query)
	{
		$this->rs = mysqli_query($this->link,$query) or die ("No query ".$query);
		
		return $this->rs;
	}
	function fetchArray()
	{
		return mysqli_fetch_array($this->rs);
	}
}
 ?>
