import React, {useState} from 'react';
import c1 from '../Assests/Certificates/c1.jpg';
import c2 from '../Assests/Certificates/c2.jpeg';
import c3 from '../Assests/Certificates/c3.jpeg';
import c4 from '../Assests/Certificates/c4.jpeg';
import c5 from '../Assests/Certificates/c5.jpeg';
import c6 from '../Assests/Certificates/c6.jpeg';
import c7 from '../Assests/Certificates/c7.jpeg';
import c8 from '../Assests/Certificates/c8.jpeg';
import c9 from '../Assests/Certificates/c9.jpeg';
import c10 from '../Assests/Certificates/c10.jpeg';
import c11 from '../Assests/Certificates/c11.jpeg';
import c12 from '../Assests/Certificates/c12.jpeg';
import c13 from '../Assests/Certificates/c13.jpeg';
import c14 from '../Assests/Certificates/c14.jpeg';
import c15 from '../Assests/Certificates/c15.jpeg';
import c16 from '../Assests/Certificates/c16.jpeg';
import c17 from '../Assests/Certificates/c17.jpeg';
import c18 from '../Assests/Certificates/c18.jpeg';
import c19 from '../Assests/Certificates/c19.jpeg';
import c20 from '../Assests/Certificates/c20.jpeg';
import c21 from '../Assests/Certificates/c21.jpg';

import {Box, Image, Modal} from 'native-base';

import {ScrollView} from 'native-base';
import ModalImage from './ModalImage';
import {TouchableOpacity} from 'react-native';

const Certificate = () => {
  const images = [
    c1,
    c2,
    c3,
    c4,
    c5,
    c6,
    c7,
    c8,
    c9,
    c10,
    c11,
    c12,
    c13,
    c14,
    c15,
    c16,
    c17,
    c18,
    c19,
    c20,
    c21,
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
    <ScrollView style={{width: '100%'}} bg={'#FFFDD2'}>
      {chunkedImages.map((row, rowIndex) => (
        <Box
          width={'90%'}
          marginX={5}
          background={'#FFFFFF'}
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
            <Modal.Content maxWidth="100%" maxHeight={"60%"}>
              <Modal.CloseButton />
              {/* <Modal.Body> */}
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

export default Certificate;
