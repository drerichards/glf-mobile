import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Icon, Text, Button, Form, Item, Label, Input } from 'native-base'

const RegisterScreen = props => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Button transparent style={styles.iconButton}>
          <Icon style={styles.icon} type="FontAwesome" name="user-circle" />
          <Text style={styles.transparentBtnText}>Select Profile Image</Text>
        </Button>
      </View>
      <View style={styles.inputContainer}>
        <Form>
          <Item floatingLabel style={styles.inputContent}>
            <Label style={styles.inputLabel}>Username</Label>
            <Input style={styles.input} />
          </Item>
          <Item floatingLabel style={styles.inputContent}>
            <Label style={styles.inputLabel}>Email</Label>
            <Input style={styles.input} />
          </Item>
          <Item floatingLabel style={styles.inputContent}>
            <Label style={styles.inputLabel}>Password</Label>
            <Input style={styles.input} />
          </Item>
        </Form>
      </View>
      <Button style={[styles.button, styles.explore]} onPress={() =>
        props.navigation.navigate('Preferences')}>
        <Text style={styles.buttonText}>Explore</Text>
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconButton: {
    flexDirection: 'column',
    height: 120
  },
  icon: {
    color: '#105985',
    fontSize: 100
  },
  transparentBtnText: {
    color: 'black',
    fontSize: 14,
    marginTop: 5,
    textDecorationLine: 'underline'
  },
  inputContainer: {
    paddingHorizontal: 24,
    width: '100%',
    alignItems: 'flex-start'
  },
  inputContent: {
    width: '90%',
    marginVertical: 10
  },
  inputLabel: {
    fontSize: 14,
  },
  input: {
    paddingHorizontal: 5,
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
  explore: {
    marginTop: 20,
    backgroundColor: '#EE5525'
  },
})

export default RegisterScreen
