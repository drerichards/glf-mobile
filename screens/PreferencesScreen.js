import React from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import { Text, Button, ListItem, CheckBox } from 'native-base'

const PreferencesScreen = props => {
  const prefs = [{
    value: 'Donate to a cause'
  }, {
    value: 'Receive a donation'
  }, {
    value: 'Join an impact organization'
  }, {
    value: 'Volunteer Time'
  }, {
    value: 'Become a mentor'
  }, {
    value: 'Find a mentor'
  }, {
    value: 'Be a Tutor'
  }, {
    value: 'Something else…'
  }]

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.headerText}>What would you like to do?</Text>
        <Text style={styles.headerCaption}>Check all the boxes that apply:</Text>
      </View>
      <View style={styles.container}>
        <FlatList
          data={prefs}
          keyExtractor={(item, i) => item.value}
          renderItem={prefData =>
            <ListItem style={styles.listItem}>
              <CheckBox color='#105985' checked={true} />
              <Text style={{ marginLeft: 10 }}>{prefData.item.value}</Text>
            </ListItem>
          }
        />
      </View>
      <View style={styles.container}>
        <Button style={[styles.button, styles.next]} onPress={() =>
          props.navigation.navigate('Partners')}>
          <Text style={styles.buttonText}>Next</Text>
        </Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#105985',
    fontWeight: '600',
    fontSize: 35
  },
  headerCaption: {
    marginTop: 5,
    fontSize: 12
  },
  listItem: {
    borderBottomWidth: 0,
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
  next: {
    marginTop: 20,
    backgroundColor: '#EE5525'
  },
})

export default PreferencesScreen
