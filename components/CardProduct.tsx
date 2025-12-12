import { Image, Pressable, Text, View, Animated } from 'react-native'
import { Product } from '../lib/products'
import { useEffect, useRef } from 'react'
import { Link } from 'expo-router'

type Props = {
  product: Product
  index: number
}

const CardProduct = ({ product, index }: Props) => {
  const opacity = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      delay: index * 250,
      useNativeDriver: true,
    }).start()
  }, [opacity, index])

  return (
    <Animated.View key={product.id} style={{ opacity }} className="w-1/2 max-w-[180px]">
      <View className="bg-white border border-[#ebebeb] rounded-xl mb-3 pt-2">
        <Image source={{ uri: product.image }} style={{ width: 150, height: 150, resizeMode: 'contain', marginHorizontal: "auto" }} />
        <View className="flex-col justify-start items-start gap-2 p-4">
          <View className="bg-green-200 w-fit px-3 py-1 rounded-lg">
            <Text className="text-gray-400 text-xs">{product.category}</Text>
          </View>
          <Text className="w-full" numberOfLines={2} ellipsizeMode="tail">
            {product.title}
          </Text>
          <Text className="font-bold text-2xl">S/{product.price}</Text>
          <Link asChild href={`/${product.id}`}>
            <Pressable
            className="w-full px-3 py-2 bg-[#4DC902] active:bg-[#43B300] rounded-xl"
          >
            {({ pressed }) => <Text style={{ color: 'white', textAlign: 'center' }}>Ver detalles</Text>}
          </Pressable>
          </Link>
        </View>
      </View>
    </Animated.View>
  )
}

export default CardProduct
