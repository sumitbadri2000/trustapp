import React from 'react';

import {Box, Image} from 'native-base';

import {ScrollView} from 'native-base';
import g1 from "../Assests/gallary/img1.jpg"
import g2 from "../Assests/gallary/img2.jpg"
import g3 from "../Assests/gallary/img3.jpg"
import g4 from "../Assests/gallary/img4.jpg"
import g5 from "../Assests/gallary/img5.jpg"
import g6 from "../Assests/gallary/img6.jpg"
import g7 from "../Assests/gallary/img7.jpg"
import g8 from "../Assests/gallary/img8.jpg"
import g9 from "../Assests/gallary/img9.jpg"
import g10 from "../Assests/gallary/img10.jpg"
import g11 from "../Assests/gallary/img11.jpg"
import g12 from "../Assests/gallary/img12.jpg"
import g13 from "../Assests/gallary/img13.jpg"
import g14 from "../Assests/gallary/img14.jpg"
import g15 from "../Assests/gallary/img15.jpg"
import g16 from "../Assests/gallary/img16.jpg"
import g17 from "../Assests/gallary/img17.jpg"
import g18 from "../Assests/gallary/img18.jpg"
import g19 from "../Assests/gallary/img19.jpg"
import g20 from "../Assests/gallary/img20.jpg"
import g21 from "../Assests/gallary/img21.jpg"
import g22 from "../Assests/gallary/img22.jpg"
import g23 from "../Assests/gallary/img23.jpg"
import g24 from "../Assests/gallary/img24.jpg"
// import g25 from "../Assests/gallary/img25.jpg"
const Galary = () => {
  const images = [g1,g2,g3,g4,g5,g6,g7,g8,g9,g10,g11,g12,g13,g14,g15,g16,g17,g18,g19,g22];

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
              <Image key={index} width={'100%'} height={'100%'} source={src} alt={`${index}+1`} />
            </Box>
          ))}
        </Box>
      ))}
    </ScrollView>
  );
};

export default Galary;
