import styled from "styled-components"

const GridTable = styled.div`
  position: relative;
`

const GridTableCells = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 25px);
  gap: 3px;
  width: 400px;
  max-width: 600px;
  text-align: center;
`

const LeftSide = styled.h3`
  position: absolute;
  top: 30%;
  left: -70px;
  transform: rotateZ(-90deg);
`
const TopSide = styled.h3`
  position: absolute;
  top: -50%;
  left: 30%;
`

const Cell = styled.span`
  background-color: aquamarine;
  border-radius: 5px;
  &:hover {
    background-color: rgb(80, 180, 211);
  }
`

function ProdTable({
  inputID,
  setInputID,
  taskList,
  setTaskList,
  editing,
  setEditing,
  setEditingID,
}) {
  const numArr = [
    25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6,
    5, 4, 3, 2, 1,
  ]

  const handleSelection = (index) => {
    let exist = false
    taskList && taskList.forEach((element) => {
      if (element.id === index) {
        exist = true
      }
    })
    if (exist) {
      setEditing(true)
      setEditingID(index)
    } else {
      setInputID(index)
    }
  }

  return (
    <div>
      <GridTable>
        <GridTableCells>
          {numArr.map((item, index) => {
            return (
              <Cell key={item} onClick={() => handleSelection(index)}>
                {item}
              </Cell>
            )
          })}
        </GridTableCells>
        <LeftSide>Time</LeftSide>
        <TopSide>Urgence</TopSide>
      </GridTable>
    </div>
  )
}

export default ProdTable
