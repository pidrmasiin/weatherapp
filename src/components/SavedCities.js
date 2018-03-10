import React from 'react'
import { Table } from 'react-bootstrap'
import CityRow from './CityRow';
import cityService from '../services/cities'



class SavedCities extends React.Component{
    

    updateCurrent = (name) => async () => {
        try{
          const data = await cityService.getCity(name)
          if(data){
                const date = new Date()
                const city = {
                temp: Math.round(data.main.temp - 273.15),
                weather: data.weather[0].description,
                icon: data.weather[0].icon,
                name: name,
                date: date.toString()
              }
              this.props.store.dispatch({
              type: 'NEW',
              city: city
            })
            this.notify((name + ' ' + date.toString()), 'MediumTurquoise')
        } 
    }catch(exception) {
        this.notify('Something went wrong', 'red')
    }
}

notify = (text, color) => {
        this.props.store.dispatch({
            type: 'SHOW_NOTIFY',
            notify: {
              text: text,
              color: color
              }
            })
          setTimeout(() => {
            this.props.store.dispatch({type: 'HIDE_NOTIFY'})}, 4000)
}
    
erase = (name) => () => {
    this.props.store.dispatch({
        type: 'DELETE',
        name: name
        }
    )
    this.notify((name + ' erased from saved cities'), 'orange')
    }


    render() {
        if(this.props.store.getState().cities.length > 0){
        
        return (
        <div className="container">
            <h2>Saved cities</h2>
             <Table>
              <tbody>
                <tr>
                <th>City</th>
                <th>Temperature</th>    
                <th>Weather</th>
                <th>Icon</th>
                <th>When saved</th>
                <th>Show current weather</th>
                <th>Remove</th>
                </tr>
                {this.props.store.getState().cities.map(city =>
                    <CityRow
                    key={city.name}
                    city={city}
                    onClick={this.updateCurrent(city.name)}
                    text='Current weather'
                    erase={this.erase(city.name)}
                    />
                )}
            </tbody>
            </Table>
        </div>
        )
    } return null
    }
}

export default SavedCities