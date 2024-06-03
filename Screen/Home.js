import {Box, Heading, Image, ScrollView, Text, VStack} from 'native-base';
import {Dimensions} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import CarouselNews from './CarouselNews';

const Home = () => {
  const width = Dimensions.get('window').width;
  const {height: screenHeight} = Dimensions.get('window');
  // const boxHeight = screenHeight * 0.21; // Adjust the percentage as needed

  const data = [
    {id: '1', images: require('../Assests/Slider/img1.jpg')},
    {id: '2', images: require('../Assests/Slider/img3.jpeg')},
    {id: '3', images: require('../Assests/Slider/img5.jpg')},
    {id: '4', images: require('../Assests/Slider/img6.jpg')},
  ];
  const renderItem = ({item}) => (
    <Box
      // marginTop={'2.5'}
      width="89%"
      shadow={2}
      borderRadius="8px"
      background="#FFFFFF"
      padding="1.5"
      // height={boxHeight}
      marginX={'auto'}>
      <Image
        width="100%"
        height="100%"
        source={item.images}
        resizeMode="cover"
        alt={`${item.id}+1`}
      />
    </Box>
  );

  return (
    <ScrollView width={'100%'} background={'#FFFDD2'}>
      <Box width={'90%'} marginX={'auto'} backgroundColor={'#FFFFFF'}>
        <Box
          width={'100%'}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          flexDirection={'column'}>
          <Carousel
            loop
            width={width}
            height={200}
            autoPlay={true}
            data={data}
            scrollAnimationDuration={3000}
            renderItem={renderItem}
            style={{marginHorizontal: 'auto'}}
          />
        </Box>

        <Box marginTop={'10'} width={'100%'} style={{gap:10}}>
        <Text
          fontFamily="Kalam-Bold"
          fontSize="xl"
          textAlign="center"
          marginX="auto"
          color="#08A937"
        >
            Creating Awareness, Driving Changes.
          </Text>

          <Text width={'80%'} textAlign={'center'} fontFamily={"Kalam-Bold"} alignSelf={'center'}>
          हमारा उद्देश्य व्यक्तियों के बीच जागरूकता लाना और प्रचलित सामाजिक मुद्दों के समाधान के लिए उन्हें एक साथ खड़ा करना है।
          </Text>
          <Image
            source={require('../Assests/grouppic.png')}
            resizeMode="stretch"
            width={'100%'}
            ></Image>
        </Box>

        <Box marginTop={'10'} width={'100%'} marginX={'auto'}>
          <Text fontFamily={"Kalam-Bold"} fontSize={'xl'} textAlign={'center'} color={'#FFFFFF'} mb={3} py={2} bg={"#27B350"}>
            समाचार में मीडिया उपस्थिति
          </Text>
          <CarouselNews />
        </Box>
      </Box>
    </ScrollView>
  );
};

export default Home;
