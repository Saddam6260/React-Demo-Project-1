import "./CourseGoalList.css";
import CourseGoalItem from "../Coursegoalitem/CourseGoalItem"

const CourseGoalList = (props) => {
  return (
    <div className="goals-wrap">
      <ul>
        {props.items.map((goal) => (
          <CourseGoalItem key={goal.id} id={goal.id} text={goal.text}/>
        ))}
      </ul>
    </div>
  );
};

export default CourseGoalList;
