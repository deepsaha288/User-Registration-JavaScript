
const chai = require('chai')
const { checkValidation } = require('./Utility')
const expect = chai.expect
const Utility = require('./Utility')

describe("test for userEmail()", () => {

	it("should return true for  userEmail", () => {
		expect(Utility.userEmail("deepsaha9@gmail.com")).to.be.true
	})
	it("should return false for  userEmail", () => {
		expect(Utility.userEmail("Deepsaha9gmail.com")).to.be.false
	})
})
