import React from 'react';
import { GoogleLogin } from 'react-google-login';

const GoogleLoginComponent = () => {
    const responseGoogle = (response) => {
        console.log(response);
        // Handle successful login here
    };

    const handleFailure = (response) => {
        console.error(response);
        // Handle login failure here
    };

    return (
        <div>
            <GoogleLogin
                clientId="YOUR_CLIENT_ID" // Replace with your Google client ID
                buttonText="Login with Google"
                onSuccess={responseGoogle}
                onFailure={handleFailure}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    );
};

export default GoogleLoginComponent;