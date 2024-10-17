// External fill-in-the-blanks functions
const sentenceData = [
    { text: "Spiders are not ins", blank: "ects" },
    { text: ", as many people thi", blank: "nk" },
    { text: ", nor even nea", blank: "rly" },
    { text: ", related to them. One can tell the diff", blank: "erence" },
    { text: ", almost at a gla", blank: "nce" },
    { text: ", for a way spider always has ei", blank: "ght" },
    { text: " legs and an insect never more than s", blank: "ix" },
    { text: "." }
];

function generateSentence() {
    const sentenceElement = document.getElementById("sentence");
    sentenceElement.innerHTML = ''; // Clear existing content
    sentenceData.forEach((part, index) => {
        const span = document.createElement("span");
        span.textContent = part.text;
        sentenceElement.appendChild(span);

        if (part.blank) {
            const input = document.createElement("input");
            input.type = "text";
            input.className = "blank";
            input.id = `answer${index}`;
            input.setAttribute("data-correct", part.blank);

			// Placeholder with underscores
            const underScorePlaceHolder = "_ ".repeat(part.blank.length);
            input.placeholder = underScorePlaceHolder;

			// Dynamically set the width based on the number of underscores
			const underscoreCount = part.blank.length;
			input.style.width = `${underscoreCount * 15}px`; //Adjust the multiplier based on the desired width

			// Limit the input to the correct number of characters
			input.maxLength = underscoreCount;

			

			//Add event listener for focusing and moving cursor to the beginning
			input.addEventListener("focus", function(){
				this.setSelectionRange(0, 0) //Always place cursor at the beginning
				this.style.caretColor = "black"; //set the color of cursor
			})

			//Add event listener for handling character input
			input.addEventListener("input", function(){
				if(this.value.length >= underscoreCount){
					//Turn the field grey to show completion
					this.style.borderColor= "grey";

					//Once the input is done, can't type anymore
					this.disabled = true;
					
					// Move focus to the next blank
					const nextInput = document.querySelector(`#answer${index + 1}`);
					if (nextInput && !nextInput.disabled){
						nextInput.focus();
					}
				}
			});
			
			//Add event listener for handling left and right arrow key navigation
			input.addEventListener("keydown", function(e){
				if(e.key === "Enter"){
					e.preventDefault();
					const nextInput = document.querySelector(`#answer${index + 1}`);

					//if the nextInput is exsiting and not disabled, the focus move to the nextInput
					if(nextInput){
						nextInput.focus();
						nextInput.setSelectionRange(0, 0); //Place the cursor at the beginning
					} else if (index === sentenceData.length - 1){
						//if this is the last one and all charactors are typed and submitted, check answers
						checkAnswers();
					}
				} else if (e.key === " ") {
                    // prevent spacebar being able to input anything
                    e.preventDefault();

				}else if(e.key === "ArrowRight"){
					//Move to the next input
					const nextInput = document.querySelector(`#answer${index + 1}`);
					if(nextInput){
						nextInput.focus();
						nextInput.setSelectionRange(0, 0); //Place the cursor at the beginning
					}
				}else if (e.key === "ArrowLeft"){
					//Move to the previous input
					const prevInput = document.querySelector(`#answer${index - 1}`);
					if(prevInput){
						prevInput.focus();
						prevInput.setSelectionRange(0, 0); //Place the cursor at the beginning
					}
				}
				
			})

			//Add the input to the sentence element
            sentenceElement.appendChild(input);
        }
    });

	//Automatically focus on the first input box after the page loads
	window.onload = function() {
        setTimeout(function() {
            const firstInput = document.querySelector('#answer0');
            if (firstInput) {
                firstInput.focus(); //Set focus to the first input
                firstInput.setSelectionRange(0, 0); //Set the cursor to the beginning
            }
        }, 100); //Delay 100ms to execute
    };
}

function checkAnswers() {
    let allCorrect = true;
    document.querySelectorAll(".blank").forEach(input => {
        const userAnswer = input.value.trim().toLowerCase();
        const correctAnswer = input.getAttribute("data-correct").toLowerCase();
        if (userAnswer !== correctAnswer) {
            allCorrect = false;
        }
    });
    const resultElement = document.getElementById("result");
    if (allCorrect) {
        resultElement.textContent = "Correct!";
        resultElement.style.color = "green";
    } else {
        resultElement.textContent = "Incorrect. Try again!";
        resultElement.style.color = "red";
    }
}

/** Responsive Navbar **/
function myFunction() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}

/** Smooth Scrolling**/
$(document).on("click", 'a[href^="#"]', function (event) {
	event.preventDefault();
	$("html, body").animate(
		{
			scrollTop: $($.attr(this, "href")).offset().top,
		},
		500
	);
});

/** Main Diagnostic Quiz Function **/

(function () {
	var questions = [
		{
            qType: "External Fill in the Blanks",
            question: "Complete the sentence with the correct words.",
            isExternal: true
        },
		
		{
			//
			//1
			//A-G -- 7 questions // F) ects
			//Entire Quiz on GDocs --
			//first text, "spare that spider"
			qType: "Read and Complete (1st Passage)",
			question: "Choose the answer with the correct missing letters to complete the numbered text.",
			choices: ["A) nk", "B) nce", "C) ix", "D) ght", "E) erence", "F) ects", "G) rly"],
			correctAnswer: 5,
			image: "img/det1_q1.png",
		},
		//
		{
			//
			//2
			//A) nk
			qType: "Read and Complete (1st Passage)",
			question: "Choose the answer with the correct missing letters to complete the numbered text.",
			choices: ["A) nk", "B) nce", "C) ix", "D) ght", "E) erence", "F) ects", "G) rly"],
			correctAnswer: 0,
			image: "img/det1_q2.png",
		},
		//
		{
			//3
			//
			//G) rly
			qType: "Read and Complete (1st Passage)",
			question: "Choose the answer with the correct missing letters to complete the numbered text.",
			choices: ["A) nk", "B) nce", "C) ix", "D) ght", "E) erence", "F) ects", "G) rly"],
			correctAnswer: 6,
			image: "img/det1_q3.png"
		},

		{
			//4
			//
			//
			//E) erence
			qType: "Read and Complete (1st Passage)",
			question: "Choose the answer with the correct missing letters to complete the numbered text.",
			choices: ["A) nk", "B) nce", "C) ix", "D) ght", "E) erence", "F) ects", "G) rly"],
			correctAnswer: 4,
			image: "img/det1_q4.png",
		},

		{
			//5
			//b)nce
			qType: "Read and Complete (1st Passage)",
			question: "Choose the answer with the correct missing letters to complete the numbered text.",
			choices: ["A) nk", "B) nce", "C) ix", "D) ght", "E) erence", "F) ects", "G) rly"],
			correctAnswer: 1,
			image: "img/det1_q5.png",
		},

		{
			//6
			//d)ght
			qType: "Read and Complete (1st Passage)",
			question: "Choose the answer with the correct missing letters to complete the numbered text.",
			choices: ["A) nk", "B) nce", "C) ix", "D) ght", "E) erence", "F) ects", "G) rly"],
			correctAnswer: 3,
			image: "img/det1_q6.png",
		},
		//
		{
			//7
			//c)ix
			qType: "Read and Complete (1st Passage)",
			question: "Choose the answer with the correct missing letters to complete the numbered text.",
			choices: ["A) nk", "B) nce", "C) ix", "D) ght", "E) erence", "F) ects", "G) rly"],
			correctAnswer: 2,
			image: "img/det1_q7.png",
		},
		//
		{
			//8
			// G)lthy
			//2nd text "a very dear cat"
			qType: "Read and Complete (2nd Passage)",
			question: "Choose the answer with the correct missing letters to complete the numbered text.",
			choices: ["A) any", "B) led", "C) rt", "D) lock", "E) red", "F) erly", "G) lthy", "H) ried", "I) rywhere"],
			correctAnswer: 6,
			image: "img/det1_q8.png",
		},
		//
		{
			//

			//9

			//e)red
			qType: "Read and Complete (2nd Passage)",
			question: "Choose the answer with the correct missing letters to complete the numbered text.",
			choices: ["A) any", "B) led", "C) rt", "D) lock", "E) red", "F) erly", "G) lthy", "H) ried", "I) rywhere"],
			correctAnswer: 4,
			image: "img/det1_q9.png",
		},

		{
			//10
			//a)any
			qType: "Read and Complete (2nd Passage)",
			question: "Choose the answer with the correct missing letters to complete the numbered text.",
			choices: ["A) any", "B) led", "C) rt", "D) lock", "E) red", "F) erly", "G) lthy", "H) ried", "I) rywhere"],
			correctAnswer: 0,
			image: "img/det1_q10.png",
		},
		{
			//11
			//f)erly
			qType: "Read and Complete (2nd Passage)",
			question: "Choose the answer with the correct missing letters to complete the numbered text.",
			choices: ["A) any", "B) led", "C) rt", "D) lock", "E) red", "F) erly", "G) lthy", "H) ried", "I) rywhere"],
			correctAnswer: 5,
			image: "img/det1_q11.png"
		},

		{
			//12
			//c)rt
			qType: "Read and Complete (2nd Passage)",
			question: "Choose the answer with the correct missing letters to complete the numbered text.",
			choices: ["A) any", "B) led", "C) rt", "D) lock", "E) red", "F) erly", "G) lthy", "H) ried", "I) rywhere"],
			correctAnswer: 2,
			image: "img/det1_q12.png"
		},
		{
			//13
			//d)lock 3
			qType: "Read and Complete (2nd Passage)",
			question: "Choose the answer with the correct missing letters to complete the numbered text.",
			choices: ["A) any", "B) led", "C) rt", "D) lock", "E) red", "F) erly", "G) lthy", "H) ried", "I) rywhere"],
			correctAnswer: 3,
			image: "img/det1_q13.png"
		},
		{
			//14
			//b)led 1
			qType: "Read and Complete (2nd Passage)",
			question: "Choose the answer with the correct missing letters to complete the numbered text.",
			choices: ["A) any", "B) led", "C) rt", "D) lock", "E) red", "F) erly", "G) lthy", "H) ried", "I) rywhere"],
			correctAnswer: 1,
			image: "img/det1_q14.png"
		},
		{
			//15
			//h) ried 7
			qType: "Read and Complete (2nd Passage)",
			question: "Choose the answer with the correct missing letters to complete the numbered text.",
			choices: ["A) any", "B) led", "C) rt", "D) lock", "E) red", "F) erly", "G) lthy", "H) ried", "I) rywhere"],
			correctAnswer: 7,
			image: "img/det1_q15.png"
		},

		{
			//16
			//
			qType: "Read and Complete (2nd Passage)",
			question: "Choose the answer with the correct missing letters to complete the numbered text.",
			choices: ["A) any", "B) led", "C) rt", "D) lock", "E) red", "F) erly", "G) lthy", "H) ried", "I) rywhere"],
			correctAnswer: 8,
			image: "img/det1_q16.png"
		},
		{
			//17
			//3rd text "the double life of alfred boggs"
			//f)arrassed
			qType: "Read and Complete (3rd Passage)",
			question: "Choose the answer with the correct missing letters to complete the numbered text.",
			choices: ["A) ack", "B) ply", "C) fe", "D) ssed", "E) rked", "F) arrassed", "G) cret", "H) low", "I) ears"],
			correctAnswer: 5,
			image: "img/det1_q17.png",
		},
		{
			//18
			//C)fe
			qType: "Read and Complete (3rd Passage)",
			question: "Choose the answer with the correct missing letters to complete the numbered text.",
			choices: ["A) ack", "B) ply", "C) fe", "D) ssed", "E) rked", "F) arrassed", "G) cret", "H) low", "I) ears"],
			correctAnswer: 2,
			image: "img/det1_q18.png"
		},
		{
			//19
			//B)ply
			qType: "Read and Complete (3rd Passage)",
			question: "Choose the answer with the correct missing letters to complete the numbered text.",
			choices: ["A) ack", "B) ply", "C) fe", "D) ssed", "E) rked", "F) arrassed", "G) cret", "H) low", "I) ears"],
			correctAnswer: 1,
			image: "img/det1_q19.png"
		},
		{
			//20
			//e)rked
			qType: "Read and Complete (3rd Passage)",
			question: "Choose the answer with the correct missing letters to complete the numbered text.",
			choices: ["A) ack", "B) ply", "C) fe", "D) ssed", "E) rked", "F) arrassed", "G) cret", "H) low", "I) ears"],
			correctAnswer: 4,
			image: "img/det1_q20.png",
		},
		{
			//21
			//d)ssed
			qType: "Read and Complete (3rd Passage)",
			question: "Choose the answer with the correct missing letters to complete the numbered text.",
			choices: ["A) ack", "B) ply", "C) fe", "D) ssed", "E) rked", "F) arrassed", "G) cret", "H) low", "I) ears"],
			correctAnswer: 3,
			image: "img/det1_q21.png",
		},
		{
			//22
			//a)ack
			qType: "Read and Complete (3rd Passage)",
			question: "Choose the answer with the correct missing letters to complete the numbered text.",
			choices: ["A) ack", "B) ply", "C) fe", "D) ssed", "E) rked", "F) arrassed", "G) cret", "H) low", "I) ears"],
			correctAnswer: 0,
			image: "img/det1_q22.png"
		},
		{
			//23
			//i)ears
			qType: "Read and Complete (3rd Passage)",
			question: "Choose the answer with the correct missing letters to complete the numbered text.",
			choices: ["A) ack", "B) ply", "C) fe", "D) ssed", "E) rked", "F) arrassed", "G) cret", "H) low", "I) ears"],
			correctAnswer: 8,
			image: "img/det1_q23.png",
		},
		{
			//24
			//h)low
			qType: "Read and Complete (3rd Passage)",
			question: "Choose the answer with the correct missing letters to complete the numbered text.",
			choices: ["A) ack", "B) ply", "C) fe", "D) ssed", "E) rked", "F) arrassed", "G) cret", "H) low", "I) ears"],
			correctAnswer: 7,
			image: "img/det1_q24.png"
		},
		{
			//25
			//g)cret
			qType: "Read and Complete (3rd Passage)",
			question: "Choose the answer with the correct missing letters to complete the numbered text.",
			choices: ["A) ack", "B) ply", "C) fe", "D) ssed", "E) rked", "F) arrassed", "G) cret", "H) low", "I) ears"],
			correctAnswer: 6,
			image: "img/det1_q25.png"
		},
		{
			//26
			//text 4 - "sixpence worth"
			//g) eciate 6
			qType: "Read and Complete (4th Passage)",
			question: "Choose the answer with the correct missing letters to complete the numbered text.",
			choices: ["A) nts", "B) ice", "C) ular", "D) les", "E) ide", "F) come", "G) eciate", "H) ng", "I) ill", "J) rifty", "K) hanged", "L) colate"],
			correctAnswer: 6,
			image: "img/det1_q26.png"
		},
		{
			//27
			//c) ular 2
			qType: "Read and Complete (4th Passage)",
			question: "Choose the answer with the correct missing letters to complete the numbered text.",
			choices: ["A) nts", "B) ice", "C) ular", "D) les", "E) ide", "F) come", "G) eciate", "H) ng", "I) ill", "J) rifty", "K) hanged", "L) colate"],
			correctAnswer: 2,
			image: "img/det1_q27.png",
		},
		{
			//28

			// d) les 3
			qType: "Read and Complete (4th Passage)",
			question: "Choose the answer with the correct missing letters to complete the numbered text.",
			choices: ["A) nts", "B) ice", "C) ular", "D) les", "E) ide", "F) come", "G) eciate", "H) ng", "I) ill", "J) rifty", "K) hanged", "L) colate"],
			correctAnswer: 3,
			image: "img/det1_q28.png",
		},
		{
			//29

			// a) nts 0
			qType: "Read and Complete (4th Passage)",
			question: "Choose the answer with the correct missing letters to complete the numbered text.",
			choices: ["A) nts", "B) ice", "C) ular", "D) les", "E) ide", "F) come", "G) eciate", "H) ng", "I) ill", "J) rifty", "K) hanged", "L) colate"],
			correctAnswer: 0,
			image: "img/det1_q29.png",
		},
		{
			//30

			// f) come 5
			qType: "Read and Complete (4th Passage)",
			question: "Choose the answer with the correct missing letters to complete the numbered text.",
			choices: ["A) nts", "B) ice", "C) ular", "D) les", "E) ide", "F) come", "G) eciate", "H) ng", "I) ill", "J) rifty", "K) hanged", "L) colate"],
			correctAnswer: 5,
			image: "img/det1_q30.png",
		},
		{
			//31
			// h) ng  7
			qType: "Read and Complete (4th Passage)",
			question: "Choose the answer with the correct missing letters to complete the numbered text.",
			choices: ["A) nts", "B) ice", "C) ular", "D) les", "E) ide", "F) come", "G) eciate", "H) ng", "I) ill", "J) rifty", "K) hanged", "L) colate"],
			correctAnswer: 7,
			image: "img/det1_q31.png",
		},
		{
			//32
			// k) hanged 10
			qType: "Read and Complete (4th Passage)",
			question: "Choose the answer with the correct missing letters to complete the numbered text.",
			choices: ["A) nts", "B) ice", "C) ular", "D) les", "E) ide", "F) come", "G) eciate", "H) ng", "I) ill", "J) rifty", "K) hanged", "L) colate"],
			correctAnswer: 10,
			image: "img/det1_q32.png",
		},

		{
			//33
			//  e) ide
			qType: "Read and Complete (4th Passage)",
			question: "Choose the answer with the correct missing letters to complete the numbered text.",
			choices: ["A) nts", "B) ice", "C) ular", "D) les", "E) ide", "F) come", "G) eciate", "H) ng", "I) ill", "J) rifty", "K) hanged", "L) colate"],
			correctAnswer: 4,
			image: "img/det1_q33.png",
		},

		{
			//34

			//   J) rifty 9
			qType: "Read and Complete (4th Passage)",
			question: "Choose the answer with the correct missing letters to complete the numbered text.",
			choices: ["A) nts", "B) ice", "C) ular", "D) les", "E) ide", "F) come", "G) eciate", "H) ng", "I) ill", "J) rifty", "K) hanged", "L) colate"],
			correctAnswer: 9,
			image: "img/det1_q34.png",
		},
		{
			//35
			// i)ill 8
			qType: "Read and Complete (4th Passage)",
			question: "Choose the answer with the correct missing letters to complete the numbered text.",
			choices: ["A) nts", "B) ice", "C) ular", "D) les", "E) ide", "F) come", "G) eciate", "H) ng", "I) ill", "J) rifty", "K) hanged", "L) colate"],
			correctAnswer: 8,
			image: "img/det1_q35.png",
		},
		{
			//36
			// b) ice 1
			qType: "Read and Complete (4th Passage)",
			question: "Choose the answer with the correct missing letters to complete the numbered text.",
			choices: ["A) nts", "B) ice", "C) ular", "D) les", "E) ide", "F) come", "G) eciate", "H) ng", "I) ill", "J) rifty", "K) hanged", "L) colate"],
			correctAnswer: 1,
			image: "img/det1_q36.png",
		},
		{
			//37
			// L) colate 11
			qType: "Read and Complete (4th Passage)",
			question: "Choose the answer with the correct missing letters to complete the numbered text.",
			choices: ["A) nts", "B) ice", "C) ular", "D) les", "E) ide", "F) come", "G) eciate", "H) ng", "I) ill", "J) rifty", "K) hanged", "L) colate"],
			correctAnswer: 11,
			image: "img/det1_q37.png",
		},
		{
			//38
			//text 5 a puma at large (hard)
			// e) mals 4
			qType: "Read and Complete (5th Passage)",
			question: "Choose the answer with the correct missing letters to complete the numbered text.",
			choices: ["A) ld", "B) iged", "C) ence", "D) umulate", "E) mals", "F) tted", "G) aordinarily", "H) med", "I) ken", "J) les"],
			correctAnswer: 4,
			image: "img/det1_q38.png",
		},
		{
			//39
			//a ld 0
			qType: "Read and Complete (5th Passage)",
			question: "Choose the answer with the correct missing letters to complete the numbered text.",
			choices: ["A) ld", "B) iged", "C) ence", "D) umulate", "E) mals", "F) tted", "G) aordinarily", "H) med", "I) ken", "J) les"],
			correctAnswer: 0,
			image: "img/det1_q39.png",
		},
		{
			//40
			// f)tted 5
			qType: "Read and Complete (5th Passage)",
			question: "Choose the answer with the correct missing letters to complete the numbered text.",
			choices: ["A) ld", "B) iged", "C) ence", "D) umulate", "E) mals", "F) tted", "G) aordinarily", "H) med", "I) ken", "J) les"],
			correctAnswer: 5,
			image: "img/det1_q40.png",
		},
		{
			//41
			// j)les 9
			qType: "Read and Complete (5th Passage)",
			question: "Choose the answer with the correct missing letters to complete the numbered text.",
			choices: ["A) ld", "B) iged", "C) ence", "D) umulate", "E) mals", "F) tted", "G) aordinarily", "H) med", "I) ken", "J) les"],
			correctAnswer: 9,
			image: "img/det1_q41.png",
		},

		{
			//42
			// i)ken 8
			qType: "Read and Complete (5th Passage)",
			question: "Choose the answer with the correct missing letters to complete the numbered text.",
			choices: ["A) ld", "B) iged", "C) ence", "D) umulate", "E) mals", "F) tted", "G) aordinarily", "H) med", "I) ken", "J) les"],
			correctAnswer: 8,
			image: "img/det1_q42.png",
		},

		{
			//43
			//c) ence 2
			qType: "Read and Complete (5th Passage)",
			question: "Choose the answer with the correct missing letters to complete the numbered text.",
			choices: ["A) ld", "B) iged", "C) ence", "D) umulate", "E) mals", "F) tted", "G) aordinarily", "H) med", "I) ken", "J) les"],
			correctAnswer: 2,
			image: "img/det1_q43.png",
		},

		{
			//44
			//d)umulate 3
			qType: "Read and Complete (5th Passage)",
			question: "Choose the answer with the correct missing letters to complete the numbered text.",
			choices: ["A) ld", "B) iged", "C) ence", "D) umulate", "E) mals", "F) tted", "G) aordinarily", "H) med", "I) ken", "J) les"],
			correctAnswer: 3,
			image: "img/det1_q44.png",
		},

		{
			//45
			//b)iged 1
			qType: "Read and Complete (5th Passage)",
			question: "Choose the answer with the correct missing letters to complete the numbered text.",
			choices: ["A) ld", "B) iged", "C) ence", "D) umulate", "E) mals", "F) tted", "G) aordinarily", "H) med", "I) ken", "J) les"],
			correctAnswer: 1,
			image: "img/det1_q45.png",
		},

		{
			//46
			// h) med 7
			qType: "Read and Complete (5th Passage)",
			question: "Choose the answer with the correct missing letters to complete the numbered text.",
			choices: ["A) ld", "B) iged", "C) ence", "D) umulate", "E) mals", "F) tted", "G) aordinarily", "H) med", "I) ken", "J) les"],
			correctAnswer: 7,
			image: "img/det1_q46.png",
		},

		{
			//47
			//g)  aordinarily 6
			qType: "Read and Complete (5th Passage)",
			question: "Choose the answer with the correct missing letters to complete the numbered text.",
			choices: ["A) ld", "B) iged", "C) ence", "D) umulate", "E) mals", "F) tted", "G) aordinarily", "H) med", "I) ken", "J) les"],
			correctAnswer: 6,
			image: "img/det1_q47.png",
		},

		{
			//48
			//g)els 6
			//text 6 hard - a skeleton in the cupboard
			qType: "Read and Complete (6th Passage)",
			question: "Choose the answer with the correct missing letters to complete the numbered text.",
			choices: ["A) ealed", "B) soned", "C) ways", "D) ine", "E) rible", "F) nal", "G) els", "H) esses", "I) matic", "J) ation", "K) tation"],
			correctAnswer: 6,
			image: "img/det1_q48.png",
		},

		{
			//49
			//e)rible 4
			qType: "Read and Complete (6th Passage)",
			question: "Choose the answer with the correct missing letters to complete the numbered text.",
			choices: ["A) ealed", "B) soned", "C) ways", "D) ine", "E) rible", "F) nal", "G) els", "H) esses", "I) matic", "J) ation", "K) tation"],
			correctAnswer: 4,
			image: "img/det1_q49.png",
		},

		{
			//50
			//a)ealed 0
			qType: "Read and Complete (6th Passage)",
			question: "Choose the answer with the correct missing letters to complete the numbered text.",
			choices: ["A) ealed", "B) soned", "C) ways", "D) ine", "E) rible", "F) nal", "G) els", "H) esses", "I) matic", "J) ation", "K) tation"],
			correctAnswer: 0,
			image: "img/det1_q50.png",
		},

		{
			//51
			//h)esses 7
			qType: "Read and Complete (6th Passage)",
			question: "Choose the answer with the correct missing letters to complete the numbered text.",
			choices: ["A) ealed", "B) soned", "C) ways", "D) ine", "E) rible", "F) nal", "G) els", "H) esses", "I) matic", "J) ation", "K) tation"],
			correctAnswer: 7,
			image: "img/det1_q51.png",
		},

		{
			//52
			//j)ation 9
			qType: "Read and Complete (6th Passage)",
			question: "Choose the answer with the correct missing letters to complete the numbered text.",
			choices: ["A) ealed", "B) soned", "C) ways", "D) ine", "E) rible", "F) nal", "G) els", "H) esses", "I) matic", "J) ation", "K) tation"],
			correctAnswer: 9,
			image: "img/det1_q52.png",
		},

		{
			//53
			//i)matic 8
			qType: "Read and Complete (6th Passage)",
			question: "Choose the answer with the correct missing letters to complete the numbered text.",
			choices: ["A) ealed", "B) soned", "C) ways", "D) ine", "E) rible", "F) nal", "G) els", "H) esses", "I) matic", "J) ation", "K) tation"],
			correctAnswer: 8,
			image: "img/det1_q53.png",
		},

		{
			//54
			//k)tation   10
			qType: "Read and Complete (6th Passage)",
			question: "Choose the answer with the correct missing letters to complete the numbered text.",
			choices: ["A) ealed", "B) soned", "C) ways", "D) ine", "E) rible", "F) nal", "G) els", "H) esses", "I) matic", "J) ation", "K) tation"],
			correctAnswer: 10,
			image: "img/det1_q54.png",
		},
		{
			//55
			//f)nal 5
			qType: "Read and Complete (6th Passage)",
			question: "Choose the answer with the correct missing letters to complete the numbered text.",
			choices: ["A) ealed", "B) soned", "C) ways", "D) ine", "E) rible", "F) nal", "G) els", "H) esses", "I) matic", "J) ation", "K) tation"],
			correctAnswer: 5,
			image: "img/det1_q55.png",
		},		{
					//56
					//d)ine 3
					qType: "Read and Complete (6th Passage)",
					question: "Choose the answer with the correct missing letters to complete the numbered text.",
					choices: ["A) ealed", "B) soned", "C) ways", "D) ine", "E) rible", "F) nal", "G) els", "H) esses", "I) matic", "J) ation", "K) tation"],
					correctAnswer: 3,
					image: "img/det1_q56.png",
				},		{
							//57
							//c)ways 2
							qType: "Read and Complete (6th Passage)",
							question: "Choose the answer with the correct missing letters to complete the numbered text.",
							choices: ["A) ealed", "B) soned", "C) ways", "D) ine", "E) rible", "F) nal", "G) els", "H) esses", "I) matic", "J) ation", "K) tation"],
							correctAnswer: 2,
							image: "img/det1_q57.png",
						},		{
									//58
									//b)soned 1
									qType: "Read and Complete (6th Passage)",
									question: "Choose the answer with the correct missing letters to complete the numbered text.",
									choices: ["A) ealed", "B) soned", "C) ways", "D) ine", "E) rible", "F) nal", "G) els", "H) esses", "I) matic", "J) ation", "K) tation"],
									correctAnswer: 1,
									image: "img/det1_q58.png",
								},
								{
										//59 // 7 on GDoc test
										//
										qType: "Fill in the Blanks",
										question: "Complete the sentence with the correct word.",
										choices: ["A","B"],
										correctAnswer: 1,
										image: "img/det1_q59.png",
									},
	];
	var questionCounter = 0; //Tracks question number
	var selections = []; //Array containing user choices
	var quiz = $("#quiz"); //Quiz div object
	var defaultQuestionContent;
	defaultQuestionContent = $("#content").text();

	// Display initial question
	displayNext();

	// Click handler for the 'next' button
	$("#next").on("click", function (e) {
		e.preventDefault();

		// Suspend click listener during fade animation
		if (quiz.is(":animated")) {
			return false;
		}

		if (questions[questionCounter].isExternal){
			//Check if all inputs are filled
			var allFilled = true;
			$(".blank").each(function() {
				if($(this).val().trim() === ""){
					allFilled = false;
					return false;
				}
			});
			if (!allFilled){
				swal("Please fill in all blanks.", "Complete the sentence.", "warning");
				return;
			}
			checkAnswers();
		} else {
			choose();
			//If no user selection, progress stopped and pop-up alert
			if(isNaN(selections[questionCounter])){
				swal("Please make a selection.", "Choose the best options.", "warning");
				return;
			}
		}
		
		questionCounter++;
		displayNext();
	});

	// Click handler for the 'prev' button
	$("#prev").on("click", function (e) {
		e.preventDefault();

		if (quiz.is(":animated")) {
			return false;
		}
		choose();
		questionCounter--;
		displayNext();
	});

	// Click handler for the 'Start Over' button
	$("#start").on("click", function (e) {
		e.preventDefault();

		if (quiz.is(":animated")) {
			return false;
		}
		questionCounter = 0;
		selections = [];
		displayNext();
		$("#start").hide();
	});

	// Animates buttons on hover
	$(".button").on("mouseenter", function () {
		$(this).addClass("active");
	});
	$(".button").on("mouseleave", function () {
		$(this).removeClass("active");
	});

	// Creates and returns the div that contains the questions and
	// the answer selections
	function createQuestionElement(index) {
		var qElement = $("<div>", {
			id: "question",
		});

		var header = $("<h2>Question " + (index + 1) + ":</h2><style>margin-top: 0px;</style>");
		qElement.append(header);

		var textProblem = $("<p>").append(questions[index].textProblem);
		qElement.append(textProblem);

		var question = $("<p>").append(questions[index].question);
		qElement.append(question);
		
		if(questions[index].isExternal){
			//For external questions, include the HTML directly
			var externalHTML = `
				<div class="quiz-container">
					<div class="sentence" id="sentence"></div>
					<div class="result" id="result"></div>
				</div>
				`;
				qElement.append(externalHTML);
		} else {
			var radioButtons = createRadios(index);
			qElement.append(radioButtons);
		}
		return qElement;
	}

	// Creates a list of the answer choices as radio inputs
	function createRadios(index) {
		var radioList = $("<ul>");
		var item;
		var input = "";
		for (var i = 0; i < questions[index].choices.length; i++) {
			item = $("<li>");
			input = '<label><input type="radio" name="answer" value=' + i + " />";
			input += questions[index].choices[i];
			input += "</label>";
			item.append(input);
			radioList.append(item);
		}
		return radioList;
	}

	// Reads the user selection and pushes the value to an array
	function choose() {
		selections[questionCounter] = +$('input[name="answer"]:checked').val();
	}

	// Displays next requested element
	function displayNext() {
		quiz.fadeOut(function () {
			$("#question").remove();

			if (questionCounter < questions.length) {
				var question = questions[questionCounter];

				// Show 'image' defined in question object

				if (typeof question.image !== "undefined") {
					$("#image img").attr("src", question.image);
					$("#image").show();
				} else {
					$("#image").hide();
				}

				if (typeof question.audio !== "undefined") {
					$("#audio").show();
					$("#audio audio").attr("src", "audio/" + question.audio);
					//$("#audio audio")[0].play();
				} else {
					$("#audio").hide();
					$("#audio audio").stop();
				}

				// Show 'content' defined in question object
				console.log(typeof question.content, defaultQuestionContent);
				if (typeof question.content === "undefined") {
					$("#content").text(defaultQuestionContent);
				} else {
					$("#content").text(question.content);
				}

				// Show 'qType' defined in question object
				console.log(typeof question.qType, defaultQuestionContent);
				if (typeof question.qType === "undefined") {
					$("#qType").text(defaultQuestionContent);
				} else {
					$("#qType").text(question.qType);
				}

				var nextQuestion = createQuestionElement(questionCounter);
				quiz.append(nextQuestion).fadeIn();

				if(question.isExternal){
					generateSentence();

				} else if (!isNaN(selections[questionCounter])) {
					$("input[value=" + selections[questionCounter] + "]").prop(
						"checked",
						true
					);
				}

				// Controls display of 'prev' button
				if (questionCounter === 1) {
					$("#prev").show();
				} else if (questionCounter === 0) {
					$("#prev").hide();
					$("#next").show();
				}
			} else {
				var scoreElem = displayScore();
				quiz.append(scoreElem).fadeIn();
				$("#next").hide();
				$("#prev").hide();
				$("#start").show();
			}
		});
	}

	// Computes score and returns a paragraph element to be displayed
	function displayScore() {
		var score = $("<p>", {
			id: "question",
		});

		var numCorrect = 0;
		for (var i = 0; i < selections.length; i++) {
			if (questions[i].isExternal){
				//For external question, we consider it correct if the result is "Correct!"
				if($("#result").text() === "Correct!") {
					numCorrect++;
				}
			} else if (selections[i] === questions[i].correctAnswer) {
				numCorrect++;
			}
		}

		score.append(
			"You got " +
				numCorrect +
				" questions out of " +
				questions.length +
				" right."
		);
		return score;
	}
})();