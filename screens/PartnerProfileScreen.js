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
    let id = Math.random()
    newArr.push({ ...activity, id: id.toString() })
  }
}

const PartnerProfileScreen = () => {
  useEffect(() => {
    iterateObj()
  }, [newArr])

  return (
    <View style={styles.container}>
      <ImageHeader />
      <View style={styles.logoContainer}>
      </View>
      <View style={styles.orgTitleContainer}>
        <Text>NAF</Text>
        <Text>naf.org</Text>
      </View>
      <View style={styles.buttonContainer}></View>
      <Button>
        <Text>Volunteer</Text>
      </Button>
      <Button>
        <Text>Donate</Text>
      </Button>
      <Button>
        <Text>Join</Text>
      </Button>
      <View style={styles.activityListContainer}>
        <Text>What's Happening</Text>
        <ActivityList
          activities={newArr}
        />
      </View>
      <View style={styles.communityContainer}></View>
      <View style={styles.updatesContainer}></View>
    </View>
  )
}

PartnerProfileScreen.navigationOptions = {
  headerTitle: ''
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  logoContainer: {

  },
  orgTitleContainer: {

  },
  buttonContainer: {

  },
  activityListContainer: {
    flexDirection: 'column',
    maxHeight: 250
  },
  communityContainer: {

  },
  updatesContainer: {

  }
})

export default PartnerProfileScreen
