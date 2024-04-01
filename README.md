# react-native-watermark-image

React Native Watermarker: Easily add customizable watermarks to images in your React Native applications. Protect your images and maintain brand consistency with this lightweight and user-friendly package.

## Installation

```sh
npm install react-native-watermark-image
```

## Usage

```js
import WatermarkImage from 'react-native-watermark-image';

// ...

<WatermarkImage
  alt="Example Image"
  imageUrl="https://picsum.photos/200"
  watermarkImageUrl="../assets/watermark-image.png"
  imageOpacity={0.8}
  watermarkImageOpacity={0.2}
/>
```

## Props

- `alt`: Alt text for the main image.
- `imageUrl`: URL or source of the main image.
- `watermarkImageUrl`: URL or source of the watermark image.
- `imageStyle`: Style object or style array for the main image.
- `imageOpacity`: Opacity of the main image (default is `1`).
- `watermarkImageOpacity`: Opacity of the watermark image (default is `0.5`).

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
