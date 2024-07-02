import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");

  const [questions, setQuestions] = useState([])
  
  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then(res => res.json())
    .then(setQuestions)
    .catch(console.log)
  }, [])

  const deleteQuestion = (questionId) => {
    fetch(`http://localhost:4000/questions/${questionId}`, {
      method: "DELETE"
    })
    .then(() => setQuestions(current => current.filter(question => question.id !== questionId)))
    .catch(console.log)
  }

  const patchQuestion = (questionObj) => {
    fetch(`http://localhost:4000/questions/${questionObj.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        "correctIndex": Number(questionObj.correctIndex)
      })
    })
    .catch(console.log)
  
  }

const renderNewQuestion = (questionObj) => setQuestions(current => [...current, questionObj])

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm renderNewQuestion={renderNewQuestion} /> : <QuestionList questions={questions} deleteQuestion={deleteQuestion} patchQuestion={patchQuestion}/>}
    </main>
  );
}

export default App;
