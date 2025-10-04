import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { styles } from '../styles/_join';
import { GOOGLELOGO, FACEBOOKLOGO } from '../constants';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Join() {
  const router = useRouter();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header Icons */}
      <View style={styles.iconsection}>
        <Ionicons name="arrow-back" size={24} color="black" onPress={() => router.back()} />
        <Ionicons name="ellipsis-vertical" size={24} color="black" />
      </View>

      {/* Title Section */}
      <View style={styles.titleTextGroup}>
        <Text style={styles.titleText}>Create an Account</Text>
        <Text style={styles.subText}>Join us and start your journey</Text>
      </View>

      {/* Form Section */}
      <View style={styles.formGroup}>
        {/* Full Name */}
        <View>
          <Text style={styles.formLabel}>Full Name</Text>
          <TextInput
            placeholder="Enter your full name"
            style={styles.formControl}
          />
        </View>

        {/* Email */}
        <View>
          <Text style={styles.formLabel}>Email</Text>
          <TextInput
            placeholder="Enter your email"
            keyboardType="email-address"
            style={styles.formControl}
          />
        </View>

        {/* Password */}
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

        {/* Confirm Password */}
        <View>
          <Text style={styles.formLabel}>Confirm Password</Text>
          <View style={styles.formPasswordControl}>
            <TextInput
              placeholder="Re-enter your password"
              secureTextEntry={!isConfirmPasswordVisible}
              style={styles.passwordControl}
            />
            <Ionicons
              name={isConfirmPasswordVisible ? 'eye' : 'eye-off'}
              size={20}
              color="#7B7B7B"
              onPress={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}
            />
          </View>
        </View>

        {/* Primary Button */}
        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.buttonText}>Join Now</Text>
        </TouchableOpacity>
      </View>

      {/* Divider */}
      <View style={styles.dividerGroup}>
        <View style={styles.divider}></View>
        <Text style={styles.dividerText}>Or register with</Text>
        <View style={styles.divider}></View>
      </View>

      {/* Social Signup Buttons */}
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
        <Text style={styles.signupTitleText}>Already have an account? </Text>
        <TouchableOpacity onPress={() => router.push('/signin')}>
          <Text style={styles.signupSubTitleText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
