import "./CourseGoalItems.css";

const CourseGoalItem = (props) => {
  return (
    <div className="goalItem">
      <h5>{props.text}</h5>
    </div>
  );
};

export default CourseGoalItem;
