import React from 'react';
import {
  View,
  Image,
  type ImageSourcePropType,
  type ImageStyle,
  type StyleProp,
} from 'react-native';

const WatermarkImage: React.FC<{
  alt?: string;
  imageUrl: string | ImageSourcePropType;
  watermarkImageUrl: string | ImageSourcePropType;
  imageStyle?: StyleProp<ImageStyle>;
  imageOpacity?: number;
  watermarkImageOpacity?: number;
}> = ({
  alt,
  imageUrl,
  watermarkImageUrl,
  imageStyle,
  imageOpacity = 1,
  watermarkImageOpacity = 0.5,
}): JSX.Element => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1,
        }}
      >
        <Image
          alt={alt}
          style={{
            flex: 1,
            width: '100%',
            height: '100%',
            opacity:
              watermarkImageOpacity > 1
                ? 1
                : watermarkImageOpacity < 0
                  ? 0
                  : watermarkImageOpacity,
          }}
          resizeMode="repeat"
          source={
            typeof watermarkImageUrl === 'string'
              ? { uri: watermarkImageUrl }
              : watermarkImageUrl
          }
        />
      </View>
      <Image
        alt={alt}
        source={typeof imageUrl === 'string' ? { uri: imageUrl } : imageUrl}
        style={[
          {
            width: '100%',
            height: '100%',
            opacity: imageOpacity > 1 ? 1 : imageOpacity < 0 ? 0 : imageOpacity,
          },
          imageStyle,
        ]}
        resizeMode="cover"
      />
    </View>
  );
};

export default WatermarkImage;
