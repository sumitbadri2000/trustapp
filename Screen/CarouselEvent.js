import React from 'react';
import {Dimensions, ImageBackground} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import {Box, Flex, Image, Text} from 'native-base';

const CarouselEvents = () => {
  const {width} = Dimensions.get('window');

  const data = [
    {
      id: '1',
      images: [
        require('../Assests/Final_Events/1.jpeg'),
        require('../Assests/Final_Events/2.jpeg'),
      ],
    },
    {
      id: '1',
      images: [
        require('../Assests/Final_Events/3.jpeg'),
        require('../Assests/Final_Events/4.jpeg'),
      ],
    },
    {
      id: '1',
      images: [
        require('../Assests/Final_Events/8.jpeg'),
        require('../Assests/Final_Events/9.jpeg'),
      ],
    },
    {
      id: '1',
      images: [
        require('../Assests/Final_Events/16.jpeg'),
        require('../Assests/Final_Events/19.jpeg'),
      ],
    },
  ];

  const renderItem = ({item}) => (
    <Box
      display={'flex'}
      flexDirection={'row'}
      justifyContent={'space-around'}
      width={'100%'}
      alignItems={'center'}>
      {item.images.map((image, index) => (
        <Box
          key={`${item.id}_${index}`}
          width="40%"
          shadow={8}
          borderRadius="8px"
          backgroundColor="#FFFFFF"
          padding="1.5">
          <Image
            width="100%"
            height={200}
            source={image}
            resizeMode="cover" // Use cover or contain as needed
            alt={`${item.id}_${index}`}
          />
        </Box>
      ))}
    </Box>
  );

  return (
    <ImageBackground
      source={require('../Assests/events.png')}
      alt="eventbg"
      style={{width: '100%', resizeMode: 'stretch'}}>
      <Flex
        pt={16}
        pb={6}
        width={'80%'}
        margin={'auto'}
        flexDirection={'row'}
        justifyContent={'center'}>
        <Text
          color={'#F56A02'}
          fontSize={30}
          textAlign={'center'}
          width={'80%'}
          fontWeight={'bold'}>
          Event Gallery
        </Text>
        <Image
          marginTop={6}
          ml={-10}
          source={require('../Assests/homepage/line.png')}
          alt="line"
          style={{resizeMode: 'stretch'}}
        />
      </Flex>
      <Carousel
        loop
        width={width}
        height={300} // Adjust height as needed
        autoPlay={true}
        data={data}
        scrollAnimationDuration={3000} // Adjust animation duration as needed
        renderItem={renderItem}
      />
    </ImageBackground>
  );
};

export default CarouselEvents;
