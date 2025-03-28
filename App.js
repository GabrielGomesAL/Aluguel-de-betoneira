import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Betoneira Redes!</Text>
      <View style={styles.card}>
        <Image
          source={{ uri: 'https://images.tcdn.com.br/img/img_prod/1322851/betoneira_150_litros_monofasico_1_2hp_com_chave_de_seguranca_motomil_1611_1_8cd0dbe62056dcf6e89f7ddcfd6a6fc0.jpg' }}
          style={styles.imagem}
          resizeMode="contain" 
        />
        <Text style={styles.nomeBetoneira}>Betoneira 150L</Text>
        <Text style={styles.descricao}>Ideal para pequenas construções.</Text>
        <Text style={styles.preco}>R$ 200/dia</Text>
      </View>
      <View style={styles.card}>
        <Image
          source={{ uri: 'https://ferramentasgerais.vteximg.com.br/arquivos/ids/822061/Betoneira-400-L-20-cv-220-V~-monofasica-MAX-PRO-400L-CSM---71000220---CSM.jpg?v=638688055741500000' }}
          style={styles.imagem}
          resizeMode="contain" 
        />
        <Text style={styles.nomeBetoneira}>Betoneira 400L</Text>
        <Text style={styles.descricao}>Perfeita para grandes obras.</Text>
        <Text style={styles.preco}>R$ 500/dia</Text>
      </View>
      <View style={styles.card}>
        <Image
          source={{ uri: 'https://cdn.leroymerlin.com.br/products/betoneira_csm_cs_250_litros_1_cv_trifasica_220v_1566727936_8d9e_600x600.jpg' }}
          style={styles.imagem}
          resizeMode="contain" 
        />
        <Text style={styles.nomeBetoneira}>Betoneira 250L</Text>
        <Text style={styles.descricao}>Para médias obras.</Text>
        <Text style={styles.preco}>R$ 300/dia</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
    fontFamily: 'Montserrat_700Bold',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    width: '90%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginBottom: 20,
  },
  imagem: {
    width: '100%', 
    height: Dimensions.get('window').width * 0.5, 
    borderRadius: 10,
    marginBottom: 15,
  },
  nomeBetoneira: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    fontFamily: 'Montserrat_700Bold',
  },
  descricao: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
    fontFamily: 'Montserrat_400Regular',
    textAlign: 'center',
  },
  preco: {
    fontSize: 20,
    color: '#007AFF',
    fontFamily: 'Montserrat_700Bold',
  },
});