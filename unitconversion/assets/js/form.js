function calculate() {
    "use strict";
   
    if ($( "#myform" ).valid()) {
       
        var FromValue = document.getElementById("FromValue").value;
       
        var FromUnit;
        if (document.getElementById("cm").checked) {
            FromUnit = document.getElementById("cm").value;
        }
        if (document.getElementById("m").checked) {
            FromUnit = document.getElementById("m").value;
        }
        if (document.getElementById("km").checked) {
            FromUnit = document.getElementById("km").value;
        }
        if (document.getElementById("in").checked) {
            FromUnit = document.getElementById("in").value;
        }
        if (document.getElementById("ft").checked) {
            FromUnit = document.getElementById("ft").value;
        }
        if (document.getElementById("yd").checked) {
            FromUnit = document.getElementById("yd").value;
        }
        if (document.getElementById("mi").checked) {
            FromUnit = document.getElementById("mi").value;
        }
       
        var ToUnit;
        if (document.getElementById("tocm").checked) {
            ToUnit = document.getElementById("tocm").value;
        }
        if (document.getElementById("tom").checked) {
            ToUnit = document.getElementById("tom").value;
        }
        if (document.getElementById("tokm").checked) {
            ToUnit = document.getElementById("tokm").value;
        }
        if (document.getElementById("toin").checked) {
            ToUnit = document.getElementById("toin").value;
        }
        if (document.getElementById("toft").checked) {
            ToUnit = document.getElementById("toft").value;
        }
        if (document.getElementById("toyd").checked) {
            ToUnit = document.getElementById("toyd").value;
        }
        if (document.getElementById("tomi").checked) {
            ToUnit = document.getElementById("tomi").value;
        }
       
        var myURL = "https://brucebauer.info/assets/ITEC3650/unitsconversion.php"
        var myMethod = "POST"
       
        var myData = {};
        myData.FromValue = FromValue;
        myData.FromUnit = FromUnit;
        myData.ToUnit = ToUnit;
       
        $(document).ready(function() {

            $.ajax({
              method: myMethod,
              data: myData,
              url: myURL
            })

            .done(function( msg ) {
                document.getElementById("Result").innerHTML = msg;
            });
        });
       
    }
}

function clearform() {
   
    document.getElementById("FromValue").value = "";
    document.getElementById("FromValueError").innerHTML = "";
    document.getElementById("cm").checked = false;
    document.getElementById("m").checked = false;
    document.getElementById("km").checked = false;
    document.getElementById("in").checked = false;
    document.getElementById("ft").checked = false;
    document.getElementById("yd").checked = false;
    document.getElementById("mi").checked = false;
    document.getElementById("FromUnitError").innerHTML = "";
    document.getElementById("tocm").checked = false;
    document.getElementById("tom").checked = false;
    document.getElementById("tokm").checked = false;
    document.getElementById("toin").checked = false;
    document.getElementById("toft").checked = false;
    document.getElementById("toyd").checked = false;
    document.getElementById("tomi").checked = false;
    document.getElementById("ToUnitError").innerHTML = "";
    document.getElementById("Result").innerHTML = "";
}

$( "#myform" ).validate({
 
});
 

/* Form Validation */
$( "#myform" ).validate({
 
});
