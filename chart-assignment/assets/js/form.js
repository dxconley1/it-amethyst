function calculate() {
    "use strict";

    var form = $("#myform");
    
    form.validate();
    
    if (form.valid()) {
        
        var BaseCurrency = document.getElementById("BaseCurrency").value;
        var Convert = document.getElementById("Convert").value;
        var apiKey = "4OKcDcbFyhgTfATKTCEp8P_NVGzjVc3t";
        var FromDate = document.getElementById("FromDate").value;
        var ToDate = document.getElementById("ToDate").value;

        var myURL = "https://api.polygon.io/v2/aggs/ticker/C:" + BaseCurrency + Convert + "/range/1/day/" + FromDate + "/" + ToDate + "?unadjusted=true&sort=asc&limit=120&apiKey=" + apiKey;

        var myMethod = "GET";

        $(document).ready(function() { 

            $.ajax({
              method: myMethod,
              url: myURL
            })
            
            .done(function( msg ) {

                var currencydate = [];
                var currencyvalue = [];
                var numdays = msg.results.length;
                if (numdays > 0) {
                    for (var i = 0; i < numdays; i++) {
                        currencyvalue[i] = msg.results[i].c;
                        var tempdate = new Date(msg.results[i].t);
                        currencydate[i] = tempdate.toLocaleDateString();
                    }
                }

                var currencyvaluetable = "";
                if (numdays > 0) {
                    currencyvaluetable = currencyvaluetable + "<table><caption>Currency Value</caption><tr><th>Date</th><th>Price</th></tr>";
                    for (var i = 0; i < numdays; i++) {
                        currencyvaluetable = currencyvaluetable + "<tr><td>" + currencydate[i] + "</td><td>" + currencyvalue[i] + "</td></tr>";
                    }
                    currencyvaluetable = currencyvaluetable + "</table>";
                    document.getElementById("CurrencyValueTable").innerHTML = currencyvaluetable;
                }

                var ctx0 = document.getElementById("chartjs-0");
                var myChart = new Chart(ctx0, {
                    "type":"line",
                    "data": {
                        "labels": currencydate,
                        "datasets":[{"label":"Currency Value",
                        "data": currencyvalue,
                        "fill":false,
                        "borderColor":"rgb(75, 192, 192)",
                        "lineTension":0.1}]},
                        "options":{ 
                            responsive: false,
                            maintainAspectRatio: true,
                        }
                    }
                );
            })
            
            .fail(function( msg ) {

                alert("Currency Not Found - Status: " + msg.status);
            });
        });
    }
}

function clearform() {
    document.getElementById("BaseCurrency").value = "";
    document.getElementById("Convert").value = "";
    document.getElementById("FromDate").value = "";
    document.getElementById("ToDate").value = "";
    document.getElementById("CurrencyValueTable").innerHTML = "";
    
    var canvas0 = document.getElementById("chartjs-0");
    var context0 = canvas0.getContext('2d');    
    context0.clearRect(0, 0, canvas0.width, canvas0.height);
    var canvas1 = document.getElementById("chartjs-1");
    var context1 = canvas1.getContext('2d');    
    context1.clearRect(0, 0, canvas1.width, canvas1.height);
}