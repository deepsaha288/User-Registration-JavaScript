
const chai = require('chai')
const { checkValidation } = require('./Utility')
const expect = chai.expect
const Utility = require('./Utility')

describe("test for nameEntryLast()", () => {

	it("should return true for  nameEntryLast", () => {
		expect(Utility.nameEntryLast("Saha")).to.be.true
	})
	it("should return false for  nameEntryLast", () => {
		expect(Utility.nameEntryLast("saha")).to.be.false
	})
})
