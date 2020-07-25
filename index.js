
$(document).ready( function () {
	$.get("https://api.exchangeratesapi.io/latest?base=USD", function(data, status){
	disp(data);
	//cad(data);
    //alert("Data: " + data + "\nStatus: " + status);
  });

	//const memory = [];
	// $.get("https://api.exchangeratesapi.io/latest?base=USD",data => memory.push(data));

function disp(data){
	const memory = [];
	// inr=data["rates"]["INR"];
	// $("#inr").html(""+inr.toFixed(2)+" rs");
	// cad=data["rates"]["CAD"];
	// $("#cad").html("1$ ="+cad.toFixed(2)+" cad");
	// 🇺🇲 🇲🇫 🇬🇧 🇮🇳 🇫🇷 🇪🇺 🇮🇹 🇦🇺

	//jpy=data["rates"]["JPY"];
	$("#inr").html(""+data["rates"]["INR"].toFixed(2)+" INR");
	$("#cad").html(""+data["rates"]["CAD"].toFixed(2)+" CAD");
	$("#jpy").html(""+data["rates"]["JPY"].toFixed(2)+" JPY");
	$("#cny").html(""+data["rates"]["CNY"].toFixed(2)+" CNY");
	$("#gbp").html(""+data["rates"]["GBP"].toFixed(2)+" GBP");
	$("#aud").html(""+data["rates"]["AUD"].toFixed(2)+" AUD");
	$("#chf").html(""+data["rates"]["CHF"].toFixed(2)+" CHF");
	$("#eur").html(""+data["rates"]["EUR"].toFixed(2)+" EUR");
	$("#sek").html(""+data["rates"]["SEK"].toFixed(2)+" SEK");
}

function cad(data){
	const memory = [];
	cad=data["rates"]["CAD"];
	$("#cad").html("1$ ="+cad.toFixed(2)+" cad");
}

});