import { StyleSheet, Dimensions } from 'react-native';
import color from './../../config/color';
import colors from './../../config/color';

export default StyleSheet.create({
    backgroundColor: color.background,
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 8
    },
    nomeInvestimento: {
        fontSize: 16,
        fontWeight: '500',
        color: colors.primaryText,
    },
    objetivoInvestimento: {
        fontSize: 13,
        color: colors.subtleText
    },
    saldoDisponivelContainer: {
        flex: 1
    },
    saldoDisponivel: {
        fontSize: 16,
        fontWeight: '600',
        color: colors.primaryText,
        alignSelf: 'flex-end'
    }

})