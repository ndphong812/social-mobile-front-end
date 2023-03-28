import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const Notifications = () => {
    return (
        <View style={styles.center}>
            <Text>This is the Notifications screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    },
});