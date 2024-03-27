var numero = document.getElementById("valor");
var aumentar = document.getElementById("aumentar");
var reducir = document.getElementById("reducir");

var rojo = document.getElementById("rojo");
var verde = document.getElementById("verde");
var azul = document.getElementById("azul");

function randomColor() {
    var color = '#';
    var colorCode = ['ffaf40', '2A9BFB', 'ff5967', '7870cc', '33ccbf']; // colors
    var className = document.getElementsByClassName("change"); // class name to random color
    var i;
    color += colorCode[Math.floor(Math.random() * colorCode.length)];
    for (var i = 0; i < className.length; i++) {
        className[i].style.backgroundColor = color;
    }
}


