/* global describe beforeEach it */
//how to test the connection to the store? Ashi referenced this...

import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { AllInstruments } from './AllInstruments'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('AllInstruments', () => {
  let instrumentName;

  beforeEach(() => {
    instrumentName = shallow(<AllInstruments />)
  })

  it('renders the instrument name in an h3', () => {
    expect(instrumentName.find('h3').text()).to.be.equal('')
  })
})

