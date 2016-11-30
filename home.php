<!DOCTYPE html>
<html>

<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>CxT+</title>

    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="font-awesome/css/font-awesome.css" rel="stylesheet">

    <!-- Bootstrap Tour -->
    <link href="css/plugins/bootstrapTour/bootstrap-tour.min.css" rel="stylesheet">

    <link href="css/animate.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">



</head>

<body>
 <div id="wrapper">
        <?php 
       include ("left_bar.php");
       include ("nav.php");
        ?>
        <div class="wrapper wrapper-content  animated fadeInRight">
            <div class="row">
                <div class="col-md-8" id="step1">
                    <div class="ibox ">
                        <div class="ibox-title" >
                            <h5>Noticias:</h5>
                        </div>

                        <div class="ibox-content">
                            <p>
                                Eventos relacionados importantes apareceran en este apartado...
                            </p>

                            
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="row" id="step2">
                        <div class="col-md-12">
                            <div class="ibox ">
                                <div class="ibox-title" >
                                    <h5>Noticias Equipo</h5>
                                </div>
                                <div class="ibox-content text-center" >
                                    <div class="p-sm">
                                        <h3>Aún no te has unido a un equipo</h3>
                                        <a href="#" class="btn btn-primary"><i class="fa fa-plus"></i> Unirse a un Equipo</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row"  id="step3">
                        <div class="col-md-12">
                            <div class="ibox float-e-margins">
                                <div class="ibox-title">
                                    <h5>Actividad
                                        <small>Ultimo mes.</small>
                                    </h5>
                                </div>
                                <div class="ibox-content">
                                    <div>
                                        <canvas id="lineChart" height="140"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row"  id="step4">
                        <div class="col-md-12">
                            <div class="ibox float-e-margins">
                                <div class="ibox-title" id="step4">
                                    <h5>Aportaciones Equipo </h5>

                                </div>
                                <div class="ibox-content">
                                    <div>
                                        <canvas id="doughnutChart" height="140"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            

        </div>
       <?php 
       include ("footer.php");
        ?>
        </div>



    <!-- Mainly scripts -->
    <script src="js/jquery-2.1.1.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/plugins/metisMenu/jquery.metisMenu.js"></script>
    <script src="js/plugins/slimscroll/jquery.slimscroll.min.js"></script>

    <!-- Custom and plugin javascript -->
    <script src="js/inspinia.js"></script>
    <script src="js/plugins/pace/pace.min.js"></script>

    <!-- Bootstrap Tour -->
    <script src="js/plugins/bootstrapTour/bootstrap-tour.min.js"></script>

 <!-- ChartJS-->
    <script src="js/plugins/chartJs/Chart.min.js"></script>
    <!-- <script src="js/demo/chartjs-demo.js"></script> -->
<script>

    $(document).ready(function (){

        // Instance the tour
        var tour = new Tour({
            steps: [{

                    element: "#step1",
                    title: "Noticias",
                    content: "Noticias importantes por parte de los colaboradores.",
                    placement: "bottom",
                    backdrop: true,
                    backdropContainer: '#wrapper',
                    onShown: function (tour){
                        $('body').addClass('tour-open')
                    },
                    onHidden: function (tour){
                        $('body').removeClass('tour-close')
                    }
                },{

                    element: "#step2",
                    title: "Noticias de equipo",
                    content: "Aqui encontraras las noticias importantes para tu equipo.",
                    placement: "left",
                    backdrop: true,
                    backdropContainer: '#wrapper',
                    onShown: function (tour){
                        $('body').addClass('tour-open')
                    },
                    onHidden: function (tour){
                        $('body').removeClass('tour-close')
                    }
                },
                {
                    element: "#step3",
                    title: "Actividad Semanal",
                    content: "Contenido Semanal",
                    placement: "left",
                    backdrop: true,
                    backdropContainer: '#wrapper',
                    onShown: function (tour){
                        $('body').addClass('tour-open')
                    },
                    onHidden: function (tour){
                        $('body').removeClass('tour-close')
                    }
                },
                {
                    element: "#step4",
                    title: "Porcentaje Activo de equipo",
                    content: "Aqui veras quien de tu equipo practica más",
                    placement: "left",
                    backdrop: true,
                    backdropContainer: '#wrapper',
                    onShown: function (tour){
                        $('body').addClass('tour-open')
                    },
                    onHidden: function (tour){
                        $('body').removeClass('tour-close')
                    }
                }
            ]});

        // Initialize the tour
        $.ajax({
                url:'ajax.php?cmd=UX',
                method:"POST",
                data: {element:"home_tour"},
                datatype:"json",
                success:function(response)
                {
                   // console.log(response);
                    if(response==0)
                    {
                        tour.init();
                        tour.restart();
                    }

                }


            });
        
        
        var lineData = {
        labels: ["Abril", "Mayo", "Junio", "Julio","Agosto","Septiembre","Octubre"],
        datasets: [

            {
                label: "Usuario1",
                backgroundColor: 'rgba(26,179,148,0.8)',
                borderColor: "rgba(26,179,148,0.7)",
                pointBackgroundColor: "rgba(26,179,148,1)",
                pointBorderColor: "#fff",
                data: [28, 48, 40, 19, 86, 27, 90]
            },{
                label: "Usuario2",
                backgroundColor: 'rgba(150, 150, 250, 0.5)',
                pointBorderColor: "#fff",
                data: [65, 59, 80, 81, 56, 55, 40]
            },{
                label: "Usuario3",
                backgroundColor: 'rgba(250, 150, 150, 0.5)',
                pointBorderColor: "#fff",
                data: [40, 61, 80, 81, 30, 90, 60]
            }

        ]
    };

    var lineOptions = {
        responsive: true
    };
 var ctx = document.getElementById("lineChart").getContext("2d");

 new Chart(ctx, {type: 'line', data: lineData, options:lineOptions});


  var doughnutData = {
        labels: ["Usuario1","Usuario2","Usuario3" ],
        datasets: [{
            display:true,
            data: [200,150,180],
            backgroundColor: ["#a3e1d4","#dedede","#b5b8cf"]
        }]
    } ;


    var doughnutOptions = {
        responsive: true
    };


    var ctx4 = document.getElementById("doughnutChart").getContext("2d");
    new Chart(ctx4, {type: 'doughnut', data: doughnutData, options:doughnutOptions});

    });

</script>


</body>

</html>
