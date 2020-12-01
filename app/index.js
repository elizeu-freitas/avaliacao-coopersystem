import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import styles from './config/styles';
import AppStack from './config/router';
import Investimentos from './component/investimentos/Investimentos';

export default function AvaliacaoCoopersystem() {
    return (
        <View style={styles.container}>
            <Investimentos/>
        </View>
      );
}