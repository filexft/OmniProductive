import styled from "styled-components"

const PromptWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;

  min-width: 500px;
  max-width: 90%;
  text-align: center;

  background-color: rgb(165, 236, 230);
  border-radius: 5px;
`
const PromptForm = styled.form`
  display: flex;
  gap: 10px;

  & input {
    font-size: 18px;
    font-weight: 300;
    line-height: 22px;
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    outline: none;
  }

  & button {
    background-color: white;
    padding: 5px 10px;
    border: 1px groove white;
    border-radius: 5px;
    cursor: pointer;
  }
  & button:hover {
    background-color: #d8f229;
  }
`

function TaskPrompt({
  taskList,
  setTaskList,
  inputVal,
  setInputVal,
  editing,
  setEditing,
  editingID,
  setEditingID,
  inputID,
  setInputID,
}) {
  const handleForm = (e) => {
    e.preventDefault()
    if (inputVal.trim() === "") return

    if (editing) {
      const itemIndex = taskList.findIndex((item) => item.id === editingID)

      const newVal = { ...taskList[itemIndex], task: inputVal }

      const oldVal = [...taskList]

      oldVal[itemIndex] = newVal

      setTaskList(oldVal)
    } else {
      setTaskList((prevTask) => [
        ...prevTask,
        { id: inputID, task: inputVal, statu: false },
      ])
    }
    setInputVal("")
    setInputID(-1)
    setEditing(false)
  }

  const handleEnter = (e) => {
    if (e.key === "Enter" || e.keyCode === 13) {
      handleForm()
    }
  }

  return (
    <PromptWrapper>
      {inputID >= 0 || editing ? (
        <>
          <h1>To Do Prompt </h1>
          <PromptForm onSubmit={handleForm}>
            <input
              id="input-bar"
              type="text"
              placeholder="task .."
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyUp={handleEnter}
            />
            <button type="submit" onSubmit={handleForm}>
              Add
            </button>
          </PromptForm>
        </>
      ) : (
        <span>Select a cell from table or edit task to display the Prompt</span>
      )}
    </PromptWrapper>
  )
}

export default TaskPrompt
