import React from 'react';
import FindCity from './components/FindCity'
import SaveCity from './components/SaveCity'
import SavedCities from './components/SavedCities'

class App extends React.Component {
  render() {
    
    return (
      <div>
      <FindCity className="find" store={this.props.store}/>
      <SaveCity className="city" store={this.props.store}/>
      <SavedCities className="cities" store={this.props.store}/>
      </div>
    );
  }
  
}
export default App
