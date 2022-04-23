import React from 'react';
import {Image, Text, View} from 'react-native';
import {Banck} from '../../api/models/Banck';

interface CardBanckProps {
  banck: Banck;
}

const CardBanck = ({banck}: CardBanckProps): JSX.Element => {
  return (
    <View>
      <Image source={{uri: banck.url}} />
      <View>
        <Text>{banck.bankName}</Text>
        <Text>{banck.description}</Text>
        <Text>{banck.age}</Text>
      </View>
    </View>
  );
};

export default CardBanck;
