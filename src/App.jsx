import { useState } from "react";

import CourseGoalForm from "./components/CourseGoal/CourseGoalInput/CourseGoalForm";
import CourseGoal from "./components/CourseGoal/CourseGoalItems/CourseGoal";
import "./App.css";

const DUMMY_GOALS = [
  { text: "Do all exercise", id: "g1" },
  { text: "Finish the course", id: "g2" },
];

function App() {
  const [goals, setGoals] = useState(DUMMY_GOALS);

  const addInputGoal = (inputGoal) => {
    setGoals((prevGoals) => {
      return [inputGoal, ...prevGoals]
    });
  };
  return (
    <div className="container">
      <CourseGoalForm addInputGoal={addInputGoal} />
      <CourseGoal items={goals} />
    </div>
  );
}

export default App;
