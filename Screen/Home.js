import {
  Box,
  Button,
  FlatList,
  Flex,
  Heading,
  Image,
  ScrollView,
  Text,
  VStack,
} from 'native-base';
import CarouselNews from './CarouselEvent';
import CarouselEvents from './CarouselEvent';
import CarouselCertificate from './CarouselCertificate';

const Home = () => {
  const data = [
    {
      id: '1',
      images: require('../Assests/homepage/im1.png'),
      title: ' निःशुल्क स्वास्थ्य जांच',
      colors: '#207FB7',
    },
    {
      id: '2',
      images: require('../Assests/homepage/im2.png'),
      title: ' निःशुल्क मोतियाबिंद ऑपरेशन',
      colors: '#DB0C22',
    },
    {
      id: '3',
      images: require('../Assests/homepage/im3.png'),
      title: ' तिपहिया साइकिल वितरण ',
      colors: '#08B749',
    },
    {
      id: '4',
      images: require('../Assests/homepage/im4.png'),
      title: ' किसान भाइयों को तकनीकी यंत्र वितरण  ',
      colors: '#FFA800',
    },
    {
      id: '5',
      images: require('../Assests/homepage/im5.png'),
      title: ' महिला को सिलाई मशीन वितरण',
      colors: '#3F00C0',
    },
    {
      id: '6',
      images: require('../Assests/homepage/im6.png'),
      title: ' छात्र-छात्राओं की दौड़ स्पर्धा',
      colors: '#FF5800',
    },
  ];
  const renderItem = ({item}) => (
    <Flex
      borderRadius={'md'}
      background={item.colors}
      alignItems={'center'}
      py={2}
      px={2}
      width={'32%'}>
      <Box>
        <Image source={item.images} alt={item.id} />
      </Box>
      <Text width={'80%'} textAlign={'center'} color={'#FFFFFF'} fontSize={14}>
        {item.title}
      </Text>
    </Flex>
  );

  return (
    <ScrollView width={'100%'} height={'100%'}>
      <Flex width={'100%'} style={{gap: 20}}>
        <Image
          source={require('../Assests/homepage/home_banner.png')}
          alt="home_banner"
          height={250}
          width={'100%'}
          style={{resizeMode: 'stretch'}}
        />

        <FlatList
          width={'94%'}
          numColumns={3}
          height={'auto'}
          margin={'auto'}
          data={data}
          renderItem={renderItem}
          columnWrapperStyle={{
            justifyContent: 'space-between',
            marginBottom: 10,
          }}
        />

        <Flex
          height={16}
          background={'#F0F0F0'}
          borderTopWidth={1}
          borderBottomWidth={1}
          justifyContent={'center'}
          borderColor={'gray.300'}>
          <Image
            source={require('../Assests/homepage/latest.png')}
            alt="latest"
            style={{resizeMode: 'stretch'}}
          />
        </Flex>

        <Flex style={{gap: 16}}>
          <Image
            source={require('../Assests/homepage/design1.png')}
            alt="design"
            style={{resizeMode: 'stretch'}}
          />
          <Flex
            width={'80%'}
            margin={'auto'}
            flexDirection={'row'}
            justifyContent={'center'}>
            <Text
              color={'#F56A02'}
              fontSize={22}
              textAlign={'center'}
              width={'80%'}
              fontWeight={'bold'}>
              Clean drinking water is the basic necessity
            </Text>
            <Image
              marginTop={4}
              ml={-2}
              source={require('../Assests/homepage/line.png')}
              alt="line"
              style={{resizeMode: 'stretch'}}
            />
          </Flex>

          <Text
            width={'80%'}
            margin={'auto'}
            textAlign={'center'}
            fontSize={16}
            fontWeight={'medium'}>
            Clean drinking water is essential for health, preventing diseases
            and supporting overall well-being. Access to safe water enhances
            community productivity and reduces healthcare costs, making it a
            fundamental necessity for sustainable development and future
            generations.
          </Text>

          <Button
            width={'38%'}
            margin={'auto'}
            background={'#F56A02'}
            borderRadius={'full'}>
            <Text color={'white'} fontWeight={'semibold'} fontSize={18}>
              Donate Now
            </Text>
          </Button>

          <Image
            source={require('../Assests/homepage/head.png')}
            alt="heading"
            style={{width: '90%', margin: 'auto', resizeMode: 'stretch'}}
          />

          <Flex
            mt={6}
            width={'80%'}
            margin={'auto'}
            flexDirection={'row'}
            justifyContent={'center'}>
            <Text
              color={'#F56A02'}
              fontSize={18}
              textAlign={'center'}
              width={'94%'}
              fontWeight={'bold'}>
              स्वर्गीय सुरेश सिंह फाउंडेशन ट्रस्ट बिहार राज्य के बिहटा क्षेत्र
              के लई ग्राम में स्थित एक गैर-लाभकारी संगठन है।
            </Text>
            <Image
              marginTop={2}
              source={require('../Assests/homepage/line.png')}
              style={{resizeMode: 'stretch'}}
              alt="line"
            />
          </Flex>

          <Flex width={'100%'} style={{gap: 14}}>
            <Flex style={{width: '90%', margin: 'auto', gap: 6}}>
              <Image
                source={require('../Assests/homepage/img1.png')}
                style={{width: '100%', resizeMode: 'stretch'}}
                alt="img1"
              />
              <Box
                borderRadius={'lg'}
                py={4}
                px={4}
                backgroundColor={'#08B749'}
                textAlign={'center'}>
                <Text fontSize={16} color={'white'} textAlign={'center'}>
                  यह संगठन छात्रों, युवाओं और महिलाओं को सशक्त बनाकर समृद्ध समाज
                  बनाने हेतु कार्य करता है। इसके लिए ट्रस्ट समाज से जुड़े कई
                  कार्य कर रहा है। जैसे – दिव्यांग्जनों को आवागमन हेतु तिपहिया
                  साईकिल का वितरण, जरुरतमंदों को अंग वस्त्र और कम्बल वितरण,
                  निःशुल्क स्वास्थ्य जांच शिविर का आयोजन जिसमें कई तरह के जांच
                  किये जाते है, दवा वितरण, निःशुल्क नेत्र जांच, चश्मा वितरण,
                  अस्पताल में निःशुल्क मोतियाबिन्द ऑपरेशन।
                </Text>
              </Box>
            </Flex>

            <Flex style={{width: '90%', margin: 'auto', gap: 6}}>
              <Image
                source={require('../Assests/homepage/img2.png')}
                style={{width: '100%', resizeMode: 'stretch'}}
                alt="img1"
              />
              <Box
                borderRadius={'lg'}
                py={4}
                px={4}
                backgroundColor={'#F56A02'}
                textAlign={'center'}>
                <Text fontSize={16} color={'white'} textAlign={'center'}>
                  महिलाओ को आत्मनिर्भर बनाने हेतु सिलाई मशीन का वितरण, ग्रामीण
                  महिलाओं को आत्मनिर्भर बनाने हेतु आर्थिक सहायता राशि एवं
                  ग्रामीण बहन-बेटियों को विवाहोत्सव पर आत्मनिर्भर एवं सशक्त बनने
                  हेतु जरुरत स्वरूप सामग्री भेंट।
                </Text>
              </Box>
            </Flex>

            <Flex style={{width: '90%', margin: 'auto', gap: 6}}>
              <Image
                source={require('../Assests/homepage/img3.png')}
                style={{width: '100%', resizeMode: 'stretch'}}
                alt="img3"
              />
              <Box
                borderRadius={'lg'}
                py={4}
                px={4}
                backgroundColor={'#FFA800'}
                textAlign={'center'}>
                <Text fontSize={16} color={'black'} textAlign={'center'}>
                  जरूरतमन्द विद्यार्थियों (कक्षा 10th व 12th) को पंजीकरण हेतु
                  सहायता राशि, लेखन सामग्री, ग्रामीण विद्यालय में प्यूरीफायर
                  संयंत्र / आर० ओ०, पटना एथलेटिक्स संघ की निगरानी में
                  छात्र-छात्राओं की दौड़-स्पर्धा एवं स्वo सुरेश सिंह ग्रामीण
                  रात्रि क्रिकेट टूर्नामेंट का आयोजन, ग्रामीण मेधावी
                  छात्र-छात्राओं को गुणवत्तापूर्ण तकनीकी शिक्षा अध्ययन हेतु
                  लैपटॉप (कंप्यूटर) वितरण, आजीविका अर्जित कर परिवार का भरण-पोषण
                  करने हेतु व्यावसायिक वाहन (ऑटो रिक्शा) वितरण।
                </Text>
              </Box>
            </Flex>

            <Flex style={{width: '90%', margin: 'auto', gap: 6}}>
              <Image
                source={require('../Assests/homepage/img4.png')}
                style={{width: '100%', resizeMode: 'stretch'}}
                alt="img1"
              />
              <Box
                borderRadius={'lg'}
                py={4}
                px={4}
                backgroundColor={'#207FB7'}
                textAlign={'center'}>
                <Text fontSize={16} color={'white'} textAlign={'center'}>
                  प्रदूषण की समस्या को दूर करने हेतु वृक्षारोपण, फोफिंग मशीन
                  वितरण, सुगम आवागमन हेतु चौक-चौराहों पर LED की व्यवस्था, किसान
                  भाइयों को उनके फसलों एवं पौधों को बिमारियों से सुरक्षा हेतु
                  स्वचालित कृषि यंत्रों का वितरण, धार्मिक कार्य हेतु ग्रामीणों
                  को मिले शुद्ध इसके लिए बोरवेल की व्यवस्था की गई, कोरोना
                  महामारी के समय सैनिटाइजर मशीन व स्टैण्ड वितरण एवं स्वo सुरेश
                  सिंह ग्रामीण रात्रि क्रिकेट टूर्नामेंट का आयोजन।
                </Text>
              </Box>
            </Flex>
          </Flex>
        </Flex>

        <CarouselEvents />
        <CarouselCertificate />

        <Flex style={{width: '100%'}} alignItems={'center'} mt={200}>
          <Box
            height={200}
            style={{position: 'absolute', zIndex: 1, bottom: 200}}>
            <Image
              source={require('../Assests/homepage/status.png')}
              style={{resizeMode: 'stretch', height: 260, width: 280}}
              alt="status"
            />
          </Box>

          <Box
            width={'100%'}
            py={6}
            px={4}
            style={{gap: 2}}
            backgroundColor={'#6B195A'}
            textAlign={'center'}>
            <Text
              width={'60%'}
              margin={'auto'}
              fontSize={20}
              fontWeight={'bold'}
              color={'#FFA800'}
              textAlign={'center'}>
              "Your Support Matters – Get Involved!"
            </Text>
            <Text
              width={'90%'}
              margin={'auto'}
              fontSize={15}
              fontWeight={'normal'}
              color={'white'}
              textAlign={'center'}>
              Your support can change the course of a woman's life. Help us
              provide the education they deserve and the future they dream of.
            </Text>
          </Box>
        </Flex>
      </Flex>
    </ScrollView>
  );
};

export default Home;
