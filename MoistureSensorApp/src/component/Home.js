import React from 'react';
import { View, Text, TextInput, TouchableOpacity,StyleSheet} from 'react-native';//import Login Component 
import Login from './Login';
import LoginForm from './LoginForm';

import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class Home extends React.Component {
    render() {
        return (
            <View style={styles.container}>
    
    <TouchableOpacity style={styles.buttonContainer} 
                         onPress={() => this.props.navigation.navigate('mapPage')}>
                 <Text  style={styles.buttonText}>Maps</Text>
    </TouchableOpacity>

      <TouchableOpacity style={styles.buttonContainer} 
                         onPress={() => this.props.navigation.navigate('historyPage')}>
                 <Text  style={styles.buttonText}>History</Text>
       </TouchableOpacity>

       <TouchableOpacity style={styles.buttonContainer} 
                         onPress={() => this.props.navigation.navigate('history2Page')}>
                 <Text  style={styles.buttonText}>History 2</Text>
       </TouchableOpacity>


           </View>
        );
      } 
    }
    
    const styles = StyleSheet.create({
        container: {
         padding: 20
        },
        input:{
            height: 40,
            backgroundColor: 'rgba(225,225,225,0.2)',
            marginBottom: 10,
            padding: 10,
            color: '#fff'
        },
        buttonContainer:{
            backgroundColor: '#2980b6',
            paddingVertical: 15
        },
        buttonText:{
            color: '#fff',
            textAlign: 'center',
            fontWeight: '700'
        }
    });
    
    
