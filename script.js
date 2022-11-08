let currentlyActive = 1
let progress = document.getElementById('progress')
let buttonPrev = document.getElementById('prev')
let buttonNext = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

console.log(circles)

buttonNext.addEventListener('click',()=> {
    currentlyActive++ 
    updateData()
    circles[(currentlyActive - 1)].classList.add('active')   
})
 
buttonPrev.addEventListener('click',()=> {
    currentlyActive-- 
    updateData()
    circles[(currentlyActive)].classList.remove('active')
})

function updateData() {
   
    if (currentlyActive <= 1) {
        buttonPrev.disabled = true
    }
    else if (currentlyActive >= circles.length) {
        buttonNext.disabled = true
    }
    else {
        buttonNext.disabled = false
        buttonPrev.disabled = false
    }
        
    progress.style.width = ((currentlyActive - 1) / ((circles.length) - 1)) * 100 + '%'   
}




