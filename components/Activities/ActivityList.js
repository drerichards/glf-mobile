import React from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import ActivityCard from './ActivityCard'

const ActivityList = ({ renderActivityScreen, activities, numColumns }) => {
  return (
    <View>
      {
        numColumns
          ? <FlatList
            data={activities}
            keyExtractor={(item, i) => item.id.toString()}
            numColumns={numColumns}
            renderItem={
              ({ item }) =>
                <ActivityCard
                  item={item}
                  renderActivityScreen={renderActivityScreen}
                />
            } />
          : <FlatList
            data={activities}
            keyExtractor={(item, i) => item.id.toString()}
            horizontal
            renderItem={
              ({ item }) =>
                <ActivityCard
                  item={item}
                  renderActivityScreen={renderActivityScreen}
                />
            } />}
    </View>
  )
}

export default ActivityList
