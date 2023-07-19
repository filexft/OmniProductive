import styled from 'styled-components'
import Task from '../Task'


const TaskListContainer = styled.div`
  background-color: red;
  width: 300px;
  max-width: 600px;
`
const TaskContent = styled.div`
  background-color: blue;
`

function TaskList({ taskList, setTaskList }) {

  return (
    <TaskListContainer>
      <h1>Tak list </h1>
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
              />
            )
          })}
      </TaskContent>
    </TaskListContainer>
  )
}

export default TaskList