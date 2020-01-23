import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Container, Tabs, Tab } from 'native-base'
import SearchBar from '../components/SearchBar'
import FooterNavigation from '../components/FooterNavigation'

const ActivityScreen = props => {
  const data = props.navigation.state.params
  const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>

      </View>
      <View style={styles.logoContainer}>

      </View>
      <View style={styles.bodyContainer}>
        <Text>Sample {data.value}</Text>
        <Text>{lorem}</Text>
        <Text>{lorem}</Text>
      </View>
      <FooterNavigation />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  headerContainer: {
    width: '100%',
    height: 148,
    backgroundColor: '#333',
    shadowColor: '#ddd',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.8,
    shadowRadius: .1,
    elevation: .1,
    marginBottom: 5
  },
  bodyContainer: {
    textAlign: 'left'
  }
})

export default ActivityScreen
