import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import ActivityScreen from '../screens/ActivityScreen'
import HomeScreen from '../screens/HomeScreen'
import InboxScreen from '../screens/InboxScreen'
import MainScreen from '../screens/MainScreen'
import MessagesScreen from '../screens/MessagesScreen'
import PartnerProfileScreen from '../screens/PartnerProfileScreen'
import PartnersScreen from '../screens/PartnersScreen'
import PreferencesScreen from '../screens/PreferencesScreen'
import RegisterScreen from '../screens/RegisterScreen'
import TimelineScreen from '../screens/TimelineScreen'

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Main: MainScreen,
  Activity: ActivityScreen,
  Inbox: InboxScreen,
  Messages: MessagesScreen,
  PartnerProfile: PartnerProfileScreen,
  Partners: PartnersScreen,
  Preferences: PreferencesScreen,
  Register: RegisterScreen,
  Timeline: TimelineScreen
})

export default createAppContainer(AppNavigator)