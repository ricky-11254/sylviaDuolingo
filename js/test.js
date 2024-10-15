(function () {
    var questions = [
        {
            qType: "External Fill in the Blanks",
            question: "Complete the sentence with the correct words.",
            isExternal: true
        },
        // ... (rest of the questions remain the same)
    ];
    var questionCounter = 0;
    var selections = [];
    var quiz = $("#quiz");
    var defaultQuestionContent;
    defaultQuestionContent = $("#content").text();

    // Display initial question
    displayNext();

    // Click handler for the 'next' button
    $("#next").on("click", function (e) {
        e.preventDefault();

        if (quiz.is(":animated")) {
            return false;
        }

        if (questions[questionCounter].isExternal) {
            // For external question, we'll check if all inputs are filled
            var allFilled = true;
            $(".blank").each(function() {
                if ($(this).val().trim() === "") {
                    allFilled = false;
                    return false;
                }
            });
            if (!allFilled) {
                swal("Please fill in all blanks.", "Complete the sentence.", "warning");
                return;
            }
            // Trigger the external check function
            checkAnswers();
        } else {
            choose();
            if (isNaN(selections[questionCounter])) {
                swal("Please make a selection.", "Choose the best option.", "warning");
                return;
            }
        }

        questionCounter++;
        displayNext();
    });

    // ... (rest of the event handlers remain the same)

    function createQuestionElement(index) {
        var qElement = $("<div>", {
            id: "question",
        });

        var header = $("<h2>Question " + (index + 1) + ":</h2>");
        qElement.append(header);

        var question = $("<p>").append(questions[index].question);
        qElement.append(question);

        if (questions[index].isExternal) {
            // For external question, we'll include the HTML directly
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

    // ... (rest of the functions remain the same)

    function displayNext() {
        quiz.fadeOut(function () {
            $("#question").remove();

            if (questionCounter < questions.length) {
                var question = questions[questionCounter];

                // ... (image and audio handling remain the same)

                var nextQuestion = createQuestionElement(questionCounter);
                quiz.append(nextQuestion).fadeIn();

                if (question.isExternal) {
                    // Call the external function to generate the sentence
                    generateSentence();
                } else if (!isNaN(selections[questionCounter])) {
                    $("input[value=" + selections[questionCounter] + "]").prop("checked", true);
                }

                // ... (button visibility logic remains the same)
            } else {
                var scoreElem = displayScore();
                quiz.append(scoreElem).fadeIn();
                $("#next").hide();
                $("#prev").hide();
                $("#start").show();
            }
        });
    }

    function displayScore() {
        var score = $("<p>", {
            id: "question",
        });

        var numCorrect = 0;
        for (var i = 0; i < selections.length; i++) {
            if (questions[i].isExternal) {
                // For external question, we consider it correct if the result was "Correct!"
                if ($("#result").text() === "Correct!") {
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
            const underScorePlaceHolder = " _ ".repeat(part.blank.length);
            input.placeholder = underScorePlaceHolder;
            sentenceElement.appendChild(input);
        }
    });
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