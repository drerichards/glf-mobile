import React, { useState, useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { Container, Tabs, Tab } from 'native-base'
import SearchBar from '../components/SearchBar'
import FooterNavigation from '../components/FooterNavigation'
import TimelineScreen from '../screens/TimelineScreen'
import StatsScreen from '../screens/StatsScreen'
import AlertsScreen from '../screens/AlertsScreen'
import MessagesScreen from '../screens/MessagesScreen'
import MenuScreen from '../screens/MenuScreen'

const MainScreen = props => {
  const [screenTab, setScreenTab] = useState()

  const homeTab = <TimelineScreen
  navigateActivity={props.navigation.navigate} />

  let content = homeTab

  if (screenTab === 'home') {
    content = homeTab
  } else if (screenTab === 'stats') {
    content = <StatsScreen />
  } else if (screenTab === 'alerts') {
    content = <AlertsScreen />
  } else if (screenTab === 'messages') {
    content = <MessagesScreen />
  } else if (screenTab === 'menu') {
    content = <MenuScreen />
  }

  const getFooterTab = tabName => {
    setScreenTab(tabName)
  }

  return (
    <View style={styles.container}>
      <SearchBar />
      {content}
      <FooterNavigation getFooterTab={getFooterTab} />
    </View>
  )
}

MainScreen.navigationOptions = {
  headerTitle: ''
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  dcontainer: {
    marginTop: 20
  },
})

export default MainScreen
