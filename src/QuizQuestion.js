import React, { Component } from 'react'
import QuizQuestionButton from './QuizQuestionButton.js'

let quizData = require('./quiz_data.json')

class QuizQuestion extends Component {
  render() {
    return (
      <main>
	     <section>
	        <p>{this.props.quiz_question.instruction_text}</p>
	     </section>
	     <section className="buttons">
	        <ul>
	          <QuizQuestionButton />
	        </ul>
	      </section>
      </main>
    )
  }
}

export default QuizQuestion