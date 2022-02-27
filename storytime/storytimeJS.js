const signs = [
    {
    
        'name': 'Aries',
        "date":'21/3 - 20/4'

    },
    {
        'name': 'Taurus',
        "date":'21/4 - 21/5'

    },
    {
            'name': 'Gemeni',
            "date": '22/5 - 21/6'

    },
   {
        'name':'Cancer' ,
        "date":'22/6 - 22/7'

    },
    {
        'name':'Leo' ,
        "date":'23/7 - 21/8'

    },
    {
        'name':'Virgo' ,
        "date":'22/8 - 23/9'

    },
    {
        'name':'Libra' ,
        "date":'24/9 - 23/10'

    },
    {
        'name':'Scorpio' ,
        "date":'24/10 - 22/11'

    },
    {
        'name':'Sagittarious' ,
        "date":'23/11 - 22/12'

    },
    {
        'name': 'Capricorn',
        "date":'23/12 - 20/1'

    },
    {
        'name': 'Aquarious',
        "date":'21/1 - 19/2'

    },
    {
        'name': 'Pisces',
        "date":'20/2 - 20/3'

    }
    ];

const mainSection = document.getElementById('root')
const signBtn = document.createElement('section')
const card = document.createElement('section')
card.className="quote-card"

const h2 = document.querySelector('.the-h2')

h2.onclick = () => {
    h2.innerHTML = 'I said down below'
}

// signBtn.attributes('class', 'the-signs')
const btnClick = (btn) =>{
    btn.id= btn.innerHTML
    
    btn.onclick = () =>{
        
        fetch("https://breakingbadapi.com/api/quote/random")
        .then(response => response.json())
        .then(data => {
            const cards = document.querySelector('.quote-card')
            cards.innerHTML = `<h1>${btn.id}</h1> <h4>${btn.value}</h4> <p>${data[0].quote }</p>`
        })
        .catch(err => console.log('Request Failed', err));

       

    }
    return btn
}


signs.forEach(element => {
    let btnBody = document.createElement('button')
    btnBody.innerHTML= element.name
    btnBody.value=element.date

    btnBody.className='btnbtn btn btn-outline-dark my-btn-class'

    btnBody=btnClick(btnBody)
    signBtn.append(btnBody)
    
});

mainSection.appendChild(card)
mainSection.appendChild(signBtn)



