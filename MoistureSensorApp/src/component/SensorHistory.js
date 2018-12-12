import React, { Component } from 'react';
import { Text, StyleSheet, View, ScrollView } from 'react-native';
import { Table, TableWrapper, Row } from 'react-native-table-component';
 
export default class SensorHistory extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Status', 'Time'],
      widthArr: [400, 300],
      isLoading : true,
      sensor1Data: []
    }
  }

  componentDidMount() {
    fetch('https://planthealth-224320.appspot.com/reads?DatabaseName=sense1').then((response) => response.json())
    .then((responseJson) => {
        const dataStruct = [];
        responseJson.data.map((obj, index) => {
            const rowData = [];
            rowData.push(`${obj.Status}`);
            rowData.push(`${obj.TimeStamp}`);            
            dataStruct.push(rowData);
        });

        this.setState({
            isLoading: false,
            sensor1Data: dataStruct,
        });
    })
    .catch((error) => {
        console.log("Error:",error );
    }) 
  }

  render() {
    const state = this.state;
    const tableData = this.state.sensor1Data;

    if (this.state.isLoading) {
        return (
            <View style={styles.container}>
                <Text>Loading Data ...</Text>
            </View>
        )
    }
    else {
        return (
            <View style={styles.container}>
              <ScrollView horizontal={true}>
                <View>
                  <Table borderStyle={{borderColor: '#C1C0B9'}}>
                    <Row data={state.tableHead} widthArr={state.widthArr} style={styles.header} textStyle={styles.text}/>
                  </Table>
                  <ScrollView style={styles.dataWrapper}>
                    <Table borderStyle={{borderColor: '#C1C0B9'}}>
                      {
                        tableData.map((rowData, index) => (
                          <Row
                            key={index}
                            data={rowData}
                            widthArr={state.widthArr}
                            style={[styles.row, index%2 && {backgroundColor: '#F7F6E7'}]}
                            textStyle={styles.text}
                          />
                        ))
                      }
                    </Table>
                  </ScrollView>
                </View>
              </ScrollView>
            </View>
          )
    }
  }
}
 
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  header: { height: 50, backgroundColor: '#537791' },
  text: { textAlign: 'center', fontWeight: '100' },
  dataWrapper: { marginTop: -1 },
  row: { height: 40, backgroundColor: '#E7E6E1' }
});
