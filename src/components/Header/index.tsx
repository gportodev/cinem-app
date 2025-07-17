import React, { JSX } from 'react';
import { View, Text } from 'react-native';
import { MovieClapperIcon } from '@/assets/icons/Loader';
import { style } from './style';
import { colors } from '@/styles/colors';

function Header(): JSX.Element {
  return (
    <View className={style.container}>
      <View className={style.wrap}>
        <MovieClapperIcon width={50} height={50} color={colors.white} />

        <Text className={style.text}>CineWiki</Text>
      </View>
    </View>
  );
}

export { Header };
