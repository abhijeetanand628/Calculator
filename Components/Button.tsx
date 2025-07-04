    import { Text, StyleSheet, TouchableOpacity } from 'react-native'
    import React from 'react'
    import {Colors} from '@/utils/Colors';

    const Button = ({title, type, onPress}: 
        {title: string, type: 'top' | 'right' | 'number' | 'equalto'
        onPress: Function
        }) => {
    return (
        <TouchableOpacity style={[styles.button, {
            backgroundColor: type == 'top' ? Colors.btnDark : type == 'right' ? Colors.btnDark : type == 'equalto' ? Colors.btnEqual : Colors.btnLight 
        }]} onPress={onPress}>
            <Text style={{fontSize: 30, color: type == 'number' ? Colors.black : Colors.white}}>{title}</Text>
        </TouchableOpacity>
    );
    };

    export default Button;

    const styles = StyleSheet.create({
        button: {
            height: 70,
            width: 70,
            borderRadius: 50,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'Colors.btnDark',
            marginBottom: 25
        }
    });