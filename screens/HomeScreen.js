import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, Button } from 'native-base'
import Color from '../constants/ColorScheme'

const HomeScreen = props => {
  return (
    <View style={styles.container}>
      <View style={styles.blankContent}></View>
      <View style={styles.mainContent}>
        <Text style={styles.logo}>GLF LOGO</Text>
        <Button style={[styles.button, styles.login]}>
          <Text style={styles.buttonText}>Login</Text>
        </Button>
        <Button style={[styles.button, styles.register]} onPress={() =>
          props.navigation.navigate('Register')}>
          <Text style={styles.buttonText}>Register</Text>
        </Button>
        <Button transparent>
          <Text style={styles.transparentBtnText}>Forgot Your Password?</Text>
        </Button>
      </View>
      <View style={styles.footerContent}>
        <Text style={styles.footerText}>“Transforming the lives of America’s diverse talent.”</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  blankContent: {
    flex: 2
  },
  mainContent: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  footerContent: {
    flex: 1,
    marginTop: 100
  },
  logo: {
    marginBottom: 100,
    height: 132
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    width: 265,
    height: 72
  },
  login: {
    backgroundColor: Color.blue
  },
  register: {
    backgroundColor: Color.orange
  },
  buttonText: {
    fontWeight: '800'
  },
  transparentBtnText: {
    color: 'black',
    fontSize: 14,
    textDecorationLine: 'underline'
  },
  footerText: {
    fontStyle: 'italic',
    fontSize: 18,
    textAlign: 'center',
    color: Color.blue
  }
})

export default HomeScreen
