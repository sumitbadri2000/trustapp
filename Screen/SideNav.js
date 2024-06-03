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
    <Box bg="#FFFDD2" flex={1} padding={5} safeArea>
      <VStack space={4}>
        <Pressable onPress={() => handlePress('Home')}>
          {({isHovered, isPressed}) => {
            return (
              <Box
                padding={3}
                borderRadius={8}
                bg={
                  selected === 'Home'
                    ? 'blue.800'
                    : isPressed
                    ? 'coolGray.200'
                    : isHovered
                    ? 'coolGray.100'
                    : 'white'
                }
                shadow={2}>
                <Text
                  fontSize="lg"
                  fontWeight="bold"
                  color={selected === 'Home' ? '#FFFFFF' : 'primary.800'}>
                  Hello
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
                borderRadius={8}
                bg={
                  selected === 'Certificate'
                    ? 'blue.800'
                    : isPressed
                    ? 'coolGray.200'
                    : isHovered
                    ? 'coolGray.100'
                    : 'white'
                }
                shadow={2}>
                <Text fontSize="lg" fontWeight="bold" color={selected === 'Certificate' ? '#FFFFFF' : 'primary.800'}>
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
                borderRadius={8}
                bg={
                  selected === 'Gallery'
                    ? 'blue.800'
                    : isPressed
                    ? 'coolGray.200'
                    : isHovered
                    ? 'coolGray.100'
                    : 'white'
                }
                shadow={2}>
                <Text fontSize="lg" fontWeight="bold" color={selected === 'Gallery' ? '#FFFFFF' : 'primary.800'}>
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
                borderRadius={8}
                bg={
                  selected === 'Events'
                    ? 'blue.800'
                    : isPressed
                    ? 'coolGray.200'
                    : isHovered
                    ? 'coolGray.100'
                    : 'white'
                }
                shadow={2}>
                <Text fontSize="lg" fontWeight="bold" color={selected === 'Events' ? '#FFFFFF' : 'primary.800'}>
                  Events
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
                borderRadius={8}
                bg={
                  selected === 'About'
                    ? 'blue.800'
                    : isPressed
                    ? 'coolGray.200'
                    : isHovered
                    ? 'coolGray.100'
                    : 'white'
                }
                shadow={2}>
                <Text fontSize="lg" fontWeight="bold" color={selected === 'About' ? '#FFFFFF' : 'primary.800'}>
                  About
                </Text>
              </Box>
            );
          }}
        </Pressable>

        <Pressable onPress={() => handlePress('Contact')}>
          {({isHovered, isPressed}) => {
            return (
              <Box
                padding={3}
                borderRadius={8}
                bg={
                  selected === 'Contact'
                    ? 'blue.800'
                    : isPressed
                    ? 'coolGray.200'
                    : isHovered
                    ? 'coolGray.100'
                    : 'white'
                }
                shadow={2}>
                <Text fontSize="lg" fontWeight="bold" color={selected === 'Contact' ? '#FFFFFF' : 'primary.800'}>
                  Contact Us
                </Text>
              </Box>
            );
          }}
        </Pressable>
      </VStack>
    </Box>
  );
};

export default SideNav;
