import React from 'react'
import { StyleSheet } from 'react-native'
import { Container, Tabs, Tab } from 'native-base'
import RecommendedTab from '../components/tabPages/RecommendedTab'
import TabPage from '../components/tabPages/TabPage'

const TimelineScreen = ({ navigateActivity }) => {
  return (
    <Container>
      <Tabs>
        <Tab heading="Recommended">
          <RecommendedTab navigateActivity={navigateActivity} />
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
