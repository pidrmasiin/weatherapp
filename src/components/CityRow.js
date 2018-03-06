import React from 'react' 
import { Button } from 'react-bootstrap'               


const CityRow = ({name, temp, weather, url, onClick, text, date, erase})   => {
  const visibility = { display: erase ? '' : 'none' }

  return(
  <tr>
  <td>{name}</td>
  <td>{temp}</td>
  <td>{weather}</td>
  <td><img src={url} alt="weather icon"/></td>
  <td>{date}</td>
  <td><Button className="save" bsStyle="success" onClick={onClick}>{text}</Button></td>
  <td><Button className="delete" bsStyle="danger" style={visibility} onClick={erase}>Delete</Button></td>
  </tr>
  )
}
export default CityRow
               