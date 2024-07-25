import {Box, Text} from 'native-base';
import {Image, ImageBackground, ScrollView, View} from 'react-native';
import WebView from 'react-native-webview';

const Annual = () => {
  return (
    // <ScrollView style={{ flex: 1 }}>
    <>
      <View style={{backgroundColor: 'white'}}>
        <Image
          source={require('../Assests/gallery_banner.png')}
          style={{width: '100%', height: 240, resizeMode: 'stretch'}}
        />
      </View>
      <WebView
        source={{uri: 'http://192.168.1.14:3000/annualreport'}}
        // style={{ flex: 1 , marginTop:10}}
      />
    </>

    // </ScrollView>
  );
};

export default Annual;
