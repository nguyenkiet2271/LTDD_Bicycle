import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import CardBike, { Bike } from '../components/CardBike';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const BIKES_DATA: Bike[] = [
  {
    id: '1',
    name: 'Pinarello',
    price: 1800,
    originalPrice: 2100,
    discount: '15% OFF',
    category: 'Mountain',
    description:
      'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.',
    image: require('../assets/item_first.png'), // Hoặc require('../assets/blue_bike.png')
    liked: true,
  },
  {
    id: '2',
    name: 'Pina Mountai',
    price: 1700,
    originalPrice: 2000,
    discount: '15% OFF',
    category: 'Mountain',
    description:
      'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.',
    image: require('../assets/red_bike.png'),
  },
  {
    id: '3',
    name: 'Pina Bike',
    price: 1500,
    originalPrice: 1750,
    discount: '15% OFF',
    category: 'Roadbike',
    description:
      'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.',
    image: require('../assets/purple_bike.png'),
  },
  {
    id: '4',
    name: 'Pinarello',
    price: 1900,
    originalPrice: 2200,
    discount: '15% OFF',
    category: 'Roadbike',
    description:
      'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.',
    image: require('../assets/red_bike_2.png'),
  },
  {
    id: '5',
    name: 'Pinarello',
    price: 2700,
    originalPrice: 3100,
    discount: '15% OFF',
    category: 'Roadbike',
    description:
      'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.',
    image: require('../assets/purple_bike.png'),
  },
  {
    id: '6',
    name: 'Pinarello',
    price: 1350,
    originalPrice: 1600,
    discount: '15% OFF',
    category: 'Mountain',
    description:
      'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.',
    image: require('../assets/red_bike.png'),
  },
];

const CATEGORIES = ['All', 'Roadbike', 'Mountain'] as const;

export default function Home({ navigation }: Props) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredBikes =
    selectedCategory === 'All'
      ? BIKES_DATA
      : BIKES_DATA.filter((bike) => bike.category === selectedCategory);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTitle}>The world’s Best Bike</Text>

      <View style={styles.filterContainer}>
        {CATEGORIES.map((category) => {
          const isActive = selectedCategory === category;
          return (
            <TouchableOpacity
              key={category}
              style={[styles.filterTab, isActive && styles.filterTabActive]}
              onPress={() => setSelectedCategory(category)}
            >
              <Text style={[styles.filterText, isActive && styles.filterTextActive]}>
                {category}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <FlatList
        data={filteredBikes}
        keyExtractor={(item) => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <CardBike
            item={item}
            onPress={() => navigation.navigate('Detail', { bike: item })}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 12,
    paddingTop: 20,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#E94141',
    marginLeft: 8,
    marginBottom: 20,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  filterTab: {
    width: '30%',
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#F4A2A2',
    borderRadius: 8,
    alignItems: 'center',
  },
  filterTabActive: {
    borderColor: '#E94141',
  },
  filterText: {
    fontSize: 15,
    color: '#B0B0B0',
  },
  filterTextActive: {
    color: '#E94141',
    fontWeight: '600',
  },
  listContent: {
    paddingBottom: 20,
  },
});