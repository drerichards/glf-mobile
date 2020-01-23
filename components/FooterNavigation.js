import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Footer, FooterTab, Button, Icon } from 'native-base'

const FooterNavigation = () => {
  const [currentActiveTab, setCurrentActiveTab] = useState('home')
  const [activeHomeTab, setActiveHomeTab] = useState(true)
  const [activeStatsTab, setActiveStatsTab] = useState(false)
  const [activeMessagesTab, setActiveMessagesTab] = useState(false)
  const [activeUsersTab, setActiveUsersTab] = useState(false)
  const [activeMenuTab, setActiveMenuTab] = useState(false)

  const onTabPress = tabName => {
    setCurrentActiveTab(tabName)
    if (tabName === currentActiveTab) {
      return
    }
    console.log(currentActiveTab)
    switch (tabName) {
      case 'home':
        setActiveHomeTab(true)
        deactivateTab()
        break
      case 'stats':
        setActiveStatsTab(true)
        deactivateTab()
        break
      case 'messages':
        setActiveMessagesTab(true)
        deactivateTab()
        break
      case 'users':
        setActiveUsersTab(true)
        deactivateTab()
        break
      case 'menu':
        setActiveMenuTab(true)
        deactivateTab()
        break
      default:
        break
    }
  }

  const deactivateTab = () => {
    switch (currentActiveTab) {
      case 'home':
        setActiveHomeTab(false)
        break
      case 'stats':
        setActiveStatsTab(false)
        break
      case 'messages':
        setActiveMessagesTab(false)
        break
      case 'users':
        setActiveUsersTab(false)
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
          <Button active={activeMessagesTab} onPress={onTabPress.bind(this, 'messages')}>
            <Icon name="text" />
          </Button>
          <Button active={activeUsersTab} onPress={onTabPress.bind(this, 'users')}>
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
