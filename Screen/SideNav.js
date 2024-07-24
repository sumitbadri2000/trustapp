import React, {useState} from 'react';
import {Box, Text, VStack, Pressable} from 'native-base';

const SideNav = ({navigation}) => {
  const [selected, setSelected] = useState('Home');

  const handlePress = screenName => {
    setSelected(screenName);
    navigation.closeDrawer();
    navigation.navigate(screenName);
  };

  return (
    <Box flex={1} padding={5} safeArea width={'90%'} margin={'auto'}>
      <VStack space={1}>
        <Pressable onPress={() => handlePress('Home')}>
          {({isHovered, isPressed}) => {
            return (
              <Box
                padding={3}
                borderRadius={selected === 'Home' ? 8 : 0}
                bg={
                  selected === 'Home'
                    ? 'white'
                    : isPressed
                    ? 'coolGray.200'
                    : isHovered
                    ? 'coolGray.100'
                    : 'white'
                }
                shadow={selected === 'Home' ? 2 : 0.1}>
                <Text
                  fontSize="lg"
                  fontWeight={selected === 'Home' ? 'bold' : 'normal'}
                  color={selected === 'Home' ? '#F56A02' : 'black'}>
                  Hello
                </Text>
              </Box>
            );
          }}
        </Pressable>

        <Pressable onPress={() => handlePress('About')}>
          {({isHovered, isPressed}) => {
            return (
              <Box
                padding={3}
                borderRadius={selected === 'About' ? 8 : 0}
                bg={
                  selected === 'About'
                    ? 'white'
                    : isPressed
                    ? 'coolGray.200'
                    : isHovered
                    ? 'coolGray.100'
                    : 'white'
                }
                shadow={selected === 'About' ? 2 : 0.1}>
                <Text
                  fontSize="lg"
                  fontWeight={selected === 'About' ? 'bold' : 'normal'}
                  color={selected === 'About' ? '#F56A02' : 'black'}>
                  About
                </Text>
              </Box>
            );
          }}
        </Pressable>

        <Pressable onPress={() => handlePress('Certificate')}>
          {({isHovered, isPressed}) => {
            return (
              <Box
                padding={3}
                borderRadius={selected === 'Certificate' ? 8 : 0}
                bg={
                  selected === 'Certificate'
                    ? 'white'
                    : isPressed
                    ? 'coolGray.200'
                    : isHovered
                    ? 'coolGray.100'
                    : 'white'
                }
                shadow={selected === 'Certificate' ? 2 : 0.1}>
                <Text
                  fontSize="lg"
                  fontWeight={selected === 'Certificate' ? 'bold' : 'normal'}
                  color={selected === 'Certificate' ? '#F56A02' : 'black'}>
                  Certificate
                </Text>
              </Box>
            );
          }}
        </Pressable>

        <Pressable onPress={() => handlePress('Gallery')}>
          {({isHovered, isPressed}) => {
            return (
              <Box
                padding={3}
                borderRadius={selected === 'Gallery' ? 8 : 0}
                bg={
                  selected === 'Gallery'
                    ? 'white'
                    : isPressed
                    ? 'coolGray.200'
                    : isHovered
                    ? 'coolGray.100'
                    : 'white'
                }
                shadow={selected === 'Gallery' ? 2 : 0.1}>
                <Text
                  fontSize="lg"
                  fontWeight={selected === 'Gallery' ? 'bold' : 'normal'}
                  color={selected === 'Gallery' ? '#F56A02' : 'black'}>
                  Gallery
                </Text>
              </Box>
            );
          }}
        </Pressable>

        <Pressable onPress={() => handlePress('Events')}>
          {({isHovered, isPressed}) => {
            return (
              <Box
                padding={3}
                borderRadius={selected === 'Events' ? 8 : 0}
                bg={
                  selected === 'Events'
                    ? 'white'
                    : isPressed
                    ? 'coolGray.200'
                    : isHovered
                    ? 'coolGray.100'
                    : 'white'
                }
                shadow={selected === 'Events' ? 2 : 0.1}>
                <Text
                  fontSize="lg"
                  fontWeight={selected === 'Events' ? 'bold' : 'normal'}
                  color={selected === 'Events' ? '#F56A02' : 'black'}>
                  Events
                </Text>
              </Box>
            );
          }}
        </Pressable>
        <Pressable onPress={() => handlePress('Media')}>
          {({isHovered, isPressed}) => {
            return (
              <Box
                padding={3}
                borderRadius={selected === 'Media' ? 8 : 0}
                bg={
                  selected === 'Media'
                    ? 'white'
                    : isPressed
                    ? 'coolGray.200'
                    : isHovered
                    ? 'coolGray.100'
                    : 'white'
                }
                shadow={selected === 'Media' ? 2 : 0.1}>
                <Text
                  fontSize="lg"
                  fontWeight={selected === 'Media' ? 'bold' : 'normal'}
                  color={selected === 'Media' ? '#F56A02' : 'black'}>
                  Media
                </Text>
              </Box>
            );
          }}
        </Pressable>

        {/* <Pressable onPress={() => handlePress('Contact')}>
          {({isHovered, isPressed}) => {
            return (
              <Box
                padding={3}
                borderRadius={selected === 'Contact' ? 8 : 0}
                bg={
                  selected === 'Contact'
                    ? 'white'
                    : isPressed
                    ? 'coolGray.200'
                    : isHovered
                    ? 'coolGray.100'
                    : 'white'
                }
                shadow={selected === 'Contact' ? 2 : 0.1}>
                <Text
                  fontSize="lg"
                  fontWeight={selected === 'Contact' ? 'bold' : 'normal'}
                  color={selected === 'Contact' ? '#F56A02' : 'black'}>
                  Contact Us
                </Text>
              </Box>
            );
          }}
        </Pressable> */}
      </VStack>
    </Box>
  );
};

export default SideNav;
