const initialState = {
    cities:[],
    city:{
        weather: '',
        icon: '',
        temp: '',
        name: '',
        date: ''
        },
    notify: {
        text: '',
        color: ''
    }
    
    }
const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'NEW':     
      return { ...state, city: action.city}
    case 'ADD':
      return { ...state, cities: state.cities.concat(action.city)}
    case 'DELETE':
      return { ...state, cities: state.cities.filter(city => city.name !== action.name)}
    case 'SHOW_NOTIFY':     
      return { ...state, notify: action.notify}
    case 'HIDE_NOTIFY':     
      return { ...state, notify: {text: '', color: ''}}
    default:
        return state
    }
}
export default reducer 
  