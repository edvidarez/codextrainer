<!DOCTYPE html>
<html>

<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>TurboXLab | Calendar</title>

    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="font-awesome/css/font-awesome.css" rel="stylesheet">

    <link href="css/plugins/iCheck/custom.css" rel="stylesheet">

    <link href="css/plugins/fullcalendar/fullcalendar.css" rel="stylesheet">
    <link href="css/plugins/fullcalendar/fullcalendar.print.css" rel='stylesheet' media='print'>

    <link href="css/animate.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">
    <link href="css/plugins/datapicker/datepicker3.css" rel="stylesheet">

</head>

<body>

      <?php 
            include "left_bar.php";
            include("nav.php");
         ?>

<!-- 
<div class="row wrapper border-bottom white-bg page-heading">
    <div class="col-lg-8">
        <h2>Calendar</h2>
        <ol class="breadcrumb">
            <li>
                <a href="index.html">Home</a>
            </li>
            <li>
                Extra pages
            </li>
            <li class="active">
                <strong>Calendar</strong>
            </li>
        </ol>
    </div>
</div> -->



<div class="wrapper wrapper-content">
    <div class="row animated fadeInDown">
        <div class="col-lg-3">
            <div class="ibox float-e-margins">
                        <div class="ibox-title">
                            <h5> Añade un Evento.</h5>
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
                            <form class="form-horizontal">
                               
                                <div class="form-group"><label class=" control-label">Titulo</label>

                                    <div><input type="text" placeholder="Titulo" class="form-control"> 
                                    </div>
                                </div>
                                <div class="form-group"><label class="control-label">Descripcion</label>

                                    <div >
                                        <textarea class="col-lg-12" placeholder="Descripcion">
                                            
                                        </textarea>
                                    </div>
                                </div>
                                
                                 <div class="form-group" id="data_5">
                                <label class=" control-label">Selecciona fecha</label>
                                <div class="input-daterange input-group" id="datepicker">
                                    <input type="text" class="input-sm form-control" name="start" value="09/09/2016"/>
                                    <span class="input-group-addon">to</span>
                                    <input type="text" class="input-sm form-control" name="end" value="09/09/2016" />
                                </div>
                            </div>
                            <div class="form-group">
                                    <div class="col-lg-offset-2 col-lg-10">
                                        <div class="i-checks"><label> <input type="checkbox"><i></i> Todo el dia </label></div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="col-lg-offset-2 col-lg-10">
                                        <button class="btn btn-sm btn-white" type="submit">Agregar</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
            <div class="ibox float-e-margins">
                <div class="ibox-title">
                    <h5>Eventos</h5>
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
                    <div id='external-events'>
                        <p>Crear nuevos eventos.</p>
                        <div class='external-event navy-bg'>Falta crear un pequeño formulario.</div>
                        <div class='external-event navy-bg'>Que pueda validar si es evento de Equipo o No.</div>
                        <div class='external-event navy-bg'>Que se puedan agregar eventos rutinarios.</div>
                        <div class='external-event navy-bg'>Que incluya importancia, descripcion.</div>
                        <div class='external-event navy-bg'>Agregar mas eventos.</div>
                        <p class="m-t">
                            <input type='checkbox' id='drop-remove' class="i-checks" checked /> <label for='drop-remove'>remove after drop</label>
                        </p>
                    </div>
                </div>
            </div>
            <div class="ibox float-e-margins">
                <div class="ibox-content">
                    <h2>Calendar Agenda</h2> Aqui se agregaran eventos de manera que se pueda dar seguimiento a las actividades diarias.
                    <!-- <p>
                        <a href="http://arshaw.com/fullcalendar/" target="_blank">FullCalendar documentation</a>
                    </p> -->
                </div>
            </div>
        </div>
        <div class="col-lg-9">
            <div class="ibox float-e-margins">
                <div class="ibox-title">
                    <h5>Striped Table </h5>
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
                    <div id="calendar"></div>
                </div>
            </div>
        </div>
    </div>
</div>





</div>
</div>

<!-- Mainly scripts -->
<script src="js/plugins/fullcalendar/moment.min.js"></script>
<script src="js/jquery-2.1.1.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/plugins/metisMenu/jquery.metisMenu.js"></script>
<script src="js/plugins/slimscroll/jquery.slimscroll.min.js"></script>

<!-- Custom and plugin javascript -->
<script src="js/inspinia.js"></script>
<script src="js/plugins/pace/pace.min.js"></script>

<!-- jQuery UI custom -->
<script src="js/jquery-ui.custom.min.js"></script>

<!-- iCheck -->
<script src="js/plugins/iCheck/icheck.min.js"></script>

<!-- Full Calendar -->
<script src="js/plugins/fullcalendar/fullcalendar.min.js"></script>
<!-- datepicker -->
 <script src="js/plugins/datapicker/bootstrap-datepicker.js"></script>
<script>

    $(document).ready(function() {

            $('.i-checks').iCheck({
                checkboxClass: 'icheckbox_square-green',
                radioClass: 'iradio_square-green'
            });

        /* initialize the external events
         -----------------------------------------------------------------*/


        $('#external-events div.external-event').each(function() {

            // store data so the calendar knows to render an event upon drop
            $(this).data('event', {
                title: $.trim($(this).text()), // use the element's text as the event title
                stick: true // maintain when user navigates (see docs on the renderEvent method)
            });

            // make the event draggable using jQuery UI
            $(this).draggable({
                zIndex: 1111999,
                revert: true,      // will cause the event to go back to its
                revertDuration: 0  //  original position after the drag
            });

        });


        /*buscar los eventos en la base de datos con respecto al usuario logueado*/
        var eventos;
         $.ajax({   
              type: "POST",
              url: "ajax.php?cmd=eventos&uid=1",             
              dataType: "json",   //expect html to be returned                
              success: function(response){                    
                  console.log(response);
                  //alert(response);
                  eventos=response;
              }
          });
         $('#data_5 .input-daterange').datepicker({
                keyboardNavigation: false,
                forceParse: false,
                autoclose: true
            });
        /* initialize the calendar
         -----------------------------------------------------------------*/
        var date = new Date();
        var d = date.getDate();
        var m = date.getMonth();
        var y = date.getFullYear();

        $('#calendar').fullCalendar({
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay'
            },
            editable: true,
            droppable: true, // this allows things to be dropped onto the calendar
            drop: function() {
                // is the "remove after drop" checkbox checked?
                if ($('#drop-remove').is(':checked')) {
                    // if so, remove the element from the "Draggable Events" list
                    $(this).remove();
                }
            },
            events: {
                 url: "ajax.php?cmd=eventos&uid=1",   
                  type: "POST"
            }
          /*  [
                {
                    title: 'All Day Event',
                    start: new Date(y, m, 1)
                },
                {
                    title: 'Long Event',
                    start: new Date(y, m, d-5),
                    end: new Date(y, m, d-2)
                },
                {
                    id: 999,
                    title: 'Repeating Event',
                    start: new Date(y, m, d-3, 16, 0),
                    allDay: 1
                },
                {
                    id: 999,
                    title: 'Repeating Event',
                    start: new Date(y, m, d+4, 16, 0),
                    allDay: false
                },
                {
                    title: 'Meeting',
                    start: new Date(y, m, d, 10, 30),
                    allDay: false
                },
                {
                    title: 'Lunch',
                    start: new Date(y, m, d, 12, 0),
                    end: new Date(y, m, d, 14, 0),
                    allDay: false
                },
                {
                    title: 'Birthday Party',
                    start: new Date(y, m, d+1, 19, 0),
                    end: new Date(y, m, d+1, 22, 30),
                    allDay: "false"
                },
                {
                    title: 'Click for Google',
                    start: new Date(y, m, 28),
                    end: new Date(y, m, 29),
                    url: 'http://google.com/'
                }
            ]*/
        });


    });

</script>
</body>

</html>
