export default [
  {
    type: "multiOption",
    text: "Which calculator do you need?",
    name: "calculator_choice",
    id: "calculator_choice",
    options: [
      {
        label: "Bathroom",
        value: "bathroom",
        nextId: "bathroom_choice"
      },
      {
        label: "Heizung",
        value: "heizung",
        nextId: "heizung_choice"
      },
      {
        label: "Decke",
        value: "decke",
        nextId: "decke_choice"
      }
    ]
  },
  {
    type: "multiOption",
    text: "Neubau oder Sanierung?",
    name: "bathroom_choice",
    id: "bathroom_choice",
    options: [
      {
        label: "Neubau",
        value: "neubau",
        nextId: "bathroom_zuletz_choice"
      },
      {
        label: "Sanierung",
        value: "sanierung",
        nextId: "bathroom_zuletz_choice"
      }
    ]
  },
  {
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
