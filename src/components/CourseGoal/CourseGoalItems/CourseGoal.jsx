import CourseGoalItem from "./CourseGoalItem";
import "./CourseGoal.css";

const CourseGoal = (props) => {
  return (
    <div className="goals">
      {props.items.map((goal) => (
        <CourseGoalItem key={goal.id} text={goal.text} id={goal.id}/>
      ))}
    </div>
  );
};

export default CourseGoal;
