import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Container, Tabs, Tab } from 'native-base'
import SearchBar from '../components/SearchBar'
import FooterNavigation from '../components/FooterNavigation'

const ActivityScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>

      </View>
      <View style={styles.logoContainer}>

      </View>
      <View style={styles.bodyContainer}>

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
})

export default ActivityScreen
