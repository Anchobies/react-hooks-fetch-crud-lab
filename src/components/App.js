import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);

  const updateQuestions = () => {
    fetch("http://localhost:3000/questions")
      .then(res => res.json())
      .then(data => setQuestions(data));
  }

  useEffect(() => {
    updateQuestions();
  }, []);

  const handleAddQuestion = newQuestion => {
    setQuestions([...questions, newQuestion]);
  }

  const handleDeleteQuestion = id => {
    fetch(`http://localhost:3000/questions/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
      .then(() => updateQuestions());
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? 
        <QuestionForm handleAddQuestion={handleAddQuestion} setPage={setPage} /> 
      : 
        <QuestionList updateQuestions={updateQuestions} handleDeleteQuestion={handleDeleteQuestion} questions={questions} />}
    </main>
  );
}

export default App;
