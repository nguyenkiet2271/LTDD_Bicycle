import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Welcome'>;

export default function Welcome({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.subtitle}>
        A premium online store for{'\n'}sporter and their stylish choice
      </Text>

      <View style={styles.imageBox}>
        <Image
          source={require('../assets/blue_bike.png')}
          style={styles.bikeImage}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.title}>POWER BIKE{'\n'}SHOP</Text>

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.85}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
    lineHeight: 24,
    fontFamily: 'monospace',
  },
  imageBox: {
    width: '100%',
    height: 320,
    backgroundColor: '#F8E7E5',
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  bikeImage: {
    width: '95%',
    height: '90%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
    lineHeight: 32,
  },
  button: {
    width: '100%',
    backgroundColor: '#E94141',
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'monospace',
  },
});