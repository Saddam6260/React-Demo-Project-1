import "./CourseGoalItem.css"

const CourseGoalItem = (props) => {

    const deleteHandler = () => {
        props.onDelete(props.id)
    }
    return <li className="goalitem" onClick={deleteHandler}>{props.text}</li>
}

export default CourseGoalItem