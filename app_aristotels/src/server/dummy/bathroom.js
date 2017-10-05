export default [
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
        nextId: "bathroom_qualitat_choice",
        answerText: "Nach 1975"
      },
      {
        label: "Vor 1975",
        answerText: "Vor 1975",
        value: "vor_1975",
        nextId: "bathroom_qualitat_choice"
      }
    ]
  },
  {
    createdAt: new Date(),
    type: "multiOption",
    text: "In welcher Qualität soll Ihr Bad ausgestattet werden?",
    name: "bathroom_qualitat_choice",
    id: "bathroom_qualitat_choice",
    options: [
      {
        label: "Solide",
        answerText: "Solide",
        value: "bad_solide",
        nextId: "bathroom_additions_choice"
      },
      {
        label: "Normal",
        answerText: "Normal",
        value: "bad_normal",
        nextId: "bathroom_additions_choice"
      },
      {
        label: "Luxus",
        answerText: "Luxus",
        value: "bad_luxus",
        nextId: "bathroom_additions_choice"
      }
    ]
  },
  {
    createdAt: new Date(),
    type: "multiOption",
    text: "Welche Ausstattung möchten Sie in Ihrem Bad neu installieren?",
    name: "bathroom_additions_choice",
    id: "bathroom_additions_choice",
    options: [
      {
        label: "WC",
        answerText: "WC",
        value: "bad_wc",
        nextId: "bathroom_wc_art"
      },
      {
        label: "Waschbecken",
        answerText: "Waschbecken",
        value: "bathroom_washbecken_size",
        nextId: "end"
      },
      {
        label: "Bidet",
        answerText: "Bidet",
        value: "bad_bidet",
        nextId: "end"
      },
      {
        label: "Dusche",
        answerText: "Dusche",
        value: "bad_dusche",
        nextId: "end"
      }
    ]
  },
  {
    /* WC Loop */
    createdAt: new Date(),
    type: "multiOption",
    text: "Welche Art von WC wünschen Sie sich?",
    name: "bathroom_wc_art",
    id: "bathroom_wc_art",
    options: [
      {
        label: "Bodenstehend",
        answerText: "Bodenstehend",
        value: "bodenstehend",
        nextId: "end",
      },
      {
        label: "Wandhängend",
        answerText: "Wandhängend",
        value: "wc_art_wandhängend",
        nextId: "end"
      },
      {
        label: "Dusch-WC",
        answerText: "Dusch-WC",
        value: "wc_art_dusch_wc",
        nextId: "end"
      }
    ]
  },
  {
    /* Washbecken  Loop */
    createdAt: new Date(),
    type: "multiOption",
    text: "Welche Waschbeckengröße wünschen Sie sich?",
    name: "bathroom_washbecken_size",
    id: "bathroom_washbecken_size",
    options: [
      {
        label: "Normal",
        answerText: "Normal",
        value: "bathroom_washbecken_normal",
        nextId: "end",
      },
      {
        label: "Gros",
        answerText: "Gros",
        value: "bathroom_washbecken_gros",
        nextId: "end"
      },
      {
        label: "Doppelwaschbecken",
        answerText: "Doppelwaschbecken",
        value: "bathroom_washbecken_doppel",
        nextId: "bathroom_washbecken_doppel"
      }
    ]
  }
]
