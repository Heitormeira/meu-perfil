import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/foto.jpg')} style={styles.foto} />
      <Text style={styles.nome}>Heitor Meira</Text>
      <Text style={styles.bio}>
        Sou estudante de Ciência da Computação e tenho grande interesse pela
        área de redes e infraestrutura. Recentemente entrei na UM Telecom como
        estagiário no setor de Central de Manutenção de Clientes, onde venho
        colocando em prática o que aprendo na faculdade. Fora dos estudos e do
        trabalho, sou apaixonado por futebol e torcedor do Clube Náutico
        Capibaribe.
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  foto: {
    width: 160,
    height: 160,
    borderRadius: 80,
    marginBottom: 20,
  },
  nome: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#1e3a8a',
    marginBottom: 12,
    textAlign: 'center',
  },
  bio: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'justify',
    color: '#333',
  },
});