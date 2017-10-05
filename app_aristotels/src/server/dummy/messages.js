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
        nextId: "university",
        answerText: "University"
      },
    ]
  },
  {
    createdAt: new Date(),
    type: "multiOption",
    text: "What level of univeristy education do you posees?",
    name: "university_level",
    id: "university_level",
    options: [
      {
        label: "Bachelor Degree",
        value: "bachelor_degree"
      },
      {
        label: "Masters Degree",
        value: "masters_degree"
      },
      {
        label: "Doctoral Degree",
        value: "doctoral_degree"
      }
    ]
  }
]
