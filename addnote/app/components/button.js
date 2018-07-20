import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity,
} from 'react-native';


export default class Button extends React.Component {
  render() {
    return (
    
      
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
     
      
    );
  }
}

const styles = StyleSheet.create({
  
 
  addButton:{
    position: 'absolute',
    zIndex : 11,
    right: 8,
    bottom: 70,
    backgroundColor: '#E91E63',
    width: 60,
    height: 60,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
  },

  addButtonText:{
    color: '#fff',
    fontSize: 24, 
   }




});


