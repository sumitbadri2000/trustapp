import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider, Box, HStack, IconButton, Image} from 'native-base';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import SideNav from './Screen/SideNav';
import Home from './Screen/Home';
import Certificate from './Screen/Certificate';

import Events from './Screen/Events';
import About from './Screen/About';
import Contact from './Screen/Contact';
import Splash from './Screen/Splash';
import Galary from './Screen/Galary';

const Drawer = createDrawerNavigator();

const CustomHeader = ({navigation}) => (
  <Box style={{width: '100%'}} bg={'#FFFDD2'}>
    <HStack
      marginX={5}
      w="90%"
      h="60px"
      justifyContent="left"
      alignItems="center"
      bg={'#FFFFFF'}
      style={{gap: 6}}>
      <IconButton
        style={{marginLeft: '-1%'}}
        onPress={() => navigation.openDrawer()}
        icon={
          <Image
            source={require('./Assests/humb.png')}
            alt="Menu Icon"
            size="30px"
          />
        }
      />
      <Image
        source={require('./Assests/text.png')}
        alt="Text"
        width="80%"
        height="50%"
        resizeMode="contain"
      />
    </HStack>
  </Box>
);

function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Drawer.Navigator
          drawerContent={props => <SideNav {...props} />}
          screenOptions={({navigation, route}) => ({
            header: () => {
              if (route.name !== 'Splash') {
                return <CustomHeader navigation={navigation} />;
              }
              return null;
            },
          })}>
          <Drawer.Screen name="Splash" component={Splash} />
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Certificate" component={Certificate} />
          <Drawer.Screen name="Gallery" component={Galary} />
          <Drawer.Screen name="Events" component={Events} />
          <Drawer.Screen name="About" component={About} />
          <Drawer.Screen name="Contact" component={Contact} />
        </Drawer.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;
