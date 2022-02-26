const formClasses = ['circle', 'star-five', 'triangle', 'square', 'diamond', 'heart']
const backGroundBtns = [ 
    {colorName:'rgb(214, 18, 18)' , color: 'rgb(236, 70, 58)'},
    {colorName:'blue' , color: 'rgb(55, 182, 246)'},
    {colorName:'green' , color: 'rgb(53, 212, 97)'},
    {colorName:'yellow' , color: 'rgb(249, 225, 4)'},
    {colorName:'purple' , color: 'rgb(136, 47, 246)'},
    {colorName:'orange' , color: 'rgb(249, 157, 7)'},
]

const btnSection = document.getElementById('theMainBtns')
const mainSection = document.getElementById('mainSection')

const toggle = () => {
    
}

const dot = document.createElement('span')
dot.classList.add('the-dot')
dot.classList.add('bubble')
const smallDot = document.createElement('span')
smallDot.setAttribute('id','the-small-dot')
smallDot.classList.add('circle')
const moveDot = document.createElement('span')
moveDot.classList.add('move-dot')
const myText = document.createElement('span')
myText.classList.add('my-text')
myText.innerHTML = ':)'

let className = 0
let formerName = smallDot.classList

backGroundBtns.forEach( element => {
    let btn = document.createElement('button')
    btn.classList.add('background-btn')
    btn.style.backgroundColor = element.colorName
    btn.onclick = () => {
        body.style.backgroundColor = element.color
    }
    btnSection.appendChild(btn)
    
    
});

dot.onclick = () => {
    dot.style.backgroundColor = changeColor()
}

myText.onclick = () => {
     
    myText.innerHTML = myText.innerHTML === ':)' ? myText.innerHTML = ':D' : myText.innerHTML = ':)'
}

smallDot.onclick = () => {

    className = className + 1; // increase i by one
    className = className % formClasses.length; // if we've gone too high, start from `0` again

    smallDot.classList.remove(formerName)
    smallDot.classList.add(formClasses[className])
}

moveDot.onclick = () => {
    const ww = window.innerWidth
    const wh = window.innerHeight

      const walls = Math.min(ww, wh)

const w = rand(walls)

const x = rand ((ww - w))
const y = rand ((wh - w))


moveDot.style.top = w + 'px'
moveDot.style.bottom = w + 'px'
moveDot.style.left = x + 'px'
moveDot.style.right = y + 'px'

moveDot.style.transition = (rand(100) + 900 + 'ms')
}

const rand = (multi) => {
    return parseInt(multi * Math.random(), 10)
}

const changeColor = () => {
    return `rgba(
        ${rand(255)},
        ${rand(255)},
        ${rand(255)},
        ${Math.random() + 0.5}
      )`
}

  mainSection.appendChild(dot)
  mainSection.appendChild(smallDot)
  mainSection.appendChild(moveDot)
  mainSection.appendChild(myText)