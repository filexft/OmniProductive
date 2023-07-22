import styled from "styled-components"



const ProdTableWrapper = styled.div`
  margin: 10px;
  margin-bottom: 50px;
  text-align: center;
  background-color: white;
  padding : 10px;
  
`

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
  padding: 10px;
  background: rgb(255, 0, 28);
  background: linear-gradient(
    132deg,
    rgba(255, 0, 28, 1) 0%,
    rgba(129, 207, 151, 1) 24%,
    rgba(189, 219, 188, 1) 38%,
    rgba(218, 182, 182, 1) 53%,
    rgba(236, 234, 241, 1) 70%
  );
  background-position: top left;
`

const LeftSide = styled.h3`
  position: absolute;
  top: 30%;
  left: -60px;
  transform: rotateZ(-90deg);
`
const TopSide = styled.h3`
  position: absolute;
  bottom: -35%;
  left: 40%;
`

const Cell = styled.span`
  background-color: #fff;
  border-radius: 5px;
  border : 1px solid #ccc;
  &:hover {
    background-color: #e8ffce;
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
    <ProdTableWrapper>
      <h1>To Do APP</h1>
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
        <LeftSide>Urgence</LeftSide>
        <TopSide>Time</TopSide>
      </GridTable>
    </ProdTableWrapper>
  )
}

export default ProdTable
