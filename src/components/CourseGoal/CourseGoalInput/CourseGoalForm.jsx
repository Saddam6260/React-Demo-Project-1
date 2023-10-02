import React from "react";

import CourseGoalinput from "./CourseGoalinput";
import "./CourseGoalForm.css";

const CourseGoalForm = (props) => {

    const onSaveGoal = (inputGoal) => {
        props.addInputGoal(inputGoal)
    }

    return (
        <div className="form-wrap">
            <CourseGoalinput onSaveGoal={onSaveGoal}/>
        </div>
    )
}

export default CourseGoalForm;