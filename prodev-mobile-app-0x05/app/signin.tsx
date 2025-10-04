import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { styles } from '../styles/_join';
import { GOOGLELOGO, FACEBOOKLOGO } from '../constants';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Signin() {
  const router = useRouter();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header Section */}
      <View style={styles.iconsection}>
        <Ionicons name="arrow-back" size={24} color="black" onPress={() => router.back()} />
        <Ionicons name="ellipsis-vertical" size={24} color="black" />
      </View>

      {/* Title Section */}
      <View style={styles.titleTextGroup}>
        <Text style={styles.titleText}>Welcome Back</Text>
        <Text style={styles.subText}>Sign in to continue</Text>
      </View>

      {/* Form Section */}
      <View style={styles.formGroup}>
        <View>
          <Text style={styles.formLabel}>Email</Text>
          <TextInput
            placeholder="Enter your email"
            keyboardType="email-address"
            style={styles.formControl}
          />
        </View>

        <View>
          <Text style={styles.formLabel}>Password</Text>
          <View style={styles.formPasswordControl}>
            <TextInput
              placeholder="Enter your password"
              secureTextEntry={!isPasswordVisible}
              style={styles.passwordControl}
            />
            <Ionicons
              name={isPasswordVisible ? 'eye' : 'eye-off'}
              size={20}
              color="#7B7B7B"
              onPress={() => setIsPasswordVisible(!isPasswordVisible)}
            />
          </View>
        </View>

        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>

        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </View>

      {/* Divider */}
      <View style={styles.dividerGroup}>
        <View style={styles.divider}></View>
        <Text style={styles.dividerText}>Or sign in with</Text>
        <View style={styles.divider}></View>
      </View>

      {/* Social Login Buttons */}
      <View style={styles.secondaryButtonGroup}>
        <TouchableOpacity style={styles.secondaryButton}>
          <Image source={GOOGLELOGO} style={{ width: 24, height: 24 }} />
          <Text style={styles.secondaryButtonText}>Continue with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryButton}>
          <Image source={FACEBOOKLOGO} style={{ width: 24, height: 24 }} />
          <Text style={styles.secondaryButtonText}>Continue with Facebook</Text>
        </TouchableOpacity>
      </View>

      {/* Footer Section */}
      <View style={styles.signupgroup}>
        <Text style={styles.signupTitleText}>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => router.push('/join')}>
          <Text style={styles.signupSubTitleText}>Join Now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
