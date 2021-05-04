
const chai = require('chai')
const { checkValidation } = require('./Utility')
const expect = chai.expect
const Utility =require('./Utility')

describe("test for nameEntryFirst()", () => {

	it("should return true for  nameEntryFirst", ()=> {
		expect(Utility.nameEntryFirst("Deep")).to.be.true
	})
	it("should return false for  nameEntryFirst", ()=> {
		expect(Utility.nameEntryFirst("deep")).to.be.false
	})
})


