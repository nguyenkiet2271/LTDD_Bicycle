import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Detail'>;

export default function Detail({ route, navigation }: Props) {
  const { bike } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={bike.image} style={styles.image} resizeMode="contain" />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.name}>{bike.name}</Text>

        <View style={styles.priceRow}>
          <Text style={styles.discountText}>
            {bike.discount} I 350$
          </Text>
          <Text style={styles.originalPrice}>449$</Text>
        </View>

        <Text style={styles.sectionTitle}>Description</Text>
        <Text style={styles.description}>{bike.description}</Text>
      </View>

      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.heartButton}>
          <Text style={styles.heartIcon}>♡</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.addButton}
          activeOpacity={0.85}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.addButtonText}>Add to card</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 16,
    justifyContent: 'space-between',
  },
  imageContainer: {
    width: '100%',
    height: 310,
    backgroundColor: '#FCECEC',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  image: {
    width: '90%',
    height: '90%',
  },
  infoContainer: {
    flex: 1,
    marginTop: 16,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 20,
  },
  discountText: {
    fontSize: 18,
    color: '#777',
    marginRight: 30,
  },
  originalPrice: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
    textDecorationLine: 'line-through',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  description: {
    fontSize: 15,
    color: '#777',
    lineHeight: 22,
  },
  bottomBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  heartButton: {
    padding: 10,
    marginRight: 16,
  },
  heartIcon: {
    fontSize: 28,
    color: '#000',
  },
  addButton: {
    flex: 1,
    backgroundColor: '#E94141',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '600',
  },
});