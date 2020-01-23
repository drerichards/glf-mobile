import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Item, Icon, Input, Button } from 'native-base'

const SearchBar = () => {
  return (
    <View style={styles.searchContainer}>
      <Item rounded style={styles.inputContainer}>
        <Icon style={styles.searchIcon} type="FontAwesome" name="search" />
        <Input placeholder="Search GLF" style={styles.input} />
      </Item>
      <Button transparent>
        <Icon style={styles.userIcon} type="FontAwesome" name="user-circle" />
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  searchContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
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
  inputContainer: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: '#D8D8D8',
    height: 32
  },
  searchIcon: {
    color: '#333',
    fontSize: 16
  },
  input: {
    textAlign: 'center',
    width: '100%',
    borderBottomWidth: 0
  }
})

export default SearchBar
