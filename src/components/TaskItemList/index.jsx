import styled from 'styled-components'
import Task from '../Task'
import { useState } from 'react'


const TaskListContainer = styled.div`
  width: 500px;
  max-width: 90%;
  padding: 10px 20px;

  border-radius : 5px
`
const ControlBtns = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  & .filter {
    display: flex;
    gap: 5px;
    & span {
      cursor: pointer;

      padding: 3px 7px;
      background-color: blueviolet;
      color: #fff;
    }
  }
  & .delete-btn {
    border: 1px solid #ccc;
    padding: 5px 10px;
    font-size: 18px;
    background-color: #e23c3c;
    color: #fff;
  }
`
const TaskContent = styled.div`
`
function TaskList({
  taskList,
  setTaskList,
  inputVal,
  setInputVal,
  editing,
  setEditing,
  editingID,
setEditingID}) {

  const [filter, setFilter] = useState(null)
  return (
    <TaskListContainer>
      {/* <TaskTitle>Tak list </TaskTitle> */}
      <TaskContent>
        <ControlBtns className="control-btns">
          <div className="filter">
            <span id="all" onClick={() => setFilter(null)}>
              All
            </span>
            <span id="pending" onClick={() => setFilter(false)}>
              Pending
            </span>
            <span id="completed" onClick={() => setFilter(true)}>
              Completed
            </span>
          </div>
          <button onClick={() => setTaskList([])} className='delete-btn'>Delete All</button>
        </ControlBtns>
        {taskList &&
          taskList.map(({ id, task, statu }, index) => {  
            if(filter === statu || filter === null)
            {
                return (
                  <Task
                    key={id}
                    id={id}
                    task={task}
                    statu={statu}
                    taskList={taskList}
                    setTaskList={setTaskList}
                    index={index}
                    inputVal={inputVal}
                    setInputVal={setInputVal}
                    editing={editing}
                    setEditing={setEditing}
                    setEditingID={setEditingID}
                    editingID={editingID}
                    filter={filter}
                  />
                )
            }
            return null
          })}
      </TaskContent>
    </TaskListContainer>
  )
}

export default TaskList