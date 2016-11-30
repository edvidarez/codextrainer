<!DOCTYPE html>
<html>

<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>TurboXLab | Probabilidad y estadistica</title>

    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="font-awesome/css/font-awesome.css" rel="stylesheet">
    <link href="css/plugins/iCheck/custom.css" rel="stylesheet">
    <link href="css/animate.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">
<link href="css/plugins/bootstrap-tagsinput/bootstrap-tagsinput.css" rel="stylesheet">
</head>

<body>

   

       
        <?php 
            include "left_bar.php";
            include("nav.php");
         ?>
       
            <div class="row wrapper border-bottom white-bg page-heading">
                <div class="col-lg-10">
                    <h2>Probabilidad</h2>
                    <ol class="breadcrumb">
                        <li>
                            <a href="index.html">Home</a>
                        </li>
                        <li>
                            <a>Tables</a>
                        </li>
                        <li class="active">
                            <strong>Static Tables</strong>
                        </li>
                    </ol>
                </div>
                <div class="col-lg-2">

                </div>
            </div>
        <div class="wrapper wrapper-content animated fadeInRight">
            
            <div class="row">
               <div class="col-lg-12">
                    <div class="ibox float-e-margins">
                        <div class="ibox-title">
                            <h5>Datos agrupados </h5>
                            <div class="ibox-tools">
                                <input size="5" id="add_item_value"></input>
                                <a id="add_item">
                                    <button class="btn-sm btn-primary dim " type="button"><i class="fa fa-plus"></i></button>
                                </a>
                                intervalo:
                                <input size="5"></input>
                                <a class="generate">
                                    <button class="btn-sm btn-primary dim " type="button"><i class="fa fa-check"></i></button>
                                </a>
                                
                                <!-- <a class="collapse-link">
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
                                </a> -->
                            </div>
                        </div>
                        <div class="ibox-content">

                            <table class="table table-hover">
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Intervalo</th>
                                    <th>Marca Clase</th>
                                    <th>fi</th>
                                    <th>fi/n</th>
                                    <th>Fi</th>
                                    <th>Fi/n</th>

                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>[10,20)</td>
                                    <td>15</td>
                                    <td>2</td>
                                    <td>0.04 <span class="pie">0.04/1</span></td>
                                    <td>2</td>
                                    <td>0.04 <span class="pie">0.04/1</span></td>
                                    <!-- <td><span class="pie">0.52,1.041</span></td>
                                    <td class="text-navy"> <i class="fa fa-level-up"></i> 40% </td> -->
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td><span class="pie">226,134</span></td>
                                    <td>Jacob</td>
                                    <td class="text-warning"> <i class="fa fa-level-down"></i> -20% </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td><span class="pie">0.52/1.561</span></td>
                                    <td>Damien</td>
                                    <td class="text-navy"> <i class="fa fa-level-up"></i> 26% </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                
            </div>
            <div class="row">
                <div class="ibox" >
                      
                        <div class="ibox-content" id="contenido_datos">
                            <span class="tag label label-primary" id="2222" value="2">
                                2
                                <a class="remove" title="2"><i class="fa fa-times"></i></a>
                            </span>
                            <span class="tag label label-primary" id="12" >
                                1
                                <a class="remove" title="1"><i class="fa fa-times"></i></a>
                            </span>
                            <span class="tag label label-primary" id="231asd222" value="2">
                                2
                                <a class="remove" title="2"><i class="fa fa-times"></i></a>
                            </span>
                            <span class="tag label label-primary" id="42" value="2">
                                2
                                <a class="remove" title="2"><i class="fa fa-times"></i></a>
                            </span>

                        </div>
                    </div>
            </div>
            
        <div class="footer">
            <div class="pull-right">
                10GB of <strong>250GB</strong> Free.
            </div>
            <div>
                <strong>Copyright</strong> Example Company &copy; 2014-2017
            </div>
        </div>

        </div>
        </div>



    <!-- Mainly scripts -->
    <script src="js/jquery-2.1.1.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/plugins/metisMenu/jquery.metisMenu.js"></script>
    <script src="js/plugins/slimscroll/jquery.slimscroll.min.js"></script>

    <!-- Peity -->
    <script src="js/plugins/peity/jquery.peity.min.js"></script>

    <!-- Custom and plugin javascript -->
    <script src="js/inspinia.js"></script>
    <script src="js/plugins/pace/pace.min.js"></script>

    <!-- iCheck -->
    <script src="js/plugins/iCheck/icheck.min.js"></script>

    <!-- Peity -->
    <script src="js/demo/peity-demo.js"></script>

    <script>
    var datos=[];
    var count=0;
        $(document).ready(function(){
            
            $('.i-checks').iCheck({
                checkboxClass: 'icheckbox_square-green',
                radioClass: 'iradio_square-green',
            });
            $("#add_item").click(function(){
                var html = $("#contenido_datos").html();
                var value = document.getElementById("add_item_value").value;
                alert(value);
                $("#contenido_datos").append('<span class="tag label label-primary" id="datos_'+count+'" value="'+value+'"> '+value+'<a title="'+value+'" class="remove" id="datos_'+count+'_a"><i class="fa fa-times"></i></a>                            </span>');
                count++;
                $("#datos_"+count+"_a").addClass("remove");
                console.log($("#contenido_datos").html());
            });
            $(".remove").click(function(item){
                alert("remove");
                var parent_id=($(this).parent().get(0).id);
                $("#"+parent_id).hide();
                var parent = document.getElementById(parent_id);
                console.log($(this).get(0).title);
              
            });
        });
    </script>

</body>

</html>
