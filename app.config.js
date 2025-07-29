//trim() para o "development "
// console.log(`[${process.env.APP_VARIANT}]`);
const APP_VARIANT = (process.env.APP_VARIANT || '').trim();

const PACKAGE_NAME = 'com.gamonpo.cinemapp';

const IS_DEV =
  APP_VARIANT === 'development' || APP_VARIANT === 'preview'
    ? PACKAGE_NAME + '.dev'
    : false;

const BUNDLE_IDENTIFIER = IS_DEV || PACKAGE_NAME;

module.exports = {
  expo: {
    name: 'cinem-app',
    slug: 'cinem-app',
    version: '1.0.1',
    orientation: 'portrait',
    icon: './assets/icon.png',
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
      bundleIdentifier: BUNDLE_IDENTIFIER,
      icon: {
        dark: './src/assets/icons/png/ios-dark.png',
        light: './src/assets/icons/png/ios-light.png',
        tinted: './src/assets/icons/png/ios-tinted.png',
      },
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './src/assets/icons/png/adaptive-icon.png',
        monochromeImage: './src/assets/icons/png/adaptive-icon.png',
        backgroundColor: '#111111',
      },
      package: BUNDLE_IDENTIFIER,
      permissions: [],
      edgeToEdgeEnabled: true,
    },
    web: {
      favicon: './assets/favicon.png',
      bundler: 'metro',
    },
    extra: {
      eas: {
        projectId: '899b8f68-8761-42d6-9fe6-8cd10956d2c5',
      },
    },
    userInterfaceStyle: 'automatic',
    plugins: [
      [
        'expo-splash-screen',
        {
          backgroundColor: '#ffffff',
          image: './src/assets/icons/png/splash-icon-dark.png',
          dark: {
            image: './src/assets/icons/png/splash-icon-light.png',
            backgroundColor: '#111111',
          },
          imageWidth: 200,
        },
      ],
    ],
  },
};
