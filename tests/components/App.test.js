import React from 'react'
import ReactDom from 'react-dom'
import {shallow, mount, render} from 'enzyme'

import App from '../../client/components/App.jsx';

describe('test',()=>{
  it('should exist',()=>{
    const wrapper = shallow(<App />)

    expect((wrapper).find('.App').exists()).toBe(true);
  })
})
