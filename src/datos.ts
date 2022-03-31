//Written by: Ivan Vaquero;
//Title: Clase2Carla;
//Declarations of variables;
let btnEnviar = <HTMLButtonElement>document.getElementById("btnEnviar");
let dato1 = <HTMLInputElement>document.getElementById("dato1");
let dato2 = <HTMLInputElement>document.getElementById("dato2");
let valor1: number = 0;
let valor2: number = 0;
//Main***********************************************************************
btnEnviar.addEventListener("click", () => {
  //It runs when you press submit button.
  valor1 = Number(dato1.value);
  valor2 = Number(dato2.value);
  console.log(valor1 * valor2);
  alert("el resultado es: " + valor1 * valor2);
});
//End***************************************************************
