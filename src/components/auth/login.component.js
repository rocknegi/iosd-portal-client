import React, {Component} from 'react';

import WrappedNormalLoginForm from './login-form';

class LoginComponent extends Component {
    render() {
        return (
            <div style={{width : '100vw' , height : '100vh' , background : 'blue' , paddingTop : 100}}>

                <div style={{background : 'white' , width:320 , padding : 10 , margin:'auto'}}>
                    <WrappedNormalLoginForm/>
                </div>

            </div>

        );
    }
}

export default LoginComponent


