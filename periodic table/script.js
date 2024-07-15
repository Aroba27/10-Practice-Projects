const element  = document.querySelectorAll(".element")

element.forEach(element => {
  let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
randomHex = `#${randomHex.padStart(6, "0")}`;
console.log(randomHex)
  element.style.backgroundColor = randomHex
});
