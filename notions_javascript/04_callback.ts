// Les callbacks, ou fonctions de rappels
// Sont une mécanique très, très, utilisé en JavaScript

// L'application technique est relativement "simple"
// Une fonction peut être passé en argument d'une autre fonction,
// Et délègue à cette fonction la responsabilité de l'appel, et des données qu'il transmet

// Le nom du paramètre est arbitraire
function A(callback) {
  callback();
}

function B() {
  console.log("B");
}

A(B); // Affichera B, quand B sera exécutée dans le corps de la fonction A

// Notez que la fonction B n'est pas exécutée imédiatement
// Une fonction est un objet, elle peut donc être passée en argument,
// affectée à une variable, etc.

const C = B;
console.log(C()); // Affichera B

// On peut bien sûr transmettre une fonction à une autre fonction
function D(callback) {
  A(callback);
}

// Plutôt que de faire
function D2(callback) {
  A(function () {
    callback();
  });
}

D(B); // B est passé à D lors, qui lui-même le passe à A

// Les fonctions qui appellent le callback
// On la responsabilité, s'ils le souhaitent, de transmettre des informations
function quandPositionTransmise(pos) {
  console.log(pos.x);
  console.log(pos.y);
}

function quelleEstMaPosition(callback) {
  const position = { x: 2, y: 3 };
  callback(position);
}

quelleEstMaPosition(quandPositionTransmise); // Affichera {x: 2, y: 3} par la fonction quandPositionTransmise

// On aurait pu aussi écrire cela de cette façon,
// Mais ce n'est pas nécéssaire ici car la fonction anonyme,
// et notre fonction quandPositionTransmise ont la même signature
//
// Ici, il faut bien comprendre qu'on transmet une fonction anonyme qui sera exécutée par quelleEstMaPosition
// Puis notre fonction quandPositionTransmise sera exécutée
quelleEstMaPosition(function (pos) {
  quandPositionTransmise(pos);
});

// Passer une fonction anonyme plutôt que notre fonction est nécéssaire
// Quand, pour un callback que l'on retransmet à un autre argument de callback, elles ne transmettent pas les mêmes informations

// Ici ce ne sera pas cohérent, car dans pos on aura plus l'objet représentant une position
// mais un objet représentant l'évènement du clic
document.addEventListener("click", quandPositionTransmise);

// On préfèrera donc faire ceci :
document.addEventListener("click", function (event) {
  quandPositionTransmise({
    x: event.clientX,
    y: event.clientY,
  });
});
