import { Stack } from 'expo-router'
import { Text } from 'react-native'
import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context'

function Layout() {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: '#4DC902' },
          headerTintColor: 'white',
          headerTitle: "",
          headerLeft: () => <Text className='text-xl font-bold text-white'>Tienda virtual</Text>
        }}
      />
    </SafeAreaProvider>
  )
}

export default Layout
