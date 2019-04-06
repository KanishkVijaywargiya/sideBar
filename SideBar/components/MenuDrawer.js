import React from 'react';
import { StyleSheet, Text, View, Dimensions,TouchableOpacity } from 'react-native';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height

export default class MenuDrawer extends React.Component {
    navLink(nav, link) {
        return(
            <TouchableOpacity style={{ height:50 }} onPress={() => this.props.navigation.navigate(nav)}>
                <Text style={styles.link}>{link}</Text>
            </TouchableOpacity>
        )
    }
    render(){
        return(
            <View style = {styles.container}>
                <View style={styles.topLink}>
                    <Text style={{color:'white',paddingTop: 40, paddingLeft:40,fontSize:35}}>MenuDrawer</Text>
                </View>
                <View style={styles.bottomLink}>
                    {this.navLink('Home','Home')}
                    {this.navLink('Setting','Settings')}
                    {this.navLink('Linking','Linking')}
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    link: {
        flex:1,
        fontSize:20,
        padding:6,
        paddingLeft:14,
        margin:5,
        textAlign:'left',
    },
    topLink:{
        height:150,
        backgroundColor:'black'
    },
    bottomLink:{
        flex:1,
        backgroundColor:'#fff',
        paddingTop:10,
        paddingBottom:450,
    }
  });