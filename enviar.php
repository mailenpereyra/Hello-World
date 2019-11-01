<?php 
//variables 
$errores = [];
    $nombre = isset($_POST['nombre']) ? $_POST['nombre'] : null;
    $mensaje = isset($_POST['mensaje']) ? $_POST['mensaje'] : null;
    $email = isset($_POST['email']) ? $_POST['email'] : null;
// Validaciones
if($_SERVER['REQUEST_METHOD']==='POST') {
 function validar_nombre(string $nombre): bool {
    return $nombre >= 3  && !is_numeric($nombre) &&  !is_numeric( substr($nombre,0,1));      
}
 function validar_mensaje(string $mensaje): bool {
    return !trim($mensaje) == '' && $mensaje <= 400;
}
 function validar_email(string $email): bool {
        return (filter_var($email, FILTER_SANITIZE_EMAIL, FILTER_VALIDATE_EMAIL) === FALSE &&
          !trim($email) == '' ) ? False : True;      
}
} else {
    $url =  "Location: ?page=contacto&errors=";
    foreach($errores as $value) {}
    header('Location: ?page=contacto&errors=');
}
// Errores
    // Nombre
if (!validar_nombre($nombre)) {
    $errores[] = 'El campo Nombre es obligatorio.';
}
    // Edad
 if (!validar_mensaje($mensaje)) {
     $errores[] = 'El campo de mensaje debe estar completo.';
}
    // Email
if (!validar_email($email)) {
     $errores[] = 'El campo de Email tiene un formato no válido.';
}
?>