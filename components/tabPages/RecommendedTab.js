import React, { useEffect } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import { Card, CardItem, Text, Button } from 'native-base'

const RecommendedTab = ({ navigateActivity }) => {
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
      newArr.push({ ...activity, id: i.toString() })
    }
  }

  useEffect(() => {
    iterateObj()
  })

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Service Activity</Text>
        <Text style={styles.headerCaption}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</Text>
      </View>
      <View style={styles.activityListContainer}>
        <FlatList
          data={newArr}
          keyExtractor={(item, i) => item.id}
          numColumns={2}
          renderItem={activityData =>
            <Card style={styles.cardContainer}>
              <CardItem
                button
                onPress={() => navigateActivity('Activity')}
                style={styles.cardHeaderContainer}>
                <Text style={styles.organization}>{activityData.item.organization}</Text>
                <Text style={styles.value}>{activityData.item.value}</Text>
              </CardItem>
              <CardItem
                cardBody
                button
                onPress={() => navigateActivity('Activity')} style={styles.cardImageContainer}>
                <View></View>
              </CardItem>
              <CardItem
                button
                onPress={() => navigateActivity('Activity')}
                style={styles.cardFooterContainer}>
                <Text style={styles.date}>{activityData.item.date}</Text>
                <Text style={styles.info}>{activityData.item.info}</Text>
                <View style={styles.listLabelContainer}>
                  {activityData.item.labels.map(btn =>
                    <Button style={styles.listLabel} key={btn}>
                      <Text style={styles.listLabelText}>{btn}</Text>
                    </Button>)}
                </View>
              </CardItem>
            </Card>
          } />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    backgroundColor: '#333',
    padding: 20,
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
  headerText: {
    flex: 1,
    fontSize: 18,
    fontWeight: '800',
    alignSelf: 'flex-end',
    color: '#fff'
  },
  headerCaption: {
    flex: 1,
    fontSize: 12,
    fontWeight: '600',
    color: '#fff'
  },
  activityListContainer: {
    flex: 1,
    flexDirection: 'column'
  },
  cardContainer: {
    width: 200
  },
  cardHeaderContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  organization: {
    fontSize: 10,
    color: '#666',
    fontWeight: '600'
  },
  value: {
    fontWeight: '600',
    color: '#105985',
    fontSize: 12
  },
  cardImageContainer: {
    backgroundColor: '#333',
    height: 90
  },
  cardFooterContainer: {
    flexDirection: 'column',
  },
  date: {
    fontSize: 10,
    color: '#666',
    marginBottom: 5,
    fontWeight: '600',
  },
  info: {
    fontSize: 10
  },
  listLabelContainer: {
    flexDirection: 'row',
    marginTop: 10
  },
  listLabel: {
    backgroundColor: '#EE5525',
    marginRight: 5,
    width: 55,
    height: 20,
    paddingHorizontal: 0,
    paddingVertical: 10
  },
  listLabelText: {
    fontSize: 8,
    fontWeight: 'bold',
  },
})

export default RecommendedTab
