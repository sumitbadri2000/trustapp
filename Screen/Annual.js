import {Box, Text} from 'native-base';
import {Image, ImageBackground, ScrollView, View} from 'react-native';
import WebView from 'react-native-webview';

const Annual = () => {
  return (
    // <ScrollView style={{ flex: 1 }}>
    <>
      <View style={{backgroundColor: 'white'}}>
        <Image
          alt="annual banner"
          source={require('../Assests/annual_banner.png')}
          style={{width: '100%', height: 240, resizeMode: 'stretch'}}
        />
      </View>
      <WebView
        source={{uri: 'https://api.lsstrust.org.in/annualreport'}}
        // style={{ flex: 1 , marginTop:10}}
      />
    </>

    // </ScrollView>
  );
};

export default Annual;
