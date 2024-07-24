import {NavigationContainer} from '@react-navigation/native';
import {
  NativeBaseProvider,
  Box,
  HStack,
  IconButton,
  Image,
  Flex,
} from 'native-base';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import SideNav from './Screen/SideNav';
import Home from './Screen/Home';
import Certificate from './Screen/Certificate';

import Events from './Screen/Events';
import About from './Screen/About';
import Contact from './Screen/Contact';
import Splash from './Screen/Splash';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import Gallery from './Screen/Galary';
import Media from './Screen/Media';

const Drawer = createDrawerNavigator();

const CustomHeader = ({navigation}) => (
  <Flex
    style={{width: '100%'}}
    bg={'#F0F0F0'}
    height={'60px'}
    justifyContent={'space-between'}
    flexDirection={"row"}
    alignItems={"center"}
    px={2}>
    <TouchableWithoutFeedback onPress={() => navigation.openDrawer()} style={{paddingTop:10}}>
      <Image
        source={require('./Assests/humb.png')}
        alt="Menu Icon"
        size="40px"
      />
    </TouchableWithoutFeedback>


    <Image
        source={require('./Assests/logo.png')}
        alt="Menu Icon"
        size="48px"
      />

    {/* <Image
        source={require('./Assests/text.png')}
        alt="Text"
        width="80%"
        height="50%"
        resizeMode="contain"
      /> */}
  </Flex>
);

function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
      <Drawer.Navigator
          drawerContent={(props) => <SideNav {...props} />}
          screenOptions={({ navigation, route }) => ({
            header: () => {
              if (route.name !== 'Splash') {
                return <CustomHeader navigation={navigation} />;
              }
              return null;
            },
          })
        }>
          <Drawer.Screen name="Splash" component={Splash} />
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Certificate" component={Certificate} />
          <Drawer.Screen name="Gallery" component={Gallery} />
          <Drawer.Screen name="Events" component={Events} />
          <Drawer.Screen name="About" component={About} />
          <Drawer.Screen name="Contact" component={Contact} />
          <Drawer.Screen name="Media" component={Media} />
        </Drawer.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;
