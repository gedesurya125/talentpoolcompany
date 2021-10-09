import React from 'react'
import logo from '../../assets/img/logo.svg';
import {styled} from '@mui/material/styles';


const LogoImg = styled('img')(
  ({theme}) => ({
    width: '100%'
  })
)



const AppLogo = ({...other}) => {
  return (
    <LogoImg src={logo} {...other} alt="..."/>
  )
}

export default AppLogo
