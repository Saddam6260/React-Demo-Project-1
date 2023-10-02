import React from "react";

import Button from "../../UI/Button";
import "./CourseGoalinput.css";

const CourseGoalinput = () => {
  return (
    <form>
      <div className="input-wrap">
        <label htmlFor="">Your Goal</label>
        <input type="text" />
      </div>
      <Button type="submit">Click Me</Button>
    </form>
  );
};

export default CourseGoalinput;
