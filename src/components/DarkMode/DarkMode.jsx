import { ThemeContext } from '@/context/ThemeContext'
import React, { useContext } from 'react'
import s from './DarkMode.module.css'

const DarkMode = () => {
  const {toggle,mode} = useContext(ThemeContext)
  return (
    <div className={s.container} onClick={toggle}>
        <div className={s.icon}>🌙</div>
        <div className={s.icon}>☀️</div>
        <div className={s.ball} style={mode === 'light' ? {left:"2px"} : {right:"2px"}}/>
    </div>
  )
}

export default DarkMode