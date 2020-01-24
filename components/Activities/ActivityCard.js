import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Card, CardItem, Text, Button } from 'native-base'
import Color from '../../constants/ColorScheme'

const ActivityCard = ({ item, renderActivityScreen }) => {
  return (
    <Card style={styles.cardContainer}>
      <CardItem
        button
        onPress={() => renderActivityScreen(item)}
        style={styles.cardHeaderContainer}>
        <Text style={styles.organization}>{item.organization}</Text>
        <Text style={styles.value}>{item.value}</Text>
      </CardItem>
      <CardItem
        cardBody
        button
        onPress={() => renderActivityScreen(item)} style={styles.cardImageContainer}>
        <View></View>
      </CardItem>
      <CardItem
        button
        onPress={() => renderActivityScreen(item)}
        style={styles.cardFooterContainer}>
        <Text style={styles.date}>{item.date}</Text>
        <Text style={styles.info}>{item.info}</Text>
        <View style={styles.listLabelContainer}>
          {item.labels.map(btn =>
            <Button style={styles.listLabel} key={btn}>
              <Text style={styles.listLabelText}>{btn}</Text>
            </Button>)}
        </View>
      </CardItem>
    </Card>
  )
}

const styles = StyleSheet.create({
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
    color: Color.grey,
    fontWeight: '600'
  },
  value: {
    fontWeight: '600',
    color: Color.blue,
    fontSize: 12
  },
  cardImageContainer: {
    backgroundColor: Color.grey,
    height: 90
  },
  cardFooterContainer: {
    flexDirection: 'column',
  },
  date: {
    fontSize: 10,
    color: Color.grey,
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
    backgroundColor: Color.orange,
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

export default ActivityCard
