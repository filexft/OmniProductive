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
`

function Home() {
  const [taskList, setTaskList] = useState([])
  const [inputVal, setInputVal] = useState("")

  //   useEffect(() => {
  //     const tasks = localStorage.getItem("tasks")
  //       ? JSON.parse(localStorage.getItem("tasks"))
  //       : []
  //     setTaskList(tasks)
  //   }, [])

  useEffect(() => {
    console.log("hello")
  }, [])
  
  return (
    <HomeWrapper>
      <h1>Home </h1>

      <ProdTable />
      <TaskPrompt
        taskList={taskList}
        setTaskList={setTaskList}
        inputVal={inputVal}
        setInputVal={setInputVal}
      />
      <TaskList taskList={taskList} />
    </HomeWrapper>
  )
}

export default Home
