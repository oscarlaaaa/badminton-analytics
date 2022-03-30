import * as React from 'react'


const PlayerImage = ({ link }) => {
  return (
    
    <div>
      {link ? <img src={link}></img> : <div>xdddd</div>}
    </div>
  )
}

export default PlayerImage