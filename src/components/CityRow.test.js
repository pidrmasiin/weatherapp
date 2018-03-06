import React from 'react'
import { shallow } from 'enzyme'
import CityRow from './CityRow'

describe('<CityRow />', () => {
  it('renders content', () => {
    
    const rowComponent = shallow(<CityRow
        name='Moscow'
        temp='16578'
        weather='cloudy'
        date='11.02.565'
        />)

        expect(rowComponent.text()).toContain('Moscow')
    expect(rowComponent.text()).toContain('16578')
    expect(rowComponent.text()).toContain('11.02.565')
    expect(rowComponent.text()).toContain('cloudy')
  })

  it('clicking the save-button twice calls event handler twice', () => {
  
    const mockHandler = jest.fn()
  
    const rowComponent = shallow(<CityRow
        onClick={mockHandler}

      />
    )
    const button = rowComponent.find('.save')
    button.simulate('click')
    button.simulate('click')
    expect(mockHandler.mock.calls.length).toBe(2)
   
  })
})