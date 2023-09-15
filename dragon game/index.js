
score = 0
cross = true

setTimeout(()=>{
    audio = new Audio('stranger-things-124008.mp3')
    audio.play()
},100)


document.onkeydown = function (e) {
    console.log(e.keyCode)
    if (e.keyCode == 32) {
        dino = document.querySelector(".dino")  
        dino.classList.add("animateDino")
        setTimeout(() => {
            dino.classList.remove("animateDino")
          
        }, 700)
    }

    if(e.keyCode == 13){
        location.reload()
    }

    if (e.keyCode == 39) {
        dino = document.querySelector(".dino")
        dino.classList.add("animateDino")
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'))
        dino.style.left = dinoX + 112 + "px"
    }

    if (e.keyCode == 37) {
        dino = document.querySelector(".dino")
        dino.classList.add("animateDino")
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'))
        dino.style.left = dinoX - 112 + "px"
    }

    if (e.keyCode == 40) {
       dino.style.width = "100px"
       dino.style.height = "100px"
    }
    
    if(e.keyCode == 38){
        dino.style.width = "150px"
        dino.style.height = "130px"
    }
   
}

setInterval(() => {
    dino = document.querySelector(".dino")
    gameOver = document.querySelector(".gameOver")
    obstacle = document.querySelector(".obstacle")
    dino1 = document.querySelector(".dino1")

    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'))
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'))

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'))
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'))
    
    offSetX = Math.abs(dx - ox)
    offSetY = Math.abs(dy - oy)

    if (offSetX < 113 && offSetY < 52) {
        gameOver.style.visibility = 'visible';
        obstacle.classList.remove('obstacleAni')
        setTimeout(() => {
            audio.pause()
        }, 100)
    }

    else if (offSetX < 145 && cross) {
        score += 1
        updateScore(score)
        cross = false
        setTimeout(() => {
            cross = true
        }, 1000)
    }


}, 10)

const updateScore = function (score) {
    scoreCont.innerHTML = "Your Score : " + score
}



let array = ["hndi", "nook", "knken", "mem"]

 let newArray =  array.splice(1)

console.log(newArray)