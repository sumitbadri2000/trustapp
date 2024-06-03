import React from 'react';
import {
  Box,
  Heading,
  Center,
  VStack,
  FormControl,
  Input,
  Button,
  TextArea,
  ScrollView,
} from 'native-base';

const Contact = () => {
  return (
    <ScrollView style={{width: '100%'}} bg={'#FFFDD2'}>
      {/* <Center w="100%" py="5"> */}
      <Box marginX={5} safeArea w="90%" py="8" px={'4'} bg="#FFFFFF">
        <Heading
      
          fontFamily={'Kalam-Bold'}
          p={2}
          size="lg"
          color="#2C5F41"
          _dark={{color: 'warmGray.50'}}
          fontWeight="semibold"
          textAlign="center"
          mb="5"
>
          सभी लोगों की मदद करें, और हमसे संपर्क करें
        </Heading>
        <VStack space={3}>
          <FormControl>
            <FormControl.Label
              _text={{color: '#2C5F41', fontFamily: 'Kalam-Bold'}}>
           
              First Name
            </FormControl.Label>
            <Input
              placeholder="First Name"
              fontFamily="Kalam-Regular"
              variant="filled"
              bg="#E8F0F2"
              _focus={{borderColor: '#2C5F41'}}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label
              _text={{color: '#2C5F41', fontFamily: 'Kalam-Bold'}}>
              Last Name
            </FormControl.Label>
            <Input
              placeholder="Last Name"
              fontFamily={'Kalam-Regular'}
              variant="filled"
              bg="#E8F0F2"
              _focus={{borderColor: '#2C5F41'}}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label
              _text={{color: '#2C5F41', fontFamily: 'Kalam-Bold'}}>
              Mobile No.
            </FormControl.Label>
            <Input
              placeholder="Mobile no."
              fontFamily={'Kalam-Regular'}
              variant="filled"
              bg="#E8F0F2"
              _focus={{borderColor: '#2C5F41'}}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label
              _text={{color: '#2C5F41', fontFamily: 'Kalam-Bold'}}>
              Email
            </FormControl.Label>
            <Input
              placeholder="Email"
              fontFamily={'Kalam-Regular'}
              variant="filled"
              bg="#E8F0F2"
              _focus={{borderColor: '#2C5F41'}}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label
              _text={{color: '#2C5F41', fontFamily: 'Kalam-Bold'}}>
              Description
            </FormControl.Label>
            <TextArea
              h={20}
              placeholder="Description..."
              fontFamily={'Kalam-Regular'}
              variant="filled"
              bg="#E8F0F2"
              _focus={{borderColor: '#2C5F41'}}
            />
          </FormControl>
          <Button
            mt="5"
            colorScheme="green"
            bg="#2C5F41"
            _text={{color: 'white', fontFamily: 'Kalam-Regular'}}>
            Submit
          </Button>
        </VStack>
      </Box>
      {/* </Center> */}
    </ScrollView>
  );
};

export default Contact;
