export const parseCurrency = (value) => {
    // Retorna $ 0.00 si el valor no es válido o está vacío
    if (isNaN(value)) return "$ 0.00";

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'MXN', // Usamos MXN, pero aplicamos el formato visual 'en-US' (coma para miles, punto para decimales)
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });

    // Añade un espacio estético entre el símbolo $ y el número
    return formatter.format(value).replace('$', '$ ');
};