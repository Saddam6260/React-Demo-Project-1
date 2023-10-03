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

  const deleteItemHandler = (goalId) => {
    setCourseGoal(prevGoals => {
      const updatedGoals = prevGoals.filter(goals => goals.id !== goalId);
      return updatedGoals;
    })
  }

  let content = (
    <p className="alert">No Such items here</p>
  )

  if(coursegoal.length > 0) { 
    content = (
      <CourseGoalList items={coursegoal} onDeleteItem={deleteItemHandler}/>
    )
  }

  return (
    <div className="container">
      <CourseGoalInput addGoal={addGoalHandler} />
      {content}
    </div>
  );
};

export default App;
