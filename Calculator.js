import React, { useState, useRef } from 'react';
import { StyleSheet, Text, TextInput, Button, View } from  'react-native';

export default function Calculator({ navigation }) {
    const [ total, setTotal ] = useState(0);
    const [ num1, setNum1 ] = useState(0);
    const [ num2, setNum2 ] = useState(0);
    const [ history, setHistory ] = useState([]);

    const initialFocus = useRef(null);

    function plus() {
        let total = 0;
        total = num1 + num2;
        setTotal(total);
        const text = `${num1} + ${num2} = ${total}`;
        setHistory([...history, { key: String(history.length), text: text }]);
        
        setNum1(0);
        setNum2(0);
        initialFocus.current.focus();
      }
      
      function minus() {
        let total = 0;
        total = num1 - num2;
        setTotal(total);
        const text = `${num1} - ${num2} = ${total}`;
        setHistory([...history, { key: String(history.length), text: text }]);

        setNum1(0);
        setNum2(0);
        initialFocus.current.focus();
      }

      return (
        <View style={styles.container}>
        <Text>Result: {total}</Text>
        <TextInput style={styles.input} type="number" ref={initialFocus} keyboardType = 'numeric' onChangeText={num1 => setNum1(Number.parseInt(num1))} value={num1}/>
        <TextInput style={styles.input} type="number" keyboardType = 'numeric' onChangeText={num2 => setNum2(Number.parseInt(num2))} value={num2}/>
        <View style={styles.buttons}>
        <Button onPress={plus} title="+" />
        <Button onPress={minus} title="-" />
        <Button onPress={() => navigation.navigate('History', { history })} title="History" />
        </View>
        
        </View>

      );

}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent:  'center'
    },
  
    buttons: {
    
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-around'
  
  },
  
    input : {
      width:200  , 
      borderColor: 'gray', 
      borderWidth: 1,
      justifyContent: 'space-around'
    }
});