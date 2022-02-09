function calcularPrecioConDescuento(precio, descuento){
    const PorcentajePrecioConDescuento =  100 - descuento;
    const precioConDescuento = (precio * PorcentajePrecioConDescuento) / 100
    return precioConDescuento;
}

function CalculateDiscount(){
    const inputPrice = document.getElementById('price');
    const price = inputPrice.value;
    const inputDiscount = document.getElementById('discount');
    const discount = inputDiscount.value;
    const precioConDescuento = calcularPrecioConDescuento(price, discount);
    resultP = document.getElementById("resultP");
    resultP.innerText = "El precio con descuento son: $"+precioConDescuento;
}