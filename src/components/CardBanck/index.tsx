import React, {useEffect, useState} from 'react';
import {Image, ImageSourcePropType, Text, View} from 'react-native';
import {Banck} from '../../api/models/Banck';
import styles from './styles';
import DefaultImage from '../../assets/image.png';
import axios from 'axios';

interface CardBanckProps {
  banck: Banck;
}

const CardBanck = ({banck}: CardBanckProps): JSX.Element => {
  const [image, setImage] = useState<ImageSourcePropType>({});

  const verifyImage = async () => {
    const exist = await axios.get(banck.url);
    if (exist) {
      setImage({uri: banck.url});
    }
  };

  useEffect(() => {
    verifyImage().catch(() => setImage(DefaultImage));
  }, []);

  return (
    <View style={styles.cardContainer}>
      <Image source={image} style={styles.banckImage} />
      <View style={styles.infoContainer}>
        <Text style={styles.headerName}>{banck.bankName}</Text>
        <Text style={styles.text}>{banck.description}</Text>
        <Text style={styles.text}>Edad: {banck.age} años</Text>
      </View>
    </View>
  );
};

export default CardBanck;
