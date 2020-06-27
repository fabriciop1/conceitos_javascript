function load() {
    let div_areaText = document.getElementById("areaText")
    let imagem = document.getElementById("img")

    let data = new Date()
    horas = data.getHours()
    minutos = data.getMinutes()

    if (horas < 12) {
        div_areaText.innerHTML = `It's ${horas}:${minutos} am. Good morning!`
        imagem.src = "imgs/morning.png"
        document.body.style.background = "#cecaa7"
    } else {
        div_areaText.innerHTML = `It's ${horas}:${minutos} pm. Good afternoon!`
        imagem.src = "imgs/afternoon.png"
        document.body.style.background = "#c78332"
    }
}


