import { useState } from "react"
import styled from "styled-components"

const TaskWrapper = styled.div`
  display: flex;

  // background-color: #acfadf;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  border-bottom : 1px groove #ccc;
  border-radius: 5px;
  margin : 2px;
`

const TaskLabel = styled.label`
  display: flex;
  width: 80%;
`

const TaskText = styled.p`
  font-size: 18px;
  outline: none;
  background-color:transparent;
  border: none;
  line-height: 24px;
  ${({ checked }) => checked && `text-decoration: line-through;`}}
`

const MenuButton = styled.span`
  padding: 10px;
  color: #060047;
`



const TaskActions = styled.div`
  position: relative;

  &.active .actionMenu {
    scale: 1;
  }
`

const ActionMenu = styled.ul`
  position: absolute;
  list-style: none;
  right: 100%;
  top: 50%;
  z-index: 9;
  scale: 0;

  & li {
    cursor: pointer;
  }
`

function Task({
  id,
  task,
  statu,
  taskList,
  setTaskList,
  index,
  inputVal,
  setInputVal,
  editing,
  setEditing,
  editingID,
  setEditingID,
}) {
  const [checked, setChecked] = useState(statu)
  const [menuMode, setMenuMode] = useState(false)

  const handleclick = (e) => {
    setChecked((preCheck) => !preCheck)

    const itemIndex = taskList.findIndex((item) => item.id === id)

    const newVal = { ...taskList[itemIndex], statu: Boolean(checked) }

    const oldVal = [...taskList]

    oldVal[itemIndex] = newVal

    setTaskList(oldVal)
  }

  const handleEdit = (e) => {
    // console.log(
    //   e.target.parentElement.parentElement.parentElement.firstChild.lastChild,
    // )
    // const textVal =
    //   e.target.parentElement.parentElement.parentElement.firstChild.lastChild

    setMenuMode(!menuMode)

    setInputVal(() => {
      const item = taskList.filter((element) => element.id === id)
      console.log(item, item[0].task)
      return item[0].task
    })
    setEditing(true)
    setEditingID(() => id)
  }

  const handleDelete = (e) => {
    // const itemIndex = taskList.findIndex((item) => item.id === id)
    // let  newList
    // if(itemIndex === 0) {
    //     newList = taskList.slice(1)
    // }else{
    //     newList = taskList.slice(itemIndex, 1)
    // }
    let newList = taskList.filter((item) => item.id !== id)

    setTaskList(newList)
  }

  const showMenu = (e) => {
    console.log("clicked at", menuMode)

    const parentItem = e.target.parentElement.parentElement
    // parentItem.classList.add("show")
    if (parentItem.classList.contains("active")) {
      parentItem.classList.remove("active")
    } else {
      parentItem.classList.add("active")
    }
    setMenuMode(!menuMode)
  }

  return (
    <TaskWrapper>
      <TaskLabel htmlFor={id}>
        <input id={id} type="checkbox" checked={statu} onClick={handleclick} />
        <TaskText checked={statu}>{task}</TaskText>
      </TaskLabel>
      <TaskActions>
        <MenuButton onClick={showMenu}>
          {!menuMode ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <g fill="currentColor">
                <circle cx="10" cy="15" r="2" />
                <circle cx="10" cy="10" r="2" />
                <circle cx="10" cy="5" r="2" />
              </g>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 15 15"
            >
              <path
                fill="currentColor"
                d="M3.64 2.27L7.5 6.13l3.84-3.84A.92.92 0 0 1 12 2a1 1 0 0 1 1 1a.9.9 0 0 1-.27.66L8.84 7.5l3.89 3.89A.9.9 0 0 1 13 12a1 1 0 0 1-1 1a.92.92 0 0 1-.69-.27L7.5 8.87l-3.85 3.85A.92.92 0 0 1 3 13a1 1 0 0 1-1-1a.9.9 0 0 1 .27-.66L6.16 7.5L2.27 3.61A.9.9 0 0 1 2 3a1 1 0 0 1 1-1c.24.003.47.1.64.27Z"
              />
            </svg>
          )}
        </MenuButton>
        <ActionMenu className="actionMenu">
          <li onClick={handleEdit} className="edit">
            Edit
          </li>
          <li onClick={handleDelete} className="delete">
            Delete
          </li>
        </ActionMenu>
      </TaskActions>
    </TaskWrapper>
  )
}

export default Task
