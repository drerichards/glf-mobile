import React, { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Text, Icon, Card } from 'native-base'
import ImageHeader from '../components/ImageHeader'
import ActivityList from '../components/Activities/ActivityList'
import Color from '../constants/ColorScheme'

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
        <Text>NAF Logo</Text>
      </View>
      <Card style={styles.headerContainer}>
        <View style={styles.orgTitleContainer}>
          <Text>NAF</Text>
          <Text>naf.org</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button small style={styles.button}>
            <Text style={styles.buttonText}>Volunteer</Text>
          </Button>
          <Button small style={styles.button}>
            <Text style={styles.buttonText}>Donate</Text>
          </Button>
          <Button small style={styles.button}>
            <Text style={styles.buttonText}>Join</Text>
          </Button>
        </View>
      </Card>
      <Card style={styles.activityListContainer}>
        <Text>What's Happening</Text>
        <ActivityList
          activities={newArr}
        />
      </Card>
      <Card style={styles.communityContainer}>
        <Text>Community</Text>
      </Card>
      <Card style={styles.updatesContainer}>
        <Text>Updates</Text>
      </Card>
    </View>
  )
}

PartnerProfileScreen.navigationOptions = {
  headerTitle: ''
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    padding: 10

  },
  logoContainer: {

  },
  orgTitleContainer: {

  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  button: {
    width: 118,
    justifyContent: 'center',
    backgroundColor: Color.orange
  },
  buttonText: {
    fontWeight: 'bold'
  },
  activityListContainer: {
    flexDirection: 'column',
    padding: 10
  },
  communityContainer: {

  },
  updatesContainer: {

  }
})

export default PartnerProfileScreen
