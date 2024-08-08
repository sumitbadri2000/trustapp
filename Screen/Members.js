import React from 'react';
import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  ScrollView,
  Text,
  VStack,
} from 'native-base';

const Members = () => {
  const board = [
    {
      id: '1',
      name: 'Kshitij Ranjan',
      title: '(Founder Chairman)',
      img: require('../Assests/Members/b1.jpg'),
    },
  ];

  const traniee = [
    {
      id: '1',
      name: 'Harish Kumar',
      title: '(Trustee)',
      img: require('../Assests/Members/t1.jpeg'),
    },
    {
      id: '2',
      name: 'Gautam Kumar',
      title: '(Trustee)',
      img: require('../Assests/Members/t2.jpeg'),
    },
  ];

  const activem = [
    {id: '1', name: 'Subodh Kumar Singh'},
    {id: '2', name: 'Sandeep Kumar'},
    {id: '3', name: 'Mukesh Kumar'},
    {id: '4', name: 'Ashutosh Kumar Gupta'},
    {id: '5', name: 'Harish Kumar'},
    {id: '6', name: 'Gautam Kumar'},
  ];

  return (
    <ScrollView style={{width: '100%', height: '100%'}}>
      {/* Board Members Section */}
      <Flex style={{gap: 20}} px={4}>
        <Text
          color={'#F56A02'}
          textAlign={'center'}
          fontWeight={900}
          fontSize={24}>
          Board Member
        </Text>
        {board.map(ele => (
          <Flex
            key={ele.id} // Ensure each item has a unique key
            width={'70%'}
            borderRadius={'xl'}
  
            margin={'auto'}
            borderWidth={1}
            borderColor={'grey'}
            style={{gap: 10}}
            alignItems={'center'}>
            <Box width={'100%'} height={320}>
              <Image
              borderTopRadius={"xl"}
                resizeMode="cover"
                width={'100%'}
                height={'100%'}
                source={ele.img}
                alt={ele.id}
              />
            </Box>
            <Flex alignItems={'center'}>
              <Text fontWeight={700} fontSize={20} color={'#F56A02'}>
                {ele.name}
              </Text>
              <Text fontWeight={600} fontSize={16}>
                {ele.title}
              </Text>
            </Flex>
          </Flex>
        ))}
      </Flex>

      {/* Trainee Members Section */}
      {/* <Box mt={20} px={4}>
        <Text
          color={'#F56A02'}
          textAlign={'center'}
          fontWeight={900}
          fontSize={24}
          mb={4}>
          Trainee Members
        </Text>
        <VStack space={4}>
          {traniee
            .reduce((rows, item, index) => {
              if (index % 2 === 0) rows.push([]);
              rows[rows.length - 1].push(item);
              return rows;
            }, [])
            .map((row, rowIndex) => (
              <HStack
                key={rowIndex} // Key for each row
                space={4}
                mb={4}
                width="100%"
                justifyContent="center">
                {row.map(ele => (
                  <Box
                    key={ele.id} // Key for each item
                    width="50%"
                    borderRadius="xl"
                    py={4}
                    px={4}
                    borderWidth={1}
                    borderColor={'grey'}
                    alignItems="center"
                    overflow="hidden">
                    <Image
                      resizeMode="cover"
                      width="100%"
                      height={200}
                      source={ele.img}
                      alt={ele.id}
                    />
                    <VStack alignItems="center" mt={2}>
                      <Text fontWeight={700} fontSize={20} color={'#F56A02'}>
                        {ele.name}
                      </Text>
                      <Text fontWeight={600} fontSize={16}>
                        {ele.title}
                      </Text>
                    </VStack>
                  </Box>
                ))}
              </HStack>
            ))}
        </VStack>
      </Box> */}

      {/* active member */}

      <Flex alignItems={'start'} py={12} px={4}>
        <Heading color={'#F56A02'}>Volunteers</Heading>
        {activem.map(ele => (
          <Text>⦿ {ele.name}</Text>
        ))}
      </Flex>
    </ScrollView>
  );
};

export default Members;
