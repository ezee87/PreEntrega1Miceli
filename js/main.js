const comprarProductos = () => {
    let producto = '';
    let cantidad = 0;
    let precio = 0;
    let totalCompra = 0;
    let envio = '';
    let precioEnvio = 0;
    let seguirComprando = false;

    do {
        producto = prompt('¿Que desea comprar? Las opciones son: Herakles, Oreo y Pokeball').toLowerCase;
        cantidad = parseInt(prompt('Ingrese la cantidad que desea del producto '));

        let cantidadValidada = validarCantidad(cantidad);

        switch (producto) {
            case 'herakles':
                precio = 200;
                break;
            case 'oreo':
                precio = 300;
                break;
            case 'pokeball':
                precio = 400;
                break;
            default:
                alert('Alguno de los datos ingresados no es correcto');
                precio = 0;
                cantidadValidada = 0;
        }

        totalCompra += (precio * cantidadValidada)
        seguirComprando = confirm('¿Queres seguir comprando?')

    } while (seguirComprando);

    envio = prompt('Elija donde quiere recibir el pedido: Sucursal o Domicilio.');

    switch (envio) {
        case 'Sucursal':
            precioEnvio = 500;
            alert('El precio del envio es $500')
            break;
        case 'Domicilio':
            precioEnvio = 800;
            alert('El precio del envio es $800')
            break;
            default: 
            alert('Las únicas opciones son: Sucursal o Domicilio.')
            precioEnvio = 0;
    }

    totalCompra += precioEnvio;

    elegirMetodo(totalCompra);


};

const validarCantidad = (cantidad) => {
    while (Number.isNaN(cantidad) || cantidad <= 0) {
        if (cantidad <= 0) {
            alert('Debe ingresar una cantidad valida.')
        } else {
            alert('Debe colocar en números la cantidad deseada.')
        }

        cantidad = parseInt(prompt('Ingrese la cantidad que desea del producto'));
    }

    return cantidad;
};

const elegirMetodo = (totalCompra) => {
    let metodoElegido = '';
    metodoElegido = prompt('Ingrese el metodo de pago que desea: Cuotas, Transferencia o Efectivo');

    switch (metodoElegido) {
        case 'Cuotas':
            totalCompra = calcularCuotas(totalCompra);
            break;
        case 'Transferencia':
            totalCompra *= 0.9;
            alert('El descuento por transferencia es del 10% El total es: $' + totalCompra)
            break;
        case 'Efectivo':
            totalCompra;
            alert('El total es: $' + totalCompra+'. Acerquese a la sucursal más cercana y abone.')
            break;
        default:
            alert('Alguno de los datos ingresados no es correcto. Ingrese: Cuotas, Transferencia o Efectivo.');
    }

}

const calcularCuotas = (totalCompra) => {
    let cuantasCuotas = '';
    cuantasCuotas = prompt('Elija cuantas cuotas desea. 3, 6 o 12.');

    switch (cuantasCuotas) {
        case '3':
            totalCompra *= 1.06;
            alert('El interes en 3 cuotas es del 6%. El total es: $' + totalCompra)
            break;
        case '6':
            totalCompra *= 1.12;
            alert('El interes en 6 cuotas es del 12%. El total es: $' + totalCompra)
            break;
        case '12':
            totalCompra *= 1.18;
            alert('El interes en 12 cuotas es del 18%. El total es: $' + totalCompra)
            break;
        default:
            alert('Debe ingresar la cantidad de cuotas utilizando números. Las únicas opciones son: 3, 6 y 12.');
    }

}

comprarProductos()
