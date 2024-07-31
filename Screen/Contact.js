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
  Flex,
  Text,
} from 'native-base';

import Mail from 'react-native-vector-icons/Entypo';
import Phone from 'react-native-vector-icons/FontAwesome';

const Contact = () => {
  return (
    <ScrollView width={"100%"} height={"100%"} bg="#FFFFFF">
      {/* <Center w="100%" py="5"> */}
      <Box marginX={5} safeArea w="90%" py="8" px={'4'} >
        <Heading
          p={2}
          size="xl"
          color="#F56A02"
          _dark={{color: 'warmGray.50'}}
          fontWeight="semibold"
          textAlign="center"
          mb="5">
          सभी लोगों की मदद करें, और हमसे संपर्क करें
        </Heading>
        <VStack space={3}>
          <FormControl>
            <FormControl.Label _text={{color: '#F56A02'}}>
              First Name
            </FormControl.Label>
            <Input
              placeholder="First Name"
              fontFamily="Kalam-Regular"
              variant="filled"
              bg="#E8F0F2"
              _focus={{borderColor: '#F56A02'}}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label _text={{color: '#F56A02'}}>
              Last Name
            </FormControl.Label>
            <Input
              placeholder="Last Name"
              fontFamily={'Kalam-Regular'}
              variant="filled"
              bg="#E8F0F2"
              _focus={{borderColor: '#F56A02'}}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label _text={{color: '#F56A02'}}>
              Mobile No.
            </FormControl.Label>
            <Input
              placeholder="Mobile no."
              fontFamily={'Kalam-Regular'}
              variant="filled"
              bg="#E8F0F2"
              _focus={{borderColor: '#F56A02'}}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label _text={{color: '#F56A02'}}>
              Email
            </FormControl.Label>
            <Input
              placeholder="Email"
              fontFamily={'Kalam-Regular'}
              variant="filled"
              bg="#E8F0F2"
              _focus={{borderColor: '#F56A02'}}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label _text={{color: '#F56A02'}}>
              Description
            </FormControl.Label>
            <TextArea
              h={20}
              placeholder="Description..."
              fontFamily={'Kalam-Regular'}
              variant="filled"
              bg="#E8F0F2"
              _focus={{borderColor: '#F56A02'}}
            />
          </FormControl>
          <Button
            borderRadius={'full'}
            width={'40%'}
            margin={'auto'}
            mt="5"
            bg="#F56A02"
            _text={{color: 'white', fontSize: 18}}>
            Submit
          </Button>
        </VStack>
      </Box>

      <Flex
        width={'90%'}
        margin={'auto'}
        mt={20}
        flexDirection={'row'}
        justifyContent={'space-between'}>
        <Flex flexDirection={'row'} alignItems={'center'} style={{gap: 10}}>
          <Mail name="mail-with-circle" size={24} color={'#F56A02'} />
          <Text color="black">support@lsstrust.org.in</Text>
        </Flex>

        <Flex flexDirection={'row'} alignItems={'center'} style={{gap: 10}}>
          <Phone name="phone-square" size={24} color={'#F56A02'} />
          <Text color="black">+91-9910174777</Text>
        </Flex>
      </Flex>
      {/* </Center> */}
    </ScrollView>
  );
};

export default Contact;
