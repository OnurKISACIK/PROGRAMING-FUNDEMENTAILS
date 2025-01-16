function gramophone(nameOfBand, nameOfAlbum, nameOfSong) {
  let a = nameOfBand.length;
  let b = nameOfAlbum.length;
  let c = nameOfSong.length;
  let totalTime = b * a * c / 2;
  let rotation = totalTime / 2.5;
  console.log(`The plate was rotated ${Math.ceil(rotation)} times.`);
}
gramophone("Black Sabbath", "Paranoid", "War Pigs");
gramophone("Rammstein", "Sehnsucht", "Engel");
