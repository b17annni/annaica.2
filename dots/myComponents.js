class MyDotz extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            score: 0,
        }

        this.Rand = this.Rand.bind(this)
        this.changePosition = this.changePosition.bind(this)
        this.MoveMe = this.MoveMe.bind(this)
        this.ChangeColour = this.ChangeColour.bind(this)
        this.MyClickEvent = this.MyClickEvent.bind(this)
    }

    

    componentDidMount(){
        window.setInterval(this.MoveMe, 1000)
        switch(this.props.mySize) {
            case 1:
                console.log('one');
                const sectionOne = document.getElementById(this.props.myId)
                sectionOne.classList.add('big-dot')
                this.setState({score: 5})
                break;
            case 2:
                console.log('two');
                const sectionTwo = document.getElementById(this.props.myId)
                sectionTwo.classList.add('medium-dot')
                this.setState({score: 50})
                break;
            case 3:
                console.log('three');
                const sectionThree = document.getElementById(this.props.myId)
                sectionThree.classList.add('small-dot')
                this.setState({score: 100})
                break;
            default:
                console.log('something went wrong');
        }
        
    }

    Rand(multi){
        return parseInt(multi * Math.random(), 10)
        }

        ChangeColour(){
            return `rgba(
      ${this.Rand(255)},
      ${this.Rand(255)},
      ${this.Rand(255)},
      ${Math.random() + 0.5}
    )`

        }

        changePosition(MyDot){
            const ww = window.innerWidth
            const wh = window.innerHeight

            const walls = Math.min(ww, wh)

            const w = this.Rand(walls)

            const x = this.Rand ((ww - w))
            const y = this.Rand ((wh - w))


            MyDot.style.top = w + 'px'
            MyDot.style.bottom = w + 'px'
            MyDot.style.left = x + 'px'
            MyDot.style.right = y + 'px'

      }

      MoveMe() {
        const section = document.getElementById(this.props.myId)
        this.changePosition(section) 
        section.style.transition = (this.Rand(90) + 900 + 'ms')
       
      }

      MyClickEvent () {
          this.props.myScoreFunc(this.state.score)
          const section = document.getElementById(this.props.myId)
          section.style.backgroundColor = this.ChangeColour()
      }
    render (){
        
        return(
            <>
            <span id={this.props.myId} className='dots-span' onClick={()=>{this.MyClickEvent()}}>{this.state.score}p</span>
            </>
            )
        }
    }

        
