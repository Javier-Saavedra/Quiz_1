function saveData() {
  const code = document.getElementById('codigo').value;
  const name = document.getElementById('nombre').value; 
  const grade1 = parseFloat(document.getElementById('Nota1').value); 
  const grade2 = parseFloat(document.getElementById('Nota2').value);
  const grade3 = parseFloat(document.getElementById('Nota3').value);
  const grade4 = parseFloat(document.getElementById('Nota4').value);


  if (isNaN(grade1) || isNaN(grade2) || isNaN(grade3) || isNaN(grade4)) {
    const Msg = document.createElement("div");
    Msg.innerHTML = "Por favor, ingresa todas las notas correctamente.";
    Msg.style.position = "absolute";
    Msg.style.top = "50%";
    Msg.style.left = "50%";
    Msg.style.transform = "translate(-50%, -50%)";
    Msg.style.background = "rgba(255, 255, 255, 0.8)";
    Msg.style.padding = "10px";
    Msg.style.borderRadius = "10px";
    Msg.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.2)";
    document.body.appendChild(Msg);
    setTimeout(() => {
      document.body.removeChild(Msg);
    }, 3000);
    return;
  }
  
  const tableRows = document.querySelectorAll('#estudiantes tbody tr');
  let codeExists = false;
  tableRows.forEach((row) => {
    const rowCode = row.cells[1].textContent;
    if (rowCode === code) {
      codeExists = true;
    }
  });

  if (codeExists) {
    const Msg = document.createElement("div");
    Msg.innerHTML = "Error: El código ya existe.";
    Msg.style.position = "absolute";
    Msg.style.top = "50%";
    Msg.style.left = "50%";
    Msg.style.transform = "translate(-50%, -50%)";
    Msg.style.background = "rgba(255, 255, 255, 0.8)";
    Msg.style.padding = "10px";
    Msg.style.borderRadius = "10px";
    Msg.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.2)";
    document.body.appendChild(Msg);
    setTimeout(() => {
      document.body.removeChild(Msg);
    }, 3000);
    return;
  }
  const finalGrade = (grade1 * 0.2) + (grade2 * 0.2) + (grade3 * 0.2) + (grade4 * 0.4);
  const definition = finalGrade >= 3 ? 'Aprobado' : 'Reprobado';
  const passed = finalGrade >= 3 ? 'Sí' : 'No';

  const tableRow = `<tr>
      <td><button onclick="deleteRow(this)">Borrar</button></td>
      <td>${code}</td>
      <td>${name}</td>
      <td>${grade1.toFixed(2)}</td>
      <td>${grade2.toFixed(2)}</td>
      <td>${grade3.toFixed(2)}</td>
      <td>${grade4.toFixed(2)}</td>
      <td>${finalGrade.toFixed(2)}</td>
      <td>${definition}</td>
      <td>${passed}</td>
  </tr>`;

  document.querySelector('#estudiantes tbody').insertAdjacentHTML('beforeend', tableRow); 

  document.getElementById('registro').reset(); 
}

function deleteRow(button) {
  const row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);
}
