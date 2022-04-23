import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#C0FAFF',
    borderRadius: 5,
    marginBottom: 5,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  banckImage: {
    width: 80,
    height: 80,
  },
  infoContainer: {
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  headerName: {
    fontSize: 15,
    fontWeight: '500',
    marginBottom: 5,
  },
  text: {
    fontSize: 13,
    color: '#363636',
    marginBottom: 2,
  },
});

export default styles;
