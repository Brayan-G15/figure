// codifo del cuadrado

function perimetroCuadrado(lado){
    return  lado * 4;
} 

function areaCuadrado(lado){
    return lado * lado;
}
// codigo triangulo

function perimetroTriangulo(lado1, lado2, base){
    return  lado1 + lado2 + base;
} 

function areaTriangulo(base, altura){
    return (base * altura) / 2;
} 

// codigo del circulo

// Diametro
function diametroCirculo(radio){
    return radio*2;
}

// Circunfeencia

function perimetroCirculo(radio){
    const PI = Math.PI;
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

// Area

function areaCirculo(radio){
    const PI = Math.PI;
  
    return (radio * radio) * PI
}
// aqui interactuamos con el html
function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value)
    alert (area);
}

// funciones triangulos
function calcularPerimetroTriangulo(){
    const input = document.getElementById("lado1");
    const lado1 = parseInt(input.value);

    const input2 = document.getElementById("lado2");
    const lado2 = parseInt(input2.value);

    const input3 = document.getElementById("base");
    const base = parseInt(input3.value);

    const perimetro = perimetroTriangulo(lado1,lado2,base);

    alert(perimetro);
    // crear variable tipo array que me recoja los valores del input
    // luego extraer esos valores del array con su respectivo index
}

function calcularAreaTriangulo(){
    const input = document.getElementById("baseTriangulo");
    const base = parseInt(input.value);

    const input2 = document.getElementById("altura");
    const altura = parseInt(input2.value);

    const area = areaTriangulo(base,altura);
    alert(area);
}

// calcular diametro circulo
function calcularDiametroCirculo(){
    const input = document.getElementById("radio");
    const radio = input.value;

    const diametro = diametroCirculo(radio);
    alert(diametro);
}

// calcular perimetro circulo 
function calcularPerimetroCirculo(){
    const input = document.getElementById("radio");
    const radio = parseInt(input.value);

    const perimetro = perimetroCirculo(radio);
    alert(perimetro);
}

// calcular area circulo
function calcularAreaCirculo(){
    const input = document.getElementById("radio");
    const radio = input.value;

    const area = areaCirculo(radio);
    alert(area);
}
