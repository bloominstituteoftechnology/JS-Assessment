////// STUDENTS: DO NOT MODIFY THIS FILE //////
////// STUDENTS: DO NOT MODIFY THIS FILE //////
////// STUDENTS: DO NOT MODIFY THIS FILE //////
////// STUDENTS: DO NOT MODIFY THIS FILE //////
////// STUDENTS: DO NOT MODIFY THIS FILE //////


/* eslint-env mocha */
if (typeof exports !== 'undefined') {
  // IGNORE: Test/Env Detection Stuff //
  // Node/Non-browser test env
  
  // TODO: Add any json/data imports
  var lukeSkywalker = require('../data/person-1.json')
  var leiaOrgana = require('../data/person-5.json')
  var obiWanKenobi = require('../data/person-10.json')

  var chai = require('chai')
  var {
    getName,
    getHome,
    firstStarshipCost
    // TODO: Add all functions to export/test here
  } = require('../index.js')
}
var expect = chai.expect

// TODO: Add test `describe` blocks here

// Example:
describe('getName()', () => {
  it('expected name for `Luke`', () => { expect(getName(lukeSkywalker)).to.eq(`Luke Skywalker`) })
  it('expected name for `Leia`', () => { expect(getName(leiaOrgana)).to.eq(`Leia Organa`) })
  it('expected name for `Obi-Wan`', () => { expect(getName(obiWanKenobi)).to.eq(`Obi-Wan Kenobi`) })
})
describe('getHome()', () => {
  it('expected home for `Luke`', () => { expect(getHome(lukeSkywalker)).to.contain(`Tatooine`) })
  it('expected name for `Leia`', () => { expect(getHome(leiaOrgana)).to.contain(`Alderaan`) })
  it('expected name for `Obi-Wan`', () => { expect(getHome(obiWanKenobi)).to.contain(`Stewjon`) })
})
describe('firstStarshipCost()', () => {
  it('expected firstStarshipCost for `Luke`', () => { expect(firstStarshipCost(lukeSkywalker)).to.eq(149999) })
  it('expected firstStarshipCost for `Leia`', () => { expect(firstStarshipCost(leiaOrgana)).to.eq(null) })
  it('expected firstStarshipCost for `Obi-Wan`', () => { expect(firstStarshipCost(obiWanKenobi)).to.eq(180000) })
})



