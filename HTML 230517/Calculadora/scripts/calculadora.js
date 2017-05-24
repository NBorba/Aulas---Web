function calcular(operacao) {
	// Se nenhum dos campos estiver vazio
	if(validaCampos()) {
		var valor1 = Number(document.getElementById("valor1").value);
		var valor2 = Number(document.getElementById("valor2").value);
		var resultado = 0;

		// Limpa dados de operações anteriores
		limpar();

		switch (operacao) {
			case "+":
				resultado = valor1 + valor2;
				break;
			case "-":
				resultado = valor1 - valor2;
				break;
			case "*": 
				resultado = valor1 * valor2;
				break;
			case "/": 
				resultado = valor1 / valor2;
				break;
		}
		document.getElementById("resultado").value = resultado;	
	} else {
		alert("Você deve preencher todos os campos ou realizar uma operação válida");
	}
}

function validaCampos() {
	var valor1 = document.getElementById("valor1").value;
	var valor2 = document.getElementById("valor2").value;

	if(valor1 == "" || valor2 == "") {
		return false;
	} else {
		return true;
	}
}

function limpar() {
	document.getElementById("resultado").value = "";
	document.getElementById("valor1").value = "";
	document.getElementById("valor2").value = "";
}