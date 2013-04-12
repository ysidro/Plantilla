// JavaScript Document



    

    function ValidateForm() {

    

        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

        var email = document.getElementById('email').value;

        var fullname = document.getElementById('fullname').value;

        if (reg.test(email) == false) { alert('Por favor ingrese un email correcto.'); return false; }

        if (fullname = '' || fullname.length <= 2) {alert('Por favor ingrese su nombre correcto.');  return false; }



        return true;

    }



    function handleHttpResponse() {

        if (http.readyState == 4) {

            if (http.status == 200) {

                if (http.responseText.indexOf('invalid') == -1) {

                    results = http.responseText;



                    if (document.getElementById("formulario"))

                        document.getElementById("formulario").innerHTML = results;

                    else

                        alert('Gracias por contactarnos, contestaremos lo antes posible.');

                        

                    enProceso = false;

                }

            }

        }

    }



    function GetInputsValues() {

        var container, inputs, index;

        var querystring = "";



        container = document.getElementById('contact_us_container');

        

        inputs = container.getElementsByTagName('input');

        for (index = 0; index < inputs.length; ++index) {

            if(inputs[index].type == 'text')

            {

                querystring += inputs[index].id + '=' + inputs[index].value;

                querystring += "&";

            }

        }



        if (document.getElementById('comments'))

            querystring += 'Comentarios=' + document.getElementById('comments').value;



        return querystring;

    

    }



    function SendEmail() {

        if (ValidateForm()) {

            if (!enProceso && http) {

                var querystring = "";



                querystring = GetInputsValues();

                

                var url = "send_email.asp?" + querystring;

                http.open("GET", encodeURI(url), true);

                http.onreadystatechange = handleHttpResponse;

                enProceso = true;

                http.send(null);

            }

        }

    }



    function getHTTPObject() {

        var xmlhttp;



        if (!xmlhttp && typeof XMLHttpRequest != 'undefined') {

            try {

                xmlhttp = new XMLHttpRequest();

            } catch (e) { xmlhttp = false; }

        }

        return xmlhttp;

    }

    var enProceso = false;

    var http = getHTTPObject(); 
    
