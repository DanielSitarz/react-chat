import * as React from 'react'
import style from '../style/chat/header.scss'

function Header({ userName, roomName }) {
  return (
    <header className={style.header}>
      <div className={style.userName}>{userName}</div>
      <div className={style.roomName}>{roomName}</div>
    </header>
  )
}

export default Header
