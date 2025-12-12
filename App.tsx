import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context'
import Main from './components/Main'

import './global.css'

export default function App() {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <Main />
    </SafeAreaProvider>
  )
}
