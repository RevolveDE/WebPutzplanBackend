export default function reducer(state={    // reducer schaut Komponenten an, die mit ihm verbunden sind (das macht React für uns)
    welcomeText: "",
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_WELCOME_TEX": {
        return {...state, fetching: true}
      }
      case "FETCH_WELCOME_TEXT_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_WELCOME_TEXT_FULFILLED": {  // ...state: state von oben: nimmt alle States von oben und ändert jene, die geändert werden sollen. Fetching (ist gerade am laden), fetched (true wenns da ist), error
        return {                              // der Welcome test wurde nun neu gesetzt. Alle Komponenten, die verbunden sind, erfahren dies und rendern neu.
          ...state,
          fetching: false,   // fetching false: Fertig
          fetched: true,     // fetched ist nun fertig
          welcomeText: action.payload, // attribut wird nun gesetzt. 
        }
      }
      case "SET_WELCOME_TEXT": { // wird im Projekt nicht genutzt, könnte aber genutzt werden, wenn die Variable von einer Komponenten und nicht von einem Request gesetzt wird, dann wäre es kein Asynchroner Tast und die Variable würde sofort gesetzt. 
        return {
          ...state,
          welcomeText: action.payload, 
        }
      }
    }

    return state
}