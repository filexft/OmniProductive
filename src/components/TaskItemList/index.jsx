

function TaskList({ taskList }) {
  return (
    <div>
      <h1>Tak list </h1>
      <ul>
        <li>aa</li>
        <li>aa</li>
        {taskList.map((task, id) => {
          return <li key={`${task}-${id}`}>{task}</li>
        })}
        <li>aa</li>
      </ul>
    </div>
  )
}

export default TaskList