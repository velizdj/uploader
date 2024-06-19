const container = document.getElementById('uploadContainer');
const fileInput = document.getElementById('fileInput');


  // Función para mostrar mensajes
  function showMessage(msg, isSuccess) {

    Swal.fire
    ({
      text: msg,
      icon: isSuccess ? 'success' : 'error',
      confirmButtonText: 'OK',
      heightAuto: false
    });

  }

  // Manejar el arrastre y soltado
  container.addEventListener('dragover', (event) => {
      event.preventDefault();
      container.classList.add('dragover');
  });

  container.addEventListener('dragleave', () => {
    container.classList.remove('dragover');
  });

  container.addEventListener('drop', (event) => {
    event.preventDefault();
    container.classList.remove('dragover');
    const files = event.dataTransfer.files;
    if (files.length) {
      uploadFile(files[0]);
    }
  });

  // Manejar clic en el contenedor para abrir el diálogo de selección de archivos
  container.addEventListener('click', () => {
    fileInput.click();
  });

  // Manejar la selección de archivo
  fileInput.addEventListener('change', () => {
    if (fileInput.files.length) {
      uploadFile(fileInput.files[0]);
    }
  });

  // Función para subir el archivo con AJAX
  function uploadFile(file) {
    const formData = new FormData();
    formData.append('file', file);

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'uploader.php', true);
    xhr.onload = function() {

      if (xhr.status === 200) {
        showMessage(xhr.responseText, true);
      } 
      else {
        showMessage('Error uploading file.', false);
      }

    };

    xhr.send(formData);
  }