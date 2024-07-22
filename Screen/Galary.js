import React, {useState} from 'react';

import {Box, Flex, Image, Modal, Text} from 'native-base';

import {ScrollView} from 'native-base';
import g1 from '../Assests/gallary/img1.jpeg';
import g2 from '../Assests/gallary/img2.jpeg';
import g3 from '../Assests/gallary/img3.jpeg';
import g4 from '../Assests/gallary/img4.jpeg';
import g5 from '../Assests/gallary/img5.jpeg';
import g6 from '../Assests/gallary/img6.jpeg';
import g7 from '../Assests/gallary/img7.jpeg';
import g8 from '../Assests/gallary/img8.jpeg';
import g9 from '../Assests/gallary/img9.jpeg';
import g10 from '../Assests/gallary/img10.jpeg';
import g11 from '../Assests/gallary/img11.jpeg';
import g12 from '../Assests/gallary/img12.jpeg';
import g13 from '../Assests/gallary/img13.jpeg';
import g14 from '../Assests/gallary/img14.jpeg';
import g15 from '../Assests/gallary/img15.jpeg';
import g16 from '../Assests/gallary/img16.jpeg';
import g17 from '../Assests/gallary/img17.jpg';
import g18 from '../Assests/gallary/img18.jpeg';
import g19 from '../Assests/gallary/img19.jpeg';
import g20 from '../Assests/gallary/img20.jpeg';
import g21 from '../Assests/gallary/img21.jpeg';
import g22 from '../Assests/gallary/img22.jpeg';
import g23 from '../Assests/gallary/img23.jpeg';
import g24 from '../Assests/gallary/img24.jpeg';
import g25 from '../Assests/gallary/img25.jpeg';
import ModalImage from './ModalImage';
import {TouchableOpacity} from 'react-native';
const Galary = () => {
  const images = [
    g1,
    g2,
    g3,
    g4,
    g5,
    g6,
    g7,
    g8,
    g9,
    g10,
    g11,
    g12,
    g13,
    g14,
    g15,
    g16,
    g18,
    g19,
    g21,
  ];

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = image => {
    setSelectedImage(image);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalVisible(false);
  };
  const chunkedImages = images.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / 2);
    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [];
    }
    resultArray[chunkIndex].push(item);
    return resultArray;
  }, []);

  return (
    <ScrollView style={{width: '100%'}} bg={'white'}>
      <Image
        source={require('../Assests/gallery_banner.png')}
        style={{width: '100%', height: 300, resizeMode: 'stretch'}}
        alt="galery_banner"
      />

      <Flex
      py={4}
        width={'100%'}
        margin={'auto'}
        flexDirection={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}>
        <Box >
          <Image
            source={require('../Assests/gallery1.png')}
            alt="line"
            style={{resizeMode: 'stretch'}}
          />
        </Box>

        <Flex flexDirection={'row'}>
          <Text
            color={'#F56A02'}
            fontSize={30}
            textAlign={'start'}
            width={'80%'}
            fontWeight={'bold'}>
            Gallery and Media
          </Text>
          <Image
            marginTop={6}
            ml={-8}
            source={require('../Assests/homepage/line.png')}
            alt="line"
            style={{resizeMode: 'stretch'}}
          />
        </Flex>
      </Flex>

      {chunkedImages.map((row, rowIndex) => (
        <Box
          width={'100%'}
          background={'#F0F0F0'}
          key={rowIndex}
          style={{flexDirection: 'row', justifyContent: 'center', gap: 20}}>
          {row.map((src, index) => (
            <TouchableOpacity
              style={{width: '44%'}}
              onPress={() => openModal(src)}>
              <Box
                width={'100%'}
                height={200}
                borderWidth={'1px'}
                marginTop={5}
                padding={'13px'}
                backgroundColor={"white"}
                borderRadius={'6px'}>
                <Image
                  resizeMode="stretch"
                  key={index}
                  width={'100%'}
                  height={'100%'}
                  source={src}
                />
              </Box>
            </TouchableOpacity>
          ))}
          <Modal isOpen={modalVisible} onClose={closeModal}>
            <Modal.Content maxWidth="100%" maxHeight={'60%'}>
              <Modal.CloseButton />
              {/* <Modal.Body borderWidth={2} borderColor={"blue.400"} height={"10%"}> */}
              {selectedImage && (
                <ModalImage image={selectedImage} onClose={closeModal} />
              )}
              {/* </Modal.Body> */}
            </Modal.Content>
          </Modal>
        </Box>
      ))}
    </ScrollView>
  );
};
export default Galary;
