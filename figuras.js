const PI = Math.PI;
// Cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// const perimetroCuadrado = ladoCuadrado * 4;
// console.log(`el perimetro cuadrado es: ${perimetroCuadrado}cm`)

// const areaCuadrado = ladoCuadrado * ladoCuadrado;
// console.log(`el área cuadrado es: ${areaCuadrado}cm^2`)
function perimetroCuadrado(lado){
    return lado * 4;
}

function areaCuadrado(lado){
    return lado * lado;
}
console.groupEnd();

// Triangulo
console.group("Triangulos");
function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}
console.groupEnd();

// Circulo
// console.group("Circulos");
// const radioCirculo = 5;
// console.log(`El radio del circulo es: ${radioCirculo} cm`);
// const diametroCirculo = radioCirculo * 2;
// console.log(`El diametro del circulo es: ${diametroCirculo} cm`);
// const PI = Math.PI;
// console.log(`El PI es: ${PI}`);
// const perimetoCirculo = diametroCirculo * PI;
// console.log(`El perimetro del circulo es: ${perimetoCirculo} cm`);
// const areaCirculo = (radioCirculo * radioCirculo) * PI;
// console.log(`El area del circulo es: ${areaCirculo} cm^2`);

function perimetoCirculo(radio){
    return radio * 2;
}

function circunferenciaCirculo(radio){
    const diametro =  diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio){
    return (radio * radio) * PI;
}

console.groupEnd();