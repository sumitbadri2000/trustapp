import React from 'react';
import e1 from "../Assests/event2022/img1.jpg"
import e2 from "../Assests/event2022/img2.jpg"
import e3 from "../Assests/event2022/img3.jpg"
import e4 from "../Assests/event2022/img4.jpg"
import e5 from "../Assests/event2022/img5.jpg"
import e6 from "../Assests/event2022/img6.jpg"
import e7 from "../Assests/event2022/img7.jpg"
import e8 from "../Assests/event2022/img8.jpg"
import e9 from "../Assests/event2022/img9.jpg"
import e10 from "../Assests/event2022/img10.jpg"
import e11 from "../Assests/event2022/img11.jpg"
import e12 from "../Assests/event2022/img12.jpg"
import e13 from "../Assests/event2022/img13.jpg"
import e14 from "../Assests/event2022/img14.jpg"
import e15 from "../Assests/event2022/img15.jpg"
import e16 from "../Assests/event2022/img16.jpg"
// import e17 from "../Assests/event2022/img17.jpg"

import {Box, Image} from 'native-base';

import {ScrollView} from 'native-base';

const Events = () => {
  const images = [e1,e2,e3,e4,e5,e6,e7,e8,e9,e10,e11,e12,e13,e14,e15,e16];

  const chunkedImages = images.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / 2);
    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [];
    }
    resultArray[chunkIndex].push(item);
    return resultArray;
  }, []);

  return (
    <ScrollView style={{width: '100%'}} bg={'#FFFDD2'}>
      {chunkedImages.map((row, rowIndex) => (
        <Box width={"90%"} marginX={5} background={"#FFFFFF"}
          key={rowIndex}
          style={{flexDirection: 'row', justifyContent: 'center',gap:16}} >
          {row.map((src, index) => (
            <Box
              width={'48%'}
              // borderWidth="2"
              height={200}
              borderWidth={'1px'}
              marginTop={5}
              padding={'13px'}
              borderRadius={'6px'}>
              <Image key={index} width={'100%'} height={'100%'} source={src} />
            </Box>
          ))}
        </Box>
      ))}
    </ScrollView>
  );
};

export default Events;
