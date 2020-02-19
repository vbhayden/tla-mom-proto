const spec = require("../../mom")
const helpers = require("./helpers")

const REQUIRED = "required"
const EXCLUDED = "excluded"

var verbRulesMap = {}
var generalRules = []

function interpretRule(rule) {
    return statement => {
        let prop = helpers.atDotPath(statement, rule.location)

        if (rule.presence == REQUIRED)
            return rule.all || rule.any ? rule.all.contains(prop) || rule.any.contains(prop) : prop != undefined
        
        else if (rule.presence == EXCLUDED)
            return prop == undefined

        else
            return true
    }
}

spec.templates.forEach(template => {
    if (template.verb)
        verbRulesMap[template.verb] = template.rules.map(interpretRule)
    else
        generalRules = [...generalRules, ...template.rules.map(interpretRule)]
})

module.exports = function(statement) {

    if (!statement.verb || !statement.actor || !statement.object)
        return false
   
    if (generalRules.filter(ruleFunc => ruleFunc(statement)).length < generalRules.length)
        return false

    let verbRules = verbRulesMap[statement.verb.id]
    if (verbRules && verbRules.filter(ruleFunc => ruleFunc(statement)).length < verbRules.length)
        return false

    return true
}