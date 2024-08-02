
//alert("Hola Mundo! <3")

let app = document.getElementById('app');

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

//Usar el punto es para llamar a una propiedad o a una acción del objeto
// Acciones de distinguen por los paréntesis ()
typewriter
  .pauseFor(2000)
  .typeString('Evelyn Perea')
  .pauseFor(250)
  .deleteAll()
  .typeString('Analista de Datos JR')
  .typeString(' | Desarrolladora Fronted JR')
  .pauseFor(1000)
  .start();



let frase = document.getElementById('frase');

let writer = new Typewriter(frase, {
  loop: true,
  delay: 75,
});

//Usar el punto es para llamar a una propiedad o a una acción del objeto
// Acciones de distinguen por los paréntesis ()
writer
  .pauseFor(2000)
  .typeString('Nunca es demasiado tarde para ser lo que podrías haber sido.')
  .pauseFor(250)
  .deleteAll()
  .typeString('George Eliot')
  .pauseFor(1000)
  .start();