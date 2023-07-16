import styled from "styled-components"

const PromptWrapper = styled.div``

function TaskPrompt({ taskList, setTaskList, inputVal, setInputVal }) {
  const handelClick = (e) => {
    if (inputVal.trim() === "") return
      if (e.key === 'Enter' || e.keyCode === 13) {
      setTaskList([...taskList, inputVal])
      console.log(inputVal)
      console.log(taskList)
      setInputVal("")
    }
  }

  return (
    <PromptWrapper>
      <h1>to do prompt </h1>
      <div>
        <input
          id="input-bar"
          type="text"
          placeholder="task .."
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyUp={handelClick}
        />
        <button type="submit" onClick={handelClick}>
          Add
        </button>
      </div>
    </PromptWrapper>
  )
}

export default TaskPrompt
