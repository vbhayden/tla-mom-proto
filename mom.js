module.exports = {
  "@context": "https://w3id.org/xapi/profiles/context",
  "id": "https://w3id.org/xapi/tla",
  "type": "Profile",
  "prefLabel": {
    "en": "TLA Profile"
  },
  "definition": {
    "en": "The TLA profile includes Verbs, Activity Types, Extensions, and xAPI document definitions used to represent distributed learning experiences in xAPI."
  },
  "conformsTo": "https://w3id.org/xapi/profiles#1.0",
  "versions": [
    {
      "id": "https://w3id.org/xapi/tla/v0.10",
      "generatedAtTime": "2019-07-19T14:25:59.295Z"
    }
  ],
  "author": {
    "type": "Organization",
    "name": "Advanced Distributed Learning (ADL) Initiative"
  },
  "concepts": [
    {
      "type": "Verb",
      "id": "https://w3id.org/xapi/tla/verbs/organized",
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "prefLabel": {
        "en": "organized"
      },
      "definition": {
        "en": "Indicates the actor filtered content that aligns to specific goal"
      }
    },
    {
      "type": "Verb",
      "id": "https://w3id.org/xapi/tla/verbs/curated",
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "prefLabel": {
        "en": "curated"
      },
      "definition": {
        "en": "Indicates the actor filtered goals associated with select content, usually listing what competencies are demonstrated in recently viewed content."
      }
    },
    {
      "type": "Verb",
      "id": "https://w3id.org/xapi/tla/verbs/projected",
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "prefLabel": {
        "en": "projected"
      },
      "definition": {
        "en": "Indicates the actor received list of goal recommendations over time, based on selected goal with recursive depth, what set of content can achieve mastery in the ordered sub-goals"
      }
    },
    {
      "type": "Verb",
      "id": "https://w3id.org/xapi/tla/verbs/recommended",
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "prefLabel": {
        "en": "recommended"
      },
      "definition": {
        "en": "Indicates the learner received the recommendation to follow a career path, work towards a learning objective, or perform a learning activity from the actor"
      }
    },
    {
      "type": "Verb",
      "id": "https://w3id.org/xapi/tla/verbs/planned",
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "prefLabel": {
        "en": "planned"
      },
      "definition": {
        "en": "Indicates that the actor assigned themselves a new learning goal, without needing approval"
      }
    },
    {
      "type": "Verb",
      "id": "https://w3id.org/xapi/tla/verbs/approved",
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "relatedMatch": [
        "https://w3id.org/xapi/dod-isd/verbs/approved"
      ],
      "prefLabel": {
        "en": "approved"
      },
      "definition": {
        "en": "Indicates an OICS approved a requested activity for the given learner"
      }
    },
    {
      "type": "Verb",
      "id": "https://w3id.org/xapi/tla/verbs/augmented",
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "prefLabel": {
        "en": "augmented"
      },
      "definition": {
        "en": "Indicates the actor searched content on an active learning goal, viewing what other goals/branches can be related based on an active goal tree"
      }
    },
    {
      "type": "Verb",
      "id": "https://w3id.org/xapi/tla/verbs/explored",
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "prefLabel": {
        "en": "explored"
      },
      "definition": {
        "en": "Indicates the actor searched active learning goals related to specific content, viewing what other content may trigger related goals, based on active goal and recently completed content"
      }
    },
    {
      "type": "Verb",
      "id": "https://w3id.org/xapi/tla/verbs/clarified",
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "prefLabel": {
        "en": "clarified"
      },
      "definition": {
        "en": "Indicates the actor queried what other content may also reinforce the current learning goal, after completing content"
      }
    },
    {
      "type": "Verb",
      "id": "https://w3id.org/xapi/tla/verbs/directed",
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "prefLabel": {
        "en": "directed"
      },
      "definition": {
        "en": "Indicates the actor assigned a learning goal to a learner"
      }
    },
    {
      "type": "Verb",
      "id": "https://w3id.org/xapi/tla/verbs/scheduled",
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "prefLabel": {
        "en": "scheduled"
      },
      "definition": {
        "en": "Indicates the actor scheduled an activity or lesson"
      }
    },
    {
      "type": "Verb",
      "id": "https://w3id.org/xapi/tla/verbs/evaluated",
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "prefLabel": {
        "en": "evaluated"
      },
      "definition": {
        "en": "Indicates the learner(s) appeared in a Measure of Effectiveness (MOE) search (Learner competency state vs readiness)"
      }
    },
    {
      "type": "Verb",
      "id": "https://w3id.org/xapi/tla/verbs/tracked",
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "prefLabel": {
        "en": "tracked"
      },
      "definition": {
        "en": "Indicates the learner(s) appeared in a competency search based on their competency state"
      }
    },
    {
      "type": "Verb",
      "id": "https://w3id.org/xapi/tla/verbs/surveyed",
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "prefLabel": {
        "en": "surveyed"
      },
      "definition": {
        "en": "Indicates the learner(s) appeared in a Measure of Performance (MOP) search (learner grade in assessment)"
      }
    },
    {
      "type": "Verb",
      "id": "https://w3id.org/xapi/tla/verbs/assessed",
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "prefLabel": {
        "en": "assessed"
      },
      "definition": {
        "en": "Indicates the actor completed assessments in a way that will cause a change in their authoritative learner state"
      }
    },
    {
      "type": "Verb",
      "id": "https://w3id.org/xapi/tla/verbs/contextualized",
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "prefLabel": {
        "en": "contextualized"
      },
      "definition": {
        "en": "Indicates the user performed a number of connected learning activities that should result in a change in their authoritative learner state"
      }
    },
    {
      "type": "Verb",
      "id": "https://w3id.org/xapi/tla/verbs/located",
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "prefLabel": {
        "en": "located"
      },
      "definition": {
        "en": "Indicates the actor's competency state needs to be updated based on completed content"
      }
    },
    {
      "type": "Verb",
      "id": "https://w3id.org/xapi/tla/verbs/socialized",
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "prefLabel": {
        "en": "socialized"
      },
      "definition": {
        "en": "Indicates the learner interacted with \"Wild\" (out of network) content in a social environment"
      }
    },
    {
      "type": "Verb",
      "id": "https://w3id.org/xapi/tla/verbs/captured",
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "prefLabel": {
        "en": "captured"
      },
      "definition": {
        "en": "Indicates the learner interacted with \"Wild\" (out of network) content"
      }
    },
    {
      "type": "Verb",
      "id": "https://w3id.org/xapi/tla/verbs/asserted",
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "prefLabel": {
        "en": "asserted"
      },
      "definition": {
        "en": "Indicates the learner has provided sufficient evidence to update the learner's measure of competence in a given competency"
      }
    },
    {
      "type": "Verb",
      "id": "https://w3id.org/xapi/tla/verbs/validated",
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "prefLabel": {
        "en": "validated"
      },
      "definition": {
        "en": "Indicates an OICS approved a change to a competency framework within the TLA that will affect the learners’ states"
      }
    },
    {
      "type": "Verb",
      "id": "https://w3id.org/xapi/tla/verbs/inferred",
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "prefLabel": {
        "en": "inferred"
      },
      "definition": {
        "en": "Indicates an authoritative source changed a learner's competency assertions based on a valid competency framework change"
      }
    },
    {
      "type": "Verb",
      "id": "https://w3id.org/xapi/tla/verbs/qualified",
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "prefLabel": {
        "en": "qualified"
      },
      "definition": {
        "en": "Indicates the learner meets all the requirements for a badge, but hasn't been awarded the badge yet"
      }
    },
    {
      "type": "Verb",
      "id": "https://w3id.org/xapi/tla/verbs/conferred",
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "prefLabel": {
        "en": "conferred"
      },
      "definition": {
        "en": "Indicates the OICS conferred a badge to the learner in the learner context extension"
      }
    },
    {
      "type": "Verb",
      "id": "https://w3id.org/xapi/tla/verbs/certified",
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "prefLabel": {
        "en": "certified"
      },
      "definition": {
        "en": "Indicates the learner received an accreditation by an authoritative source to perform a given job or task"
      }
    },
    {
      "type": "Verb",
      "id": "https://w3id.org/xapi/tla/verbs/verified",
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "prefLabel": {
        "en": "verified"
      },
      "definition": {
        "en": "Indicates the authoritative source verified evidence of learning from a non-authoritative source as reliable data"
      }
    },
    {
      "type": "Verb",
      "id": "https://w3id.org/xapi/tla/verbs/recruited",
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "prefLabel": {
        "en": "recruited"
      },
      "definition": {
        "en": "Indicates the actor recruited the learner to join the ecosystem"
      }
    },
    {
      "type": "Verb",
      "id": "https://w3id.org/xapi/tla/verbs/appraised",
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "prefLabel": {
        "en": "appraised"
      },
      "definition": {
        "en": "Indicates the learner met entry criteria for jobs and assigned a career trajectory"
      }
    },
    {
      "type": "Verb",
      "id": "https://w3id.org/xapi/tla/verbs/detailed",
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "prefLabel": {
        "en": "detailed"
      },
      "definition": {
        "en": "OICS detailed the learner to a specific job"
      }
    },
    {
      "type": "Verb",
      "id": "https://w3id.org/xapi/tla/verbs/mobilized",
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "prefLabel": {
        "en": "mobilized"
      },
      "definition": {
        "en": "OICS mobilized the learner to a state of on duty"
      }
    },
    {
      "type": "Verb",
      "id": "https://w3id.org/xapi/tla/verbs/employed",
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "prefLabel": {
        "en": "employed"
      },
      "definition": {
        "en": "Indicates OICS employs the actor such that they started work doing their job"
      }
    },
    {
      "type": "Verb",
      "id": "https://w3id.org/xapi/tla/verbs/schooled",
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "prefLabel": {
        "en": "schooled"
      },
      "definition": {
        "en": "Indicates OICS has enrolled the learner in a schooling system"
      }
    },
    {
      "type": "Verb",
      "id": "https://w3id.org/xapi/tla/verbs/promoted",
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "prefLabel": {
        "en": "promoted"
      },
      "definition": {
        "en": "Indicates OICS has changed a learner’s rank, either up or down"
      }
    },
    {
      "type": "Verb",
      "id": "https://w3id.org/xapi/tla/verbs/screened",
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "prefLabel": {
        "en": "screened"
      },
      "definition": {
        "en": "Indicates OICS screened learner for a potentially narrower career trajectory, and passed through a \"gate\" within their career trajectory"
      }
    },
    {
      "type": "Verb",
      "id": "https://w3id.org/xapi/tla/verbs/selected",
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "prefLabel": {
        "en": "selected"
      },
      "definition": {
        "en": "Indicates OICS selected learner based on criteria for a potentially wider career trajectory, opening up new career possibilities"
      }
    },
    {
      "type": "Verb",
      "id": "https://w3id.org/xapi/tla/verbs/transitioned",
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "prefLabel": {
        "en": "transitioned"
      },
      "definition": {
        "en": "Indicates the actor changed career paths, putting them on a completely different and brand new career trajectory"
      }
    },
    {
      "type": "Verb",
      "id": "https://w3id.org/xapi/tla/verbs/released",
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "prefLabel": {
        "en": "released"
      },
      "definition": {
        "en": "Indicates OICS released the learner from the learning environment"
      }
    },
    {
      "type": "Verb",
      "id": "https://w3id.org/xapi/tla/verbs/restricted",
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "prefLabel": {
        "en": "restricted"
      },
      "definition": {
        "en": "Indicates OICS temporarily restricted the learner from some (possibly all) participation within the learning environment"
      }
    },
    {
      "type": "ActivityType",
      "id": "https://w3id.org/xapi/tla/activity-types/competency",
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "prefLabel": {
        "en": "competency"
      },
      "definition": {
        "en": "A knowledge, skill, ability, or other object needed to perform in a given task"
      }
    },
    {
      "type": "ActivityType",
      "id": "https://w3id.org/xapi/tla/activity-types/activity",
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "prefLabel": {
        "en": "activity"
      },
      "definition": {
        "en": "Any generic activity an actor can interact with, that is not an assessment"
      }
    },
    {
      "type": "ActivityType",
      "id": "https://w3id.org/xapi/tla/activity-types/assessment",
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "prefLabel": {
        "en": "assessment"
      },
      "definition": {
        "en": "Any generic exercise that assesses the user's level of competence."
      }
    },
    {
      "type": "ActivityType",
      "id": "https://w3id.org/xapi/tla/activity-types/content_set",
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "prefLabel": {
        "en": "content set"
      },
      "definition": {
        "en": "Any generic collection of activities and/or assessment activities"
      }
    },
    {
      "type": "ActivityType",
      "id": "https://w3id.org/xapi/tla/activity-types/badge",
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "prefLabel": {
        "en": "badge"
      },
      "definition": {
        "en": "An online badge that is earned after achieving multiple related competencies"
      }
    },
    {
      "type": "ActivityType",
      "id": "https://w3id.org/xapi/tla/activity-types/credential",
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "prefLabel": {
        "en": "credential"
      },
      "definition": {
        "en": "An authrotative statement that the recipient can perform a task"
      }
    },
    {
      "type": "ActivityType",
      "id": "https://w3id.org/xapi/tla/activity-types/career",
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "prefLabel": {
        "en": "career"
      },
      "definition": {
        "en": "An outline of jobs and their requirements in a career, usually used to outline the expected learning path"
      }
    },
    {
      "type": "ActivityType",
      "id": "https://w3id.org/xapi/tla/activity-types/career_state",
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "prefLabel": {
        "en": "career state"
      },
      "definition": {
        "en": "An attribute of one service that has distinct competency requirements, levels of mastery, training requirements associated with it"
      }
    },
    {
      "type": "ActivityType",
      "id": "https://w3id.org/xapi/tla/activity-types/job_duty_gig",
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "prefLabel": {
        "en": "job/duty/gig"
      },
      "definition": {
        "en": "An outline of the duties and requirements to perform these duties for a given position"
      }
    },
    {
      "id": "https://w3id.org/xapi/tla/extensions/confidence",
      "type": "ContextExtension",
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "prefLabel": {
        "en": "confidence"
      },
      "definition": {
        "en": "The measure of a learner's acquisition of a competency according to the asserting authority"
      },
      "recommendedVerbs": [
        "https://w3id.org/xapi/tla/verbs/asserted"
      ]
    },
    {
      "id": "https://w3id.org/xapi/tla/extensions/evidence",
      "type": "ContextExtension",
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "prefLabel": {
        "en": "evidence"
      },
      "definition": {
        "en": "An array of the evidence to support an assertion"
      },
      "recommendedVerbs": [
        "https://w3id.org/xapi/tla/verbs/asserted"
      ]
    },
    {
      "id": "https://w3id.org/xapi/tla/extensions/due_date",
      "type": "ContextExtension",
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "prefLabel": {
        "en": "due date"
      },
      "definition": {
        "en": "The ISO time stamp that an activity is due"
      },
      "recommendedVerbs": [
        "https://w3id.org/xapi/tla/verbs/scheduled"
      ]
    },
    {
      "id": "https://w3id.org/xapi/tla/extensions/permanent_change_of_station",
      "type": "ContextExtension",
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "prefLabel": {
        "en": "permanent change of station"
      },
      "definition": {
        "en": "A boolean marking if this is a PCS or a different detail event"
      },
      "recommendedVerbs": [
        "https://w3id.org/xapi/tla/verbs/detailed"
      ]
    },
    {
      "id": "https://w3id.org/xapi/tla/extensions/unit_identification_code",
      "type": "ContextExtension",
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "prefLabel": {
        "en": "unit identification code"
      },
      "definition": {
        "en": "A unique code for the learner's unit"
      },
      "recommendedVerbs": [
        "https://w3id.org/xapi/tla/verbs/detailed",
        "https://w3id.org/xapi/tla/verbs/mobilized",
        "https://w3id.org/xapi/tla/verbs/employed",
        "https://w3id.org/xapi/tla/verbs/schooled"
      ]
    },
    {
      "id": "https://w3id.org/xapi/tla/extensions/location",
      "type": "ContextExtension",
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "prefLabel": {
        "en": "location"
      },
      "definition": {
        "en": "The physical location of the statement's object"
      },
      "recommendedVerbs": [
        "https://w3id.org/xapi/tla/verbs/detailed",
        "https://w3id.org/xapi/tla/verbs/mobilized",
        "https://w3id.org/xapi/tla/verbs/employed",
        "https://w3id.org/xapi/tla/verbs/schooled"
      ]
    },
    {
      "id": "https://w3id.org/xapi/tla/extensions/expiration",
      "type": "ContextExtension",
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "prefLabel": {
        "en": "expiration"
      },
      "definition": {
        "en": "The date the screening or selection expires"
      },
      "recommendedVerbs": [
        "https://w3id.org/xapi/tla/verbs/selected",
        "https://w3id.org/xapi/tla/verbs/screened"
      ]
    },
    {
      "id": "https://w3id.org/xapi/tla/extensions/reason",
      "type": "ContextExtension",
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "prefLabel": {
        "en": "reason"
      },
      "definition": {
        "en": "The reason the learner has left the learning environment"
      },
      "recommendedVerbs": [
        "https://w3id.org/xapi/tla/verbs/released"
      ]
    },
    {
      "id": "https://w3id.org/xapi/tla/extensions/restriction",
      "type": "ContextExtension",
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "prefLabel": {
        "en": "restriction reason"
      },
      "definition": {
        "en": "The reason the learner is restricted"
      },
      "recommendedVerbs": [
        "https://w3id.org/xapi/tla/verbs/restricted"
      ]
    },
    {
      "id": "https://w3id.org/xapi/tla/extensions/DEP",
      "type": "ContextExtension",
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "prefLabel": {
        "en": "DEP"
      },
      "definition": {
        "en": "A boolean indicating if the user is performing learning activities while in DEP"
      }
    },
    {
      "id": "https://w3id.org/xapi/tla/extensions/recommendation_order",
      "type": "ResultExtension",
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "prefLabel": {
        "en": "recommendation order"
      },
      "definition": {
        "en": "The order of recommendations within a curated or projected event"
      },
      "recommendedVerbs": [
        "https://w3id.org/xapi/tla/verbs/curated",
        "https://w3id.org/xapi/tla/verbs/projected"
      ]
    }
  ],
  "templates": [
    {
      "id": "https://w3id.org/xapi/tla#generalrestrictions",
      "type": "StatementTemplate",
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "prefLabel": {
        "en": "General restrictions"
      },
      "definition": {
        "en": "Restrictions for all tla-defined Statements"
      },
      "rules": [
        {
          "location": "$.actor",
          "presence": "included"
        },
        {
          "location": "$.authority",
          "presence": "included"
        },
        {
          "location": "$.id",
          "presence": "included"
        },
        {
          "location": "$.timestamp",
          "presence": "included"
        }
      ]
    },
    {
      "id": "https://w3id.org/xapi/tla/v0.10/templates#waived",
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "type": "StatementTemplate",
      "prefLabel": {
        "en": "waived"
      },
      "definition": {
        "en": "Indicates that the learning activity requirements were met by means other than completing the activity. A waived statement is used to indicate that the activity may be skipped by the actor."
      },
      "verb": "https://w3id.org/xapi/adl/verbs/waived",
      "rules": [
        {
          "location": "$.object.objectType",
          "presence": "included",
          "all": [
            "Activity"
          ]
        },
        {
          "location": "$.object.id",
          "presence": "included"
        },
        {
          "location": "$.object.definition.type",
          "presence": "included",
          "any": [
            "https://w3id.org/xapi/tla/activity-types/activity",
            "https://w3id.org/xapi/tla/activity-types/assessment",
            "https://w3id.org/xapi/tla/activity-types/competency"
          ]
        }
      ]
    },
    {
      "id": "https://w3id.org/xapi/tla#launched",
      "type": "StatementTemplate",
      "prefLabel": {
        "en": "launched"
      },
      "definition": {
        "en": "Indicates the actor attempted to start up an activity"
      },
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "verb": "https://adlnet.gov/expapi/verbs/launched",
      "rules": [
        {
          "location": "$.object.objectType",
          "presence": "included",
          "all": [
            "Activity"
          ]
        },
        {
          "location": "$.context.ContextActivities",
          "presence": "excluded"
        },
        {
          "location": "$.object.id",
          "presence": "included"
        },
        {
          "location": "$.object.definition.type",
          "presence": "recommended",
          "any": [
            "https://w3id.org/xapi/tla/activity-types/activity",
            "https://w3id.org/xapi/tla/activity-types/assessment"
          ]
        }
      ]
    },
    {
      "id": "https://w3id.org/xapi/tla#completed",
      "type": "StatementTemplate",
      "prefLabel": {
        "en": "completed"
      },
      "definition": {
        "en": "Indicates the actor finished or concluded the activity normally"
      },
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "verb": "https://adlnet.gov/expapi/verbs/completed",
      "rules": [
        {
          "location": "$.object.objectType",
          "presence": "included",
          "all": [
            "Activity"
          ]
        },
        {
          "location": "$.result.completion",
          "presence": "included",
          "all": [
            true
          ]
        },
        {
          "location": "$.result.success",
          "presence": "included"
        },
        {
          "location": "$.result.duration",
          "presence": "recommended"
        },
        {
          "location": "$.object.id",
          "presence": "included"
        },
        {
          "location": "$.object.definition.type",
          "presence": "included",
          "any": [
            "https://w3id.org/xapi/tla/activity-types/activity",
            "https://w3id.org/xapi/tla/activity-types/assessment"
          ]
        }
      ]
    },
    {
      "id": "https://w3id.org/xapi/tla#passed",
      "type": "StatementTemplate",
      "prefLabel": {
        "en": "passed"
      },
      "definition": {
        "en": "Indicates the actor completed an activity to standard"
      },
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "verb": "https://adlnet.gov/expapi/verbs/passed",
      "rules": [
        {
          "location": "$.object.objectType",
          "presence": "included",
          "all": [
            "Activity"
          ]
        },
        {
          "location": "$.result.score.scaled",
          "presence": "recommended"
        },
        {
          "location": "$.result.success",
          "presence": "included",
          "all": [
            true
          ]
        },
        {
          "location": "$.result.completion",
          "presence": "included",
          "all": [
            true
          ]
        },
        {
          "location": "$.object.id",
          "presence": "included"
        },
        {
          "location": "$.object.definition.type",
          "presence": "included",
          "any": [
            "https://w3id.org/xapi/tla/activity-types/assessment"
          ]
        }
      ]
    },
    {
      "id": "https://w3id.org/xapi/tla#failed",
      "type": "StatementTemplate",
      "prefLabel": {
        "en": "failed"
      },
      "definition": {
        "en": "Indicates the actor did not complete an activity to standard"
      },
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "verb": "https://adlnet.gov/expapi/verbs/failed",
      "rules": [
        {
          "location": "$.authority",
          "presence": "included"
        },
        {
          "location": "$.object.objectType",
          "presence": "included",
          "all": [
            "Activity"
          ]
        },
        {
          "location": "$.result.score",
          "presence": "recommended"
        },
        {
          "location": "$.result.score.scaled",
          "presence": "recommended"
        },
        {
          "location": "$.result.success",
          "presence": "included",
          "all": [
            false
          ]
        },
        {
          "location": "$.result.completion",
          "presence": "included",
          "all": [
            true
          ]
        },
        {
          "location": "$.object.id",
          "presence": "included"
        },
        {
          "location": "$.object.definition.type",
          "presence": "included",
          "any": [
            "https://w3id.org/xapi/tla/activity-types/assessment"
          ]
        }
      ]
    },
    {
      "id": "https://w3id.org/xapi/tla/v0.10/templates#satisfied",
      "type": "StatementTemplate",
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "prefLabel": {
        "en": "satisfied"
      },
      "definition": {
        "en": "Indicates that the authority or activity provider determined the actor has fulfilled the criteria of the object or activity by means other than completing the activity"
      },
      "verb": "https://w3id.org/xapi/adl/verbs/satisfied",
      "rules": [
        {
          "location": "$.object.id",
          "presence": "included"
        },
        {
          "location": "$.object.objectType",
          "presence": "included",
          "all": [
            "Activity"
          ]
        },
        {
          "location": "$.object.definition.type",
          "presence": "included",
          "any": [
            "https://w3id.org/xapi/tla/activity-types/activity",
            "https://w3id.org/xapi/tla/activity-types/assessment"
          ]
        }
      ]
    },
    {
      "id": "https://w3id.org/xapi/tla#abandoned",
      "type": "StatementTemplate",
      "prefLabel": {
        "en": "abandoned"
      },
      "definition": {
        "en": "Indicates that the AU session was abnormally terminated by a learner's action (or due to a system failure)"
      },
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "verb": "https://w3id.org/xapi/adl/verbs/abandoned",
      "rules": [
        {
          "location": "$.result.duration",
          "presence": "recommended"
        },
        {
          "location": "$.result.completed",
          "presence": "included",
          "all": [
            "FALSE"
          ]
        },
        {
          "location": "$.object.objectType",
          "presence": "included",
          "all": [
            "Activity"
          ]
        },
        {
          "location": "$.object.id",
          "presence": "included"
        },
        {
          "location": "$.object.definition.type",
          "presence": "included",
          "any": [
            "https://w3id.org/xapi/tla/activity-types/assessment",
            "https://w3id.org/xapi/tla/activity-types/activity"
          ]
        }
      ]
    },
    {
      "id": "https://w3id.org/xapi/tla#terminated",
      "type": "StatementTemplate",
      "prefLabel": {
        "en": "terminated"
      },
      "definition": {
        "en": "Indicates the actor has completed their session normally"
      },
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "verb": "https://adlnet.gov/expapi/verbs/terminated",
      "rules": [
        {
          "location": "$.result.duration",
          "presence": "recommended"
        },
        {
          "location": "$.result.completed",
          "presence": "included"
        },
        {
          "location": "$.object.objectType",
          "presence": "included",
          "all": [
            "Activity"
          ]
        },
        {
          "location": "$.object.id",
          "presence": "included"
        },
        {
          "location": "$.object.definition.type",
          "presence": "included",
          "any": [
            "https://w3id.org/xapi/tla/activity-types/assessment",
            "https://w3id.org/xapi/tla/activity-types/activity"
          ]
        }
      ]
    },
    {
      "id": "https://w3id.org/xapi/tla#initialized",
      "type": "StatementTemplate",
      "prefLabel": {
        "en": "initialized"
      },
      "definition": {
        "en": "Indicates that the activity was started."
      },
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "verb": "https://adlnet.gov/expapi/verbs/initialized",
      "rules": [
        {
          "location": "$.result.duration",
          "presence": "excluded"
        },
        {
          "location": "$.result.completed",
          "presence": "excluded"
        },
        {
          "location": "$.object.id",
          "presence": "included"
        },
        {
          "location": "$.object.objectType",
          "presence": "included",
          "all": [
            "Activity"
          ]
        },
        {
          "location": "$.object.definition.type",
          "presence": "included",
          "any": [
            "https://w3id.org/xapi/tla/activity-types/assessment",
            "https://w3id.org/xapi/tla/activity-types/activity"
          ]
        }
      ]
    },
    {
      "id": "https://w3id.org/xapi/tla#recommended",
      "type": "StatementTemplate",
      "prefLabel": {
        "en": "recommended"
      },
      "definition": {
        "en": "Indicates the learner received the recommendation to follow a career path, work towards a learning objective, or perform a learning activity from the actor"
      },
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "verb": "https://w3id.org/xapi/tla/verbs/recommended",
      "rules": [
        {
          "location": "$.result.duration",
          "presence": "excluded"
        },
        {
          "location": "$.result.completed",
          "presence": "excluded"
        },
        {
          "location": "$.object.id",
          "presence": "included"
        },
        {
          "location": "$.object.objectType",
          "presence": "included"
        },
        {
          "location": "$.object.definition.type",
          "presence": "recommended",
          "any": [
            "https://w3id.org/xapi/tla/activity-types/content_set",
            "https://w3id.org/xapi/tla/activity-types/assessment",
            "https://w3id.org/xapi/tla/activity-types/activity",
            "https://w3id.org/xapi/tla/activity-types/career",
            "https://w3id.org/xapi/tla/activity-types/badge",
            "https://w3id.org/xapi/tla/activity-types/credential",
            "https://w3id.org/xapi/tla/activity-types/job_duty_gig"
          ]
        },
        {
          "location": "$.context.extensions['https://w3id.org/xapi/tla/extensions/learner']",
          "presence": "included"
        }
      ]
    },
    {
      "id": "https://w3id.org/xapi/tla#organized",
      "type": "StatementTemplate",
      "prefLabel": {
        "en": "organized"
      },
      "definition": {
        "en": "Indicates the actor filtered content that aligns to specific goal"
      },
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "verb": "https://w3id.org/xapi/tla/verbs/organized",
      "rules": [
        {
          "location": "$.result.duration",
          "presence": "excluded"
        },
        {
          "location": "$.result.completed",
          "presence": "excluded"
        },
        {
          "location": "$.object.id",
          "presence": "included"
        },
        {
          "location": "$.object.objectType",
          "presence": "included"
        },
        {
          "location": "$.object.definition.type",
          "presence": "recommended",
          "any": [
            "https://w3id.org/xapi/tla/activity-types/assessment",
            "https://w3id.org/xapi/tla/activity-types/activity",
            "https://w3id.org/xapi/tla/activity-types/content_set"
          ]
        }
      ]
    },
    {
      "id": "https://w3id.org/xapi/tla#curated",
      "type": "StatementTemplate",
      "prefLabel": {
        "en": "curated"
      },
      "definition": {
        "en": "Indicates the actor filtered goals associated with select content, usually listing what competencies are demonstrated in recently viewed content"
      },
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "verb": "https://w3id.org/xapi/tla/verbs/prioritized",
      "rules": [
        {
          "location": "$.result.duration",
          "presence": "excluded"
        },
        {
          "location": "$.result.completed",
          "presence": "excluded"
        },
        {
          "location": "$.object.id",
          "presence": "included"
        },
        {
          "location": "$.object.definition.type",
          "presence": "included",
          "any": [
            "https://w3id.org/xapi/tla/activity-types/career",
            "https://w3id.org/xapi/tla/activity-types/badge",
            "https://w3id.org/xapi/tla/activity-types/credential",
            "https://w3id.org/xapi/tla/activity-types/job_duty_gig",
            "https://w3id.org/xapi/tla/activity-types/competency"
          ]
        },
        {
          "location": "$.context.extensions['https://w3id.org/xapi/tla/extensions/evidence']",
          "presence": "included"
        }
      ]
    },
    {
      "id": "https://w3id.org/xapi/tla#projected",
      "type": "StatementTemplate",
      "prefLabel": {
        "en": "projected"
      },
      "definition": {
        "en": "Indicates the actor received a list of goal recommendations over time, based on selected goal with recursive depth, what set of content can achieve mastery in the ordered sub-goals"
      },
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "verb": "https://w3id.org/xapi/tla/verbs/projected",
      "rules": [
        {
          "location": "$.result.duration",
          "presence": "excluded"
        },
        {
          "location": "$.result.completed",
          "presence": "excluded"
        },
        {
          "location": "$.object.id",
          "presence": "included"
        },
        {
          "location": "$.object.definition.type",
          "presence": "recommended"
        },
        {
          "location": "$.result.extensions['https://w3id.org/xapi/tla/extensions/recommendation_order']",
          "presence": "included"
        }
      ]
    },
    {
      "id": "https://w3id.org/xapi/tla#planned",
      "type": "StatementTemplate",
      "prefLabel": {
        "en": "planned"
      },
      "definition": {
        "en": "Indicates that the actor assigned themselves a new learning goal, without needing approval"
      },
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "verb": "https://w3id.org/xapi/tla/verbs/planned",
      "rules": [
        {
          "location": "$.result.duration",
          "presence": "excluded"
        },
        {
          "location": "$.result.completed",
          "presence": "excluded"
        },
        {
          "location": "$.object.id",
          "presence": "included"
        },
        {
          "location": "$.object.definition.type",
          "presence": "included",
          "any": [
            "https://w3id.org/xapi/tla/activity-types/career",
            "https://w3id.org/xapi/tla/activity-types/badge",
            "https://w3id.org/xapi/tla/activity-types/credential",
            "https://w3id.org/xapi/tla/activity-types/job_duty_gig",
            "https://w3id.org/xapi/tla/activity-types/competency"
          ]
        }
      ]
    },
    {
      "id": "https://w3id.org/xapi/tla#voided",
      "type": "StatementTemplate",
      "prefLabel": {
        "en": "voided"
      },
      "definition": {
        "en": "Indicates that the actor has done something to void a previous event"
      },
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "verb": "http://adlnet.gov/expapi/verbs/voided",
      "rules": [
        {
          "location": "$.result.duration",
          "presence": "excluded"
        },
        {
          "location": "$.result.completed",
          "presence": "excluded"
        },
        {
          "location": "$.object.objectType",
          "presence": "included",
          "all": [
            "StatementRef"
          ]
        }
      ]
    },
    {
      "id": "https://w3id.org/xapi/tla#requested",
      "type": "StatementTemplate",
      "prefLabel": {
        "en": "requested"
      },
      "definition": {
        "en": "Indicates the actor needed or demanded an object or another actor. Requested indicates a comment that is shared with peers as a group or Coach as a trainer. The request for coaching or help prompts users to respond giving them coaching credit"
      },
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "verb": "https://w3id.org/xapi/adb/verbs/requested",
      "rules": [
        {
          "location": "$.result.duration",
          "presence": "excluded"
        },
        {
          "location": "$.result.completed",
          "presence": "excluded"
        },
        {
          "location": "$.object.id",
          "presence": "included"
        },
        {
          "location": "$.object.definition.type",
          "presence": "included",
          "any": [
            "https://w3id.org/xapi/tla/activity-types/activity",
            "https://w3id.org/xapi/tla/activity-types/assessment",
            "https://w3id.org/xapi/tla/activity-types/content_set"
          ]
        }
      ]
    },
    {
      "id": "https://w3id.org/xapi/tla#approved",
      "type": "StatementTemplate",
      "prefLabel": {
        "en": "approved"
      },
      "definition": {
        "en": "Indicates an OICS approved a requested activity for the given learner"
      },
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "verb": "https://w3id.org/xapi/tla/verbsapproved",
      "rules": [
        {
          "location": "$.result.duration",
          "presence": "excluded"
        },
        {
          "location": "$.result.completed",
          "presence": "excluded"
        },
        {
          "location": "$.object.id",
          "presence": "included"
        },
        {
          "location": "$.object.definition.type",
          "presence": "included",
          "any": [
            "https://w3id.org/xapi/tla/activity-types/activity",
            "https://w3id.org/xapi/tla/activity-types/assessment",
            "https://w3id.org/xapi/tla/activity-types/content_set"
          ]
        },
        {
          "location": "$.context.extensions['https://w3id.org/xapi/tla/extensions/learner']",
          "presence": "included"
        }
      ]
    },
    {
      "id": "https://w3id.org/xapi/tla#augmented",
      "type": "StatementTemplate",
      "prefLabel": {
        "en": "augmented"
      },
      "definition": {
        "en": "Indicates the actor searched content on an active learning goal, viewing what other goals/branches can be related based on an active goal tree"
      },
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "verb": "https://w3id.org/xapi/tla/verbs/augmented",
      "rules": [
        {
          "location": "$.result.duration",
          "presence": "excluded"
        },
        {
          "location": "$.result.completed",
          "presence": "excluded"
        },
        {
          "location": "$.object.id",
          "presence": "included"
        },
        {
          "location": "$.object.definition.type",
          "presence": "included",
          "any": [
            "https://w3id.org/xapi/tla/activity-types/activity",
            "https://w3id.org/xapi/tla/activity-types/assessment",
            "https://w3id.org/xapi/tla/activity-types/content_set"
          ]
        },
        {
          "location": "$.context.extensions['https://w3id.org/xapi/tla/extensions/evidence']",
          "presence": "included"
        }
      ]
    },
    {
      "id": "https://w3id.org/xapi/tla#explored",
      "type": "StatementTemplate",
      "prefLabel": {
        "en": "explored"
      },
      "definition": {
        "en": "Indicates the actor searched active learning goals related to specific content, viewing what other content may trigger related goals, based on active goal and recently completed content"
      },
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "verb": "https://w3id.org/xapi/tla/verbs/explored",
      "rules": [
        {
          "location": "$.result.duration",
          "presence": "excluded"
        },
        {
          "location": "$.result.completed",
          "presence": "excluded"
        },
        {
          "location": "$.object.id",
          "presence": "included"
        },
        {
          "location": "$.object.definition.type",
          "presence": "included",
          "any": [
            "https://w3id.org/xapi/tla/activity-types/career",
            "https://w3id.org/xapi/tla/activity-types/badge",
            "https://w3id.org/xapi/tla/activity-types/credential",
            "https://w3id.org/xapi/tla/activity-types/job_duty_gig",
            "https://w3id.org/xapi/tla/activity-types/competency"
          ]
        },
        {
          "location": "$.context.extensions['https://w3id.org/xapi/tla/extensions/evidence']",
          "presence": "included"
        }
      ]
    },
    {
      "id": "https://w3id.org/xapi/tla#clarified",
      "type": "StatementTemplate",
      "prefLabel": {
        "en": "clarified"
      },
      "definition": {
        "en": "Indicates the actor queried what other content may also reinforce the current learning goal, after completing content"
      },
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "verb": "https://w3id.org/xapi/tla/verbs/clarified",
      "rules": [
        {
          "location": "$.result.duration",
          "presence": "excluded"
        },
        {
          "location": "$.result.completed",
          "presence": "excluded"
        },
        {
          "location": "$.object.id",
          "presence": "included"
        },
        {
          "location": "$.object.definition.type",
          "presence": "included",
          "any": [
            "https://w3id.org/xapi/tla/activity-types/career",
            "https://w3id.org/xapi/tla/activity-types/badge",
            "https://w3id.org/xapi/tla/activity-types/credential",
            "https://w3id.org/xapi/tla/activity-types/job_duty_gig",
            "https://w3id.org/xapi/tla/activity-types/competency"
          ]
        },
        {
          "location": "$.context.extensions['https://w3id.org/xapi/tla/extensions/evidence']",
          "presence": "included"
        }
      ]
    },
    {
      "id": "https://w3id.org/xapi/tla#directed",
      "type": "StatementTemplate",
      "prefLabel": {
        "en": "directed"
      },
      "definition": {
        "en": "Indicates the actor assigned a learning goal to a learner"
      },
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "verb": "https://w3id.org/xapi/tla/verbs/directed",
      "rules": [
        {
          "location": "$.result.duration",
          "presence": "excluded"
        },
        {
          "location": "$.result.completed",
          "presence": "excluded"
        },
        {
          "location": "$.object.id",
          "presence": "included"
        },
        {
          "location": "$.object.definition.type",
          "presence": "included",
          "any": [
            "https://w3id.org/xapi/tla/activity-types/career",
            "https://w3id.org/xapi/tla/activity-types/badge",
            "https://w3id.org/xapi/tla/activity-types/credential",
            "https://w3id.org/xapi/tla/activity-types/job_duty_gig",
            "https://w3id.org/xapi/tla/activity-types/competency"
          ]
        },
        {
          "location": "$.context.extensions['https://w3id.org/xapi/tla/extensions/learner']",
          "presence": "included"
        }
      ]
    },
    {
      "id": "https://w3id.org/xapi/tla#scheduled",
      "type": "StatementTemplate",
      "prefLabel": {
        "en": "scheduled"
      },
      "definition": {
        "en": "Indicates the actor scheduled an activity or lesson"
      },
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "verb": "https://w3id.org/xapi/tla/verbs/scheduled",
      "rules": [
        {
          "location": "$.result.duration",
          "presence": "excluded"
        },
        {
          "location": "$.result.completed",
          "presence": "excluded"
        },
        {
          "location": "$.object.id",
          "presence": "included"
        },
        {
          "location": "$.object.definition.type",
          "presence": "included",
          "any": [
            "https://w3id.org/xapi/tla/activity-types/activity",
            "https://w3id.org/xapi/tla/activity-types/assessment",
            "https://w3id.org/xapi/tla/activity-types/content_set"
          ]
        },
        {
          "location": "$.context.extensions['https://w3id.org/xapi/tla/extensions/due_date']",
          "presence": "recommended"
        }
      ]
    },
    {
      "id": "https://w3id.org/xapi/tla#evaluated",
      "type": "StatementTemplate",
      "prefLabel": {
        "en": "evaluated"
      },
      "definition": {
        "en": "Indicates the learner(s) appeared in a Measure of Effectiveness (MOE) search"
      },
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "verb": "https://w3id.org/xapi/tla/verbs/evaluated",
      "rules": [
        {
          "location": "$.result.duration",
          "presence": "excluded"
        },
        {
          "location": "$.result.completed",
          "presence": "excluded"
        },
        {
          "location": "$.object.id",
          "presence": "included"
        },
        {
          "location": "$.object.definition.type",
          "presence": "included",
          "any": [
            "https://w3id.org/xapi/tla/activity-types/activity",
            "https://w3id.org/xapi/tla/activity-types/assessment",
            "https://w3id.org/xapi/tla/activity-types/content_set"
          ]
        },
        {
          "location": "$.context.extensions['https://w3id.org/xapi/tla/extensions/learner']",
          "presence": "included"
        }
      ]
    },
    {
      "id": "https://w3id.org/xapi/tla#tracked",
      "type": "StatementTemplate",
      "prefLabel": {
        "en": "tracked"
      },
      "definition": {
        "en": "Indicates the learner(s) appeared in a competency search"
      },
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "verb": "https://w3id.org/xapi/tla/verbs/tracked",
      "rules": [
        {
          "location": "$.result.duration",
          "presence": "excluded"
        },
        {
          "location": "$.result.completed",
          "presence": "excluded"
        },
        {
          "location": "$.object.id",
          "presence": "included"
        },
        {
          "location": "$.object.definition.type",
          "presence": "included",
          "any": [
            "https://w3id.org/xapi/tla/activity-types/competency"
          ]
        },
        {
          "location": "$.context.extensions['https://w3id.org/xapi/tla/extensions/learner']",
          "presence": "included"
        }
      ]
    },
    {
      "id": "https://w3id.org/xapi/tla#surveyed",
      "type": "StatementTemplate",
      "prefLabel": {
        "en": "surveyed"
      },
      "definition": {
        "en": "Indicates the learner(s) appeared in a Measure of Performance (MOP) search"
      },
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "verb": "https://w3id.org/xapi/tla/verbs/surveyed",
      "rules": [
        {
          "location": "$.result",
          "presence": "excluded"
        },
        {
          "location": "$.object.id",
          "presence": "included"
        },
        {
          "location": "$.object.definition.type",
          "presence": "included",
          "any": [
            "https://w3id.org/xapi/tla/activity-types/assessment",
            "https://w3id.org/xapi/tla/activity-types/activity",
            "https://w3id.org/xapi/tla/activity-types/career",
            "https://w3id.org/xapi/tla/activity-types/badge",
            "https://w3id.org/xapi/tla/activity-types/credential",
            "https://w3id.org/xapi/tla/activity-types/job_duty_gig"
          ]
        },
        {
          "location": "$.context.extensions['https://w3id.org/xapi/tla/extensions/learner']",
          "presence": "included"
        }
      ]
    },
    {
      "id": "https://w3id.org/xapi/tla#assessed",
      "type": "StatementTemplate",
      "prefLabel": {
        "en": "assessed"
      },
      "definition": {
        "en": "Indicates the actor completed assessments in a way that will cause a change in their authoritative learner state"
      },
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "verb": "https://w3id.org/xapi/tla/verbs/assessed",
      "rules": [
        {
          "location": "$.result.duration",
          "presence": "recommended"
        },
        {
          "location": "$.result.completed",
          "presence": "excluded"
        },
        {
          "location": "$.result.score.scaled",
          "presence": "recommended"
        },
        {
          "location": "$.result.success",
          "presence": "included"
        },
        {
          "location": "$.object.id",
          "presence": "included"
        },
        {
          "location": "$.object.definition.type",
          "presence": "included",
          "any": [
            "https://w3id.org/xapi/tla/activity-types/competency"
          ]
        },
        {
          "location": "$.context.extensions['https://w3id.org/xapi/tla/extensions/evidence']",
          "presence": "included"
        },
        {
          "location": "$.context.extensions['https://w3id.org/xapi/tla/extensions/confidence']",
          "presence": "included"
        }
      ]
    },
    {
      "id": "https://w3id.org/xapi/tla#contextualized",
      "type": "StatementTemplate",
      "prefLabel": {
        "en": "contextualized"
      },
      "definition": {
        "en": "Indicates the user performed several connected learning activities that should result in a change in their authoritative learner state"
      },
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "verb": "https://w3id.org/xapi/tla/verbs/contextualized",
      "rules": [
        {
          "location": "$.result",
          "presence": "excluded"
        },
        {
          "location": "$.object.id",
          "presence": "included"
        },
        {
          "location": "$.object.definition.type",
          "presence": "included",
          "all": [
            "https://w3id.org/xapi/tla/activity-types/competency"
          ]
        },
        {
          "location": "$.context.extensions['https://w3id.org/xapi/tla/extensions/evidence']",
          "presence": "included"
        },
        {
          "location": "$.context.extensions['https://w3id.org/xapi/tla/extensions/confidence']",
          "presence": "included"
        }
      ]
    },
    {
      "id": "https://w3id.org/xapi/tla#located",
      "type": "StatementTemplate",
      "prefLabel": {
        "en": "located"
      },
      "definition": {
        "en": "Indicates the actor's competency state needs to be updated based on completed content changes in the Competency Framework"
      },
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "verb": "https://w3id.org/xapi/tla/verbs/located",
      "rules": [
        {
          "location": "$.result",
          "presence": "excluded"
        },
        {
          "location": "$.object.id",
          "presence": "included"
        },
        {
          "location": "$.object.definition.type",
          "presence": "included",
          "all": [
            "https://w3id.org/xapi/tla/activity-types/competency"
          ]
        },
        {
          "location": "$.context.extensions['https://w3id.org/xapi/tla/extensions/evidence']",
          "presence": "included"
        },
        {
          "location": "$.context.extensions['https://w3id.org/xapi/tla/extensions/confidence']",
          "presence": "included"
        }
      ]
    },
    {
      "id": "https://w3id.org/xapi/tla#socialized",
      "type": "StatementTemplate",
      "prefLabel": {
        "en": "socialized"
      },
      "definition": {
        "en": "Indicates the learner interacted with \"Wild\" (unscheduled) content in a social environment"
      },
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "verb": "https://w3id.org/xapi/tla/verbs/socialized",
      "rules": [
        {
          "location": "$.result",
          "presence": "excluded"
        },
        {
          "location": "$.object.id",
          "presence": "included"
        },
        {
          "location": "$.object.definition.type",
          "presence": "included",
          "any": [
            "https://w3id.org/xapi/tla/activity-types/content_set",
            "https://w3id.org/xapi/tla/activity-types/assessment",
            "https://w3id.org/xapi/tla/activity-types/activity"
          ]
        }
      ]
    },
    {
      "id": "https://w3id.org/xapi/tla#captured",
      "type": "StatementTemplate",
      "prefLabel": {
        "en": "captured"
      },
      "definition": {
        "en": "Indicates the learner interacted with \"Wild\" (out of network) content"
      },
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "verb": "https://w3id.org/xapi/tla/verbs/captured",
      "rules": [
        {
          "location": "$.result",
          "presence": "excluded"
        },
        {
          "location": "$.object.id",
          "presence": "included"
        },
        {
          "location": "$.object.definition.type",
          "presence": "included",
          "any": [
            "https://w3id.org/xapi/tla/activity-types/content_set",
            "https://w3id.org/xapi/tla/activity-types/assessment",
            "https://w3id.org/xapi/tla/activity-types/activity"
          ]
        }
      ]
    },
    {
      "id": "https://w3id.org/xapi/tla#asserted",
      "type": "StatementTemplate",
      "prefLabel": {
        "en": "asserted"
      },
      "definition": {
        "en": "Indicates the learner has provided sufficient evidence to update the learner's measure of competence in a given competency"
      },
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "verb": "https://w3id.org/xapi/tla/verbs/asserted",
      "rules": [
        {
          "location": "$.result",
          "presence": "excluded"
        },
        {
          "location": "$.object.id",
          "presence": "included"
        },
        {
          "location": "$.object.definition.type",
          "presence": "included",
          "any": [
            "https://w3id.org/xapi/tla/activity-types/competency"
          ]
        },
        {
          "location": "$.context.extensions['https://w3id.org/xapi/tla/extensions/evidence']",
          "presence": "included"
        },
        {
          "location": "$.context.extensions['https://w3id.org/xapi/tla/extensions/confidence']",
          "presence": "included"
        }
      ]
    },
    {
      "id": "https://w3id.org/xapi/tla#validated",
      "type": "StatementTemplate",
      "prefLabel": {
        "en": "validated"
      },
      "definition": {
        "en": "Indicates an OICS approved a change to a competency framework within the TLA that will affect the learners’ states"
      },
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "verb": "https://w3id.org/xapi/tla/verbs/validated",
      "rules": [
        {
          "location": "$.result",
          "presence": "excluded"
        },
        {
          "location": "$.object.id",
          "presence": "included"
        },
        {
          "location": "$.object.definition.type",
          "presence": "included",
          "any": [
            "https://w3id.org/xapi/tla/activity-types/competency"
          ]
        },
        {
          "location": "$.context.extensions['https://w3id.org/xapi/tla/extensions/evidence']",
          "presence": "included"
        },
        {
          "location": "$.context.extensions['https://w3id.org/xapi/tla/extensions/confidence']",
          "presence": "included"
        },
        {
          "location": "$.context.extensions['https://w3id.org/xapi/tla/extensions/learner']",
          "presence": "included"
        }
      ]
    },
    {
      "id": "https://w3id.org/xapi/tla#inferred",
      "type": "StatementTemplate",
      "prefLabel": {
        "en": "inferred"
      },
      "definition": {
        "en": "Indicates an authoritative source changed a learner's competency assertions based on a valid competency framework change"
      },
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "verb": "https://w3id.org/xapi/tla/verbs/inferred",
      "rules": [
        {
          "location": "$.result",
          "presence": "excluded"
        },
        {
          "location": "$.object.id",
          "presence": "included"
        },
        {
          "location": "$.object.definition.type",
          "presence": "included",
          "any": [
            "https://w3id.org/xapi/tla/activity-types/competency"
          ]
        },
        {
          "location": "$.context.extensions['https://w3id.org/xapi/tla/extensions/evidence']",
          "presence": "included"
        },
        {
          "location": "$.context.extensions['https://w3id.org/xapi/tla/extensions/confidence']",
          "presence": "included"
        }
      ]
    },
    {
      "id": "https://w3id.org/xapi/tla#qualified",
      "type": "StatementTemplate",
      "prefLabel": {
        "en": "qualified"
      },
      "definition": {
        "en": "Indicates the learner meets all the requirements for a badge, but hasn't been awarded the badge yet"
      },
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "verb": "https://w3id.org/xapi/tla/verbs/qualified",
      "rules": [
        {
          "location": "$.result",
          "presence": "excluded"
        },
        {
          "location": "$.object.id",
          "presence": "included"
        },
        {
          "location": "$.object.definition.type",
          "presence": "included",
          "any": [
            "https://w3id.org/xapi/tla/activity-types/badge"
          ]
        },
        {
          "location": "$.context.extensions['https://w3id.org/xapi/tla/extensions/evidence']",
          "presence": "included"
        }
      ]
    },
    {
      "id": "https://w3id.org/xapi/tla#certified",
      "type": "StatementTemplate",
      "prefLabel": {
        "en": "certified"
      },
      "definition": {
        "en": "Indicates the learner was accredited by an authoritative source to perform a given job or task"
      },
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "verb": "https://w3id.org/xapi/tla/verbs/certified",
      "rules": [
        {
          "location": "$.result",
          "presence": "excluded"
        },
        {
          "location": "$.object.id",
          "presence": "included"
        },
        {
          "location": "$.object.definition.type",
          "presence": "included",
          "any": [
            "https://w3id.org/xapi/tla/activity-types/job_duty_gig"
          ]
        },
        {
          "location": "$.context.extensions['https://w3id.org/xapi/tla/extensions/evidence']",
          "presence": "included"
        }
      ]
    },
    {
      "id": "https://w3id.org/xapi/tla#verified",
      "type": "StatementTemplate",
      "prefLabel": {
        "en": "verified"
      },
      "definition": {
        "en": "Indicates the authoritative source verified evidence of learning from a non-authoritative source as reliable data"
      },
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "verb": "https://w3id.org/xapi/tla/verbs/verified",
      "rules": [
        {
          "location": "$.result",
          "presence": "excluded"
        },
        {
          "location": "$.object.id",
          "presence": "included"
        },
        {
          "location": "$.object.definition.type",
          "presence": "included",
          "any": [
            "https://w3id.org/xapi/tla/activity-types/competency"
          ]
        },
        {
          "location": "$.context.extensions['https://w3id.org/xapi/tla/extensions/evidence']",
          "presence": "included"
        },
        {
          "location": "$.context.extensions['https://w3id.org/xapi/tla/extensions/confidence']",
          "presence": "included"
        },
        {
          "location": "$.context.extensions['https://w3id.org/xapi/tla/extensions/learner']",
          "presence": "included"
        }
      ]
    },
    {
      "id": "https://w3id.org/xapi/tla#conferred",
      "type": "StatementTemplate",
      "prefLabel": {
        "en": "conferred"
      },
      "definition": {
        "en": "Indicates the OICS conferred a badge to the learner in the learner context extension"
      },
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "verb": "https://w3id.org/xapi/tla/verbs/conferred",
      "rules": [
        {
          "location": "$.result",
          "presence": "excluded"
        },
        {
          "location": "$.object.id",
          "presence": "included"
        },
        {
          "location": "$.object.definition.type",
          "presence": "included",
          "any": [
            "https://w3id.org/xapi/tla/activity-types/competency"
          ]
        },
        {
          "location": "$.context.extensions['https://w3id.org/xapi/tla/extensions/evidence']",
          "presence": "included"
        },
        {
          "location": "$.context.extensions['https://w3id.org/xapi/tla/extensions/confidence']",
          "presence": "included"
        }
      ]
    },
    {
      "id": "https://w3id.org/xapi/tla#recruited",
      "type": "StatementTemplate",
      "prefLabel": {
        "en": "recruited"
      },
      "definition": {
        "en": "Indicates the actor recruited the learner to join the ecosystem"
      },
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "verb": "https://w3id.org/xapi/tla/verbs/recruited",
      "rules": [
        {
          "location": "$.result",
          "presence": "excluded"
        },
        {
          "location": "$.object.id",
          "presence": "included"
        },
        {
          "location": "$.object.definition.type",
          "presence": "included",
          "any": [
            "https://w3id.org/xapi/tla/activity-types/career"
          ]
        },
        {
          "location": "$.context.extensions['https://w3id.org/xapi/tla/extensions/learner']",
          "presence": "included"
        }
      ]
    },
    {
      "id": "https://w3id.org/xapi/tla#appraised",
      "type": "StatementTemplate",
      "prefLabel": {
        "en": "appraised"
      },
      "definition": {
        "en": "Indicates the learner met entry criteria for jobs and assigned a career trajectory"
      },
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "verb": "https://w3id.org/xapi/tla/verbs/appraised",
      "rules": [
        {
          "location": "$.result",
          "presence": "excluded"
        },
        {
          "location": "$.object.id",
          "presence": "included"
        },
        {
          "location": "$.object.definition.type",
          "presence": "included",
          "any": [
            "https://w3id.org/xapi/tla/activity-types/career"
          ]
        }
      ]
    },
    {
      "id": "https://w3id.org/xapi/tla#detailed",
      "type": "StatementTemplate",
      "prefLabel": {
        "en": "detailed"
      },
      "definition": {
        "en": "OICS detailed the learner to a specific job"
      },
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "verb": "https://w3id.org/xapi/tla/verbs/detailed",
      "rules": [
        {
          "location": "$.result",
          "presence": "excluded"
        },
        {
          "location": "$.object.id",
          "presence": "included"
        },
        {
          "location": "$.object.definition.type",
          "presence": "included",
          "any": [
            "https://w3id.org/xapi/tla/activity-types/career_state"
          ]
        },
        {
          "location": "$.context.extensions[https://w3id.org/xapi/tla/extensions/location]",
          "presence": "recommended"
        },
        {
          "location": "$.context.extensions[https://w3id.org/xapi/tla/extensions/permanent_change_of_station]",
          "presence": "recommended"
        },
        {
          "location": "$.context.extensions[https://w3id.org/xapi/tla/extensions/unit_identification_code]",
          "presence": "recommended"
        },
        {
          "location": "$.context.extensions['https://w3id.org/xapi/tla/extensions/learner']",
          "presence": "included"
        }
      ]
    },
    {
      "id": "https://w3id.org/xapi/tla#mobilized",
      "type": "StatementTemplate",
      "prefLabel": {
        "en": "mobilized"
      },
      "definition": {
        "en": "OICS mobilized the learner to a state of on duty"
      },
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "verb": "https://w3id.org/xapi/tla/verbs/mobilized",
      "rules": [
        {
          "location": "$.result",
          "presence": "excluded"
        },
        {
          "location": "$.object.id",
          "presence": "included"
        },
        {
          "location": "$.object.definition.type",
          "presence": "included",
          "any": [
            "https://w3id.org/xapi/tla/activity-types/career_state"
          ]
        },
        {
          "location": "$.context.extensions[https://w3id.org/xapi/tla/extensions/location]",
          "presence": "recommended"
        },
        {
          "location": "$.context.extensions[https://w3id.org/xapi/tla/extensions/unit_identification_code]",
          "presence": "recommended"
        },
        {
          "location": "$.context.extensions['https://w3id.org/xapi/tla/extensions/learner']",
          "presence": "included"
        }
      ]
    },
    {
      "id": "https://w3id.org/xapi/tla#employed",
      "type": "StatementTemplate",
      "prefLabel": {
        "en": "employed"
      },
      "definition": {
        "en": "Indicates OICS employs the actor such that they started work doing their job"
      },
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "verb": "https://w3id.org/xapi/tla/verbs/employed",
      "rules": [
        {
          "location": "$.result",
          "presence": "excluded"
        },
        {
          "location": "$.object.id",
          "presence": "included"
        },
        {
          "location": "$.object.definition.type",
          "presence": "included",
          "any": [
            "https://w3id.org/xapi/tla/activity-types/career_state"
          ]
        },
        {
          "location": "$.context.extensions[https://w3id.org/xapi/tla/extensions/location]",
          "presence": "recommended"
        },
        {
          "location": "$.context.extensions[https://w3id.org/xapi/tla/extensions/unit_identification_code]",
          "presence": "recommended"
        },
        {
          "location": "$.context.extensions['https://w3id.org/xapi/tla/extensions/learner']",
          "presence": "included"
        }
      ]
    },
    {
      "id": "https://w3id.org/xapi/tla#schooled",
      "type": "StatementTemplate",
      "prefLabel": {
        "en": "schooled"
      },
      "definition": {
        "en": "Indicates OICS has enrolled the learner in a schooling system"
      },
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "verb": "https://w3id.org/xapi/tla/verbs/schooled",
      "rules": [
        {
          "location": "$.result",
          "presence": "excluded"
        },
        {
          "location": "$.object.id",
          "presence": "included"
        },
        {
          "location": "$.object.definition.type",
          "presence": "included",
          "any": [
            "https://w3id.org/xapi/tla/activity-types/competency",
            "https://w3id.org/xapi/tla/activity-types/career",
            "https://w3id.org/xapi/tla/activity-types/badge",
            "https://w3id.org/xapi/tla/activity-types/credential",
            "https://w3id.org/xapi/tla/activity-types/job_duty_gig"
          ]
        },
        {
          "location": "$.context.extensions[https://w3id.org/xapi/tla/extensions/location]",
          "presence": "recommended"
        },
        {
          "location": "$.context.extensions[https://w3id.org/xapi/tla/extensions/unit_identification_code]",
          "presence": "recommended"
        },
        {
          "location": "$.context.extensions['https://w3id.org/xapi/tla/extensions/learner']",
          "presence": "included"
        }
      ]
    },
    {
      "id": "https://w3id.org/xapi/tla#promoted",
      "type": "StatementTemplate",
      "prefLabel": {
        "en": "promoted"
      },
      "definition": {
        "en": "Indicates OICS has changed a learner’s rank, either up or down"
      },
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "verb": "https://w3id.org/xapi/tla/verbs/promoted",
      "rules": [
        {
          "location": "$.result",
          "presence": "excluded"
        },
        {
          "location": "$.object.id",
          "presence": "included"
        },
        {
          "location": "$.object.definition.type",
          "presence": "included",
          "any": [
            "https://w3id.org/xapi/tla/activity-types/rank"
          ]
        },
        {
          "location": "$.context.extensions['https://w3id.org/xapi/tla/extensions/learner']",
          "presence": "included"
        }
      ]
    },
    {
      "id": "https://w3id.org/xapi/tla#screened",
      "type": "StatementTemplate",
      "prefLabel": {
        "en": "screened"
      },
      "definition": {
        "en": "Indicates OICS screened learner for a potentially narrower career trajectory, and passed through a \"gate\" within their career trajectory"
      },
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "verb": "https://w3id.org/xapi/tla/verbs/screened",
      "rules": [
        {
          "location": "$.result",
          "presence": "excluded"
        },
        {
          "location": "$.object.id",
          "presence": "included"
        },
        {
          "location": "$.object.definition.type",
          "presence": "included",
          "any": [
            "https://w3id.org/xapi/tla/activity-types/career"
          ]
        },
        {
          "location": "$.context.extensions[https://w3id.org/xapi/tla/extensions/evidence]",
          "presence": "recommended"
        },
        {
          "location": "$.context.extensions[https://w3id.org/xapi/tla/extensions/expiration]",
          "presence": "recommended"
        },
        {
          "location": "$.context.extensions['https://w3id.org/xapi/tla/extensions/learner']",
          "presence": "included"
        }
      ]
    },
    {
      "id": "https://w3id.org/xapi/tla#selected",
      "type": "StatementTemplate",
      "prefLabel": {
        "en": "selected"
      },
      "definition": {
        "en": "Indicates OICS selected learner based on criteria for a potentially wider career trajectory, opening up new career possibilities"
      },
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "verb": "https://w3id.org/xapi/tla/verbs/selected",
      "rules": [
        {
          "location": "$.result",
          "presence": "excluded"
        },
        {
          "location": "$.object.id",
          "presence": "included"
        },
        {
          "location": "$.object.definition.type",
          "presence": "included",
          "any": [
            "https://w3id.org/xapi/tla/activity-types/career"
          ]
        },
        {
          "location": "$.context.extensions[https://w3id.org/xapi/tla/extensions/evidence]",
          "presence": "recommended"
        },
        {
          "location": "$.context.extensions[https://w3id.org/xapi/tla/extensions/expiration]",
          "presence": "included"
        },
        {
          "location": "$.context.extensions['https://w3id.org/xapi/tla/extensions/learner']",
          "presence": "included"
        }
      ]
    },
    {
      "id": "https://w3id.org/xapi/tla#transitioned",
      "type": "StatementTemplate",
      "prefLabel": {
        "en": "transitioned"
      },
      "definition": {
        "en": "Indicates the actor changed career paths, putting them on a completely different and brand new career trajectory"
      },
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "verb": "https://w3id.org/xapi/tla/verbs/transitioned",
      "rules": [
        {
          "location": "$.result",
          "presence": "excluded"
        },
        {
          "location": "$.object.id",
          "presence": "included"
        },
        {
          "location": "$.object.definition.type",
          "presence": "included",
          "any": [
            "https://w3id.org/xapi/tla/activity-types/career_state"
          ]
        }
      ]
    },
    {
      "id": "https://w3id.org/xapi/tla#released",
      "type": "StatementTemplate",
      "prefLabel": {
        "en": "released"
      },
      "definition": {
        "en": "Indicates the actor has left the learning environment"
      },
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "verb": "https://w3id.org/xapi/tla/verbs/released",
      "rules": [
        {
          "location": "$.result",
          "presence": "excluded"
        },
        {
          "location": "$.object.id",
          "presence": "included"
        },
        {
          "location": "$.object.definition.type",
          "presence": "included",
          "any": [
            "https://w3id.org/xapi/tla/activity-types/career_state"
          ]
        },
        {
          "location": "$.context.extensions[https://w3id.org/xapi/tla/extensions/reason]",
          "presence": "included"
        },
        {
          "location": "$.context.extensions['https://w3id.org/xapi/tla/extensions/learner']",
          "presence": "included"
        }
      ]
    },
    {
      "id": "https://w3id.org/xapi/tla#restricted",
      "type": "StatementTemplate",
      "prefLabel": {
        "en": "restricted"
      },
      "definition": {
        "en": "Indicates OICS temporarily restricted the learner from some (possibly all) participation within the learning environment"
      },
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "verb": "https://w3id.org/xapi/tla/verbs/restricted",
      "rules": [
        {
          "location": "$.result",
          "presence": "excluded"
        },
        {
          "location": "$.object.id",
          "presence": "included"
        },
        {
          "location": "$.object.definition.type",
          "presence": "included",
          "any": [
            "https://w3id.org/xapi/tla/activity-types/career_state"
          ]
        },
        {
          "location": "$.context.extensions[https://w3id.org/xapi/tla/extensions/restriction]",
          "presence": "included"
        },
        {
          "location": "$.context.extensions[https://w3id.org/xapi/tla/extensions/expiration]",
          "presence": "included"
        },
        {
          "location": "$.context.extensions['https://w3id.org/xapi/tla/extensions/learner']",
          "presence": "included"
        }
      ]
    },
    {
      "id": "https://w3id.org/xapi/tla#deselected",
      "type": "StatementTemplate",
      "prefLabel": {
        "en": "deselected"
      },
      "definition": {
        "en": "Indicates the actor removed specific goal or task"
      },
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "verb": "https://w3id.org/xapi/tla/verbs/deselected",
      "rules": [
        {
          "location": "$.result.duration",
          "presence": "excluded"
        },
        {
          "location": "$.result.completed",
          "presence": "excluded"
        },
        {
          "location": "$.object.id",
          "presence": "included"
        },
        {
          "location": "$.object.definition.type",
          "presence": "included",
          "any": [
            "https://w3id.org/xapi/tla/activity-types/career",
            "https://w3id.org/xapi/tla/activity-types/badge",
            "https://w3id.org/xapi/tla/activity-types/credential",
            "https://w3id.org/xapi/tla/activity-types/job_duty_gig",
            "https://w3id.org/xapi/tla/activity-types/competency",
            "https://w3id.org/xapi/tla/activity-types/activity"
          ]
        }
      ]
    }
  ],
  "patterns": [
    {
      "id": "https://w3id.org/xapi/tla#completed_session",
      "type": "Pattern",
      "prefLabel": {
        "en": "completed session"
      },
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "sequence": [
        "https://w3id.org/xapi/tla#launched",
        "https://w3id.org/xapi/tla#initialized",
        "https://w3id.org/xapi/tla#completed",
        "https://w3id.org/xapi/tla#terminated"
      ]
    },
    {
      "id": "https://w3id.org/xapi/tla#passed_session",
      "type": "Pattern",
      "prefLabel": {
        "en": "completed session"
      },
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "sequence": [
        "https://w3id.org/xapi/tla#launched",
        "https://w3id.org/xapi/tla#initialized",
        "https://w3id.org/xapi/tla#completed",
        "https://w3id.org/xapi/tla#passed",
        "https://w3id.org/xapi/tla#terminated"
      ]
    },
    {
      "id": "https://w3id.org/xapi/tla#failed_session",
      "type": "Pattern",
      "prefLabel": {
        "en": "completed session"
      },
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "sequence": [
        "https://w3id.org/xapi/tla#launched",
        "https://w3id.org/xapi/tla#initialized",
        "https://w3id.org/xapi/tla#completed",
        "https://w3id.org/xapi/tla#failed",
        "https://w3id.org/xapi/tla#terminated"
      ]
    },
    {
      "id": "https://w3id.org/xapi/tla#approval_process",
      "type": "Pattern",
      "prefLabel": {
        "en": "approved activity"
      },
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "sequence": [
        "https://w3id.org/xapi/tla#requested",
        "https://w3id.org/xapi/tla#approved",
        "https://w3id.org/xapi/tla#scheduled"
      ]
    },
    {
      "id": "https://w3id.org/xapi/tla#assessment_verification",
      "type": "Pattern",
      "prefLabel": {
        "en": "manual assessment verification"
      },
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "sequence": [
        "https://w3id.org/xapi/tla#assessed",
        "https://w3id.org/xapi/tla#verified",
        "https://w3id.org/xapi/tla#asserted"
      ]
    },
    {
      "id": "https://w3id.org/xapi/tla#contextualization_verification",
      "type": "Pattern",
      "prefLabel": {
        "en": "manual contextualization verification"
      },
      "inScheme": "https://w3id.org/xapi/tla/v0.10",
      "sequence": [
        "https://w3id.org/xapi/tla#contextualized",
        "https://w3id.org/xapi/tla#verified",
        "https://w3id.org/xapi/tla#asserted"
      ]
    }
  ]
}