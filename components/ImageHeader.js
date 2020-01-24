import React from 'react'
import { StyleSheet, View } from 'react-native'

const ImageHeader = props => {
  return (
    <View style={styles.headerContainer}>
      {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 30,
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

export default ImageHeader
