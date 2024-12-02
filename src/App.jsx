import { createContext, useReducer } from 'react'
import Footer from './copmponents/Footer'
import Header from './copmponents/Header'
import Main from './copmponents/Main'
import { initialObject as initialObjectProducts, reducer as reducerProducts } from './copmponents/reducers/reducerProducts'
import { initialObject as initialObjectBag, reducer as reducerBag } from './copmponents/reducers/reducerBag'
import {initialObject as initialObjectForm, reducer as reducerForm } from './copmponents/reducers/reducerSendForm'
export const MyContext = createContext()

function App() {

  let [stateProducts, dispatchProducts] = useReducer(reducerProducts, initialObjectProducts)
  let [stateBag, dispatchBag] = useReducer(reducerBag, initialObjectBag)
  let [stateForm,dispatchForm]=useReducer(reducerForm,initialObjectForm)

  return (
    <MyContext.Provider value={{stateProducts, dispatchProducts, stateBag, dispatchBag,stateForm,dispatchForm}}>
      <Header />
      <Main />
      <Footer />
    </MyContext.Provider>
  )
}

export default App
