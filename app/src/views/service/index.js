import { Button, Text, TextInput, View } from 'react-native'
import { useContext, useState } from 'react'
import DropDownPicker from 'react-native-dropdown-picker'

import Header from '../../components/Header'

import { Context } from '../../context'
import { delivery } from "../../dataTypes"

import styles from './styles'

export default function () {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('')
  const [items, setItems] = useState(delivery)
  const [orderAddress, setAddress] = useState('')

  const { addOrder, listAll } = useContext(Context)

  const handleSubmit = () => {
    const currentList = listAll()
    let price
    let deliveryType
    let orderId

    if (value === 'basic') {
      price = 45
      deliveryType = 'Entrega Básica'
    }

    if (value === 'plus') {
      price = 70
      deliveryType = 'Entrega Plus'
    }

    if (value === 'premium') {
      price = 90
      deliveryType = 'Entrega Premium'
    }

    const lastOrder = currentList.slice(-1)[0]

    if (!lastOrder) {
      orderId = 1
    } else {
      orderId = lastOrder.id + 1
    }

    const newOrder = {
      id: orderId,
      address: orderAddress,
      type: deliveryType,
      price: `R$${price.toString()}`,
      date: new Date().toDateString()
    }

    addOrder(newOrder)
  }

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.title}>Solicitação</Text>
      <Text style={styles.inputLabel}>Endereço</Text>
      <TextInput onChangeText={setAddress} style={styles.textInput} value={orderAddress} placeholder='Endereço' />
      <Text style={styles.inputLabel}>Entrega</Text>
      <DropDownPicker style={{ width: '80%', alignSelf: 'center', marginBottom: 20 }} open={open} value={value} items={items} setOpen={setOpen} setValue={setValue} setItems={setItems} />
      <View style={styles.orderButton}>
        <Button title='Confirmar' onPress={handleSubmit} />
      </View>
    </View>
  )
}
