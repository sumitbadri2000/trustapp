import {View, Text} from 'react-native';
import React from 'react';
import {Dimensions} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

import {Box, Image} from 'native-base';
const CarouselNews = () => {
  const {height: screenHeight} = Dimensions.get('window');
  const width = Dimensions.get('window').width;

  const data = [
    {
      id: '1',
      images: [
        require('../Assests/News/img1.webp'),
        require('../Assests/News/img2.webp'),
      ],
    },
    {
      id: '2',
      images: [
        require('../Assests/News/img3.webp'),
        require('../Assests/News/img4.webp'),
      ],
    },
    {
      id: '3',
      images: [
        require('../Assests/News/img5.jpeg'),
        require('../Assests/News/img6.jpeg'),
      ],
    },
    {
      id: '4',
      images: [
        require('../Assests/News/img7.jpeg'),
        require('../Assests/News/img8.jpeg'),
      ],
    },
  ];

  const renderItem = ({item}) => (
    <Box
      mb={5}
      display={'flex'}
      flexDirection={'row'}
      justifyContent={'space-around'}
      width={'90%'}
      alignItems={'center'}>
      <Box
        width="45%"
        shadow={8}
        borderRadius="8px"
        background="#FFFFFF"
        padding="1.5">
        <Image
          width="100%"
          height="100%"
          source={item.images[0]}
          resizeMode="contain"
          alt={`${item.id}+1`}
        />
      </Box>

      <Box
        width="45%"
        shadow={8}
        borderRadius="8px"
        background="#FFFFFF"
        padding="1.5">
        <Image
          width="100%"
          height="100%"
          source={item.images[1]}
          resizeMode="contain"
          alt={`${item.id}+1`}
        />
      </Box>
    </Box>
  );

  return (
    <Carousel
      loop
      width={width}
      height={200}
      autoPlay={true}
      data={data}
      scrollAnimationDuration={3000}
      renderItem={renderItem}
    />
  );
};

export default CarouselNews;
