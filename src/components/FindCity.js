import React from 'react'
import { Button } from 'react-bootstrap'
import cityService from '../services/cities'
import Notification from './Notification';


class FindCity extends React.Component {
  state = {
    search: '',
    notification: '',
    color: ''
  }


getCity = async () => {
  try{
    const data = await cityService.getCity(this.state.search)
    if(data){
        const date = new Date()
        const city = {
          temp: Math.round(data.main.temp - 273.15),
          weather: data.weather[0].description,
          icon: data.weather[0].icon,
          name: this.state.search,
          date: date.toString()
        }
        this.props.store.dispatch({
        type: 'NEW',
        city: city
      })
      this.setState({
        search: ''
      })
    }

  }catch(exception) {
    this.props.store.dispatch({
      type: 'SHOW_NOTIFY',
      notify: {
        text: 'City not found',
        color: 'red'
        }
      })
    setTimeout(() => {
      this.props.store.dispatch({type: 'HIDE_NOTIFY'})}, 3000)
    }
}

handleChange = (e) => {
  this.setState({ search: e.target.value })
}
    render() {
      return(
        <div className="container"> 
        <h2> Weather app</h2>
        <Notification message={this.props.store.getState().notify.text} color={this.props.store.getState().notify.color}/>
              <form>
                <label ref="myRef">
                 <p>Type a city:</p>
                  <input type="text" value={this.state.search} onChange={this.handleChange} />
                </label>
              </form>
              <Button bsStyle="info" onClick={this.getCity}>Find current weather</Button>
              </div>
      )
    }
}

export default FindCity 

