import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import React, { useState } from 'react'
import logo from '../../assets/images/logo.png'
import CustomInput from '../Components/CustomInput';
import CustomButton from '../Components/CustomButton';

const SIgninScreen = () => {
    const { height } = useWindowDimensions();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const onSignPress = () => {
        console.warn("Sign in")
    }

    const onForgotPress = () => {
        console.warn("Forgot password")
    }
    const signinWithFacebook = () => {
        console.log("Sign with faceBook")
    }

    const onSigninWithGoogle = () => {
        console.log("Sign with google")
    }
    const onSiginwithApple = () => {
        console.log("Sign with Apple")
    }
    const onSignUpPress = () => {
        console.log("Sign up")
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

                <CustomButton
                    text="Sign in with
            Facebook"
                    onPress={signinWithFacebook}
                    bgColor="#E7EAf4"
                    fColor="#4765A9"
                />
                <CustomButton
                    text="Sign in with google"
                    onPress={onSigninWithGoogle}
                    bgColor="#FAE9EA"
                    fColor="#DD4D44"
                />
                <CustomButton
                    text="Sign in with Apple"
                    onPress={onSiginwithApple}
                    bgColor="#e3e3e3"
                    fColor="#363636"
                />


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
