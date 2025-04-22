const form = document.querySelector("form")
const mask = document.querySelector(".mask-form")

function cliqueiNoBotao() {
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mask.style.visibility = "visible"
}

function cliqueiNaMask() {
    form.style.left = "-300px"
    form.style.transform = "translateX(0)" 
    mask.style.visibility = "hidden"
}

function cliqueiNoNossosServicos() {
    const imgMarioLuigi = document.querySelector(".img-mario-luigi")
    const section = document.querySelector("section")
    const nossosServicos = document.querySelector(".section-nossos-servicos")
  
    imgMarioLuigi.style.transform = "translateX(300px)"
    imgMarioLuigi.style.opacity = "0"
    section.style.transform = "translateX(-300px)"
    section.style.opacity = "0"
    nossosServicos.style.opacity = "1"
    nossosServicos.style.zIndex = "1"

    setTimeout(() => {
        imgMarioLuigi.style.display = "none"
        section.style.display = "none"
      }, 1000)
}

function cliqueiNoHome() {
    const imgMarioLuigi = document.querySelector(".img-mario-luigi")
    const section = document.querySelector("section")
    const nossosServicos = document.querySelector(".section-nossos-servicos")
    
    nossosServicos.style.opacity = "0"
    nossosServicos.style.zIndex = "-1"
    imgMarioLuigi.style.display = "block"
    section.style.display = "block"

    setTimeout(() => {
        imgMarioLuigi.style.transform = "translateX(0)"
        imgMarioLuigi.style.opacity = "1"
        section.style.transform = "translateX(0)"
        section.style.opacity = "1"
    }, 50)
}