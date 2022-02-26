
var app = new Vue({
    el: '#app',
    data(){
        return {
            currentQuestion: 0,
            showScore: false,
            score:0,
            countDown : 30,
            timer:null,
            startQuiz: false,
            questions : [
        {
			questionText: 'I am the squirell whisperer ',
			answerOptions: [
				{ answerText: 'Gayle', isCorrect: false },
				{ answerText: 'Linda', isCorrect: false },
				{ answerText: 'Gene', isCorrect: true },
				{ answerText: 'Teddy', isCorrect: false },
			],
		},
		{
			questionText: 'Don`t leave me alone with the kids',
			answerOptions: [
				{ answerText: 'Linda', isCorrect: true },
				{ answerText: 'Bob', isCorrect: false },
				{ answerText: 'Gail', isCorrect: false },
				{ answerText: 'Teddy', isCorrect: false },
                
			
			],
		},
        {
			questionText: 'I bet dad would make a great dinner, you´re so plump',
			answerOptions: [
				{ answerText: 'Gene', isCorrect: false },
				{ answerText: 'Louise', isCorrect: false },
				{ answerText: 'Linda', isCorrect: false },
				{ answerText: 'Tina', isCorrect: true },
			],
		},
        {
			questionText: 'I feel like a teenager again except my breasts are more even 			',
			answerOptions: [
				{ answerText: 'Gene', isCorrect: false },
				{ answerText: 'Gail', isCorrect: true },
				{ answerText: 'Linda', isCorrect: false },
				{ answerText: 'Tina', isCorrect: false },
			],
		},
        {
			questionText: 'Here`s a bunch of numbers. They may look random, but they`re my phone number			',
			answerOptions: [
				{ answerText: 'Gene', isCorrect: false },
				{ answerText: 'Gail', isCorrect: false },
				{ answerText: 'Linda', isCorrect: false },
				{ answerText: 'Tina', isCorrect: true },
			],
		},
        {
			questionText: 'I`m just a little tired. Also, I might be a pimp',
			answerOptions: [
				{ answerText: 'Teddy', isCorrect: false },
				{ answerText: 'Bob', isCorrect: true },
				{ answerText: 'Linda', isCorrect: false },
				{ answerText: 'Mort', isCorrect: true },
			],
		},
        {
			questionText: 'I`ve eaten nine birthday cakes, and I still feel empty	',
			answerOptions: [
				{ answerText: 'Gene', isCorrect: true },
				{ answerText: 'Louise', isCorrect: false },
				{ answerText: 'Linda', isCorrect: false },
				{ answerText: 'Tina', isCorrect: false },
			],
		},
        {
			questionText: 'I don`t appreciate your lack of sarcasm	',
			answerOptions: [
				{ answerText: 'Gene', isCorrect: false },
				{ answerText: 'Louise', isCorrect: true },
				{ answerText: 'Linda', isCorrect: false },
				{ answerText: 'Tina', isCorrect: false },
			],
		},
        {
			questionText: 'It`s not dinner, and it isn`t theater either. It`s like the imitation cheese of theater	',
			answerOptions: [
				{ answerText: 'Gene', isCorrect: false },
				{ answerText: 'Gail', isCorrect: false },
				{ answerText: 'Linda', isCorrect: false },
				{ answerText: 'Tina', isCorrect: true },
			],
		},
        {
			questionText: 'Camera, take the day off! I added ten pounds to myself!	',
			answerOptions: [
				{ answerText: 'Gene', isCorrect: true },
				{ answerText: 'Gail', isCorrect: false },
				{ answerText: 'Linda', isCorrect: false },
				{ answerText: 'Tina', isCorrect: false },
			],
		},
        {
			questionText: 'I should write a parenting book. Call it, ‘Hey You, I Saw That! Put It Back!’',
			answerOptions: [
				{ answerText: 'Gene', isCorrect: false },
				{ answerText: 'Louise', isCorrect: false },
				{ answerText: 'Linda', isCorrect: true },
				{ answerText: 'Tina', isCorrect: false },
			
      ],
      },
        {
			questionText: 'I feel like my soul has diarrhea.',
			answerOptions: [
				{ answerText: 'Gene', isCorrect: false },
				{ answerText: 'Louise', isCorrect: false },
				{ answerText: 'Linda', isCorrect: false },
				{ answerText: 'Tina', isCorrect: true },
			],
		},
        {
			questionText: 'Kids are horrible. Why do we keep making them?',
			answerOptions: [
				{ answerText: 'Gene', isCorrect: false },
				{ answerText: 'Louise', isCorrect: false },
				{ answerText: 'Linda', isCorrect: false },
				{ answerText: 'Bob', isCorrect: true },
			],
		},
        {
			questionText: '‘Danger’ is my middle name. But I spell it R-U-T-H',
			answerOptions: [
				{ answerText: 'Tina', isCorrect: true },
				{ answerText: 'Louise', isCorrect: false },
				{ answerText: 'Linda', isCorrect: false },
				{ answerText: 'Bob', isCorrect: false },
			],
		},
    ],
    
        }
    },
    methods:{
        startQuizFunc(){
            this.startQuiz = true
            // this.countDownTimer()
        },
        handleAnswerClick(isCorrect){
            // clearTimeout(this.timer);
            let nextQuestion = this.currentQuestion + 1;
            if(isCorrect){
                this.score = this.score + 1;
            }
            if(nextQuestion < this.questions.length){
            this.currentQuestion = nextQuestion;
          
            // this.countDown = 30;
            // this.countDownTimer();
            }
            else{
                
                this.showScore = true;
         
            }
        },
        // countDownTimer() {
        //         if(this.countDown > 0) {
        //             this.timer = setTimeout(() => {
        //                 this.countDown -= 1
        //                 this.countDownTimer()
        //             }, 1000)
        //         }
        //         else{
        //             this.handleAnswerClick(false)
        //         }
        //     },
            restartQuiz(){
                this.showScore = false
                this.currentQuestion = 0
                this.score = 0
                
            }
    }
    
})