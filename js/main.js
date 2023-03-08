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
      prestamo_final +
      " .A continuacion elija el destino o finalidad del prestamo:"
  );
}

function prestamoTotal(arr) {
  let resultado = 0;
  arr.forEach((prestamo) => {
    resultado += prestamo.total / prestamo.cuotasPagar;
  });
  return resultado;
}

const resultadoPrestamo = [];
const listaPrestamos = [
  { id: 1, prestamo: "personales.", total: 1000 },
  { id: 2, prestamo: "al consumo.", total: 2500 },
  { id: 3, prestamo: "de estudios.", total: 5500 },
  { id: 4, prestamo: "hipotecarios.", total: 8000 },
  { id: 5, prestamo: "para empresas.", total: 10000 },
];

let visualizarPrestamos = "";
listaPrestamos.forEach((prestamo) => {
  visualizarPrestamos +=
    "id: " +
    prestamo.id +
    " préstamo: " +
    prestamo.prestamo +
    " total: $" +
    prestamo.total +
    "\n";
});

alert(visualizarPrestamos);

do {
  listaPrestamos.forEach((prestamo) => {
    console.log(prestamo.id);
    console.log(prestamo.prestamo);
    console.log(prestamo.total);
  });

  let id = prompt("Ingrese el ID del prestamo que solicita", 1);
  if (!isNaN(id))
    if (listaPrestamos.some((prestamo) => prestamo.id == id)) {
      let cuotasPagar = prompt("¿En cuántas cuotas quiere pagarlo?");
      const prestamo = listaPrestamos.find((prestamo) => prestamo.id == id);
      prestamo.cuotasPagar = cuotasPagar;
      resultadoPrestamo.push(prestamo);
    } else {
      console.log("Ingresó un ID inexistente.");
    }

  rta = prompt("¿Desea finalizar su solicitud del préstamo? SI/NO");
} while (rta != "si");

alert(
  "El monto total a pagar por mes será de: $" + prestamoTotal(resultadoPrestamo)
);
