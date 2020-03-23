const spec = require("../../mom")
const helpers = require("./helpers")

const REQUIRED = "included"
const EXCLUDED = "excluded"

var verbRulesMap = {}
var generalRules = []

function interpretRule(rule) {
    let ruleFunc = statement => {
        let prop = helpers.atDotPath(statement, rule.location)

        if (rule.presence == REQUIRED) {
            if (rule.all)
                return rule.all.includes(prop)

            if (rule.any)
                return rule.any.includes(prop)

            return prop != undefined
        }

        else if (rule.presence == EXCLUDED)
            return prop == undefined

        else
            return true
    }

    ruleFunc.rule = rule
    return ruleFunc
}

spec.templates.forEach(template => {
    if (template.verb)
        verbRulesMap[template.verb] = template.rules.map(interpretRule)
    else
        generalRules = [...generalRules, ...template.rules.map(interpretRule)]
})

const findIssues = (statement) => {

    let issues = []
    if (!statement.verb || !statement.actor || !statement.object)
        issues.push("Statement must have an actor, verb, and object")
   
    let failedRules = generalRules.filter(ruleFunc => !ruleFunc(statement))
    if (failedRules.length > 0)
        issues = [...issues, ...failedRules.map(func => func.rule)]

    let verbRules = verbRulesMap[statement.verb.id]
    let failedVerbRules = verbRules ? verbRules.filter(ruleFunc => !ruleFunc(statement)) : []
    if (failedVerbRules.length > 0)
        issues = [...issues, ...failedVerbRules.map(func => func.rule)]

    return issues
}

module.exports.conformant = (statement) => findIssues(statement).length == 0
module.exports.issues = (statement) => findIssues(statement)