import { useState } from "react";

import Button from "../../UI/Button";
import "./CourseGoalinput.css";

const CourseGoalinput = (props) => {
  const [enterGoal, setEnterGoal] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputHandler = (event) => {
    if(event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnterGoal(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const inputGoal = {
      text: enterGoal,
      id: Math.random().toString(),
    };

    if(enterGoal.trim().length === 0) {
      setIsValid(false);
      return;
    }

    props.onSaveGoal(inputGoal);
    setEnterGoal("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={`input-wrap ${!isValid ? "isvalid" : ''}`}>
        <label htmlFor="">Your Goal</label>
        <input value={enterGoal} type="text" onChange={goalInputHandler} />
      </div>
      <Button type="submit">Click Me</Button>
    </form>
  );
};

export default CourseGoalinput;
