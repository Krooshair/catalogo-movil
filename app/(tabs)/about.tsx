import { Stack } from 'expo-router'
import React from 'react'
import { ScrollView, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

function About() {
  return (
    <SafeAreaView className='bg-[##f5f5f5] p-3'>
      <Stack.Screen
        options={{
          headerLeft: () => {},
          headerTitle: "Sobre nosotros",
        }}
      />
      <ScrollView>
        <Text className="text-3xl">¿Quiénes somos?</Text>

        <Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla eligendi rerum odio sit, iure nam ullam
          aliquid numquam, esse vitae minima quam ipsum sapiente laborum ratione necessitatibus vel aperiam error?
        </Text>

        <Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla eligendi rerum odio sit, iure nam ullam
          aliquid numquam, esse vitae minima quam ipsum sapiente laborum ratione necessitatibus vel aperiam error?
        </Text>

        <Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla eligendi rerum odio sit, iure nam ullam
          aliquid numquam, esse vitae minima quam ipsum sapiente laborum ratione necessitatibus vel aperiam error?
        </Text>
      </ScrollView>
    </SafeAreaView>
  )
}

export default About
