/********** variables **********/
var userName; //Declaración de variable
var age = 29; //Declaración e inicialización en una sola instrucción;

userName = "Juanito"; //Inicialización = La primera asignación

document.write("<p>Esto viene de un fichero Javascript separado del HTML.</p>");
document.write("Este programa me lo ha enseñado a hacer " + userName + ".");
linebreak();
document.write("Ahora mismo tiene " + age + " años.");

age = 30;
document.write("El 19 de Mayo cumplirá " + age + ".");

sayHello();
sayHello();
sayHello();

function sayHello() {
    document.write("<p>Hello, Javascript</p>");
    linebreak();
}

function linebreak() {
    document.write("<br/>");
}

/********** tablas **********/
var animalType;
var animalName;

document.write("<table>");
document.write("<tr><th>Tipo de animal</th><th>Nombre del animal</th></tr>");

animalType = "Cerdo";
animalName = "Orson";
document.write("<tr><td>" + animalType + "</td><td>" + animalName + "</td></tr>");

animalType = "Gallo";
animalName = "Roy";
document.write("<tr><td>" + animalType + "</td><td>" + animalName + "</td></tr>");

animalType = "Pato";
animalName = "Wade";
document.write("<tr><td>" + animalType + "</td><td>" + animalName + "</td></tr>");


document.write("</table>");

/********** operadores **********/
var operand1 = 68; //integer
var operand2 = 18.25; //float

document.write("Operando 1 : " + operand1);
document.write("<br/>");
document.write("Operando 2 : " + operand2);
document.write("<br/>");
document.write("La suma de ambos es : " + (operand1 + operand2));
document.write("<br/>");
document.write("La resta de ambos es : " + (operand1 - operand2));
document.write("<br/>");
document.write("La multiplicación de ambos es : " + (operand1 * operand2));
document.write("<br/>");
document.write("La división de ambos es : " + (operand1 / operand2));
document.write("<br/>");
document.write("El resto de dividir 68 entre 5 es : " + (68 % 5));
document.write("<br/>");
++operand1;
document.write("Si sumamos 1 a 68 da : " + operand1);
document.write("<br/>");
operand1--;
document.write("Si restamos 1 a 69 da : " + operand1);
document.write("<br/>");

var name = "Juan Gabriel ";
var surname = "Gomila";
var fullname = name + surname;
document.write("Mi profesor favorito es : " + fullname);
