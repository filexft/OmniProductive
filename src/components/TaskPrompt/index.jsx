import styled from "styled-components"

const PromptWrapper = styled.div``

function TaskPrompt({
  taskList,
  setTaskList,
  inputVal,
  setInputVal,
  editing,
  setEditing,
  editingID,
  setEditingID,
}) {
  const handleForm = (e) => {
    e.preventDefault()
    if (inputVal.trim() === "") return
    if (e.key === "Enter" || e.keyCode === 13) {
      if (editing) {
        const itemIndex = taskList.findIndex((item) => item.id === editingID)

        const newVal = { ...taskList[itemIndex], task:  inputVal  }

        const oldVal = [...taskList]

        oldVal[itemIndex] = newVal

        setTaskList(oldVal)
      } else {
        setTaskList((prevTask) => [
          ...prevTask,
          { id: new Date().getTime(), task: inputVal, statu: false },
        ])
      }
      setInputVal("")
    }
  }

  return (
    <PromptWrapper>
      <h1>to do prompt </h1>
      <form onSubmit={handleForm}>
        <input
          id="input-bar"
          type="text"
          placeholder="task .."
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyUp={handleForm}
        />
        <button type="submit" onClick={handleForm}>
          Add
        </button>
      </form>
    </PromptWrapper>
  )
}

export default TaskPrompt
