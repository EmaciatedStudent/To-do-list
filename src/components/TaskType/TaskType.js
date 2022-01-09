import React from "react";

class TaskType extends React.Component {
    render() {
        return (
            <div className="taskType">
                <select>
                    <option selected>Все задачи</option>
                    <option>Текущие задачи</option>
                    <option>Выполненные задачи</option>
                </select>
            </div>
        )  
    }
}

export default TaskType;