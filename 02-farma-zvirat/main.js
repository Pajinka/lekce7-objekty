let krava = {
  jmeno: 'Kravicka',
  foto: 'obrazky/krava.jpg'
};

let ovce = {
  jmeno: 'Ovecka',
  foto: 'obrazky/ovce.jpg'
};

let husa = {
jmeno: 'Husicka',
foto: 'obrazky/husa.jpg'
};

let kocka = {
jmeno: 'Kocicka',
foto: 'obrazky/kocka.jpg'
};

let kun = {
jmeno: 'Konicek',
foto: 'obrazky/kun.jpg'
};

let pes = {
jmeno: 'Pejsek',
foto: 'obrazky/pes.jpg'
};

let zviratka = [husa, kocka, krava, kun, ovce, pes];


// Vytvor obrazek zviratka krava s fotkou a popiskem.

// 1. Zacneme vytvorenim obalujiciho div element s tridou 'zvire'.

    //let zvire =


// 2. Nyni vytvor dva elementy pro obrazek a jmeno zvirete, ktere budou uvnitr naseho obalujiciho div elementu zvire.
    //2.1. Vytvor img element s tridou 'foto'. Jako src obrazku pridej hodnotu objektu krava.

    //let fotoZvirete =

    //2.2. Dale vytvor div element s tridou 'jmeno'. Jako text elementu zobraz hodnotu vlastnosti jmeno objektu krava.

    //let jmenoZvirete =

    //2.3. Zabal fotoZvire a jmenoZvirete do obalovaciho divu zvire, (psst zvire.appendChild)


// 3. Nakonec pojdme nas kod zapojit do html stranky. Na html strance vyber existujici element s tridou farma.
// a vloz do nej obalujici element zvire (pssst appendChild)

  //let farma =


// Bonus
// Co kdybychom meli program, kde tech zvirat je vic - objekt krava, objekt ovce, objekt prase...
// Musela bych pro kazdy objekt mit samostatnou promennou...jde to lépe?

zviratka.filter(function (zviratko) {
  return zviratko.jmeno === 'Kocicka';
})
.forEach(function (zviratko) {
  let zvire = document.createElement('div');
  zvire.className = 'zvire';
  // 2. Nyni vytvor dva elementy pro obrazek a jmeno zvirete, ktere budou uvnitr naseho obalujiciho div elementu zvire.
  //2.1. Vytvor img element s tridou 'foto'. Jako src obrazku pridej hodnotu objektu krava.
  let fotoZvirete = document.createElement('img');
  fotoZvirete.className = 'foto';
  fotoZvirete.src = zviratko.foto;
  //2.2. Dale vytvor div element s tridou 'jmeno'. Jako text elementu zobraz hodnotu vlastnosti jmeno objektu zviratko.
  let jmenoZvirete = document.createElement('span');
  jmenoZvirete.className = 'jmeno';
  jmenoZvirete.textContent = zviratko.jmeno;
  //2.3. Zabal fotoZvire a jmenoZvirete do obalovaciho divu zvire, (psst zvire.appendChild)
  zvire.append(fotoZvirete, jmenoZvirete);
  // 3. Nakonec pojdme nas kod zapojit do html stranky. Na html strance vyber existujici element s tridou farma.
  // a vloz do nej obalujici element zvire (pssst appendChild)
  let farma = document.querySelector('.farma');
  farma.appendChild(zvire);
});