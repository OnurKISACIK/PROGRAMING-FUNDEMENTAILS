function makeAdictionary(jsonStr) {
  let dictionary = {};
  for (let el of jsonStr) {
    let obj = JSON.parse(el);

    let keys = Object.keys(obj);
    for (let key of keys) {
      dictionary[key] = obj[key];
    }
  }

  let sortedKeys = Object.keys(dictionary).sort((a, b) => a.localeCompare(b));
  for (let key of sortedKeys) {
    console.log(`Term: ${key} => Definition: ${dictionary[key]}`);
  }
}

makeAdictionary([
  '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',

  '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for afare."}',

  '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
  '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',

  '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]);
