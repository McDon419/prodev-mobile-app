import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { styles } from '../styles/_mainstyle';
import { BACKGROUNDIMAGE, HEROLOGO } from '../constants';
import { useRouter } from 'expo-router';
import "../constants";

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Background Image */}
      <ImageBackground source={BACKGROUNDIMAGE} style={styles.backgroundImageContainer}>
        {/* Logo */}
        <View style={styles.logoContainer}>
          <Image source={HEROLOGO} />
        </View>

        {/* Title */}
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Discover Your Dream Job Here</Text>
        </View>

        <View style={styles.titleSubTextContainer}>
          <Text style={styles.titleSubText}>
            Explore all the most exciting job roles based on your interest and study major
          </Text>
        </View>

        {/* Buttons */}
        <View style={styles.buttonGroup}>
          <TouchableOpacity style={styles.buttonPrimary} onPress={() => router.push('/signin')}>
            <Text style={styles.buttonPrimaryText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonSecondary} onPress={() => router.push('/join')}>
            <Text style={styles.buttonSecondaryText}>Register</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}