import { SearchIcon } from '@/assets/icons/Loader';
import { colors } from '@/styles/colors';
import React, { JSX } from 'react';
import { TextInput, View } from 'react-native';
import { style } from './style';
import { Button } from '../Button';

type Props = {
  value: string;
  setValue: (value: string) => void;
  onPress: (value: string) => void;
};

function Search({ value, setValue, onPress }: Props): JSX.Element {
  return (
    <View className={style.container}>
      <TextInput
        className={style.input}
        placeholder={'Search'}
        placeholderTextColor={colors.mutedSlate}
        autoCorrect={false}
        autoCapitalize="none"
        onChangeText={text => setValue(text)}
        value={value}
      />

      <Button onPress={() => onPress(value)} style={style.button}>
        <SearchIcon width={16} height={16} color={colors.white} />
      </Button>
    </View>
  );
}

export { Search };
