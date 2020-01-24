import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'native-base'
import ImageHeader from '../../ImageHeader'
import ActivityList from '../../Activities/ActivityList'

const RecommendedTab = ({ renderActivityScreen, activities }) => {
  return (
    <View style={styles.container}>
      <ImageHeader>
        <Text style={styles.headerText}>Service Activity</Text>
        <Text style={styles.headerCaption}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</Text>
      </ImageHeader>
      <View style={styles.activityListContainer}>
        <ActivityList
          renderActivityScreen={renderActivityScreen}
          activities={activities}
          numColumns={2}
          horizontal={false}
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
  headerText: {
    flex: 1,
    fontSize: 18,
    fontWeight: '800',
    alignSelf: 'flex-end',
    color: '#fff'
  },
  headerCaption: {
    alignItems: 'center',
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
