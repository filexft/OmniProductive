import { useState } from 'react'
import styled from 'styled-components'

const TaskWrapper = styled.div`
  display: flex;

  background-color: yellow;
  justify-content: space-between;
  align-items: center;
  text-align: center
`

const TaskLabel = styled.label`
  display: flex;
`

const TaskText = styled.p`
  font-size: 18px;
  line-height: 24px;
  width: 80%;
  ${({ checked }) => checked && `text-decoration: line-through;`}}
`

const TaskActions = styled.div`
  position: relative;
  background-color: black;

  &.active .actionMenu{
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

//   &.show {
//     scale: 1;
//   }
`

function Task({id, task, statu, taskList, setTaskList,  index}){

    const [checked, setChecked] = useState(statu)

    const handleclick = (e) => {
      
        setChecked((preCheck) => !preCheck)
        
        const itemIndex = taskList.findIndex((item) => item.id === id)
        
        const newVal  = {...taskList[itemIndex], statu: Boolean(checked)}
        

        const oldVal = [...taskList ]

        oldVal[itemIndex] = newVal

        setTaskList(oldVal)
    }

    const showMenu = (e) => { 
            
            console.log(
              "clicked at",
              e.target.parentElement.parentElement.lastChild)
            const parentItem = e.target.parentElement.parentElement
            // parentItem.classList.add("show")
            if(parentItem.classList.contains("active"))
            {
                parentItem.classList.remove("active")
            } else{
                parentItem.classList.add("active")
            }

            // document.addEventListener('click', (e) => {
            //     if(e.target.tagName != 'I' || e.target != currentTask){
            //         parentItem.classList.add("show")
            //     }
            // })
            
    }

    return (
      <TaskWrapper>
        <TaskLabel htmlFor={id}>
          <input
            id={id}
            type="checkbox"
            checked={statu}
            onClick={handleclick}
          />
          <TaskText checked={statu}>{task}</TaskText>
        </TaskLabel>
        <TaskActions>
          <span onClick={showMenu}>
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
          </span>
          <ActionMenu className="actionMenu">
            <li className="edit">Edit</li>
            <li className="delete">Delete</li>
          </ActionMenu>
        </TaskActions>
      </TaskWrapper>
    )

}


export default Task