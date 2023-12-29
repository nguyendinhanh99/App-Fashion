import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation, useIsFocused } from '@react-navigation/native';

export default function GoBackButtonView() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.buttomStyle}
                onPress={() => navigation.goBack()}>
                <Text style = {styles.textStyle}>
                    Quay lại
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 10
    },
    buttomStyle: {
        backgroundColor: "#1b6371",
        justifyContent: "center",
        width: 100,
        padding:7,
        borderRadius: 20,
        alignItems: "center"
    },
    textStyle : {
        fontSize : 20,
        fontWeight : "500",
        color : "#FFF"
    }
});
