import React, { Component } from 'react';
import { FlatList, View, Text, TouchableHighlight } from 'react-native';
import styles from './styles';
import colors from './../../config/color';
import { response } from './../../config/data';

class Investimentos extends Component {

    handleRowPress = (item) => {
        console.info(item);
    }

    render() {
        return (
            <View>
                <View style={styles.row}>
                    <Text style={styles.nomeInvestimento}>INVESTIMENTOS</Text>
                    <View style={styles.saldoDisponivelContainer}>
                        <Text style={styles.saldoDisponivel}>R$</Text>
                    </View>
                </View>
                <FlatList
                    data={response.data.listaInvestimentos}
                    renderItem={({item}) =>
                        <TouchableHighlight underlayColor={colors.rowUnderlay} >
                            <View style={styles.row}>
                                <View>
                                    <Text style={styles.nomeInvestimento}>{ item.nome } </Text>
                                    <Text style={styles.objetivoInvestimento}>{ item.objetivo } </Text>
                                </View>
                                <View style={styles.saldoDisponivelContainer}>
                                    <Text style={styles.saldoDisponivel}>{ item.saldoTotalDisponivel } </Text>
                                </View>
                            </View>
                        </TouchableHighlight>
                    }
                    keyExtractor={item => item.nome}
                />
            </View>
        )
    }

}

export default Investimentos;