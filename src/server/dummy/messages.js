export default [
  {
    createdAt: new Date(),
    type: "multiOption",
    text: `Hello Padawaan. My name is Charles. I am your 21 century career advisor.
            What level of education do you currentlly possess?`,
    name: "calculator_choice",
    id: "calculator_choice",
    options: [
      {
        label: "Primary Education",
        value: "primary_education",
        nextId: "primary_education",
        answerText: "Primary Education"
      },
      {
        label: "Secondary Education",
        value: "Secondary Education",
        nextId: "secondary_education",
        answerText: "Secondary Education"
      },
      {
        label: "University",
        value: "university",
        nextId: "heizung_choice",
        answerText: "University"
      },
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
  }
]
