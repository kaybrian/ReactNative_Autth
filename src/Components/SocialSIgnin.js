import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from './CustomButton'




const SocialSIgnin = () => {
    const signinWithFacebook = () => {
        console.log("Sign with faceBook")
    }

    const onSigninWithGoogle = () => {
        console.log("Sign with google")
    }
    const onSiginwithApple = () => {
        console.log("Sign with Apple")
    }

    return (
        <>

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
        </>
    )
}

export default SocialSIgnin
