import React from "react";

class App extends React.Component {
    render () {
        return (
            <div className="App">
                <div className="taskInput">
                    <input type={"text"} placeholder="Введите задачу"></input>
                    <input type={"button"}></input>
                </div>
                <select className="taskType">
                    <option selected>Все задачи</option>
                    <option>Текущие задачи</option>
                    <option>Выполненные задачи</option>
                </select>
                <div className="taskBoard">

                </div>
            </div>
        )
    }
}

export default App;