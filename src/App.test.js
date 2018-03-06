import React from 'react'
import { mount } from 'enzyme'
import App from './App'
import { createStore } from 'redux'
import reducer from './reducer'

describe.only('<App />', () => {
  const store = createStore(reducer)
  const city = {
    name:'Moscow',
    temp: '16578',
    weather: 'cloudy',
    date: '11.02.565',
    icon: 'ikoni'
  }
  
  it('at start the savedCities & saveCity are not displayed', () => {
    const appComponent = mount(<App store={store}/>)
    const citiesDiv = appComponent.find('.cities')
    const findDiv = appComponent.find('.find')
    const cityDiv = appComponent.find('.city')
    
    expect(citiesDiv.debug().length).toBeLessThan(50)
    expect(findDiv.debug().length).toBeGreaterThan(100)
    expect(cityDiv.debug().length).toBeLessThan(50)
    
  })

  it('saveCity are displayed', () => {
    
      store.dispatch({
      type: 'NEW',
      city: city
    })
    const appComponent = mount(<App store={store}/>)
    const citiesDiv = appComponent.find('.cities')
    const findDiv = appComponent.find('.find')
    const cityDiv = appComponent.find('.city')
  
    expect(findDiv.debug().length).toBeGreaterThan(100)
    expect(cityDiv.debug().length).toBeGreaterThan(100)
    expect(citiesDiv.debug().length).toBeLessThan(50)
  })

  it('savedCities are displayed', () => {
    
    store.dispatch({
    type: 'ADD',
    city: city
  })
  const appComponent = mount(<App store={store}/>)
  const citiesDiv = appComponent.find('.cities')
  const findDiv = appComponent.find('.find')
  const cityDiv = appComponent.find('.city')

  expect(citiesDiv.debug().length).toBeGreaterThan(100)
  expect(findDiv.debug().length).toBeGreaterThan(100)
  expect(cityDiv.debug().length).toBeGreaterThan(100)
  
})

  
})