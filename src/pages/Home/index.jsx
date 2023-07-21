import { useState, useEffect } from "react"
import { styled } from "styled-components"
import ProdTable from "../../components/ProdTable"
import TaskPrompt from "../../components/TaskPrompt"
import TaskList from "../../components/TaskItemList"

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding-bottom: 50px;
`

function Home() {
  const [taskList, setTaskList] = useState(() => {
    const savedTasks = localStorage.getItem("tasks")
    return savedTasks ? JSON.parse(savedTasks) : []
  })
  const [inputVal, setInputVal] = useState("")
  const [inputID, setInputID] = useState()

  const [editing, setEditing] = useState(false)

  const [editingID, setEditingID] = useState()
   

    useEffect(() => {
      console.log(taskList)
      localStorage.setItem("tasks", JSON.stringify(taskList))
    }, [taskList])

  
  return (
    <HomeWrapper>
      <h1>Home </h1>
      <ProdTable
        inputID={inputID}
        setInputID={setInputID}
        taskList={taskList}
        setTaskList={setTaskList}
        editing={editing}
        setEditing={setEditing}
        setEditingID={setEditingID}
      />
      <TaskPrompt
        taskList={taskList}
        setTaskList={setTaskList}
        inputVal={inputVal}
        setInputVal={setInputVal}
        editing={editing}
        setEditing={setEditing}
        setEditingID={setEditingID}
        editingID={editingID}
        inputID={inputID}
        setInputID={setInputID}
      />
      <TaskList
        taskList={taskList}
        setTaskList={setTaskList}
        inputVal={inputVal}
        setInputVal={setInputVal}
        editing={editing}
        setEditing={setEditing}
        setEditingID={setEditingID}
        editingID={editingID}
      />
    </HomeWrapper>
  )
}

export default Home
