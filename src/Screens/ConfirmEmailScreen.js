import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../Components/CustomInput';
import CustomButton from '../Components/CustomButton';
import SocialSIgnin from '../Components/SocialSIgnin';


const ConfirmEmailScreen = () => {
    const [code, setCode] = useState("");



    const onConfirm = () => {
        console.warn("Confirm is Pressed")
    }
    const BackToSignin = () => {
        console.log("Sign in")
    }

    const onResendCode =()=>{
        console.log("Resend Code")
    }


    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Confirm Email </Text>

                <CustomInput
                    placeholder="Enter your Confirmation Code"
                    value={code}
                    setValue={setCode}
                />

                <CustomButton text="Confirm Code" onPress={onConfirm} />



                <CustomButton
                    text="Request new Code "
                    onPress={onResendCode}
                    type="SECONDARY"
                />

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


export default ConfirmEmailScreen
