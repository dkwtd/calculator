var layar = document.querySelector("#layar");
var tombol = document.querySelector(".container-tombol");
var resetLayar = false;
var bolehHitung = false;
var tmpVal = '';
var operator = '';

tombol.addEventListener("click", function(e) {
	var tombolClick = e.target;
	var valueTombol = tombolClick.innerText;

	if (valueTombol == "C") {
		layar.value = "";
		
	}
	else if (valueTombol == "<") {
		layar.value = layar.value.slice(0, -1);
	}
	else if (valueTombol == "=") {
		if (bolehHitung == true) {
			layar.value = eval(tmpVal + operator + layar.value);
			bolehHitung = false;
		}
	
	}
	else if (tombolClick.classList.contains('operator')) {
		if (bolehHitung == true) {
			layar.value = eval(tmpVal + operator + layar.value);
			bolehHitung = false;
		}

		tmpVal = layar.value;
		operator = valueTombol;
		resetLayar = true;
}
	else {
		if (resetLayar == true) {
			layar.value = valueTombol;
			resetLayar = false;
			bolehHitung = true;
		} else {
			layar.value = layar.value + valueTombol;
		}
	}
}); 