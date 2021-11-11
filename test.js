
const chai = require('chai')
const { checkValidation } = require('./Utility')
const expect = chai.expect
const Utility = require('./Utility')

describe("test for userPassword()", () => {

	it("should return true for  userPassword", () => {
		expect(Utility.userPassword(" Deepsaha123#")).to.be.true
	})
	it("should return false for  userPassword", () => {
		expect(Utility.userPassword("deepsaha123")).to.be.false
	})
})
