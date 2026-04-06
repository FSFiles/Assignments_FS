const colorInput = document.getElementById("colorInput")
const box = document.getElementById("box")   
const box1 = document.getElementById("box1") 
const box2 = document.getElementById("box2") 
colorInput.addEventListener("input", () => {
    let value = colorInput.value.toLowerCase()
    box.style.opacity = "0.3"
    box1.style.opacity = "0.3"
    box2.style.opacity = "0.3"

    if (value === "stop") {
    box.style.opacity = box
    } 
    else if (value === "wait") {
    box1.style.opacity = box1
    } 
    else if (value === "go") {
    box2.style.opacity = box2 
    }
})