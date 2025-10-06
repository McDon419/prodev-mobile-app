import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Inbox = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Inbox Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  text: { fontSize: 18 },
});

export default Inbox;
