import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import WatermarkImage from 'react-native-watermark-image';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <WatermarkImage
        alt="Example Image"
        imageUrl="https://picsum.photos/200"
        watermarkImageUrl="../assets/watermark-image.png"
        imageOpacity={0.8}
        watermarkImageOpacity={0.2}
      />
    </SafeAreaView>
  );
}
