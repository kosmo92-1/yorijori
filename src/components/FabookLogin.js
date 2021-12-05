import React from 'react';
import FacebookLogin from 'react-facebook-login';

const FabookLogin = () => {

    const responseFacebook = (response) => {
        console.log(response)
    };

    return (
        <FacebookLogin
        appId="617982156296610"
        autoLoad={false}
        fields="name,email"
        scope="public_profile,user_friends"
        callback={responseFacebook}
        icon="fa-facebook"
     
        ></FacebookLogin>
    );
}

export default FabookLogin;