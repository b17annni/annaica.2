const projects = [
    {proName: 'The Dots', link: './dots/dots.html', description: 'A small game of clicking the dots. This project is written with ReactJS.'},
    {proName: 'Story Time', link: './storytime/storytime.html', description: 'Find out your future and get some advice. This project is written with JavaScript.'},
    {proName: 'Quiz', link: './quiz/quiz.html', description: 'The Bobs burger quiz. How many quotes can you? This project was written with VueJS'},
    {proName: 'Bubbel-Dots', link: './bubs/bubs.html', description: 'A fun little page with an assortment of small activities. This project was made for my niece and is written with JavaScript'}
]

const jokes = [{line: 'What do you call a fun mountain?', punch: 'Hill-arious'}]
const mainSection = document.querySelector('#projectSection')

projects.forEach(element => {
    const projectSection = document.createElement('section')
    projectSection.className = 'project-card'
    const projectBtn = document.createElement('span')
    projectBtn.className = 'button-55'
    projectBtn.innerHTML = 'Take me there'
    projectBtn.onclick = () => {
        window.location.href = element.link;
    }
projectSection.innerHTML = `<h3>${element.proName}</h3><p>${element.description}</p>`

    mainSection.appendChild(projectSection)
    projectSection.appendChild(projectBtn)
    
});

function openTab(event, tabName) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += "active";
  }

  document.getElementById("defaultOpen").click();

  const jokeText = document.getElementById('heroText')

  jokeText.innerHTML = `<h2>${jokes[0].line}</h2><p>${jokes[0].punch}</p>`
  
        let toggle = true
        const theCard = document.querySelector('.about-me-card')
        const icon = document.querySelector('.my-mode')
        icon.onclick = () => {
            toggle ? theCard.classList.add('mode') : theCard.classList.remove('mode')
            toggle = !toggle

        }




