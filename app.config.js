const background = '#ffffff';

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
    name: "cinem-app",
    slug: "cinem-app",
    version: "1.0.1",
    orientation: "portrait",
    icon: "./assets/icon.png",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: background,
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
      bundleIdentifier: BUNDLE_IDENTIFIER
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: background,
      },
      package: BUNDLE_IDENTIFIER,
      permissions: [],
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    extra: {
      eas: {
        projectId: "899b8f68-8761-42d6-9fe6-8cd10956d2c5",
      },
    },
  },
};