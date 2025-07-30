import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { style } from './style';
import { HeartOutlinedIcon, HeartFilledIcon } from '@/assets/icons/Loader';
import { colors } from '@/styles/colors';
import { useMovie } from '@/context';

type CardProps = {
  item: {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
    favorite: boolean;
  };
};

function Card({ item }: CardProps) {
  const { favoriteMovie } = useMovie();
  const { favorite } = item;

  return (
    <View className={style.container}>
      <Image
        className={style.image}
        source={{
          uri: item.Poster,
        }}
        resizeMode="contain"
        style={{
          borderRadius: 10,
        }}
      />
      <View className={style.innerContainer}>
        <View className={style.wrap}>
          <Text numberOfLines={1} className={style.titleText}>
            {item.Title}
          </Text>
        </View>

        <View>
          <Text className={style.yearText}>({item.Year})</Text>
        </View>
      </View>
      <TouchableOpacity
        className="absolute right-2 bottom-4"
        onPress={() => favoriteMovie(item)}
      >
        {favorite ? (
          <HeartFilledIcon width={24} height={24} color={colors.red} />
        ) : (
          <HeartOutlinedIcon width={24} height={24} color={colors.red} />
        )}
      </TouchableOpacity>
    </View>
  );
}

export { Card };
