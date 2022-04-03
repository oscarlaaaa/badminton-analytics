import * as React from 'react'


const PlayerImage = ({ link }) => {
  console.log("LINK:" + link)
  return (
    
    <div>
      {link ? <img style={{height: "100px", width: "100px"}} src={link} alt="alternatetext"></img> : <div>sad</div>}
    </div>
  )
}

export default PlayerImage