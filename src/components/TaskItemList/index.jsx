import styled from 'styled-components'
import Task from '../Task'


const TaskListContainer = styled.div`
  width: 500px;
  max-width: 90%;
  padding: 10px 20px;

  background-color: #acfadf;
  border-radius : 5px
`
const TaskContent = styled.div`
`
const TaskTitle = styled.h1`
  text-align: center;
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
  return (
    <TaskListContainer>
      <TaskTitle>Tak list </TaskTitle>
      <TaskContent>
        {taskList &&
          taskList.map(({ id, task, statu }, index) => {
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
              />
            )
          })}
      </TaskContent>
    </TaskListContainer>
  )
}

export default TaskList