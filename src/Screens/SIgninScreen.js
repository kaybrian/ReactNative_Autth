import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import React, { useState } from 'react'
import logo from '../../assets/images/logo.png'
import CustomInput from '../Components/CustomInput';
import CustomButton from '../Components/CustomButton';
import SocialSIgnin from '../Components/SocialSIgnin';
import { useNavigation } from '@react-navigation/native';

const SIgninScreen = () => {
    const navigation = useNavigation();
    const { height } = useWindowDimensions();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const onSignPress = () => {
        console.warn("Sign in")
        // process the resets

        navigation.navigate("Home")

    }

    const onForgotPress = () => {
        console.warn("Forgot password")

        navigation.navigate("ResetPassword")
    }

    const onSignUpPress = () => {
        console.log("Sign up")
        navigation.navigate("SignUp")
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
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
                    placeholder="Password"
                    value={password}
                    setValue={setPassword}
                    secureTextEntry={true}
                />

                <CustomButton text="Sigin" onPress={onSignPress} />

                <CustomButton text="Forgot password" onPress={onForgotPress} type="TERTIARY" />

                {/* social signs  */}
                <SocialSIgnin />


                <CustomButton text="Dont have an Account? Create one" onPress={onSignUpPress} type="TERTIARY" />


            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: "center",
        padding: 40,
        marginTop: 20,
    },
    logo: {
        width: "60%",
        maxWidth: 300,
        maxHeight: 200,

    }
})


export default SIgninScreen
