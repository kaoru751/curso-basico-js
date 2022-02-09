function calcularPrecioConDescuento(precio, descuento){
    const PorcentajePrecioConDescuento =  100 - descuento;
    const precioConDescuento = (precio * PorcentajePrecioConDescuento) / 100
    return precioConDescuento;
}