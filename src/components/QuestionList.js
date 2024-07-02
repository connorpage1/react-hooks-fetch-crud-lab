import React, { useState, useEffect }from "react";
import QuestionItem from "./QuestionItem"

function QuestionList({ questions, deleteQuestion, patchQuestion }) {

  const displayQuestions = (questionList) => questionList.map((questionObj) => <QuestionItem key={questionObj.id} question={questionObj} deleteQuestion={deleteQuestion} patchQuestion={patchQuestion}/>)

  return (

    <section>
      <h1>Quiz Questions</h1>
      <ul>{displayQuestions(questions)}</ul>
    </section>
  );
}

export default QuestionList;
