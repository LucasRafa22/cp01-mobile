import { Text, StyleSheet } from "react-native";

export default ({ nome, email }) => {
    return (
        <Text style={styles.textoExibicao}>
            {nome} - {email}
        </Text>
    );
}

const styles = StyleSheet.create({
    textoExibicao: {
        marginTop: 20,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000'
    }
});
