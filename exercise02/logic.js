
let submit = document.getElementById("btnSubmit")

submit.addEventListener("click", resultado)

function resultado() {
    let inputyear = document.querySelector("input#inputyear")
    let divRes = document.querySelector("div#res")
    let ano = new Date().getFullYear()
    let year = Number(inputyear.value)

    if (inputyear.value.length == 0 || year > ano ||  year < 1900) {
        alert("[ERROR] Digite corretamente o ano!")
    } else {
        let idade = ano - year
        let sex = document.getElementsByName("gender")
        let gender = "";
        let img = document.createElement("img")
        
        img.setAttribute("id", "photo")
        if (sex[0].checked) {
            gender = "Homem"
            if (idade >= 0 && idade <= 14) {
                img.setAttribute("src", "imgs/crianca_h.png")
            } else if (idade < 50) {
                img.setAttribute("src", "imgs/jovem_h.png")
            } else {
                img.setAttribute("src", "imgs/idoso_h.png")
            }
        } else {
            gender = "Mulher"
            if (idade >= 0 && idade <= 14) {
                img.setAttribute("src", "imgs/crianca_m.png")
            } else if (idade < 50) {
                img.setAttribute("src", "imgs/jovem_m.png")
            } else {
                img.setAttribute("src", "imgs/idosa_m.png")
            }
        }

        divRes.innerHTML = `Você é ${gender} com ${idade} anos. <br>`
        divRes.appendChild(img)
        divRes.style.textAlign = "center"
        img.style.padding = "15px"
    }
}


