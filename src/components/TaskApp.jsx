import React, { useState, useEffect } from "react"

const TaskApp = () => {
  const [taskList, setTaskList] = useState(() => {
    const savedTasks = localStorage.getItem("tasks")
    return savedTasks ? JSON.parse(savedTasks) : []
  })
  const [inputVal, setInputVal] = useState("")

  const handleForm = (e) => {
    e.preventDefault()
    if (inputVal.trim() === "") return
    setTaskList((prevTaskList) => [...prevTaskList, inputVal])
    setInputVal("")
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskList))
  }, [taskList])

  return (
    <div>
      <form onSubmit={handleForm}>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {taskList.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  )
}

export default TaskApp
