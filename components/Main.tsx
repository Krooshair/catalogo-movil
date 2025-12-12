import { StatusBar } from 'expo-status-bar'
import { useEffect, useState } from 'react'
import { StyleSheet, ActivityIndicator, FlatList, Pressable, Text, TextInput } from 'react-native'
import CardProduct from './CardProduct'
import { getAllProducts, Product } from '../lib/products'
import { SafeAreaView } from 'react-native-safe-area-context'

const Main = () => {
  const [search, setSearch] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [isFiltering, setIsFiltering] = useState(false)
  const [products, setProducts] = useState<Product[]>([])
  const [filtered, setFiltered] = useState<Product[]>([])

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true)
      const data = await getAllProducts()

      setProducts(data)
      setFiltered(data)
      setIsLoading(false)
    }

    loadData()
  }, [])

  useEffect(() => {
    const text = search.toLowerCase()

    // si no hay texto → reset sin loading
    if (text === '') {
      setFiltered(products)
      setIsFiltering(false)
      return
    }

    setIsFiltering(true)

    const delay = setTimeout(() => {
      const result = products.filter(item => item.title.toLowerCase().includes(text))
      setFiltered(result)
      setIsFiltering(false)
    }, 300)

    return () => clearTimeout(delay)
  }, [search, products])

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <TextInput
        className="bg-white rounded-md border border-[#e2e2e2] mb-3"
        placeholder="Buscar..."
        value={search}
        onChangeText={setSearch}
      />
      {isLoading ? (
        <ActivityIndicator />
      ) : isFiltering ? (
        <ActivityIndicator />
      ) : filtered.length === 0 ? (
        <Text className="text-center text-xl font-semibold text-gray-600">No se encontraron productos</Text>
      ) : (
        <FlatList
          data={filtered}
          renderItem={({ item, index }) => <CardProduct product={item} index={index} />}
          keyExtractor={prd => prd.id.toString()}
          numColumns={2}
          columnWrapperStyle={{ gap: 12 }}
        />
      )}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 12,
  },
})

export default Main
