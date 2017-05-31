$(document).ready(function(){


	$("#btnTrocarCor").click(function() {
		$("body").css("background", "grey");
	});

	$("#btnMostrarAlerta").click(function() {
		alert("Você clicou no botão de alerta");
	});

	$("#btnAnimarCirculo").click(function() {
		$(".circulo").animate({
			width:300,
			height:300
		}, 500, "swing", function(){
			$(".circulo").animate({
				width:200,
				height:200
			}, 500, "swing")
		});
	});

	$("#btnAlterarTamanho").click(function() {
		$(".quadrado").animate({
			width:300,
			height:300
		}, 500, "swing");
	});

	$("#btnToggleVisibilidade").click(function() {
		$(".triangulo").toggle(500);
	});

	$("#btnAlterarTexto").dblclick(function() {
		$("#box").text("teste");
	});

	$('.parallax-layer').parallax({
		mouseport: $("#port")
	});

	$("#btnMostraParallax").click(function() {
		$("#port").css("visibility", "visible");
	});

});