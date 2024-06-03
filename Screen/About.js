import {Box, Image, ScrollView, Text} from 'native-base';

const About = () => {
  return (
    <ScrollView style={{width: '100%'}} bg={'#FFFDD2'}>
      <Box width="90%" marginX={5} bg={'#FFFFFF'}>
        <Box>
          <Image
            width="100%"
            //   height= '100%'
            //   resizeMode= 'cover'
            // width="100%"
            height={220}
            bg={'#FFFFFF'}
            source={require('../Assests/About/about1.png')}
            alt="About Image"
          />
        </Box>
        <Box alignItems="center">
          <Text style={{fontSize: 18, fontFamily: 'Kalam-Bold'}}>
            About Us...
          </Text>
          <Box width={'80%'}>
            <Text
              textAlign={'center'}
              color={'#08A937'}
              fontFamily={'Kalam-Bold'}
              fontSize={12}>
              स्वo सुरेश सिंह फाउंडेशन®ट्रस्ट{' '}
              <Text
                color={'#000000'}
                fontFamily={'Kalam-Regular'}
                fontSize={12}>
                बिहार राज्य के बिहटा ग्रामीण क्षेत्र में स्थित एक गैर-लाभकारी
                संगठन है जो छात्र-छात्राओं,युवाओं और महिलाओं को सशक्त बनाकर एक
                समृद्ध समाज बनाने हेतु प्रयासरत है। इसके लिएट्रस्ट द्वारा
                <Text color={'#E25212'} fontFamily={'Kalam-Bold'} fontSize={12}>
                  {' '}
                  शिक्षा, स्वास्थ्य, नेत्र देखभाल, स्वच्छ वातावरण और कौशल{' '}
                  <Text
                    color={'#000000'}
                    fontFamily={'Kalam-Regular'}
                    fontSize={12}>
                    विकास से संबंधित अनेक कार्य किये जाते हैं।
                  </Text>
                </Text>
              </Text>
            </Text>
          </Box>
        </Box>

        {/* //seconf=d about */}
        <Box marginTop={10}>
          <Image
            width="100%"
            //   height= '100%'
            //   resizeMode= 'cover'
            // width="100%"
            height={180}
            bg={'#FFFFFF'}
            source={require('../Assests/About/about2.png')}
            alt="About Image"
          />

          <Box
            width={'90%'}
            marginX={5}
            marginTop={'-10%'}
            background={'#FFFFFF'}
            borderColor={'#FFFFFF'}
            shadow={6}
            style={{
              paddingHorizontal: 15,
              paddingVertical: 15,
              borderRadius: 10,
            }}>
            <Text fontFamily={'Kalam-Bold'} color={'#E85515'} fontSize={12}>
              ट्रस्ट{' '}
              <Text
                fontFamily={'Kalam-Regular'}
                color={'#000000'}
                fontSize={12}>
                स्वास्थ्य जांच पर ध्यान केंद्रित करके ग्रामीणों को बीमारियों से
                राहत दिलाने की पहल करता है क्योंकि बेहतर स्वास्थ्य के लिए
                जागरूकता और नियमित स्वास्थ्य जांच महत्वपूर्ण भूमिका निभाती है।
                साथ ही, इसने ग्रामीण लोगों को बुनियादी चिकित्सा सुविधाएं और
                आवश्यक उपकरण प्रदान करके स्वस्थ गांव बनाने की पहल की है।
              </Text>
            </Text>
          </Box>
        </Box>

        {/* //third about */}
        <Box marginTop={10}>
          <Image
            width="100%"
            //   height= '100%'
            //   resizeMode= 'cover'
            // width="100%"
            height={180}
            bg={'#FFFFFF'}
            source={require('../Assests/About/about3.png')}
            alt="About Image"
          />

          <Box
            width={'90%'}
            marginX={5}
            marginTop={'-10%'}
            background={'#FFFFFF'}
            borderColor={'#FFFFFF'}
            shadow={6}
            style={{
              paddingHorizontal: 15,
              paddingVertical: 15,
              borderRadius: 10,
            }}>
            <Text fontFamily={'Kalam-Bold'} color={'#E85515'} fontSize={12}>
              ट्रस्ट{' '}
              <Text
                fontFamily={'Kalam-Regular'}
                color={'#000000'}
                fontSize={12}>
                के द्वारा आंखों की जांच के लिए नेत्र रोग विशेषज्ञों की देखरेख
                में नेत्र शिविर का आयोजन किया जाता है, जहां समाज के अधिकांश लोग
                इसका लाभ उठाते हैं। इसके बाद जरूरतमंदों को दवा के साथ-साथ चश्मा
                वितरित किया जाता है, जबकि मोतियाबिंद से पीड़ित लोगों को अस्पताल
                में मुफ्त मोतियाबिंद ऑपरेशन की सुविधा प्रदान की जाती है।
              </Text>
            </Text>
          </Box>
        </Box>

        {/* //forth about */}
        <Box marginTop={10}>
          <Image
            width="100%"
            //   height= '100%'
            //   resizeMode= 'cover'
            // width="100%"
            height={180}
            bg={'#FFFFFF'}
            source={require('../Assests/About/about4.png')}
            alt="About Image"
          />

          <Box
            width={'90%'}
            marginX={5}
            marginTop={'-10%'}
            background={'#FFFFFF'}
            borderColor={'#FFFFFF'}
            shadow={6}
            marginBottom={2}
            style={{
              paddingHorizontal: 15,
              paddingVertical: 15,
              borderRadius: 10,
            }}>
            <Text fontFamily={'Kalam-Bold'} color={'#E85515'} fontSize={12}>
              ट्रस्ट{' '}
              <Text
                fontFamily={'Kalam-Regular'}
                color={'#000000'}
                fontSize={12}>
                लोगों को उज्ज्वल भविष्य बनाने हेतुबाजार-उन्मुख आजीविका के अवसर
                प्रदान करता है, जैसे कि ग्रामीण महिलाओं को सिलाई मशीनें, किसान
                भाइयों को स्वचालित कृषि उपकरण, गरीब ग्रामीण लोगों को वाणिज्यिक
                वाहन (ऑटो रिक्शा) प्रदान करना आदि।
              </Text>
            </Text>
          </Box>
        </Box>
      </Box>
    </ScrollView>
  );
};

export default About;
