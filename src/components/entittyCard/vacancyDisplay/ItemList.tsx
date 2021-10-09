import React from 'react'
import {styled} from '@mui/material/styles'



const UnorderedList = styled('ul')(
  ({theme}) => ({
    marginBlockStart: '0.5em',
    marginBlockEnd: '0px',
  })
)

interface ShowListProps {
  list: any[]
}
const ItemList = ( {list = []}: ShowListProps) => {
  const renderItemList = () => {
    return list.map((item, index) => {
      return <li key={index}>{item}</li>
    })
  }
  return(
    <UnorderedList>
      {renderItemList()}
    </UnorderedList>
  )
}

export default ItemList


