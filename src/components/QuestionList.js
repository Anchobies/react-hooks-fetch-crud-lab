import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ updateQuestions, handleDeleteQuestion, questions }) {
  const questionsArray = questions.map(question => {
    return <QuestionItem 
      key={question.id} 
      updateQuestions={updateQuestions} 
      handleDeleteQuestion={handleDeleteQuestion} 
      question={question} 
    />
  })

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionsArray}</ul>
    </section>
  );
}

export default QuestionList;
