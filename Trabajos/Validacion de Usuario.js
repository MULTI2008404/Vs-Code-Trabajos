let Usuario;
let contraseña;

console.log("================================");
console.log("     VALIDACIÓN DE USUARIO");
console.log("================================");  

Usuario =prompt("Ingrese su usuario:");
contraseña = Number(prompt("Ingrese su contraseña:"));



if (Usuario === "admin" && contraseña === 1234) {
    alert("Bienvenido, administrador.");
    console.log("================================");
    console.log("administrador: " + Usuario);
    console.log("================================");
    console.log("contraseña: " + contraseña);
    console.log("================================");
} else {
    alert("Usuario o contraseña incorrectos.");
    console.log("================================");
    console.log("Usuario o contraseña incorrectos.");
    console.log("================================");
}


