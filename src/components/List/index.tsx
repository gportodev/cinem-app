import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { Card } from '../Card';
import { Header } from '../Header';
import { EyesInverseIcon } from '@/assets/icons/Loader';
import { colors } from '@/styles/colors';
import { style } from './style';
import { Search } from '../Search';
import { CustomGeneralInfo } from '@/dtos/CustomGeneralInfoDTO';
import { Loader } from '../Loader';

type ListProps = {
  list: CustomGeneralInfo[];
  value: string;
  setValue: (value: string) => void;
  onPress?: () => void;
  filter?: boolean;
  loading?: boolean;
};

function List({ list, value, setValue, onPress, filter, loading }: ListProps) {
  const renderEmpty = () => {
    return loading ? (
      <View className="h-52 justify-center">
        <Loader size={'large'} />
      </View>
    ) : (
      <View className={style.emptyContainer}>
        <EyesInverseIcon width={100} height={100} color={colors.mutedSlate} />
        <Text className={style.emptyContainerText}>
          {!onPress ? 'Nenhum favorito' : 'Nenhuma busca'} no momento...
        </Text>
      </View>
    );
  };

  const renderItem = ({ item }: { item: CustomGeneralInfo }) => (
    <View>
      <Card item={item} />
    </View>
  );

  return (
    <FlatList
      data={list}
      renderItem={renderItem}
      keyExtractor={item => item.imdbID}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={
        <View className={style.headerContainer}>
          <Header />
          <Search
            value={value}
            setValue={setValue}
            onPress={onPress}
            filter={filter}
          />
        </View>
      }
      ListHeaderComponentStyle={{
        paddingBottom: 24,
      }}
      ListEmptyComponent={renderEmpty}
      contentContainerStyle={{
        paddingHorizontal: 24,
      }}
    />
  );
}

export { List };
