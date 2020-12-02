import React, { Component } from 'react';
import { ScrollView, View, Text, FlatList, TextInput, Button, Alert } from 'react-native';
import { Input } from 'react-native-elements'
import styles from './styles';


class Resgate extends Component {

    handleRowPress = (acao) => {
        console.debug(acao);
    }

    onChangeText = (item, text) => {
        if (text.length > 10) {
            item.nome = "mensagem de erro aqui";
        } else {
            item.errorMessage = "";
        }
        this.forceUpdate();
        this.setState(item);
        console.debug(item);
    }

    hasErrorOnAcao = () => {
        return "SIM erro";
    }

    getSaldoAcumulado = (saldoTotalDisponivel, percentual) => {
        return saldoTotalDisponivel * percentual;
    }

    render() {
        const { investimento } = this.props.route.params;
        return (
            <ScrollView>

                <View style={styles.row}>
                    <Text style={styles.nomeInvestimento}>DADOS DO INVESTIMENTO</Text>
                </View>
                <View>
                    <Text>Nome</Text>
                    <View style={styles.saldoDisponivelContainer}>
                        <Text style={styles.saldoDisponivel}>{investimento.nome}</Text>
                    </View>
                </View>
                <View>
                    <Text>Saldo total disponível</Text>
                    <View style={styles.saldoDisponivelContainer}>
                        <Text style={styles.saldoDisponivel}>{investimento.saldoTotalDisponivel}</Text>
                    </View>
                </View>

                <View style={styles.row}>
                    <Text style={styles.nomeInvestimento}>RESGATE DO SEU JEITO</Text>
                </View>
                <FlatList
                    data={investimento.acoes}
                    renderItem={({item}) =>
                        <View>
                            <View>
                                <Text>Nome</Text>
                                <View style={styles.saldoDisponivelContainer}>
                                    <Text style={styles.saldoDisponivel}>{item.nome}</Text>
                                </View>
                            </View>
                            <View>
                                <Text>Saldo Acumulado</Text>
                                <View style={styles.saldoDisponivelContainer}>
                                    <Text style={styles.saldoDisponivel}> R$ {this.getSaldoAcumulado(investimento.saldoTotalDisponivel, item.percentual)}</Text>
                                </View>
                            </View>
                            <View>
                                <Text>Valor a resgatar</Text>
                                {/* <TextInput
                                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                                    onChangeText={text => this.onChangeText(text)}
                                /> */}
                            <Input
                                errorStyle={{ color: 'red' }}
                                errorMessage='mensagem de erro'
                                onChangeText={(text) => this.onChangeText(item, text)}
                            />
                            </View>
                        </View>
                    }
                    keyExtractor={item => item.nome}
                />

                <View style={styles.row}>
                    <Text>Valor total a resgatar</Text>
                    <View style={styles.saldoDisponivelContainer}>
                        <Text style={styles.saldoDisponivel}>VALOR TOTAL AQUI</Text>
                    </View>
                </View>
                
                <Button
                    title="CONFIRMAR RESGATE"
                    onPress={() => Alert.alert('Button with adjusted color pressed')}
                />

            </ScrollView>
        )
    }
}

export default Resgate;