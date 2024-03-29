import { useState, useEffect } from "react"
import { styled } from "styled-components"
import ProdTable from "../../components/ProdTable"
import TaskPrompt from "../../components/TaskPrompt"
import TaskList from "../../components/TaskItemList"

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  row-gap: 1rem;
  padding: 25px;
  background-color: white;
  width: 80%;
  max-width: 100%;
  margin-left: auto;

  @media (max-width: 600px) {
    padding: 5px;
    margin: 0;

    width : 100%;
    
    & * {
      margin-left: 0;
      margin-right: 0;
    }
  }
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
