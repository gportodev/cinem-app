import { SearchIcon } from '@/assets/icons/Loader';
import { colors } from '@/styles/colors';
import React, { JSX } from 'react';
import { TextInput, View } from 'react-native';
import { style } from './style';
import { Button } from '../Button';

type SearchProps = {
  value: string;
  setValue: (value: string) => void;
  onPress?: () => void;
  filter?: boolean;
};

function Search({
  value,
  setValue,
  onPress = () => {},
  filter = false,
}: SearchProps): JSX.Element {
  return (
    <View className={style.container}>
      {filter && (
        <View className="left-4 absolute z-10">
          <SearchIcon width={12} height={12} color={colors.white} />
        </View>
      )}

      <TextInput
        className={!filter ? style.input : style.input + ' rounded-2xl pl-[30]'}
        placeholder={'Buscar...'}
        placeholderTextColor={colors.mutedSlate}
        autoCorrect={false}
        autoCapitalize="none"
        onChangeText={text => setValue(text)}
        value={value}
        onSubmitEditing={() => onPress()}
      />

      {!filter && (
        <Button onPress={() => onPress()} style={style.button}>
          <SearchIcon width={16} height={16} color={colors.white} />
        </Button>
      )}
    </View>
  );
}

export { Search };
