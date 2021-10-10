import React from 'react'
import {styled} from '@mui/material/styles'



const UnorderedList = styled('ul')(
  ({theme}) => ({
    marginBlockStart: '0.1em',
    marginBlockEnd: '0px',
    paddingLeft: '2em'
  })
)

interface ShowListProps {
  items: any[]
}
const ListedInfo = ( {items = []}: ShowListProps) => {
  const renderItemList = () => {
    return items.map((item, index) => {
      return <li key={index}>{item}</li>
    })
  }
  return(
    <UnorderedList>
      {renderItemList()}
    </UnorderedList>
  )
}

export default ListedInfo


