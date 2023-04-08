import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../Components/CustomInput';
import CustomButton from '../Components/CustomButton';
import SocialSIgnin from '../Components/SocialSIgnin';
import { useNavigation } from '@react-navigation/native';

const ResetPassword = () => {
    const navigation = useNavigation();
    const [code, setCode] = useState("");
    const [password, setPassword] = useState("");



    const onSubmitPressed = () => {
        console.warn("send is Pressed")
        navigation.navigate("SignIn");

    }
    const BackToSignin = () => {
        console.log("Sign in")
        navigation.navigate("SignIn");
    }

    const onResendCode = () => {
        console.log("Resend Code")
    }


    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Reset Your Password </Text>

                <CustomInput
                    placeholder="Enter the Code"
                    value={code}
                    setValue={setCode}
                />

                 <CustomInput
                    placeholder="Enter Your new Password"
                    value={password}
                    setValue={setPassword}
                    secureTextEntry={true}
                />

                <CustomButton text="Submit" onPress={onSubmitPressed} />

                <CustomButton
                    text="Back to Sign in "
                    onPress={BackToSignin}
                    type="TERTIARY"
                />

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
    text: {
        color: 'gray',
        marginVertical: 10,
    },
    link: {
        color: "#FDB075"
    },

    title: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        color: "#121212",
        margin: 10
    },
})


export default ResetPassword
