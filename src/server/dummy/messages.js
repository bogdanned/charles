export default [
  {
    createdAt: new Date(),
    type: "multiOption",
    text: "What do you need?",
    name: "calculator_choice",
    id: "calculator_choice",
    options: [
      {
        label: "Bathroom",
        value: "bathroom",
        nextId: "bathroom_choice",
        answerText: "I want a bathroom."
      },
      {
        label: "Heizung",
        value: "heizung",
        nextId: "heizung_choice",
        answerText: "I want a heating system."
      },
      {
        label: "Decke",
        value: "decke",
        nextId: "decke_choice",
        answerText: "I want a roof."
      }
    ]
  },
  {
    createdAt: new Date(),
    type: "multiOption",
    text: "Neubau oder Sanierung?",
    name: "bathroom_choice",
    id: "bathroom_choice",
    options: [
      {
        label: "Neubau",
        value: "neubau",
        nextId: "bathroom_zuletz_choice",
        answerText: "I want to build a new bathroom."
      },
      {
        label: "Sanierung",
        value: "sanierung",
        nextId: "bathroom_zuletz_choice",
        answerText: "Is a renovation."
      }
    ]
  },
  {
    createdAt: new Date(),
    type: "multiOption",
    text: "Wann wurde Ihr Bad zuletzt saniert?",
    name: "bathroom_zuletz_choice",
    id: "bathroom_zuletz_choice",
    options: [
      {
        label: "Nach 1975",
        value: "nach_1975",
        nextId: "end"
      },
      {
        label: "Vor 1975",
        value: "vor_1975",
        nextId: "end"
      }
    ]
  },
  {
    createdAt: new Date(),
    type: "multiOption",
    text: "Finished! Want to try again?",
    name: "end",
    id: "end",
    options: [
      {
        label: "Yes!",
        value: "yes",
        nextId: "calculator_choice"
      },
      {
        label: "No. I am done.",
        value: "no"
      }
    ]
  },
  {
    createdAt: new Date(),
    type: "multiOption",
    text: "Which decke do you need?",
    name: "decke_choice",
    id: "decke_choice",
    options: [
      {
        label: "Big Decke",
        value: "big_decke"
      },
      {
        label: "Small Decke",
        value: "small_decke"
      },
      {
        label: "Medium Decke",
        value: "medium_decke"
      }
    ]
  },
  {
    createdAt: new Date(),
    type: "multiOption",
    text: "Which heizung do you need?",
    name: "heizung_choice",
    id: "heizung_choice",
    options: [
      {
        label: "House Heizung",
        value: "house_heizung"
      },
      {
        label: "Other Heizung",
        value: "other_heizung"
      }
    ]
  }
]
