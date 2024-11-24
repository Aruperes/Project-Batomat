import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ScrollView,
  Image,
  Linking,
} from 'react-native';
import BackButton from '../../assets/icon/BackButton.svg';
import {MenuButton, Header} from '../../components/molecules';

const products = [
  {
    title: 'Booster Tomat',
    description:
      'Pupuk multi mikroba yang mengandung nutrisi untuk kesuburan tanaman',
    price: 'Rp 20.000',
    image: require('../../assets/images/obat1.jpg'),
    link: 'https://shopee.co.id/product/38125058/22578398021',
  },
  {
    title: 'ATHENZ 33EC 100ML',
    description:
      'Obat pertanian untuk mengendalikan hama ulat pada tanaman tomat',
    price: 'Rp 55.000',
    image: require('../../assets/images/obat2.png'),
    link: 'https://www.example.com/athenz-33ec',
  },
  {
    title: 'Pupuk Kalsium VITCAL',
    description:
      'Untuk mengatasi busuk buah atau daun, dan bisa mencegah kerontokan buah dan daun',
    price: 'Rp 13.500',
    image: require('../../assets/images/obat3.png'),
    link: 'https://www.example.com/pupuk-vitcal',
  },
  {
    title: 'BUAH ETAFON 480SL',
    description:
      'Digunakan untuk memberi warna, mempercepat pemasakan dan menguatkan tekstur buah-buahan hasil panen',
    price: 'Rp 47.200',
    image: require('../../assets/images/obat4.png'),
    link: 'https://www.example.com/etafon-480sl',
  },
];

const ProductList = ({navigation}) => {
  const handleOpenLink = url => {
    // Fungsi untuk membuka tautan
    Linking.openURL(url).catch(err =>
      console.error('Failed to open link:', err),
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header text="Obat" />

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <BackButton width={24} height={24} />
      </TouchableOpacity>

      {/* List of Products */}
      <ScrollView style={styles.contentWrapper}>
        {products.map((product, index) => (
          <View key={index} style={styles.productCard}>
            <Image source={product.image} style={styles.productImage} />
            <View style={styles.productDetails}>
              <Text style={styles.productTitle}>{product.title}</Text>
              <Text style={styles.productDescription}>
                {product.description}
              </Text>
              <Text style={styles.productPrice}>{product.price}</Text>
            </View>
            <TouchableOpacity
              style={styles.buyButton}
              onPress={() => handleOpenLink(product.link)} // Panggil handleOpenLink dengan tautan produk
            >
              <Text style={styles.buyButtonText}>Beli Sekarang</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <View style={styles.menuButtonWrapper}>
        <MenuButton navigation={navigation} />
      </View>
    </View>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: -10,
    backgroundColor: '#F9F7E4',
  },
  contentWrapper: {
    flex: 1,
    paddingHorizontal: 24,
    marginTop: 20,
  },
  backButton: {
    position: 'absolute',
    left: 20,
    top: 43,
    zIndex: 1,
  },
  productCard: {
    backgroundColor: '#D4D0A6',
    borderRadius: 12,
    marginTop: 20,
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    height: 155,
  },
  productImage: {
    width: 69,
    height: 86,
    marginLeft: 30,
    marginTop: -25,
  },
  productDetails: {
    flex: 1,
    justifyContent: 'space-between',
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4e4a41',
    marginLeft: 15,
    width: 180,
    height: 25,
  },
  productDescription: {
    fontSize: 14,
    color: '#4e4a41',
    marginTop: 4,
    marginLeft: 15,
    width: 220,
    height: 50,
  },
  productPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4e4a41',
    marginTop: 25,
    marginLeft: -65,
  },
  buyButton: {
    backgroundColor: '#292D32',
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 25,
    marginTop: 100,
  },
  buyButtonText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
  },
  menuButtonWrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#292D32',
    paddingVertical: 10,
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#ccc',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 95,
  },
});
