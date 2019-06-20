$(document).ready(() => {
  //ustawienia
  const src = "img/slider"; //ścieżka do zdjęć
  const img = ["img.jpg", "test.jpg", "zdj.jpg", "kod.jpg"]; //nazwy zdjęć
  const speed = 5000; //długosc trwania jednego obrazka
  const speedAnimation = 500; //długosc trwania animacji
  const click = true; //czy mozna przewijać true = on , false = off
  const idImg = "slider" //nazwa id img
  //
  let i = 0
  const id = $(`#${idImg}`);
  //przewijanie 
  slider = () => {
    id.fadeOut(speedAnimation, () => {
      id.attr("src", `${src}/${img[i]}`);
      id.fadeIn(speedAnimation);
      i = (i == img.length - 1) ? 0 : i + 1
      setTimeout(() => {
        slider()
      }, speed);
    });
  }
  slider()
  //kliknięcie 
  id.click(() => {
    if (click == true) {
      id.fadeOut(speedAnimation, () => {
        id.attr("src", `${src}/${img[i]}`);
        id.fadeIn(speedAnimation);
        i = (i == img.length - 1) ? 0 : i + 1
      });
    }
  });
})