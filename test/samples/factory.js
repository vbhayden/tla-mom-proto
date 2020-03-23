const mom = require("../../index")
const uuid = require("uuid").v4

const HOMEPAGE = "https://example.com/auth/"
const ACTIVITY = "https://example.com/activity/"

const factory = {

    buildBasic: () => {
        return {
            actor: factory.accountActor(HOMEPAGE, uuid(), "Generic Actor"),
            verb: mom.verbs.captured,
            object: {
                ...factory.object(ACTIVITY),
                definition: {
                    type: mom.activityTypes.activity
                }
            }
        }
    },

    generic: () => {
        return {
            ...factory.buildBasic(),
            timestamp: new Date().toISOString(),
            id: uuid(),
            authority: {
                objectType: "Agent",
                account: {
                    homePage: "https://authority.com",
                    name: uuid()
                }
            }
        }
    },

    accountActor: (homePage, id, name) => {
        return {
            name, 
            account: {
                homePage,
                name: id
            }
        }
    },

    result: (score, success, completion, response, ) => {
        return {

        }
    },

    object: (id, extensions) => {
        return { id, extensions }
    },
}

module.exports = factory