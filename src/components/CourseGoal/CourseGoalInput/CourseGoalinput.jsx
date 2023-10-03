import { useState } from "react";

import "./CourseGoalinput.css";
import Button from "../../UI/Button";

const CourseGoalInput = (props) => {
  const [isValid, setIsValid] = useState(true);
  const [enteredGoal, setEnteredGoal] = useState("");

  const onChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredGoal(event.target.value);
  };

  const onSUbmitHandler = (event) => {
    event.preventDefault();
    console.log("Hi")

    if (enteredGoal.trim().length === 0) {
      setIsValid(false);
      return;
    }
   
    console.log(enteredGoal);
    props.addGoal(enteredGoal);
    setEnteredGoal('')
  };

  return (
    <div className="form-wrap">
      <form action="" onSubmit={onSUbmitHandler} className="form">
        <div className={`input-wrap ${!isValid ? "invalid" : ''}`}>
          <label>Type Your Goal</label>
          <input type="text" value={enteredGoal} onChange={onChangeHandler} />
        </div>
        <Button type="submit">Add Goal</Button>
      </form>
    </div>
  );
};

export default CourseGoalInput;
