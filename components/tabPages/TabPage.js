import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'native-base'

const TabPage = props => {
  return (
    <View style={styles.container}>
      <Text>{props.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default TabPage
