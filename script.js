function togglemode() {
  const html = document.documentElement

  //  if (html.classList.contains("light")) {
  //    html.classList.remove("light")
  //  } else {
  //    html.classList.add("light")   Metódo um de adicionar função ao botão

  html.classList.toggle("light") // metodo dois e mais curto e simples

  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
}
