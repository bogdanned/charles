import _ from 'lodash'

export default (messages, previousValue) => {

  console.log(previousValue, "previousValue")


  /* Standard Answer */
  return{
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
  }
}
