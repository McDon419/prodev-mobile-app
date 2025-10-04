import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { PropertyListingProps } from "../../interfaces";
import { styles as cardStyles } from "../../styles/_propertyCardStyle";

const PropertyListingCard: React.FC<PropertyListingProps> = ({
  propertyName,
  rate,
  currency,
  amount,
  location,
  favorite,
}) => {
  return (
    <ImageBackground
      source={require("../../assets/images/sample-image.png")}
      style={cardStyles.container}
    >
      <View style={cardStyles.overlay}>
        <View style={cardStyles.favoriteGroup}>
          <View style={cardStyles.favoriteOverlay}>
            {favorite ? (
              <FontAwesome name="heart" size={24} color="#E50000" />
            ) : (
              <EvilIcons name="heart" size={32} color="white" />
            )}
          </View>
        </View>

        <View style={cardStyles.group}>
          <View style={cardStyles.rateGroup}>
            <MaterialIcons name="star-rate" size={40} color="#FAC02B" />
            <Text style={cardStyles.rateText}>{rate}</Text>
          </View>
          <View style={cardStyles.cardGroup}>
            <View style={cardStyles.cardTextGroup}>
              <Text style={cardStyles.cardLargeText}>{propertyName}</Text>
              <Text style={cardStyles.cardSmallText}>
                {location.street}, {location.city}, {location.country}
              </Text>
            </View>
            <View style={cardStyles.priceGroup}>
              <Text style={cardStyles.priceText}>
                {currency}
                {amount}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default PropertyListingCard;
