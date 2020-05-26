let time = 2000,
    currentImageIndex = 0,
    images = document.querySelectorAll('#slider img')
    max = images.length;

function nextImage(){
    
}

function start(){
    setInterval(() => {
        console.log("função rodando!")
    }, time)
}

window.addEventListener("load", start)