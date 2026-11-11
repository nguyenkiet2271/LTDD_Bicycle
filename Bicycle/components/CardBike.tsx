import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageSourcePropType } from 'react-native';

export interface Bike {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  discount: string;
  category: 'Roadbike' | 'Mountain';
  description: string;
  image: ImageSourcePropType;
  liked?: boolean;
}

interface CardBikeProps {
  item: Bike;
  onPress: () => void;
}

export default function CardBike({ item, onPress }: CardBikeProps) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
      <TouchableOpacity style={styles.heartIcon}>
        <Text style={{ fontSize: 18, color: item.liked ? '#D0D0D0' : '#555' }}>
          {item.liked ? '♥' : '♡'}
        </Text>
      </TouchableOpacity>

      <Image source={item.image} style={styles.image} resizeMode="contain" />

      <Text style={styles.name} numberOfLines={1}>
        {item.name}
      </Text>

      <Text style={styles.priceContainer}>
        <Text style={styles.currency}>$ </Text>
        <Text style={styles.price}>{item.price}</Text>
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#FEF5EC',
    borderRadius: 15,
    padding: 12,
    margin: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  heartIcon: {
    alignSelf: 'flex-start',
  },
  image: {
    width: 120,
    height: 110,
    marginVertical: 6,
  },
  name: {
    fontSize: 16,
    color: '#666',
    fontWeight: '500',
    marginTop: 4,
  },
  priceContainer: {
    marginTop: 4,
  },
  currency: {
    fontSize: 16,
    color: '#F7BA83',
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
});