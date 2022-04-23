import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text} from 'react-native';
import {Banck} from '../../api/models/Banck';
import {getBancks} from '../../api/request/Banck';
import CardBanck from '../../components/CardBanck';
import styles from './styles';

const Home = (): JSX.Element => {
  const [bancks, setBancks] = useState<Banck[]>();
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const loadBanckList = async (): Promise<void> => {
    setRefreshing(true);
    const result = await getBancks();
    setBancks(result);
    setRefreshing(false);
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
      <Text style={styles.header}>List of available banks</Text>
      {!bancks && refreshing ? (
        <ActivityIndicator size="large" style={styles.loaderIndicator} />
      ) : (
        <FlatList
          keyExtractor={item => item.bankName}
          data={bancks}
          renderItem={renderCardBanck}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={renderEmptyList}
          onRefresh={loadBanckList}
          refreshing={refreshing}
          style={styles.listView}
        />
      )}
    </>
  );
};

export default Home;
