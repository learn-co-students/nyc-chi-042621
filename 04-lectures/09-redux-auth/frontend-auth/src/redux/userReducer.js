const initialUserState = {
    id: 0,
    token: "",
    username: "",
    pantries: [],
  }
  
  const userReducer = (state = initialUserState, action) => {
    
    switch (action.type) {
      case "SET_USER":
        // YOU CAN DEFINE VARIABLES HERE
        return {
          ...state,
          ...action.payload.user,
          token: action.payload.token,
        }
  
      case "ADD_PANTRY":
          return {
            ...state,
            pantries: [...state.pantries, action.payload]
          }
  
      case "ADD_SNACK_TO_PANTRY":
        let foundPantry1 = state.pantries.find(pantry => pantry.id === action.payload.pantry_id)
        let copyOfPantry1 = {
          ...foundPantry1,
          snack_pantries: [...foundPantry1.snack_pantries, action.payload]
        } 
        return {
          ...state,
          pantries: state.pantries.map(p => p.id === copyOfPantry1.id ? copyOfPantry1 : p)
        }
  
      case "DELETE_PANTRY":
        let deletedPantryArr = state.pantries.filter(pantry => pantry.id !== action.payload)
        return {
          ...state,
          pantries: deletedPantryArr
        }
  
      case "LOGOUT_USER":
        return {
          ...state,
          ...initialUserState,
        }
      default:
        return state
    }
  
  }

  export default userReducer