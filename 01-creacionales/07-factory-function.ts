/**
 * ! Factory Function
 * Es un patrón de diseño que nos permite crear objetos o funciones de manera dinámica que serán
 * usados posteriormente en el código.
 *
 * * Es útil cuando necesitamos crear objetos o funciones de manera dinámica,
 * * es decir, en tiempo de ejecución y no en tiempo de compilación.
 *
 */

type Language = "es" | "en" | "pt";

function createGreeter(lang: Language) {
  return function (name: string) {
    const messages = {
      es: "Hola",
      en: "Hello",
      pt: "Olá",
    };
    return console.log(`${messages[lang]} ${name}`);
  };
}

function main() {
  const greetES = createGreeter("es");
  const greetEN = createGreeter("en");
  const greetPT = createGreeter("pt");

  greetES("Juan");
  greetEN("John");
  greetPT("João");
}

main();
