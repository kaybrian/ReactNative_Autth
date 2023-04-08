import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({ onPress, text, type = "PRIMARY", bgColor, fColor }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[
                styles.container,
                styles[`container_${type}`],
                bgColor ? { backgroundColor: bgColor } : {}
            ]}
        >
            <Text
                style={[
                    styles.text,
                    styles[`text_${type}`],
                    fColor ? { color: fColor } : {}
                ]}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {

        width: "100%",

        padding: 10,
        marginVertical: 5,

        alignItems: "center",
        borderRadius: 5,
    },

    container_PRIMARY: {
        backgroundColor: "#3871F3",
    },
    conatiner_TERTIARY: {
    },

    text: {
        fontWeight: "bold",
        color: "white",
    },
    text_TERTIARY: {
        color: "gray"
    }
})

export default CustomButton
