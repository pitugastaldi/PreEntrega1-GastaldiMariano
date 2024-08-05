let pinCorrecto = 1234; // PIN correcto del cliente
let saldo = 1000; // Saldo inicial del cliente
let transacciones = []; // Array para almacenar el historial de transacciones


function mostrarMensajeBienvenida() {
  alert("Bienvenido al cajero automático");
}

function solicitarPIN() {
  let intentos = 0;
  while (intentos < 3) {
    let pinIngresado = prompt("Ingrese su PIN:");
    if (pinIngresado == pinCorrecto) {
      alert("PIN correcto. Bienvenido.");
      return true;
    } else {
      intentos++;
      alert(`PIN incorrecto. Intento ${intentos} de 3.`);
    }
  }
  alert("Ha superado el número máximo de intentos. Por favor, comuníquese con el banco.");
  return false;
}

function mostrarMenu() {
  return prompt("Seleccione una opción:\n a- Saldo\n b- Retiro\n c- Depósito\n d- Cambiar PIN\n e- Historial de transacciones\n f- Salir");
}

function verSaldo() {
  alert(`Su saldo es: $${saldo}`);
}

function retirarDinero() {
  let montoRetiro = parseFloat(prompt("Ingrese el monto a retirar:"));
  if (isNaN(montoRetiro) || montoRetiro <= 0) {
    alert("Monto inválido. Intente nuevamente.");
  } else if (montoRetiro > saldo) {
    alert("Fondos insuficientes.");
  } else {
    saldo -= montoRetiro;
    transacciones.push(`Retiro: $${montoRetiro}`);
    alert(`Ha retirado $${montoRetiro}. Su nuevo saldo es: $${saldo}`);
  }
}

function depositarDinero() {
  let montoDeposito = parseFloat(prompt("Ingrese el monto a depositar:"));
  if (isNaN(montoDeposito) || montoDeposito <= 0) {
    alert("Monto inválido. Intente nuevamente.");
  } else {
    saldo += montoDeposito;
    transacciones.push(`Depósito: $${montoDeposito}`);
    alert(`Ha depositado $${montoDeposito}. Su nuevo saldo es: $${saldo}`);
  }
}

function cambiarPIN() {
  let pinActual = prompt("Ingrese su PIN actual:");
  if (pinActual == pinCorrecto) {
    let nuevoPin = prompt("Ingrese su nuevo PIN:");
    if (nuevoPin && nuevoPin.length === 4) {
      pinCorrecto = nuevoPin;
      alert("PIN cambiado exitosamente.");
    } else {
      alert("PIN inválido. Debe tener 4 dígitos.");
    }
  } else {
    alert("PIN actual incorrecto.");
  }
}

function verHistorialTransacciones() {
  if (transacciones.length === 0) {
    alert("No hay transacciones realizadas.");
  } else {
    alert("Historial de transacciones:\n" + transacciones.join('\n'));
  }
}

function cajeroAutomatico() {
  mostrarMensajeBienvenida();

  if (solicitarPIN()) {
    let opcion;
    do {
      opcion = mostrarMenu();
      switch (opcion) {
        case 'a':
          verSaldo();
          break;
        case 'b':
          retirarDinero();
          break;
        case 'c':
          depositarDinero();
          break;
        case 'd':
          cambiarPIN();
          break;
        case 'e':
          verHistorialTransacciones();
          break;
        case 'f':
          alert("Gracias por usar el cajero automático. ¡Hasta luego!");
          break;
        default:
          alert("Opción no válida. Intente nuevamente.");
      }
    } while (opcion !== 'f');
  }
}

cajeroAutomatico();
