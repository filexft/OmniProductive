import styled from "styled-components"

const ProdTableWrapper = styled.div`
  margin: 0px;
  margin-bottom: 0;
  text-align: center;
  background-color: white;
  padding: 0;
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
  margin-top: 40px;
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
  & *{
    cursor : pointer;
  }
`

const LeftSide = styled.h4`
  position: absolute;
  top: 30%;
  left: -70px;
  transform: rotateZ(-90deg);
`
const TopSide = styled.h4`
  position: absolute;
  top: -35%;
  left: 40%;
`

const Cell = styled.span`
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid #ccc;
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
    taskList &&
      taskList.forEach((element) => {
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
      <h1>Priority Table</h1>
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
        <LeftSide>Urgence -&#62;</LeftSide>
        <TopSide>&#60;- Important</TopSide>
      </GridTable>
    </ProdTableWrapper>
  )
}

export default ProdTable
