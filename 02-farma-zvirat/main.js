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

let zvire = document.createElement('div');
zvire.className = 'zvire';

// 2. Nyni vytvor dva elementy pro obrazek a jmeno zvirete, ktere budou uvnitr naseho obalujiciho div elementu zvire.
//2.1. Vytvor img element s tridou 'foto'. Jako src obrazku pridej hodnotu objektu krava.

let fotoZvirete = document.createElement('img');
fotoZvirete.className = 'foto';
fotoZvirete.src = krava.foto;

//2.2. Dale vytvor div element s tridou 'jmeno'. Jako text elementu zobraz hodnotu vlastnosti jmeno objektu krava.

let jmenoZvirete = document.createElement('span');
jmenoZvirete.className = 'jmeno';
jmenoZvirete.innerHTML = krava.jmeno;

//2.3. Zabal fotoZvire a jmenoZvirete do obalovaciho divu zvire, (psst zvire.appendChild)

zvire.appendChild(fotoZvirete);
zvire.appendChild(jmenoZvirete);

// 3. Nakonec pojdme nas kod zapojit do html stranky. Na html strance vyber existujici element s tridou farma.
// a vloz do nej obalujici element zvire (pssst appendChild)

let farma = document.querySelector('.farma');
farma.append(zvire, zvire2);

/*
//vlozeni dvou zvirat jednotlive


// 1. Zacneme vytvorenim obalujiciho div element s tridou 'zvire'.

    let zvire = document.createElement('div');
    zvire.className = 'zvire';
    let zvire2 = document.createElement('div');
    zvire2.className = 'zvire';


// 2. Nyni vytvor dva elementy pro obrazek a jmeno zvirete, ktere budou uvnitr naseho obalujiciho div elementu zvire.
    //2.1. Vytvor img element s tridou 'foto'. Jako src obrazku pridej hodnotu objektu krava.

    let fotoZvirete = document.createElement('img');
    fotoZvirete.className = 'foto';
    fotoZvirete.src = krava.foto;
    let fotoZvirete2 = document.createElement('img');
    fotoZvirete2.className = 'foto';
    fotoZvirete2.src = ovce.foto;

    //2.2. Dale vytvor div element s tridou 'jmeno'. Jako text elementu zobraz hodnotu vlastnosti jmeno objektu krava.

    let jmenoZvirete = document.createElement('span');
    jmenoZvirete.className = 'jmeno';
    jmenoZvirete.innerHTML = krava.jmeno;
    let jmenoZvirete2 = document.createElement('span');
    jmenoZvirete2.className = 'jmeno';
    jmenoZvirete2.innerHTML = ovce.jmeno;

    //2.3. Zabal fotoZvire a jmenoZvirete do obalovaciho divu zvire, (psst zvire.appendChild)

    zvire.appendChild(fotoZvirete);
    zvire.appendChild(jmenoZvirete);

    zvire2.appendChild(fotoZvirete2);
    zvire2.appendChild(jmenoZvirete2);

// 3. Nakonec pojdme nas kod zapojit do html stranky. Na html strance vyber existujici element s tridou farma.
// a vloz do nej obalujici element zvire (pssst appendChild)

  let farma = document.querySelector('.farma');
  farma.append(zvire, zvire2);
  */
  
//vlozeni vsech zvirat

// Bonus
// Co kdybychom meli program, kde tech zvirat je vic - objekt krava, objekt ovce, objekt prase...
// Musela bych pro kazdy objekt mit samostatnou promennou...jde to lépe?
/*
zviratka.forEach(function(zviratko) {
    
  let zvire = document.createElement('div');
  zvire.className = 'zvire';

  let fotoZvirete = document.createElement('img');
  fotoZvirete.className = 'foto';
  fotoZvirete.src = zviratko.foto;

  let jmenoZvirete = document.createElement('span');
  jmenoZvirete.className = 'jmeno';
  jmenoZvirete.innerHTML = zviratko.jmeno;

  zvire.appendChild(fotoZvirete);
  zvire.appendChild(jmenoZvirete);

  let farma = document.querySelector('.farma');
  farma.appendChild(zvire);
});*/