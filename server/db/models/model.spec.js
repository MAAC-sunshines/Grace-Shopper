/* global describe beforeEach it */

const chai = require('chai');
const expect = chai.expect;

const db = require('../index')
const User = db.model('user')
const Instrument = db.model('instrument')

describe('User model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('instanceMethods', () => {
    describe('correctPassword', () => {
      let cody

      beforeEach(() => {
        return User.create({
          email: 'cody@puppybook.com',
          password: 'bones'
        })
          .then(user => {
            cody = user
          })
      })

      xit('returns true if the password is correct', () => {
        expect(cody.correctPassword('bones')).to.be.equal(true)
      })

      xit('returns false if the password is incorrect', () => {
        expect(cody.correctPassword('bonez')).to.be.equal(false)
      })
    }) // end describe('correctPassword')
  }) // end describe('instanceMethods')
}) // end describe('User model')

describe('Instrument model', () => {

  beforeEach(() => {
    return db.sync({force: true})
  })

  let createdInstrument;

  beforeEach(() => {
    createdInstrument = Instrument.build({
      name: 'Accordian',
      type: 'aerophone',
      imageUrl: 'https://dummyimage.com/600x400/000/fff',
      cost: 500,
      description: 'cool description'
    })
  })

  it('creates an instance of Instrument', () => {
    expect(createdInstrument).to.be.equal.to(createdInstrument)
  })


})
