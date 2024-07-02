import React, { useState } from "react";

function QuestionItem({ question, deleteQuestion, patchQuestion}) {
  
  
  const { id, prompt, answers, correctIndex } = question;
  
  const [value, setValue] = useState(correctIndex)

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={(e)=> {
          setValue(e.target.value)
          patchQuestion({...question, correctIndex: value })}}
          >{options}</select>
      </label>
      <button onClick={()=>deleteQuestion(id)}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
