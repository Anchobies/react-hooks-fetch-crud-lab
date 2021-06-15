import React, { useState } from "react";

function QuestionItem({ updateQuestions, handleDeleteQuestion, question }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  const handleSelect = e => {
    fetch(`http://localhost:3000/questions/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({ correctIndex: e.target.value })
    })
      .then(() => updateQuestions());
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select onChange={handleSelect} value={question.correctIndex} defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={() => handleDeleteQuestion(id)}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
