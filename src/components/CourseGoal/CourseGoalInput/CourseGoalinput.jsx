import { useState } from "react"

import "./CourseGoalinput.css"
import Button from "../../UI/Button";

const CourseGoalInput = (props) => {
    return (
        <div>
            <form action="">
            <div className="input-wrap">
                <label>Type Your Goal</label>
                <input type="text" />
            </div>
            <Button type="submit">Add Goal</Button>
        </form>
        </div>
    )
}

export default CourseGoalInput