import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Text } from 'native-base'
import ImageHeader from '../components/ImageHeader'
import IconList from '../components/IconList'
import Color from '../constants/ColorScheme'

const ActivityScreen = props => {
  const data = props.navigation.state.params
  const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

  return (
    <View style={styles.container}>
      <ImageHeader />
      <Button
        transparent
        style={styles.logoButton}
        onPress={() =>
          props.navigation.navigate('PartnerProfile')}
      ></Button>
      <View style={styles.bodyContainer}>
        <Text style={styles.bodyTitle}>Sample {data.value}</Text>
        <Text style={styles.bodyText}>{lorem}</Text>
        <Text style={styles.bodyText}>{lorem}</Text>
      </View>
      <IconList count={4} />
      <View>
        <Text style={styles.dateText}>{data.date}</Text>
        <Button style={[styles.button, styles.rsvp]}>
          <Text style={styles.buttonText}>RSVP</Text>
        </Button>
      </View>
    </View>
  )
}

ActivityScreen.navigationOptions = {
  headerTitle: ''
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  headerContainer: {
    width: '100%',
    height: 148,
    backgroundColor: Color.darkGrey,
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
  logoButton: {
    position: 'absolute',
    zIndex: 3,
    height: 124,
    width: 156,
    borderColor: Color.darkGrey,
    borderWidth: 1,
    borderRadius: 3,
    backgroundColor: '#fff',
    top: '15%',
    right: '5%'
  },
  bodyContainer: {
    textAlign: 'left',
    padding: 30,
    paddingBottom: 20
  },
  bodyTitle: {
    color: Color.blue,
    fontWeight: '600',
    fontSize: 20,
    width: 200
  },
  bodyText: {
    fontSize: 14,
    marginTop: 20
  },
  dateText: {
    marginTop: 10,
    textAlign: 'center',
    color: Color.lightGrey,
    fontWeight: '600'
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    width: 265,
    height: 72
  },
  buttonText: {
    fontWeight: '800'
  },
  rsvp: {
    marginTop: 5,
    backgroundColor: Color.orange
  },
})

export default ActivityScreen
