import { useContext, useState } from 'react'
import { Text, View, SafeAreaView, FlatList } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'

import { Context } from '../../context'

import Header from '../../components/Header'
import Item from '../../components/Item'

import { styles } from './styles'

export default function () {
  const { listAll } = useContext(Context)
  const currentOrders = listAll()
  const [orders, setOrders] = useState([])

  useFocusEffect(() => {
    setOrders(currentOrders)
  })

  return (
    <View style={styles.container}>
      <Header />

      {!orders.length &&
        <View style={styles.conditionalView}>
          <Text style={styles.conditionalTitle}>Nenhuma solicitação encontrada</Text>
        </View>
      }

      <SafeAreaView style={styles.listOrders}>
        <FlatList key={'*'} vertical data={orders} renderItem={({ item }) => <Item order={item} />} keyExtractor={(item) => item.id} />
      </SafeAreaView>
    </View>
  )
}
