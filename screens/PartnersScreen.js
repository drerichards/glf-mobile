import React from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import { Text, Button, ListItem, CheckBox } from 'native-base'

const PartnersScreen = props => {
  const organizations = [{
    value: 'NAF',
    info: 'NAF is an educational non-profit organization. The mission of NAF is to solve some of the biggest challenges facing education and the economy by bringing education, business, and community leaders together to transform the high school experience.',
    labels: ['Be a Mentor', 'Get a Tutor']
  }, {
    value: 'NPower',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    labels: ['Label']
  }, {
    value: 'ITSMF',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    labels: ['Label1', 'Label2', 'Label3']
  }]

  return (
    <View style={styles.container}>
      <View style={[styles.container, styles.contentContainer]}>
        <Text style={styles.headerText}>Which organizations do you want to follow?</Text>
        <Text style={styles.caption}>Based on your preferences, we recommend the following organizations. Select all the ones you want to follow.</Text>
      </View>
      <View style={[styles.container, styles.contentContainer, styles.listContainer]}>
        <FlatList
          data={organizations}
          keyExtractor={(item, i) => item.value}
          renderItem={orgData =>
            <ListItem style={styles.listItem}>
              <View>
                <View style={styles.listCheckContainer}>
                  <CheckBox color='#105985' checked={true} />
                  <Text style={styles.listCheckText}>{orgData.item.value}</Text>
                </View>
                <View>
                  <Text style={styles.caption}>{orgData.item.info}</Text>
                </View>
                <View style={styles.listLabelContainer}>
                  {orgData.item.labels.map(btn =>
                    <Button style={styles.listLabel} key={btn}>
                      <Text style={styles.listLabelText}>{btn}</Text>
                    </Button>)}
                </View>
              </View>
            </ListItem>
          }
        />
      </View>
      <View style={[styles.container, styles.contentContainer]}>
        <Button style={[styles.button, styles.next]} onPress={() =>
          props.navigation.navigate('Timeline')}>
          <Text style={styles.buttonText}>Discover Opportunities</Text>
        </Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16
  },
  contentContainer: {
    paddingHorizontal: 0
  },
  listContainer: {
    flex: 3
  },
  listItem: {
    borderBottomWidth: 0,
    marginBottom: 10
  },
  listCheckContainer: {
    flexDirection: 'row'
  },
  listCheckText: {
    marginLeft: 10,
    fontWeight: 'bold'
  },
  headerText: {
    color: '#105985',
    fontWeight: '600',
    fontSize: 35
  },
  caption: {
    marginTop: 5,
    fontSize: 12,
    textAlign: 'left'
  },
  listLabelContainer: {
    flexDirection: 'row',
    marginTop: 10
  },
  listLabel: {
    backgroundColor: '#105985',
    marginRight: 5,
    height: 24,
    padding: 5
  },
  listLabelText: {
    fontSize: 10,
    fontWeight: 'bold',
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

export default PartnersScreen
