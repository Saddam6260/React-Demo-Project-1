import { useState } from "react";

import "./App.css";
import CourseGoalInput from "./components/CourseGoal/CourseGoalInput/CourseGoalinput";
import CourseGoalList from "./components/CourseGoal/Coursegoallist/CourseGoalList";

const App = () => {
  const goalItems = [
    { id: "g1", text: "Finish this course before 10 october" },
    { id: "g2", text: "Practice project everyday" },
  ];

  const [coursegoal, setCourseGoal] = useState(goalItems);

  const addGoalHandler = enteredText => {
    setCourseGoal(prevGoals => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedGoals;
    });
  };

  return (
    <div className="container">
      <CourseGoalInput addGoal={addGoalHandler} />
      <CourseGoalList items={coursegoal} />
    </div>
  );
};

export default App;
