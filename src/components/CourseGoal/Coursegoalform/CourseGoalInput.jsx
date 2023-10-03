import { useState } from "react";

import "./CourseGoalInput.css";
import Button from "../../UI/Button";

const CourseGoalInput = () => {
  const [isValid, setIsValid] = useState(true);
  const [enteredgoal, setEnteredGoal] = useState("");

  const onChangeHandler = (event) => {
    if(event.target.value.trim().length > 0) {
        setIsValid(true);
    }
    setEnteredGoal(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (enteredgoal.trim().length === 0) {
      setIsValid(false);
      return;
    }
  };

  return (
    <form
      action=""
      onSubmit={onSubmitHandler}
      className={`form-wrap ${!isValid ? "inValid" : ""}`}
    >
      <div className="input-wrap">
        <label>Enter Your Goal :</label>
        <input type="text" onChange={onChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseGoalInput;
