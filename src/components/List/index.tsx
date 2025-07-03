import React from 'react';
import { GeneralInfo } from '@/dtos/GeneralInfoDTO';
import { FlatList, View, Text, Image } from 'react-native';

type ListProps = {
  list: GeneralInfo[];
};

function List({ list }: ListProps) {
  console.log();

  const renderItem = ({ item }: { item: GeneralInfo }) => (
    <View>
      <Text>{item.Title}</Text>
      <Text>{item.Year}</Text>
      <Text>{item.imdbID}</Text>
      <Text>{item.Type}</Text>
      <Image
        source={{
          uri: 'https://m.media-amazon.com/images/M/MV5BMWU5NmFlYjktMmM1NS00NGMwLWIzN2MtMWQ2YTg0ZWMyNmVjXkEyXkFqcGc@._V1_SX300.jpg',
        }}
      />
      {/* <Column>
              <Line>
                  <Ball />
                  <Data>{item.Title}</Data>
              </Line>
              <Line style={{ justifyContent: 'space-between' }}>
                  <Data style={{ left: 25 }}>Ano:{item.Year}</Data>
                  <Icon
                      style={{ bottom: 13 }}
                      onPress={() => addFavoriteMovie(item)}
                  >
                      {item.favorite ? (
                          <Feather
                              name="star"
                              size={24}
                              color={colors.comp_icon_active}
                          />
                      ) : (
                          <Feather
                              name="star"
                              size={24}
                              color={colors.comp_icon_inative}
                          />
                      )}
                  </Icon>
              </Line>
          </Column> */}
    </View>
  );

  return (
    <FlatList
      data={list}
      renderItem={renderItem}
      keyExtractor={item => item.imdbID}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        alignItems: 'center',
      }}
    />
  );
}

export { List };
