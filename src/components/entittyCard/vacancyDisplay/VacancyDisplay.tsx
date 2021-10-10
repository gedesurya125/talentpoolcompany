
import * as React from 'react'
import VacancyDetails from './VacancyDetails';


interface Props {
  jobVacancy: any
}


//===================MAIN COMPONENT ====================
const VacancyDisplay = (propslist:Props) => {
  // console.log('isi dari jobVacancy',propslist.jobVacancy)

  const renderVacancies = propslist.jobVacancy.map((vacancy:any, index:number) => <VacancyDetails key={index} vacancy={vacancy}/>)
  return (
    <>
      {renderVacancies}
    </>
  )
}

export default VacancyDisplay
