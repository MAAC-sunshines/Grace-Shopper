/* global describe beforeEach afterEach it */

import {expect} from 'chai'
import {me, logout} from './user'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'
import history from '../history'
import {fetchInstruments} from '../reducers/instruments'

const middlewares = [thunkMiddleware]
const mockStore = configureMockStore(middlewares)

describe('thunk creators', () => {
  let store
  let mockAxios

  const initialState = {user: {}, allInstruments:[]}

  beforeEach(() => {
    mockAxios = new MockAdapter(axios)
    store = mockStore(initialState)
  })

  afterEach(() => {
    mockAxios.restore()
    store.clearActions()
  })

  describe('me', () => {
    it('eventually dispatches the GET USER action', () => {
      const fakeUser = {email: 'Cody'}
      mockAxios.onGet('/auth/me').replyOnce(200, fakeUser)
      return store.dispatch(me())
        .then(() => {
          const actions = store.getActions()
          expect(actions[0].type).to.be.equal('GET_USER')
          expect(actions[0].user).to.be.deep.equal(fakeUser)
        })
    })
  })

  describe('logout', () => {
    it('logout: eventually dispatches the REMOVE_USER action', () => {
      mockAxios.onPost('/auth/logout').replyOnce(204)
      return store.dispatch(logout())
        .then(() => {
          const actions = store.getActions()
          expect(actions[0].type).to.be.equal('REMOVE_USER')
          expect(history.location.pathname).to.be.equal('/login')
        })
    })
  })

  describe('all instruments', () => {
    it('gets all instruments', () => {
      const testAllInstruments = ['violin', 'cello', 'bass', 'flute', 'bassoon']
      mockAxios.onGet('/api/instruments').replyOnce(200, testAllInstruments)
      console.log(store.getActions())
      return store.dispatch(fetchInstruments())
        .then(() => {
          const actions = store.getActions()
          expect(actions[0].type).to.be.equal('GET_ALL_INSTRUMENTS')
          expect(actions[0].allInstruments).to.be.deep.equal(testAllInstruments)
        })
        // .catch(err => console.error(err))
    })
  })
})
