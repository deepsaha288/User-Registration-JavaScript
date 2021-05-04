
const chai = require('chai')
const { checkValidation } = require('./Utility')
const expect = chai.expect
const Utility = require('./Utility')

describe("test for userPhoneNumber()", () => {

	it("should return true for  userPhoneNumber", () => {
		expect(Utility.userPhoneNumber("+91 9916522077")).to.be.true
	})
	it("should return false for  userPhoneNumber", () => {
		expect(Utility.userPhoneNumber("+919916522077")).to.be.false
	})
})
