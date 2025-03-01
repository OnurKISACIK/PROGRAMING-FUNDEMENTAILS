function inventory(arr) {
  let heroes = [];
  for (let el of arr) {
    let [name, level, items] = el.split(" / ");
    level = Number(level);
    let heroObj = { name: name, level: level, items: items };
    heroes.push(heroObj);
  }
  heroes.sort((a, b) => a.level - b.level);
  for (let heroobj of heroes) {
    console.log(`Hero: ${heroobj.name}`);
    console.log(`level => ${heroobj.level}`);
    console.log(`items => ${heroobj.items}`);
  }
}
inventory([
  "Isacc / 25 / Apple, GravityGun",

  "Derek / 12 / BarrelVest, DestructionSword",

  "Hes / 1 / Desolator, Sentinel, Antara"
]);

//? BIRKAC TANE DAHA ORNEK YAP BUNUNLA ILGILI
