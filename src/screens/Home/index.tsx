import React, {useEffect, useState} from 'react';
import {FlatList, Text} from 'react-native';
import {Banck} from '../../api/models/Banck';
import {getBancks} from '../../api/request/Banck';
import CardBanck from '../../components/CardBanck';

const Home = (): JSX.Element => {
  const [bancks, setBancks] = useState<Banck[]>();

  const loadBanckList = async (): Promise<void> => {
    const result = await getBancks();
    setBancks(result);
  };

  const renderCardBanck = ({item}: {item: Banck}): JSX.Element => (
    <CardBanck banck={item} />
  );

  const renderEmptyList = (): JSX.Element => <Text>No results</Text>;

  useEffect(() => {
    loadBanckList().catch(console.error);
  }, []);

  return (
    <>
      <Text>List of available banks</Text>
      <FlatList
        keyExtractor={item => item.bankName}
        data={bancks}
        renderItem={renderCardBanck}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={renderEmptyList}
      />
    </>
  );
};

export default Home;
