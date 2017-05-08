var state = {
	index: [{
		name: 'Question 1',
		question: "When George Harrison was asked to play Montery Pop Festival, what artist did he demand they add to festival's lineup before he would agree to play?",
		answers: ['A. Ravi Shankar', 'B. Jefferson Airplane', 'C. The Mammas and the Pappas', 'D. The Kinks', 'E. The Who' ],
		correct: 0
	},{
		name: 'Question 2',
		question: "What is Bob Dylans real name?",
		answers: ['A. Rober Zimmerman', 'B. Rober Dylan', 'C. Bobby Zimmerman', 'D. Bob Zimmerman', 'E. Robert Allen' ],
		correct: 0
	},{
		name: 'Question 3',
		question: "What did Tupac Shakur study while attending the Baltimore School for the Arts?",
		answers: ['A. Dance', 'B. Music', 'C. Theatre', 'D. Set Design', 'E. Audio Engineering' ],
		correct: 2
	},{
		name: 'Question 4',
		question: "The song \"Smoke on the Water\" was written about a fire that started at a show of which musical artist?",
		answers: ['A. Led Zepplin', 'B. ZZ Top', 'C. Frank Zappa', 'D. The Allman Brothers', 'E. Earth Wind and Fire' ],
		correct: 2
	},{
		name: 'Question 5',
		question: "Who is the highest selling female recording artist of all time?",
		answers: ['A. Diana Ross', 'B. Cher', 'C. Beyonce', 'D. Madonna', 'E. Aretha Franklin' ],
		correct: 3
	},{
		name: 'Question 6',
		question: "What was the name of the backing band the played on most of the Motown records between 1959 and 1972?",
		answers: ['A. The Funk Brothers', 'B. The OJs', 'C. The Supremes', 'D. Sly Brothers', 'E. Ace in the Hole' ],
		correct: 0
	},{
		name: 'Question 7',
		question: "Dave Matthews is the co-founder of which wine making company?",
		answers: ['A. Ravenswood', 'B. Kuleto Estate', 'C. Atalon', 'D. Dreaming Tree', 'E. Barefoot' ],
		correct: 3
	},{
		name: 'Question 8',
		question: "Paul Simon's song \"50 Ways to Leave Your Lover\" included which well known drummer on the recording?",
		answers: ['A. Buddy Rich', 'B. Steve Gadd', 'C. Elvin Jones', 'D. Lenny White', 'E. Neil Peart' ],
		correct: 1
	},{
		name: 'Question 9',
		question: "Jimi Hendrix's famous guitar that he lit on fire during a show was found in a closet of the home of which famous musician?",
		answers: ['A. Eddie Van Halen', 'B. Jimmy Page', 'C. Michael Jackson', 'D. Paul McCartney', 'E. Frank Zappa' ],
		correct: 4
	},{
		name: 'Question 10',
		question: "What is the greatest selling album of all time?",
		answers: ['A. The Beatles(Sgt Pepper)', 'B. Pink Floyd(The Wall)', 'C. Fleetwood Mac(Rumors)', 'D. Michael Jackson(Thriller)', 'E. Billy Joel(Greatest Hits Vol 1 and 2' ],
		correct: 3
	}
	]
};

var questionTemplate = {
    ('<h2>' + index.name + '</h2>' + '<p>' + index.question + '</p>');
}

var questionTemplate = 
    ('<h2>' + 'index.name' + '</h2>' + '<p>' + 'index.question' + '</p>');

var answerHead = ('<h2>' + 'Answers' + '</h2') (function addAnswers(state, index ) {
   for(var i=0; i<5; i++){
     return ('<li>' + state.questionIndex[index].answers[i] + '</li>');
	}
}); 
