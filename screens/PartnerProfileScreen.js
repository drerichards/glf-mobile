import React, { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Text, Icon } from 'native-base'
import ImageHeader from '../components/ImageHeader'
import ActivityList from '../components/Activities/ActivityList'


const newArr = []
const activity = {
  organization: 'NAF',
  value: 'Service Activity',
  info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed',
  date: 'Tuesday October 29, 2019',
  labels: ['Label1', 'Label2', 'Label3']
}

const iterateObj = () => {
  for (let i = 0; i < 6; i++) {
    newArr.push({ ...activity, id: i.toString() })
  }
}

const PartnerProfileScreen = () => {
  useEffect(() => {
    iterateObj()
  }, [newArr])

  return (
    <View style={styles.container}>
      <ImageHeader />
      <View style={styles.activityListContainer}>
        <Text>What's Happening</Text>
        <ActivityList
          activities={newArr}
        />
      </View>
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
  activityListContainer: {
    // flex: 1,
    flexDirection: 'column',
    height: 270
  }
})

export default PartnerProfileScreen
