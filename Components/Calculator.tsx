import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useState } from 'react';
import {Colors} from '@/utils/Colors';
import Button from './Button';

const Calculator = () => {
  const [firstValue, setFirstValue] = useState('');
    return (
        <View style={styles.container}>
          <View style={styles.display}>
            <Text style={{fontSize: 60, fontWeight: '300'}}>8576</Text>
          </View>
          <View style={styles.keypad}>
            <Button title='AC' type='top' />
            <Button title='%' type='top'/>
            <Button title='⌫' type='top'/>
            <Button title='÷' type='right'/>
            <Button title='7' type='number'/>
            <Button title='8' type='number'/>
            <Button title='9' type='number'/>
            <Button title='X' type='right'/>
            <Button title='4' type='number'/>
            <Button title='5' type='number'/>
            <Button title='6' type='number'/>
            <Button title='-' type='right'/>
            <Button title='1' type='number'/>
            <Button title='2' type='number'/>
            <Button title='3' type='number'/>
            <Button title='+' type='right'/>
            <Button title='00' type='number'/>
            <Button title='0' type='number'/>
            <Button title='.' type='number'/>
            <Button title='=' type='equalto'/>
          </View>
        </View>
    )
}

export default Calculator

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    display: {
        flex: 1,
        backgroundColor: Colors.gray,
        paddingVertical: 20,
        paddingHorizontal: 40,
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },
    keypad: {
        flex: 2,
        backgroundColor: Colors.light,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 12
    }
})