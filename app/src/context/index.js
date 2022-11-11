import { createContext, useState } from 'react'

const Context = createContext()

const Provider = ({ children }) => {
  const [orders, setOrders] = useState([])

  const addOrder = order => {
    const currentState = orders
    currentState.push(order)
    setOrders(currentState)
  }

  const listAll = () => orders

  const removeOrder = (order) => {
    setOrders(orders.filter(({ id }) => order.id !== id))
  }

  return (
    <Context.Provider value={{ addOrder, removeOrder, listAll }}>
      {children}
    </Context.Provider>
  )
}

export {
  Context,
  Provider
}