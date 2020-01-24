import React from 'react'
import { View, FlatList } from 'react-native'
import ActivityCard from './ActivityCard'

const ActivityList = ({ renderNextScreen, activities, numColumns }) => {
  const renderNothing = () => { }
  return (
    <View>
      {numColumns
        ? <FlatList
          data={activities}
          keyExtractor={(item, i) => item.id}
          numColumns={numColumns}
          renderItem={
            ({ item }) =>
              <ActivityCard
                item={item}
                renderNextScreen={renderNextScreen}
              />
          } />
        : <FlatList
          data={activities}
          keyExtractor={(item, i) => item.id}
          horizontal
          renderItem={
            ({ item }) =>
              <ActivityCard
                item={item}
                renderNextScreen={renderNothing}
              />
          } />}
    </View>
  )
}

export default ActivityList
