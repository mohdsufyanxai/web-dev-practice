let btn = document.getElementById("btn")

btn.addEventListener("dblclick", () => {
    document.querySelector(".box").innerHTML =
        "<b> meow first </b> enjoy your click roxy"
})

btn.addEventListener("contextmenu", () => {
    alert("<b> meow first </b> enjoy your click roxy")

})

document.addEventListener("keydown", (e) => {
    console.log(e, e.key,e.keyCode)
})