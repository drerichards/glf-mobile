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
          <Text style={styles.orgTitle}>NAF</Text>
          <Text style={styles.orgCaption}>naf.org</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button small style={styles.button}>
            <Text style={styles.buttonText}>Volunteer</Text>
          </Button>
          <Button small style={[styles.button, { backgroundColor: Color.blue }]}>
            <Text style={styles.buttonText}>Donate</Text>
          </Button>
          <Button small style={styles.button}>
            <Text style={styles.buttonText}>Join</Text>
          </Button>
        </View>
      </Card>
      <Card style={styles.activityListContainer}>
        <Text style={styles.activityTitle}>What's Happening</Text>
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
    position: 'absolute',
    zIndex: 3,
    height: 124,
    width: 156,
    borderColor: Color.grey,
    borderWidth: 1,
    borderRadius: 3,
    backgroundColor: '#fff',
    top: '12%',
    right: '31.25%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  orgTitleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 65,
    paddingBottom: 10
  },
  orgTitle: {
    color: Color.blue,
    fontSize: 18,
    fontWeight: 'bold'
  },
  orgCaption: {
    color: Color.orange,
    fontSize: 14
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
  activityTitle: {
    color: Color.grey,
    fontSize: 14,
    fontWeight: '600'
  },
  communityContainer: {

  },
  updatesContainer: {

  }
})

export default PartnerProfileScreen
