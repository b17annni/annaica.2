console.log('main<JS here');
const projects = [
    {proName: 'The Dots', projectImg: './img/gas.png', link: './dots/dots.html', gitLink: 'gitLinkHere', description: 'A small game of clicking the dots. This project is written with ReactJS and is a game that is both fun and stressful.'},
    {proName: 'Story Time', projectImg: './img/gas.png', link: './storytime/storytime.html', gitLink: 'gitLinkHere', description: 'Find out your future and get some advice. This project is written with vanilla javascript and is a silly litte thing.'},
    {proName: 'Quiz', projectImg: './img/gas.png', link: './quiz/quiz.html', gitLink: 'gitLinkHere', description: 'The Bobs burger quiz. How many can you? This project was written with VueJS'},
    {proName: 'Bubbel-Dots', projectImg: './img/gas.png', link: './bubs/bubs.html', gitLink: 'gitLinkHere', description: 'A fun little side that i made for my niece'}
    // {proName: 'WIP', projectImg: './img/gas.png', link: 'theLinkHere', gitLink: 'gitLinkHere', description: 'Description pending'}
]
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

