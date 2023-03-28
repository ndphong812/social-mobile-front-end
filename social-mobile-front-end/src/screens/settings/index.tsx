import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const Setting = () => {
    return (
        <View style={styles.center}>
            <Text>This is the Setting screen</Text>
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