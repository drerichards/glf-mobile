import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Container, Tabs, Tab } from 'native-base'
import SearchBar from '../components/SearchBar'
import FooterNavigation from '../components/FooterNavigation'
import TimelineScreen from '../screens/TimelineScreen'
import ActivityScreen from '../screens/ActivityScreen'

const MainScreen = props => {
  let content = <TimelineScreen
    navigateActivity={props.navigation.navigate} />

  return (
    <View style={styles.container}>
      <SearchBar />
      {content}
      <FooterNavigation />
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
