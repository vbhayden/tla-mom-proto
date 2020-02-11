module.exports = {

    /**
     * Object defining what Keycloak instance our adapter should target and how.
     * 
     * @typedef {Object} Verb 
     * @property {string} id - IRI for this verb.
     * @property {Object} display - Mapping between ISO language codes and the verb's representation in that language.
     */
    /**
     * Collection of all verbs compliant with the TLA MOM profile.
     */
    verbs: require("./lib/verbs"),
    
    /**
     * Definition of activity types expected in the object.definition.type property.
     */
    activityTypes: require("./lib/activityTypes"),

    /**
     * Collection of all verbs compliant with the TLA MOM profile.
     */
    resultExtensions: require("./lib/resultExtensions"),

    /**
     * Collection of all verbs compliant with the TLA MOM profile.
     */
    contextExtensions: require("./lib/contextExtensions"),
    
    /**
     * Checks whether or not a given verb is considered Authoritative.
     * @param {Verb} verb - Verb to check. 
     * @returns {boolean} True if verb.id matches a known authoritative verb.
     */
    isVerbAuthoritative(verb) {
        switch (verb.id) {
            case this.verbs.inferred.id:
                return true;
            case this.verbs.certified.id:
                return true;
            case this.verbs.verified.id:
                return true;
            case this.verbs.asserted.id:
                return true;

            default:
                return false;
        }
    },

    /**
     * Checks if the statement uses a verb that is considered Authoritative.
     * @param {Object} statement - Statement to check.
     * @returns {boolean} True if statement.verb.id matches a known Authoritative verb.
     */
    isStatementAuthoritative(statement) {
        return this.isVerbAuthoritative(statement.verb)
    },
}
