import React, { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import {
  Actions,
} from 'react-native-router-flux';


class Home extends Component {
  state = {
    name: '',
  }

  render() {
    return (
     <View>
       <Text style={s.enterNameFont}>
       Enter your name:
       </Text>
       <TextInput
       style={s.nameInput}
       placeholder='John Doe'
       onChangeText={(text) => {
         this.setState({
           name: text,
         });
       }} 
       value={this.state.name}
       
       />
       <TouchableOpacity
       onPress={()=> {
         //I couldnt get {this.state.name} to pass in Chat.js so I set it equal to value and passed that instead
         console.log("{this.state.name} = " + this.state.name);
         value=this.state.name
         console.log("Value = " + value);
         console.log(this.props.name);
         Actions.chat({
          name: value
         });
         //navigate to second page and give it name
       }}
       >
         <Text style={s.buttontext}>
           Enter
         </Text>
      </TouchableOpacity>
     </View>
    );
  }
}

const s = StyleSheet.create({
  enterNameFont: {
    margin: 20,
    marginLeft: 20,
    fontSize: 30,
  },
  nameInput: {
    padding: 5,
    height:50,
    margin: 20,
    fontSize: 23,
  },
  buttontext: {
    marginLeft: 20,
    fontSize: 20,
  },
});
export default Home;


