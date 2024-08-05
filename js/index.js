let pinCorrecto = 1234; // PIN correcto del cliente
let saldo = 1000; // Saldo inicial del cliente

function cajeroAutomatico() {
  alert("Bienvenido al cajero automático");

  let intentos = 0;
  let pinIngresado;
  let accesoPermitido = false;

  while (intentos < 3 && !accesoPermitido) {
    pinIngresado = prompt("Ingrese su PIN:");
   
    if (pinIngresado == pinCorrecto) {
      alert("PIN correcto. Bienvenido.");
      accesoPermitido = true;
    } else {
      intentos++;
      alert(`PIN incorrecto. Intento ${intentos} de 3.`);
    }
  }

  if (!accesoPermitido) {
    alert("Ha superado el número máximo de intentos. Por favor, comuníquese con el banco.");
    return;
  }

  let opcion;
  do {
    opcion = prompt("Seleccione una opción:\n a- Saldo\n b- Retiro\n c- Depósito\n d- Salir");

    switch (opcion) {
      case 'a':
        alert(`Su saldo es: $${saldo}`);
        break;
      case 'b':
        let montoRetiro = parseFloat(prompt("Ingrese el monto a retirar:"));
        if (montoRetiro > saldo) {
          alert("Fondos insuficientes.");
        } else {
          saldo -= montoRetiro;
          alert(`Ha retirado $${montoRetiro}. Su nuevo saldo es: $${saldo}`);
        }
        break;
      case 'c':
        let montoDeposito = parseFloat(prompt("Ingrese el monto a depositar:"));
        saldo += montoDeposito;
        alert(`Ha depositado $${montoDeposito}. Su nuevo saldo es: $${saldo}`);
        break;
      case 'd':
        alert("Gracias por usar el cajero automático. ¡Hasta luego!");
        break;
      default:
        alert("Opción no válida. Intente nuevamente.");
    }
  } while (opcion !== 'd');
}

cajeroAutomatico();