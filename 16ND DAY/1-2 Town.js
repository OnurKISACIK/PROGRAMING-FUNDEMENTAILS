function town(arr) {
  let obj = {};
  for (let el of arr) {
    let [town, latitude, longitude] = el.split(" | ");
    let latitude1 = Number(latitude).toFixed(2);
    let longitude1 = Number(longitude).toFixed(2);
    obj.town = town;
    obj.latitude = latitude1;
    obj.longitude = longitude1;
    console.log(obj);
  }
}
town(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
