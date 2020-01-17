import React from 'react'
import { StyleSheet } from 'react-native'
import { Container, Tabs, Tab } from 'native-base'
import SearchBar from '../components/SearchBar'
import RecommendedTab from '../components/tabPages/RecommendedTab'
import TabPage from '../components/tabPages/TabPage'
import T from '../components/FooterNavigation'
import FooterNavigation from '../components/FooterNavigation'

const TimelineScreen = () => {
  return (
    <Container>
      <SearchBar />
      <Tabs>
        <Tab heading="Recommended">
          <RecommendedTab />
        </Tab>
        <Tab heading="Trending">
          <TabPage title={'Trending'} />
        </Tab>
        <Tab heading="Latest">
          <TabPage title={'Latest'} />
        </Tab>
      </Tabs>
      <FooterNavigation />
    </Container>
  )
}

const styles = StyleSheet.create({

})

export default TimelineScreen
