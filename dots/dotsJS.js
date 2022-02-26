// 'use strict';

class MainDotsBody extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        userScore: 0,
        highScore: 0,
        status: 0,
        myCount: 30,
        timer: 0,
    }
    this.MyScore = this.MyScore.bind(this)
    this.Start = this.Start.bind(this)
    this.MyTimer = this.MyTimer.bind(this)
    this.PlayAgain = this.PlayAgain.bind(this)
}

componentDidMount () {
 

}

Start () {
  this.setState({status: 1})
  // window.setInterval(this.MyTimer, 1000)
  this.MyTimer()
}

MyTimer () {
  if(this.state.myCount >= 0){
    this.timer = setTimeout(() => {
                   this.setState({myCount: this.state.myCount -= 1})
                   console.log(this.state.myCount)
    this.MyTimer()
               }, 1000)

 }else{
   this.setState({status: 2})
   this.setState({ highScore: this.state.highScore < this.state.userScore ? this.state.userScore : this.state.highScore }) 
 }

}
  
MyScore(x) {
  this.setState({userScore: this.state.userScore + x});
  console.log('hhhhh');
}

PlayAgain () {
  this.setState({status: 0, myCount: 30, userScore: 0})
}
render() {

  return(
    <>
    <MyHeader />
    <section className="dots-body">

       <section id="startPage" style={{display: this.state.status === 0 ? 'block' : 'none'}}>
         <input className="button-36" type="button" value="Start" onClick={()=>{this.Start()}}  />
      </section>
      <section id="gamePage" style={{display: this.state.status === 1 ? 'block' : 'none'}}>
        {this.state.myCount}
        <MyDotz myId="0" myScoreFunc={this.MyScore} mySize={1}/>
        <MyDotz myId="1" myScoreFunc={this.MyScore} mySize={1}/>
        <MyDotz myId="2" myScoreFunc={this.MyScore} mySize={1}/>
        <MyDotz myId="3" myScoreFunc={this.MyScore} mySize={2}/>
        <MyDotz myId="4" myScoreFunc={this.MyScore} mySize={2}/>
        <MyDotz myId="5" myScoreFunc={this.MyScore} mySize={3}/>
      </section>

    <section id="endPage" style={{display: this.state.status === 2 ? 'block' : 'none'}}>

  
  <h3>Highscore: {this.state.highScore}</h3>
  <h3>{this.state.userScore >= this.state.highScore ? 'Congrats! you have the highscore: ' : 'Your Score: '}
  {this.state.userScore}</h3>

  <input className="button-36" type="button" value="PLay Again?" onClick={()=>{this.PlayAgain()}} />
    </section>
    </section>
    </>
  )
}
}





