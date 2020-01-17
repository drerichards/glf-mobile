import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Footer, FooterTab, Button, Icon } from 'native-base'

const FooterNavigation = () => {
  return (
    <View>
      <Footer>
        <FooterTab>
          <Button active>
            <Icon active name="home" />
          </Button>
          <Button>
            <Icon name="grid" />
          </Button>
          <Button>
            <Icon name="text" />
          </Button>
          <Button>
            <Icon name="people" />
          </Button>
          <Button>
            <Icon name="menu" />
          </Button>
        </FooterTab>
      </Footer>
    </View>
  )
}

export default FooterNavigation
