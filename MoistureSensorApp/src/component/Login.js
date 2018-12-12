import React, { Component } from 'react';
import { StyleSheet,Text ,View,Image,} from 'react-native';
import LoginForm from './LoginForm';
import { createStackNavigator, createAppContainer } from 'react-navigation';
//import Login Component 


export default class Login extends Component {
  render() {
    const { navigation } = this.props;
    return (
        <View style={styles.container}>
        
            <Image source={require('./Images/p2.jpeg')}    style={styles.loginContainer}/>
        

             <View style={styles.formContainer}>
                   <LoginForm navigation={navigation} />
            </View> 
       </View>
    );
  } 
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c3e50',
       // resizeMode: 'cover',
    },
    loginContainer:{
       // alignItems: 'center',
        flexGrow: 1,
       // justifyContent: 'center',
        resizeMode: 'cover',
        width: null,
        height: null,
    },
    logo: {
        position: 'absolute',
        width: 300,
        height: 300
    }

});

