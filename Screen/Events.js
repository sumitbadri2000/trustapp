import React, { useState } from 'react';
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
import {Box, Image, Modal} from 'native-base';

import {ScrollView} from 'native-base';
import ModalImage from './ModalImage';
import {TouchableOpacity} from 'react-native';

const Events = () => {
  const images = [e1,e2,e3,e4,e5,e6,e7,e8,e9,e10,e11,e12,e13,e14,e15,e16];

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

export default Events;
