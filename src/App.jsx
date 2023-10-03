import "./App.css";

import CourseGoalInput from "./components/CourseGoal/CourseGoalInput/CourseGoalinput";
import CourseGoalList from "./components/CourseGoal/Coursegoallist/CourseGoalList";

const App = () => {
  const goalItems = [
    { id: "g1", text: "Finish this course before 10 october" },
    { id: "g2", text: "Practice project everyday" },
  ];

  return (
    <div className="container">
      <CourseGoalInput/>
      <CourseGoalList items={goalItems} />
    </div>
  );
};

export default App;
