import React, { useEffect } from 'react'
import { StyleSheet, Text } from 'react-native'
import { Container, Tabs, Tab } from 'native-base'
import ActivityScreen from '../screens/ActivityScreen'
import RecommendedTab from '../components/tabPages/Recommended/RecommendedTab'
import TabPage from '../components/tabPages/TabPage'

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
    let id = Math.random()
    newArr.push({ ...activity, id: id.toString() })
  }
}

const TimelineScreen = ({ navigateActivity }) => {
  useEffect(() => {
    iterateObj()
  }, [newArr])

  const renderNextScreen = cardData => {
    navigateActivity('Activity', cardData)
  }
  
  return (
    <Container>
        <Tabs>
          <Tab heading="Recommended">
            <RecommendedTab
              renderNextScreen={renderNextScreen}
              activities={newArr} />
          </Tab>
          <Tab heading="Trending">
            <TabPage title={'Trending'} />
          </Tab>
          <Tab heading="Latest">
            <TabPage title={'Latest'} />
          </Tab>
        </Tabs>
    </Container>
  )
}

const styles = StyleSheet.create({

})

export default TimelineScreen
