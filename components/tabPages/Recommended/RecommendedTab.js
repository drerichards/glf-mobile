import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'native-base'
import RecommendedList from './RecommendedList';

const RecommendedTab = ({ renderActivityScreen, activities }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Service Activity</Text>
        <Text style={styles.headerCaption}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</Text>
      </View>
      <View style={styles.activityListContainer}>
        <RecommendedList
        renderActivityScreen={renderActivityScreen}
        activities={activities} 
        />
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
  }
})

export default RecommendedTab
