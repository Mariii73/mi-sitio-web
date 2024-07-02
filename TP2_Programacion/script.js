function mostrarInfo() {
    var infoDiv = document.getElementById('info');
    infoDiv.style.display = (infoDiv.style.display === 'none' || infoDiv.style.display === '') ? 'block' : 'none';
}


function agregarGasto() {
    var concepto = document.getElementById('concepto').value;
    var monto = parseFloat(document.getElementById('monto').value); 
    var categoria = document.getElementById('categoria').value;

    if (isNaN(monto) || monto <= 0) {
        alert("Ingrese un monto válido.");
        return;
    }

    var resumenGastos = document.getElementById('resumen-gastos');
    var gastoDiv = document.createElement('div');
    gastoDiv.classList.add('gasto');
    gastoDiv.innerHTML = `
        <p>Concepto: ${concepto}</p>
        <p>Monto: $${monto.toFixed(2)}</p>
        <p>Categoría: ${categoria}</p>
        <p>Fecha: ${obtenerFecha()}</p>
        <button class="btn-eliminar" onclick="eliminarGasto(this)">Eliminar</button>
    `;

    
    resumenGastos.appendChild(gastoDiv);

    sumarTotal(monto);
}

function obtenerFecha() {
    var fecha = new Date();
    var dia = fecha.getDate();
    var mes = fecha.getMonth() + 1;
    var año = fecha.getFullYear();
    return `${dia}/${mes}/${año}`;
}

function sumarTotal(monto) {
    var totalActual = parseFloat(document.getElementById('total-valor').textContent);
    var nuevoTotal = totalActual + monto;
    document.getElementById('total-valor').textContent = nuevoTotal.toFixed(2);
}

function eliminarGasto(elemento) {
    var gasto = elemento.parentNode;
    var monto = parseFloat(gasto.querySelector('p:nth-child(2)').textContent.replace('Monto: $', ''));
    gasto.parentNode.removeChild(gasto);
    restarTotal(monto);
}

function restarTotal(monto) {
    var totalActual = parseFloat(document.getElementById('total-valor').textContent);
    var nuevoTotal = totalActual - monto;
    document.getElementById('total-valor').textContent = nuevoTotal.toFixed(2);
}
