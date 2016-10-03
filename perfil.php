<!DOCTYPE html>
<html>

<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>INSPINIA | Profile</title>

    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="font-awesome/css/font-awesome.css" rel="stylesheet">
    <link href="css/animate.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">

</head>

<body>
    <?php 
            include "left_bar.php";
            include("nav.php");
    ?>
    
            
        <div class="wrapper wrapper-content">
            <div class="row animated fadeInRight">
                <div class="col-md-6">
                    <div class="ibox float-e-margins">
                        <div class="ibox-title">
                            <h5>Perfil</h5>
                        </div>
                        <div>
                            <div class="ibox-content no-padding border-left-right" align="center">
                                <img alt="image" class="img-responsive" height="80px" src="img/profile.jpg">
                            </div>
                            <div class="ibox-content profile-content">
                                <h4><strong>Edmundo Vidaña</strong></h4>
                                <p><i class="fa fa-map-marker"></i> Guadalajara</p>
                                <h5>
                                    Acerca de mi:
                                </h5>
                                <p>
                                    Desarrollador web y programador competitivo en ACM-ICPC, amante del café,
                                    me gusta poder compartir lo que sé y me encanta más aprender cosas nuevas.

                                </p>
                                <div class="row m-t-lg">
                                    <div class="col-md-4">
                                        <span class="bar">5,3,9,6,5,9,7,3,5,2</span>
                                        <h5><strong>169</strong> Contribuciones</h5>
                                    </div>
                                    <div class="col-md-4">
                                        <span class="line">5,3,9,6,5,9,7,3,5,2</span>
                                        <h5><strong>28</strong>Siguiendo</h5>
                                    </div>
                                    <div class="col-md-4">
                                        <span class="bar">5,3,2,-1,-3,-2,2,3,5,2</span>
                                        <h5><strong>240</strong> Seguidores</h5>
                                    </div>
                                </div>
                                <div class="user-button">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <button type="button" class="btn btn-primary btn-sm btn-block"><i class="fa fa-envelope"></i> Enviar un mensaje</button>
                                        </div>
                                        <div class="col-md-6">
                                            <button type="button" class="btn btn-default btn-sm btn-block"><i class="fa fa-coffee"></i> Comprar un café</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="ibox float-e-margins">
                        <div class="ibox-title">
                            <h5>Estadisticas</h5>
                        </div>
                        <div class="ibox-content">
                            <div>
                                <canvas id="radarChart"></canvas>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="col-md-6">
                    <div class="ibox float-e-margins">
                        <div class="ibox-title">
                            <h5>Actividades de equipo</h5>
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

                            <div>
                                <div class="feed-activity-list">

                                    <div class="feed-element">
                                        <a href="#" class="pull-left">
                                            <img alt="image" class="img-circle" src="img/a3.jpg">
                                        </a>
                                        <div class="media-body ">
                                            <small class="pull-right text-navy">1m ago</small>
                                            <strong>Sandra Momot</strong> empezo a seguirte. <br>
                                            <small class="text-muted">Hoy 4:21 pm - 02.10.2016</small>
                                            <div class="actions">
                                                <a class="btn btn-xs btn-white"><i class="fa fa-thumbs-up"></i> Seguir </a>
                                                <a class="btn btn-xs btn-primary"><i class="fa fa-pencil"></i> Enviar mensaje</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="feed-element">
                                        <a href="#" class="pull-left">
                                            <img alt="image" class="img-circle" src="img/a5.jpg">
                                        </a>
                                        <div class="media-body ">
                                            <small class="pull-right">5m ago</small>
                                            <strong>Monica Smith</strong>Actualizó su perfil. <br>
                                            <small class="text-muted">Hoy 5:60 pm - 02.10.2016</small>

                                        </div>
                                    </div>

                                    <div class="feed-element">
                                        <a href="#" class="pull-left">
                                            <img alt="image" class="img-circle" src="img/a2.jpg">
                                        </a>
                                        <div class="media-body ">
                                            <small class="pull-right">2h ago</small>
                                            <strong>Mark Johnson</strong> escribió un nuevo problema de <strong>Grafos</strong>. <br>
                                            <small class="text-muted">Hoy 2:10 pm - 02.10.2016</small>
                                            <div class="well">
                                               En la ciudad de KDT-station se quiere calcular la minima distancia que existe entre sus proveedores para ...
                                            </div>
                                            <div class="pull-right">
                                                <a class="btn btn-xs btn-white"><i class="fa fa-thumbs-up"></i> Like </a>
                                               <!--  <a class="btn btn-xs btn-white"><i class="fa fa-heart"></i> Love</a> -->
                                                <a class="btn btn-xs btn-primary"><i class="fa fa-pencil"></i> Enviar mensaje</a>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>

                                <button class="btn btn-primary btn-block m"><i class="fa fa-arrow-down"></i> Mostrar más</button>

                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="footer">
            <div class="pull-right">
                10GB of <strong>250GB</strong> Free.
            </div>
            <div>
                <strong>Copyright</strong> Example Company &copy; 2016-2017
            </div>
        </div>

        </div>
        </div>



    <!-- Mainly scripts -->
    <script src="js/jquery-2.1.1.js"></script>
    <script src="js/bootstrap.js"></script>
    <script src="js/plugins/metisMenu/jquery.metisMenu.js"></script>
    <script src="js/plugins/slimscroll/jquery.slimscroll.min.js"></script>

    <!-- Custom and plugin javascript -->
    <script src="js/inspinia.js"></script>
    <script src="js/plugins/pace/pace.min.js"></script>

 <!-- Peity -->
    <script src="js/plugins/peity/jquery.peity.min.js"></script>

    <!-- Peity -->
    <script src="js/demo/peity-demo.js"></script>

    <!-- ChartJS-->
    <script src="js/plugins/chartJs/Chart.min.js"></script>
    
    <script type="text/javascript">
        $(function () {

    var radarData = {
        labels: ["Ad-Hoc", "Programacion dinamica", "Ordenamientos", "Busquedas", "Strings", "Grafos", "Greedy"],
        datasets: [
            {
                label: "Habilidades",
                backgroundColor: "rgba(26,179,148,0.2)",
                borderColor: "rgba(26,179,148,1)",
                data: [28, 48, 40, 19, 80, 27, 40]
            }
        ]
    };

    var radarOptions = {
        responsive: true
    };

    var ctx5 = document.getElementById("radarChart").getContext("2d");
    new Chart(ctx5, {type: 'radar', data: radarData, options:radarOptions});

});
    </script>

</body>

</html>
