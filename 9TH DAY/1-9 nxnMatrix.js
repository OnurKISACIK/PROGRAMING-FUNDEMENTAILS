function nxn(num) {
  for (let i = 0; i < num; i++) {
    let str = "";
    for (let j = 0; j < num; j++) {
      str += num + `\n`;
    }
    console.log(str);
  }
}
nxn(3);
