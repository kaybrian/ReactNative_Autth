import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import logo from '../../assets/images/logo.png'
import CustomInput from '../Components/CustomInput';
import customButton from '../Components/CustomButton';

const SIgninScreen = () => {
    const { height } = useWindowDimensions();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={styles.root}>
            <Image
                source={logo}
                resizeMode="contain"
                style={[styles.logo, { height: height * 0.2 }]}
            />

            <CustomInput
                placeholder="Username"
                value={username}
                setValue={setUsername}
            />

            <CustomInput p
                laceholder="Password"
                value={password}
                setValue={setPassword}
                secureTextEntry={true}
            />

            <customButton />
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: "center",
        padding: 40,
    },
    logo: {
        width: "60%",
        maxWidth: 300,
        maxHeight: 200,

    }
})


export default SIgninScreen
