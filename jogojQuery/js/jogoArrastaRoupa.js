$(document).ready(function() {  
	$(".jaqueta").draggable({revert: "invalid"});
	$(".mascara").draggable({revert: "invalid"});
	$(".chapeu").draggable({revert: "invalid"});
	$(".calca").draggable({revert: "invalid"});
	$(".uniforme").draggable({revert: "invalid"});
	$(".arma").draggable({revert: "invalid"});
	$(".mala").draggable({revert: "invalid"});
	$(".peruca").draggable({revert: "invalid"});

	var cabecaSelecionado;
	var cabecaSelecionadoPosicao;
	var cabecaPosicaoCorretaLeft, cabecaPosicaoCorretaTop, cabecaObjetoSelecionado;

	$('.mascara').on('drag', function(){
		if (cabecaSelecionadoPosicao == null) {
			cabecaSelecionadoPosicao = $(".mascara").position();
		}
		cabecaObjetoSelecionado = "mascara";
	});

	$('.chapeu').on('drag', function(){
		if (cabecaSelecionadoPosicao == null) {
			cabecaSelecionadoPosicao = $(".chapeu").position();
		}
		cabecaObjetoSelecionado = "chapeu";
	});

	$('.peruca').on('drag', function(){
		if (cabecaSelecionadoPosicao == null) {
			cabecaSelecionadoPosicao = $(".peruca").position();	
		}
		cabecaObjetoSelecionado = "peruca";
	});

	$(".cabecaDroppable").droppable({
		accept: ".mascara, .chapeu, .peruca",
		drop: function(event, ui) {
			switch (cabecaObjetoSelecionado) {
					case "mascara":
						cabecaPosicaoCorretaLeft = 665;
						cabecaPosicaoCorretaTop = 135;
						break;
					case "chapeu":
						cabecaPosicaoCorretaLeft = 666;
						cabecaPosicaoCorretaTop = 145;
						break;
					case "peruca":
						cabecaPosicaoCorretaLeft = 675;
						cabecaPosicaoCorretaTop = 140;
						break;	
			}

			if (cabecaSelecionado == null) {
				cabecaSelecionado = $(ui.draggable);
				$(ui.draggable).animate({
						left: cabecaPosicaoCorretaLeft,
						top: cabecaPosicaoCorretaTop
					}, 500, function() {})
			} else {
				$(cabecaSelecionado).animate({
					left: cabecaSelecionadoPosicao.left,
					top: cabecaSelecionadoPosicao.top
					}, 500, function() {
						cabecaSelecionadoPosicao = null;
						cabecaObjetoSelecionado = null;
					}
				)
				
				cabecaSelecionado = $(ui.draggable);
				$(cabecaSelecionado).animate({
					left: cabecaPosicaoCorretaLeft,
					top: cabecaPosicaoCorretaTop
				}, 500, function() {})
			}
		}
	});

	var corpoSelecionado;
	var corpoSelecionadoPosicao;
	var corpoPosicaoCorretaLeft, corpoPosicaoCorretaTop;
	var corpoObjetoSelecionado;
	var calcaObjetoSelecionado;

	$('.jaqueta').on('drag', function(){
		if (corpoSelecionadoPosicao == null) {
			corpoSelecionadoPosicao = $(".jaqueta").position();
		}
		corpoObjetoSelecionado = "jaqueta";
		
	});

	$('.uniforme').on('drag', function(){
		if (corpoSelecionadoPosicao == null) {
			corpoSelecionadoPosicao = $(".uniforme").position();
			calcaSelecionadoPosicao = $(".uniforme").position();
		}
		corpoObjetoSelecionado = "uniforme";
		calcaObjetoSelecionado = "uniforme";
	});

	$(".corpoDroppable").droppable({
		accept: ".uniforme, .jaqueta",
		drop: function(event, ui) {
			switch (corpoObjetoSelecionado) {
					case "uniforme":
						corpoPosicaoCorretaLeft = 607;
						corpoPosicaoCorretaTop = 130;
						break;
					case "jaqueta":
						corpoPosicaoCorretaLeft = 620;
						corpoPosicaoCorretaTop = 200;
						break;
			}

			if (corpoSelecionado == null) {
				corpoSelecionado = $(ui.draggable);
				$(ui.draggable).animate({
						left: corpoPosicaoCorretaLeft,
						top: corpoPosicaoCorretaTop
					}, 500, function() {})
			} else {
				$(corpoSelecionado).animate({
					left: corpoSelecionadoPosicao.left,
					top: corpoSelecionadoPosicao.top
					}, 500, function() {
						corpoSelecionadoPosicao = null;
						corpoObjetoSelecionado = null;
					}
				)
				
				corpoSelecionado = $(ui.draggable);
				$(corpoSelecionado).animate({
					left: corpoPosicaoCorretaLeft,
					top: corpoPosicaoCorretaTop
				}, 500, function() {})
			}
		}
	});

	$(".corpoDoisDroppable").droppable({
		accept: ".uniforme, .jaqueta",
		drop: function(event, ui) {
			switch (corpoObjetoSelecionado) {
					case "uniforme":
						corpoPosicaoCorretaLeft = 607;
						corpoPosicaoCorretaTop = 130;
						break;
					case "jaqueta":
						corpoPosicaoCorretaLeft = 620;
						corpoPosicaoCorretaTop = 200;
						break;
			}

			if (corpoSelecionado == null) {
				corpoSelecionado = $(ui.draggable);
				$(ui.draggable).animate({
						left: corpoPosicaoCorretaLeft,
						top: corpoPosicaoCorretaTop
					}, 500, function() {})
			} else {
				$(corpoSelecionado).animate({
					left: corpoSelecionadoPosicao.left,
					top: corpoSelecionadoPosicao.top
					}, 500, function() {
						corpoSelecionadoPosicao = null;
						corpoObjetoSelecionado = null;
					}
				)
				
				corpoSelecionado = $(ui.draggable);
				$(corpoSelecionado).animate({
					left: corpoPosicaoCorretaLeft,
					top: corpoPosicaoCorretaTop
				}, 500, function() {})
			}
		}
	});

	$(".maoUm").droppable({
		accept: ".arma",
		drop: function(event, ui) {
				$(ui.draggable).animate({
					left: 610,
					top: 361
				}, 500, function() {}
			);
		}
	});

	$(".maoDois").droppable({
		accept: ".arma",
		drop: function(event, ui) {
				$(ui.draggable).animate({
					left: 750,
					top: 361
				}, 500, function() {}
			);
		}
	});

	var calcaSelecionado;
	var calcaSelecionadoPosicao;
	var calcaPosicaoCorretaLeft, calcaPosicaoCorretaTop;

	$('.calca').on('drag', function(){
		if (calcaSelecionadoPosicao == null) {
			calcaSelecionadoPosicao = $(".calca").position();
		}
		calcaObjetoSelecionado = "calca";
	});

	$(".calcaDroppable").droppable({
		accept: ".uniforme, .calca", 
		drop: function(event, ui) {
			switch (calcaObjetoSelecionado) {
					case "calca":
						calcaPosicaoCorretaLeft = 640;
						calcaPosicaoCorretaTop = 350;
						break;
					case "uniforme":
						calcaPosicaoCorretaLeft = 607;
						calcaPosicaoCorretaTop = 130;
						break;
			}

			if (calcaSelecionado == null) {
				calcaSelecionado = $(ui.draggable);
				$(calcaSelecionado).animate({
						left: calcaPosicaoCorretaLeft,
						top: calcaPosicaoCorretaTop
					}, 500, function() {})
			} else {
				$(calcaSelecionado).animate({
					left: calcaSelecionadoPosicao.left,
					top: calcaSelecionadoPosicao.top
					}, 500, function() {
						calcaSelecionadoPosicao = null;
						calcaObjetoSelecionado = null;
					}
				)
				
				calcaSelecionado = $(ui.draggable);
				$(calcaSelecionado).animate({
					left: calcaPosicaoCorretaLeft,
					top: calcaPosicaoCorretaTop
				}, 500, function() {})
			}
		}
	});

	$(".peDroppable").droppable({
		accept: ".mala",
		drop: function(event, ui) {
				$(ui.draggable).animate({
					left: 710,
					top: 570
				}, 500, function() {}
			);
		}
	});
});