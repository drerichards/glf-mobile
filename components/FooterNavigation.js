import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Footer, FooterTab, Button, Icon } from 'native-base'

const FooterNavigation = ({ getFooterTab }) => {
  const [currentActiveTab, setCurrentActiveTab] = useState('home')
  const [activeHomeTab, setActiveHomeTab] = useState(true)
  const [activeStatsTab, setActiveStatsTab] = useState(false)
  const [activeAlertsTab, setActiveAlertsTab] = useState(false)
  const [activeMessagesTab, setActiveMessagesTab] = useState(false)
  const [activeMenuTab, setActiveMenuTab] = useState(false)

  const onTabPress = tabName => {
    setCurrentActiveTab(tabName)
    if (tabName === currentActiveTab) {
      return
    }

    switch (tabName) {
      case 'home':
        setActiveHomeTab(true)
        tabFunctions(tabName)
        break
      case 'stats':
        setActiveStatsTab(true)
        tabFunctions(tabName)
        break
      case 'alerts':
        setActiveAlertsTab(true)
        tabFunctions(tabName)
        break
      case 'messages':
        setActiveMessagesTab(true)
        tabFunctions(tabName)
        break
      case 'menu':
        setActiveMenuTab(true)
        tabFunctions(tabName)
        break
      default:
        break
    }
  }

  const tabFunctions = tabName => {
    getFooterTab(tabName)
    deactivateTab()
  }

  const deactivateTab = () => {
    switch (currentActiveTab) {
      case 'home':
        setActiveHomeTab(false)
        break
      case 'stats':
        setActiveStatsTab(false)
        break
      case 'alerts':
        setActiveAlertsTab(false)
        break
      case 'messages':
        setActiveMessagesTab(false)
        break
      case 'menu':
        setActiveMenuTab(false)
        break
      default:
        break
    }
  }

  return (
    <View>
      <Footer>
        <FooterTab>
          <Button active={activeHomeTab} onPress={onTabPress.bind(this, 'home')}>
            <Icon name="home" />
          </Button>
          <Button active={activeStatsTab} onPress={onTabPress.bind(this, 'stats')}>
            <Icon name="grid" />
          </Button>
          <Button active={activeAlertsTab} onPress={onTabPress.bind(this, 'alerts')}>
            <Icon name="flash" />
          </Button>
          <Button active={activeMessagesTab} onPress={onTabPress.bind(this, 'messages')}>
            <Icon name="people" />
          </Button>
          <Button active={activeMenuTab} onPress={onTabPress.bind(this, 'menu')}>
            <Icon name="menu" />
          </Button>
        </FooterTab>
      </Footer>
    </View>
  )
}

export default FooterNavigation
