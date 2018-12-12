import React, { Component } from 'react';
import { StyleSheet,Text ,View,Image,} from 'react-native';
import MapView , {PROVIDER_GOOGLE} from 'react-native-maps'
import { Marker } from 'react-native-maps';


export default class Maps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sensor1Status: '',
      sensor1TimeStamp: '',
      sensor2Status: '',
      sensor2TimeStamp: ''
    }
  }

  componentDidMount() {
    fetch('https://planthealth-224320.appspot.com/read?DatabaseName=sense1').then((response) => response.json())
    .then((responseJson) => {
      if(Array.isArray(responseJson.data) && responseJson.data.length > 0) {
        this.setState({
          sensor1Status: responseJson.data[0].Status,
          sensor1TimeStamp: responseJson.data[0].TimeStamp
      });
      }
    })

    fetch('https://planthealth-224320.appspot.com/read?DatabaseName=sense2').then((response) => response.json())
    .then((responseJson) => {
      if(Array.isArray(responseJson.data) && responseJson.data.length > 0) {
        this.setState({
          sensor2Status: responseJson.data[0].Status,
          sensor2TimeStamp: responseJson.data[0].TimeStamp
      });
      }
    })
  
  }


  render() {
    return (
       <MapView
       provider= {PROVIDER_GOOGLE}
       style={styles.container}
    initialRegion={{
      latitude: 39.039948,
      longitude: -94.596532,
      latitudeDelta: 0.1,
      longitudeDelta: 0.1,
      zoomEnabled: true,
    }}
  >

  <MapView.Marker
          coordinate={{
            latitude: 39.039948,
      longitude: -94.596532,
          }}
          title={"Sensor 1"}
          description={"Status:" + this.state.sensor1Status +". Time:" + this.state.sensor1TimeStamp}
        />
         <MapView.Marker
          coordinate={{
            latitude: 39.040067,
      longitude: -94.596375,
          }}
          title={"Sensor 2"}
          description={"Status:" + this.state.sensor2Status +". Time:" + this.state.sensor2TimeStamp}
        />
      </MapView>     
    );
  } 
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%' ,
        width: '100%',
    },
    loginContainer:{
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        position: 'absolute',
        width: 300,
        height: 300
    }

});