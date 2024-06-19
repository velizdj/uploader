<?php
$directory = "uploads/";
$file = $directory . rand(10000, 99999) ."-".  basename($_FILES["file"]["name"]);

if ($_FILES["file"]["size"] > 5000000) {
  echo "Lo siento, tu archivo es demasiado grande.";
}
else{

  if (move_uploaded_file($_FILES["file"]["tmp_name"], $file)) {
    echo "El archivo ha sido subido correctamente";
  }
  else {
    echo "Lo siento, hubo un error al subir tu archivo.";
  }

}
