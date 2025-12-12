import { ActivityIndicator, Image, ScrollView, Text, View } from 'react-native'
import { Stack, useLocalSearchParams } from 'expo-router'
import { useEffect, useState } from 'react'
import { getProductById, Product } from '../../lib/products'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function DetailProduct() {
  const { id } = useLocalSearchParams()
  const [isLoading, setIsLoading] = useState(true)
  const [product, setProduct] = useState<Product>()

  useEffect(() => {
    if (id) {
      const loadData = async () => {
        const data = await getProductById(Number(id))

        setProduct(data)
        setIsLoading(false)
      }

      loadData()
    }
  })

  return (
    <SafeAreaView className="bg-[##f5f5f5]">
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: 'white' },
          headerTintColor: 'black',
          headerLeft: () => {},
          headerTitle: isLoading ? 'Cargando...' : product ? product.title : 'No encontrado',
        }}
      />
      {product ? (
        <ScrollView contentContainerStyle={{ padding: 12 }}>
          <View className='justify-start items-start'>
            <Image source={{ uri: product.image }} className="w-full h-80 mb-3" style={{ resizeMode: 'contain' }} />
            <View className="bg-green-200 w-fit px-3 py-1 rounded-lg mb-1">
              <Text className="text-gray-400 text-xs">{product.category}</Text>
            </View>
            <Text className="text-xl mb-3">{product.title}</Text>
            <Text className="text-3xl font-bold mb-6">S/{product.price}</Text>
            <Text className="text-lg font-medium mb-1">Descripción</Text>
            <Text>{product.description}</Text>
          </View>
        </ScrollView>
      ) : (
        <ActivityIndicator />
      )}
    </SafeAreaView>
  )
}
