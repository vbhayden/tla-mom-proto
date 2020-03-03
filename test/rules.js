const chai = require("chai");

const mom = require("../index")
const conformance = require("../lib/conformance")
const conformanceHelpers = require("../lib/conformance/helpers")

const valids = require("./samples/valid")
const invalids = require("./samples/invalid")

describe("MOM Statement Rule Conformance", () => {

    it("Should handle dot-pathing correctly", async() => {

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

    it("Should pass valid statements", async() => {

        let results = valids.filter(conformance)
        chai.expect(results.length).to.equal(valids.length)
    })
    
    it("Should fail invalid statements", async() => {

        let results = invalids.filter(conformance)
        chai.expect(results.length).to.equal(0)
    })

    it("Should provide issues for why a statement failed", async() => {
        
        let issues = conformance.issues(invalids[0])
        console.log(issues)
    })
})