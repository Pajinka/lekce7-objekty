// Vytvoř objekt auto, který bude mít vlastnosti: znacka, barva, rokVyroby,..
let auto = {
  znacka: 'Ford',
  barva: 'modra',
  rokVyroby: 2015
};

// Přidej novou vlastnost (majitel a prirad ji svoje jmeno jako hodnotu)
//pridam novou vec, vnoreny prazdny objekt
auto.majitel = {};

auto.majitel.jmeno = 'Jana';
auto.majitel.prijmeni = 'Novotna';

auto.spz = 'AH0J T1'


// Přepiš značku na Škoda
auto['znacka'] = 'Buggati';

// Vytvor tri promenne majitelka, znacka a spz a vloz do techto elementu text z objektu auto.
const majitel = auto.majitel.jmeno + ' ' + auto.majitel.prijmeni;
document.querySelector('#majitelka').innerHTML = majitel;

const znacka = auto.znacka;
document.querySelector('#znacka').innerHTML = znacka;

const spz = auto.spz;
document.querySelector('#spz').innerHTML = spz;