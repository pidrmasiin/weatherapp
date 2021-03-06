import React from 'react'
import { Table } from 'react-bootstrap'
import CityRow from './CityRow'

class SaveCity extends React.Component{
    state = {
        notification: '',
        color: ''
    }

    addCity = () => () => {
        const cities = this.props.store.getState().cities
            if(cities.length === 0){
                    this.props.store.dispatch({
                        type: 'ADD',
                        city: this.props.store.getState().city
                        })
                    this.notify('Saved', 'limegreen')
                }else if(this.props.store.getState().cities
                .filter(city => city.name === this.props.store.getState().city.name) < 1) {
                    this.props.store.dispatch({
                        type: 'ADD',
                        city: this.props.store.getState().city
                        })
                    this.notify('Saved', 'limegreen')
                } else {
                    this.notify('Already saved', 'red')
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
            this.props.store.dispatch({type: 'HIDE_NOTIFY'})}, 3000)
    }

  
    render() {
        var url =''
        if (this.props.store.getState().city.icon){
        url = "https://openweathermap.org/img/w/" + this.props.store.getState().city.icon + ".png"
        return (
            <div className="container">
            <h2>Weather</h2>
             <Table>
              <tbody>
                <tr>
                <th>City</th>
                <th>Temperature</th>    
                <th>Weather</th>
                <th>Icon</th>
                <th>When searched</th>
                <th>Save</th>
                </tr>
                <CityRow 
                    city={this.props.store.getState().city}
                    onClick={this.addCity()}
                    text='Save'
                />
                </tbody>
            </Table>
            </div>
        )
    }else {
        return(
            null
        )
    }
}
}

export default SaveCity