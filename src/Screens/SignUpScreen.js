import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../Components/CustomInput';
import CustomButton from '../Components/CustomButton';
import SocialSIgnin from '../Components/SocialSIgnin';


const SignUp = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [conPassWord, setConPassWord] = useState("");


    const onRegister = () => {
        console.warn("Register is Pressed")
    }
    const onSigninPressed = () => {
        console.log("Sign in")
    }

    const onPressTerms =() => {
        console.log("Terms")
    }
    const onPressPolicy = () => {
        console.log("Policy")
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Create an Account </Text>

                <CustomInput
                    placeholder="Username"
                    value={username}
                    setValue={setUsername}
                />
                <CustomInput
                    placeholder="Email"
                    value={email}
                    setValue={setEmail}
                />

                <CustomInput
                    placeholder="Password"
                    value={password}
                    setValue={setPassword}
                    secureTextEntry={true}
                />
                <CustomInput
                    placeholder="Confirm Password"
                    value={conPassWord}
                    setValue={setConPassWord}
                    secureTextEntry={true}
                />

                <CustomButton text="Register" onPress={onRegister} />

                <Text style={styles.text}>
                    By registering, you Confirm to our
                    <Text style={styles.link} onPress={onPressTerms}>
                        {' '}Terms{' '}
                    </Text>
                    of use and <Text style={styles.link} onPress={onPressPolicy}>
                        {' '}Privacy policy
                    </Text>
                </Text>
                {/* social signs  */}

                <SocialSIgnin />



                <CustomButton text="Have an account? Sign in" onPress={onSigninPressed} type="TERTIARY" />


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
        color:"#121212",
        margin: 10
    },
})


export default SignUp
