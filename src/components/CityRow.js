import React from 'react' 
import { Button } from 'react-bootstrap'               


const CityRow = ({city, onClick, text, erase})   => {
  const visibility = { display: erase ? '' : 'none' }
  const url = "https://openweathermap.org/img/w/" + city.icon + ".png"
  return(
  <tr>
  <td>{city.name}</td>
  <td>{city.temp}</td>
  <td>{city.weather}</td>
  <td><img src={url} alt="weather icon"/></td>
  <td>{city.date}</td>
  <td><Button className="save" bsStyle="success" onClick={onClick}>{text}</Button></td>
  <td><Button className="delete" bsStyle="danger" style={visibility} onClick={erase}>Delete</Button></td>
  </tr>
  )
}
export default CityRow
               