import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Text, Icon } from 'native-base'

const PartnerProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text>PartnerProfileScreen</Text>
    </View>
  )
}

PartnerProfileScreen.navigationOptions = {
  headerTitle: ''
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
})

export default PartnerProfileScreen
