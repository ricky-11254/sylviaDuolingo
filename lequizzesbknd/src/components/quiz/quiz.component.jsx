// Quiz.js
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ScoreCard from "../score-card/score-card.component";
import { quiz } from "@/data/question-set";
import { qtype } from "@/data/qtype-set";

const Quiz = ({ name }) => {
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [currentQtypeIndex, setCurrentQtypeIndex] = useState(0);
	const [selectedAnswer, setSelectedAnswer] = useState("");
	const [answerChecked, setAnswerChecked] = useState(false);
	const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
	const [showResults, setShowResults] = useState(false);
	const [quizResult, setQuizResult] = useState({
		score: 0,
		correctAnswers: 0,
		wrongAnswers: 0,
	});

	const { questions } = quiz;
	const { qtypes } = qtype;

	const counter = currentQuestionIndex + 1;

	const { answers, correctAnswer, imageUrl, audio } =
		questions[currentQuestionIndex];

	const { section, subtitle, size } = qtypes[currentQtypeIndex];

	const onAnswerSelected = (answer, idx) => {
		setSelectedAnswerIndex(idx);
		setSelectedAnswer(answer);
		setAnswerChecked(true);
	};

	const questionTotal = questions.length;
	
	const handleNextQuestion = () => {
		console.log(questionTotal)

		if (selectedAnswer === correctAnswer) {
			setQuizResult((prev) => ({
				...prev,
				score: prev.score + 5,
				correctAnswers: prev.correctAnswers + 1,
			}));
		} else {
			setQuizResult((prev) => ({
				...prev,
				wrongAnswers: prev.wrongAnswers + 1,
			}));
		}
		if (currentQuestionIndex !== questions.length - 1) {
			setCurrentQuestionIndex((prev) => prev + 1);
		} else {
			setShowResults(true);
		}

		if (counter  !== qtypes[currentQtypeIndex].size) {
			setCurrentQtypeIndex(currentQtypeIndex);
		} else {
			setCurrentQtypeIndex((prev) => prev + 1);
			
		}
		setSelectedAnswer("");
		setSelectedAnswerIndex(null);
		setAnswerChecked(false);
		
	};
	


	try {

		return (
			<div className=" mt-5">
				<div>
					{!showResults ? (

						<div className="card  p-4">
							{" "}
							<div>
								<h3>Questions Type: {section}</h3>
								
								<h5>Total Questions: { size }</h5>
							</div>
							<div>
								<img src={imageUrl} width="100%" />
							</div>
							<div >
								
								<h5>Audio</h5>

								<audio controls src={audio} style={{width: "100%"}}>
									Your browser does not support the audio element.
								</audio>
							</div>
							<div>
								<h5>Question: {subtitle}</h5>
							</div>
							<ul className="list-group">
								{answers.map((answer, idx) => (
									<li
										key={idx}
										onClick={() => onAnswerSelected(answer, idx)}
										className={
											"list-group-item " +
											(selectedAnswerIndex === idx ? "active" : "") +
											" cursor-pointer"
										}
									>
										{answer}
									</li>
								))}
							</ul>
							<div className="d-flex justify-content-between mt-3">
								<b>
									Question {" "}
									{counter}/{questions.length}
								</b>
								<button
									onClick={handleNextQuestion}
									className="btn btn-primary"
									disabled={!answerChecked}
								>
									{currentQuestionIndex === questions.length - 1
										? "Submit"
										: "Next Question"}
								</button>
							</div>
						</div>
					) : (
						<ScoreCard
							quizResult={quizResult}
							questions={questions}
							name={name}
						/>
					)}
				</div>
			</div>
		);

	}catch(e){
		return ("something went wrong")
	}
};

export default Quiz;
