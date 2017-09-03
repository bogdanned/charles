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
        nextID: "bathroom_choice"
      },
      {
        label: "Heizung",
        value: "heizung",
        nextID: "heizung_choice"
      },
      {
        label: "Decke",
        value: "decke",
        nextID: "decke_choice"
      }
    ]
  },
  {
    type: "multiOption",
    text: "Which bathroom do you need?",
    name: "bathroom_choice",
    id: "bathroom_choice",
    options: [
      {
        label: "Big Bathroom",
        value: "big_bathroom"
      },
      {
        label: "Small Bathroom",
        value: "small_bathroom"
      },
      {
        label: "Medium Bathroom",
        value: "medium_bathroom"
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
