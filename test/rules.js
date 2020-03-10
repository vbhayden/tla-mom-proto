const chai = require("chai");

const mom = require("../index")
const conformance = require("../lib/conformance")
const conformanceHelpers = require("../lib/conformance/helpers")

const valids = require("./samples/valid")
const invalids = require("./samples/invalid")

describe("MOM Statement Rule Conformance", () => {

    it("Should handle retrieving dot-pathing correctly", async() => {

        let obj = {
            verb: mom.verbs.abandoned,
            extensions: {
                [mom.contextExtensions.DEP]: 123
            }
        }

        let verb = conformanceHelpers.atDotPath(obj, "$.verb.id")
        chai.expect(verb).to.equal(mom.verbs.abandoned.id)

        let extension = conformanceHelpers.atDotPath(obj, `$.extensions['${mom.contextExtensions.DEP}']`)
        chai.expect(extension).to.equal(123)
    })

    it("Should handle setting dot-pathing correctly", async() => {

        let obj = {}
        let name = "my-name!"
        let home = "https://www.adlnet.gov"
        let namePath = "$.actor.account.name"
        let homePath = "$.actor.account.homePage"

        conformanceHelpers.setDotPath(obj, namePath, name)
        conformanceHelpers.setDotPath(obj, homePath, home)

        chai.expect(obj.actor.account.name).to.equal(name)
        chai.expect(obj.actor.account.homePage).to.equal(home)
    })

    it("Should pass valid statements", async() => {

        let results = valids.filter(conformance.conformant)
        chai.expect(results.length).to.equal(valids.length)
    })
    
    it("Should fail invalid statements", async() => {

        let results = invalids.filter(conformance.conformant)
        chai.expect(results.length).to.equal(0)
    })

    it("Should provide issues for why a statement failed", async() => {
        
        let issues = conformance.issues(invalids[0])

        chai.expect(issues).to.not.be.null
        chai.expect(Array.isArray(issues)).to.be.true
    })
})