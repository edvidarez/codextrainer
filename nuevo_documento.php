<!DOCTYPE html>
<html>

<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>INSPINIA | Basic Form</title>

    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="font-awesome/css/font-awesome.css" rel="stylesheet">
    <link href="css/plugins/iCheck/custom.css" rel="stylesheet">
    <link href="css/animate.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">
    <link href="css/plugins/chosen/bootstrap-chosen.css" rel="stylesheet">
<link href="css/plugins/summernote/summernote.css" rel="stylesheet">
    <link href="css/plugins/summernote/summernote-bs3.css" rel="stylesheet">
    <link href="css/plugins/awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css" rel="stylesheet">

</head>

<body>
 <?php 
            include "left_bar.php";
            include("nav.php");
    ?>

        <div class="wrapper wrapper-content animated fadeInRight">
            <div class="row">
                <div class="col-lg-8">
                    <div class="ibox float-e-margins">
                        <div class="ibox-title">
                            <h5>Nuevo documento <small> Crea  y comparte.</small></h5>
                            <div class="ibox-tools">
                                <a class="collapse-link">
                                    <i class="fa fa-chevron-up"></i>
                                </a>
                                <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                                    <i class="fa fa-wrench"></i>
                                </a>
                                <ul class="dropdown-menu dropdown-user">
                                    <li><a href="#">Config option 1</a>
                                    </li>
                                    <li><a href="#">Config option 2</a>
                                    </li>
                                </ul>
                                <a class="close-link">
                                    <i class="fa fa-times"></i>
                                </a>
                            </div>
                        </div>
                        <div class="ibox-content">
                        
                   
                            <form method="get" class="form-horizontal">
                                <div class="form-group"><label class="col-sm-2 control-label">Titulo</label>

                                    <div class="col-sm-10"><input type="text" class="form-control"></div>
                                </div>
                                <button id="edit" class="btn btn-primary"  type="button">Edit 1</button>
                        <button id="save" class="btn btn-primary"  type="button">Save 2</button>
                                    <div class="click2edit">
                                                                             <p>
                                        </p><h3>Descripción</h3>
                                        Tu profesor de Estructuras de Datos ha escrito una expresión muy compleja en el pizarrón. Sin embargo, no sabe si los paréntesis "()" y los corchetes "{}" están completamente balanceados, es decir, todo paréntesis o corchete está cerrado, considerando que ningún corchete puede cerrar a un paréntesis o viceversa. <br> Dada la expresión que tu profesor te ha mostrado, determina si está balanceada o no.
                                        <p></p><p><br></p><h2>Entrada</h2><p>
                                        La expresión, en una línea.</p><p><br></p><h2>Salida</h2><p>"SI" o "NO" dependiendo si la expresión está balanceada o no.</p><p><br></p><h2>Ejemplo</h2><p><br></p>
<table class="sample_io" width="318" height="167"><thead><tr><th align="left">Entrada</th><th align="left">Salida</th></tr></thead><tbody><tr><td align="left"><pre>if( a == b { a += 5;</pre></td><td align="left"><pre>NO</pre></td></tr><tr><td align="left"><pre>if( a == ){ a += 5; }</pre></td><td align="left"><pre>SI</pre></td></tr><tr><td align="left"><pre>(a+5}</pre></td><td align="left"><pre>NO
</pre></td></tr></tbody></table><br><p><br></p><h2><br>
                                        
                                    </h2>
                                        
                                    
                                        
                                    </div>
                               
                                
                                <div class="hr-line-dashed"></div>
                                <div class="form-group">
                                    <div class="col-sm-4 col-sm-offset-2">
                                        <button class="btn btn-white" type="submit">Cancel</button>
                                        <button class="btn btn-primary" type="submit">Save changes</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                <div class="ibox float-e-margins">
                   
                     
                    <div class="ibox-title">
                        <h5>Detalles del documento</h5>
                        <div class="ibox-tools">
                            <a class="collapse-link">
                                <i class="fa fa-chevron-up"></i>
                            </a>
                            <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                                <i class="fa fa-wrench"></i>
                            </a>
                            <a class="close-link">
                                <i class="fa fa-times"></i>
                            </a>
                        </div>
                    </div>
                    <div class="ibox-content">
                        <p>
                            Puedes seleccionar multiples temas relacionados.
                        </p>
                        
                        <div class="form-group">
                            <select data-placeholder="Escoge el tema relacionado" class="chosen-select" multiple style="width:350px;" >
                            
                            <option value="1">Ad-Hoc</option>
                            <option value="2">Algebra</option>
                            <option value="3">Fuerza Bruta</option>
                            <option value="4">Estructuras</option>
                            <option value="5">Programacion dinamica</option>
                            <option value="6">Teoria de Juegos</option>
                            <option value="7">Teoria de Números</option>
                            <option value="8">Ordenamientos</option>
                            <option value="9">Busquedas</option>
                            <option value="10">Grafos</option>
                            <option value="11">Strings</option>
                            <option value="12">Greedy</option>

                           
                            </select>
                        </div>
                        <div class="form-group">
                            <select data-placeholder="Escoge dificultad" class="chosen-select"  >
                              
                                <option value="1">Facil</option>
                                <option value="2">Medio</option>
                                <option value="3">Moderada</option>
                                <option value="4">Dificil</option>

                            </select>
                        </div>
                    </div>

                    </div>
                </div>
                     
          
        

        </div>

        </div>
        <?php 
        include("footer.php");
         ?>

    <!-- Mainly scripts -->
    <script src="js/jquery-2.1.1.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/plugins/metisMenu/jquery.metisMenu.js"></script>
    <script src="js/plugins/slimscroll/jquery.slimscroll.min.js"></script>
 <script src="js/plugins/summernote/summernote.min.js"></script>
    <!-- Custom and plugin javascript -->
    <script src="js/inspinia.js"></script>
    <script src="js/plugins/pace/pace.min.js"></script>

    <!-- iCheck -->
    <script src="js/plugins/iCheck/icheck.min.js"></script>
    
        <!-- Chosen -->
    <script src="js/plugins/chosen/chosen.jquery.js"></script>
        <script>
            $(document).ready(function () {
                $('.i-checks').iCheck({
                    checkboxClass: 'icheckbox_square-green',
                    radioClass: 'iradio_square-green',
                });

                $('.chosen-select').chosen({width: "100%"});
                   $('.summernote').summernote();
                 
                $("#edit").click(function(){
                    $('.click2edit').summernote({focus: true,toolbar: [
    // [groupName, [list of button]]
    ['style', ['bold', 'italic', 'underline', 'clear']],
    ['font', ['strikethrough', 'superscript', 'subscript']],
    ['fontsize', ['fontsize']],
    ['color', ['color']],
    ['para', ['ul', 'ol', 'paragraph']],
    ['height', ['height']]
  ]});
                });

                $("#save").click(function(){
                    $('.click2edit').summernote('destroy');
                });
                    

                    
            });
        </script>
</body>

</html>
