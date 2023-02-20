function prestamo_solicitado(sueldo, prestamo) {
  if (sueldo > prestamo) {
    alert("Usted puede obtener el préstamo solicitado.");
    return true;
  } else {
    alert("Usted no puede solicitar un préstamo mayor a su sueldo.");
    return false;
  }
}

let sueldo = Number(prompt("Ingrese su sueldo mensual"));

while (isNaN(sueldo) || sueldo <= 0) {
  sueldo = Number(
    prompt("El sueldo debe ser mayor que cero. Ingrese un sueldo válido.")
  );
}

let prestamo = Number(prompt("Ingrese el monto del préstamo que solicita."));

while (isNaN(prestamo) || prestamo <= 0) {
  prestamo = Number(
    prompt("El préstamo debe ser mayor que cero. Ingrese un préstamo válido.")
  );
}

let resultado = prestamo_solicitado(sueldo, prestamo);

if (resultado == true) {
  const iva = 1.1;

  const interes = prestamo * iva;

  const prestamo_final = prestamo + interes;

  alert(
    "El monto final que deberá pagar con intereses del 10% es de: " +
      prestamo_final
  );
}
