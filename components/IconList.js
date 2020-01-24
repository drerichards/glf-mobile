import React, { useEffect } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import { Icon } from 'native-base'

const newArr = []
const icon = {
  name: 'user-circle'
}

const iterateObj = num => {
  for (let i = 0; i < num; i++) {
    let id = Math.random()
    newArr.push({ ...icon, id: id.toString() })
  }
}

const IconList = props => {
  useEffect(() => {
    iterateObj(props.count)
  }, [newArr])

  return (
    <View style={{...styles.iconContainer, ...props.style}}>
      <FlatList
        data={newArr}
        horizontal
        keyExtractor={(item, i) => item.id}
        renderItem={
          ({ item }) =>
            <Icon style={styles.userIcon} type="FontAwesome" name={item.name} />
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    textAlign: 'left',
    width: '100%',
    paddingBottom: 5,
    paddingLeft: 30
  },
  userIcon: {
    marginVertical: 10,
    marginRight: 10
  },
})

export default IconList
