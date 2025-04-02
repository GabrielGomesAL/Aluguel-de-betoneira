import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function App() {
  const [selectedBetoneira, setSelectedBetoneira] = useState(null);

  const infoBetoneiraRedes = {
    descricao: "Especializada em locação de betoneiras para construção civil, oferecemos equipamentos modernos e bem conservados para atender desde pequenas reformas até grandes obras.",
    vantagens: [
      { icon: 'engineering', text: "Equipamentos revisados semanalmente" },
      { icon: 'local-shipping', text: "Transporte gratuito na região" },
      { icon: 'support-agent', text: "Assistência 24h disponível" },
      { icon: 'attach-money', text: "Melhor custo-benefício do mercado" },
      { icon: 'verified', text: "Garantia de satisfação" }
    ],
    valorMedio: "R$ 300/dia",
    equipamentos: "5 modelos"
  };

  const betoneiras = [
    {
      id: 1,
      imagem: 'https://images.tcdn.com.br/img/img_prod/1322851/betoneira_150_litros_monofasico_1_2hp_com_chave_de_seguranca_motomil_1611_1_8cd0dbe62056dcf6e89f7ddcfd6a6fc0.jpg',
      nome: 'Betoneira 150L Standard',
      descricao: 'Solução compacta para pequenas obras e reformas residenciais',
      preco: 'R$ 200/dia',
      capacidade: '150 litros',
      potencia: '1/2 HP',
      features: ['Monofásica', 'Chave de segurança', 'Baixo consumo']
    },
    {
      id: 2,
      imagem: 'https://ferramentasgerais.vteximg.com.br/arquivos/ids/822061/Betoneira-400-L-20-cv-220-V~-monofasica-MAX-PRO-400L-CSM---71000220---CSM.jpg?v=638688055741500000',
      nome: 'Betoneira 400L Pro',
      descricao: 'Alta produtividade para obras de grande porte',
      preco: 'R$ 500/dia',
      capacidade: '400 litros',
      potencia: '2 HP',
      features: ['Monofásica', 'Auto-limpante', 'Estrutura reforçada']
    },
    {
      id: 3,
      imagem: 'https://cdn.leroymerlin.com.br/products/betoneira_csm_cs_250_litros_1_cv_trifasica_220v_1566727936_8d9e_600x600.jpg',
      nome: 'Betoneira 250L Industrial',
      descricao: 'Equilíbrio perfeito entre capacidade e versatilidade',
      preco: 'R$ 300/dia',
      capacidade: '250 litros',
      potencia: '1 HP',
      features: ['Trifásica', 'Baixa vibração', 'Controle digital']
    },

    {
      id: 3,
      imagem: 'https://casadopicapau.vtexassets.com/arquivos/ids/162122/01.jpg?v=637974770623970000',
      nome: 'Betoneira 350L Industrial',
      descricao: 'Equilíbrio perfeito entre capacidade e versatilidade',
      preco: 'R$ 380/dia',
      capacidade: '350 litros',
      potencia: '1 HP',
      features: ['Trifásica', 'Baixa vibração', 'Controle digital']
    },

    {
      id: 3,
      imagem: 'https://cdn.leroymerlin.com.br/products/betoneira_cs_400l_rental_force_mono_127v_csm_92016463_f4a5_600x600.jpg',
      nome: 'Betoneira 400L Industrial',
      descricao: 'Equilíbrio perfeito entre capacidade e versatilidade',
      preco: 'R$ 500/dia',
      capacidade: '400 litros',
      potencia: '2 HP',
      features: ['Trifásica', 'Baixa vibração', 'Controle digital']
    }
    
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.cabecalho}>
        <View style={styles.headerContent}>
          <Text style={styles.titulo}>BETONEIRA REDES</Text>
          <Text style={styles.subtituloHeader}>Soluções em equipamentos para construção</Text>
        </View>
      </View>

      <View style={styles.banner}>
        <Text style={styles.bannerText}>Aluguel com garantia de qualidade</Text>
      </View>

      <View style={styles.secao}>
        <Text style={styles.tituloSecao}>SOBRE NOSSA EMPRESA</Text>
        <Text style={styles.descricao}>{infoBetoneiraRedes.descricao}</Text>
        
        <View style={styles.vantagensContainer}>
          {infoBetoneiraRedes.vantagens.map((item, index) => (
            <View key={index} style={styles.vantagemItem}>
              <MaterialIcons name={item.icon} size={24} color="#2E86C1" />
              <Text style={styles.vantagemText}>{item.text}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <MaterialIcons name="stars" size={32} color="#F1C40F" />
          <Text style={styles.statNumber}>10+</Text>
          <Text style={styles.statLabel}>Anos no mercado</Text>
        </View>
        <View style={styles.statCard}>
          <MaterialIcons name="construction" size={32} color="#2E86C1" />
          <Text style={styles.statNumber}>{infoBetoneiraRedes.equipamentos}</Text>
          <Text style={styles.statLabel}>Modelos</Text>
        </View>
        <View style={styles.statCard}>
          <MaterialIcons name="location-city" size={32} color="#E74C3C" />
          <Text style={styles.statNumber}>50+</Text>
          <Text style={styles.statLabel}>Clientes ativos</Text>
        </View>
      </View>

      <View style={styles.secao}>
        <Text style={styles.tituloSecao}>NOSSA FROTA</Text>
        <Text style={styles.subtituloSecao}>Equipamentos para todas as necessidades</Text>
        
        {betoneiras.map((betoneira) => (
          <TouchableOpacity 
            key={betoneira.id} 
            style={styles.card}
            onPress={() => setSelectedBetoneira(betoneira)}
          >
            <View style={styles.imageContainer}>
              <Image
                source={{ uri: betoneira.imagem }}
                style={styles.imagem}
                resizeMode="contain"
              />
              <View style={styles.badge}>
                <Text style={styles.badgeText}>DESTAQUE</Text>
              </View>
            </View>
            
            <View style={styles.infoContainer}>
              <Text style={styles.nomeBetoneira}>{betoneira.nome}</Text>
              <Text style={styles.descricaoCard}>{betoneira.descricao}</Text>
              
              <View style={styles.featuresContainer}>
                {betoneira.features.map((feature, index) => (
                  <View key={index} style={styles.featurePill}>
                    <Text style={styles.featureText}>{feature}</Text>
                  </View>
                ))}
              </View>
              
              <View style={styles.precoContainer}>
                <Text style={styles.preco}>{betoneira.preco}</Text>
                <View style={styles.specs}>
                  <Text style={styles.specText}><MaterialIcons name="invert-colors" size={16} /> {betoneira.capacidade}</Text>
                  <Text style={styles.specText}><MaterialIcons name="bolt" size={16} /> {betoneira.potencia}</Text>
                </View>
              </View>
              
              <TouchableOpacity style={styles.botao}>
                <Text style={styles.botaoText}>ALUGAR AGORA</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Betoneira Redes © 2023</Text>
        <Text style={styles.footerContact}>Contato: (XX) XXXX-XXXX</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  cabecalho: {
    backgroundColor: '#2C3E50',
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 5,
  },
  headerContent: {
    alignItems: 'center',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ECF0F1',
    letterSpacing: 2,
  },
  subtituloHeader: {
    fontSize: 14,
    color: '#BDC3C7',
    marginTop: 5,
    letterSpacing: 1,
  },
  banner: {
    backgroundColor: '#2E86C1',
    padding: 15,
    margin: 20,
    borderRadius: 10,
    elevation: 3,
  },
  bannerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  secao: {
    padding: 20,
  },
  tituloSecao: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 5,
    letterSpacing: 1,
  },
  subtituloSecao: {
    fontSize: 14,
    color: '#7F8C8D',
    marginBottom: 20,
  },
  descricao: {
    fontSize: 15,
    color: '#34495E',
    lineHeight: 22,
    marginBottom: 20,
  },
  vantagensContainer: {
    marginTop: 10,
  },
  vantagemItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  vantagemText: {
    fontSize: 15,
    color: '#34495E',
    marginLeft: 10,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  statCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    width: '30%',
    alignItems: 'center',
    elevation: 3,
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginVertical: 5,
  },
  statLabel: {
    fontSize: 12,
    color: '#7F8C8D',
    textAlign: 'center',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 25,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  imageContainer: {
    position: 'relative',
  },
  imagem: {
    width: '100%',
    height: Dimensions.get('window').width * 0.6,
    backgroundColor: '#F2F3F4',
  },
  badge: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#E74C3C',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 10,
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  infoContainer: {
    padding: 20,
  },
  nomeBetoneira: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 8,
  },
  descricaoCard: {
    fontSize: 15,
    color: '#7F8C8D',
    marginBottom: 15,
    lineHeight: 20,
  },
  featuresContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 15,
  },
  featurePill: {
    backgroundColor: '#EAEDED',
    borderRadius: 15,
    paddingHorizontal: 12,
    paddingVertical: 5,
    marginRight: 8,
    marginBottom: 8,
  },
  featureText: {
    fontSize: 12,
    color: '#2C3E50',
  },
  precoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#EAEDED',
    paddingBottom: 15,
  },
  preco: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2E86C1',
  },
  specs: {
    flexDirection: 'row',
  },
  specText: {
    fontSize: 14,
    color: '#7F8C8D',
    marginLeft: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  botao: {
    backgroundColor: '#27AE60',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  botaoText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  footer: {
    backgroundColor: '#2C3E50',
    padding: 20,
    alignItems: 'center',
  },
  footerText: {
    color: '#BDC3C7',
    fontSize: 14,
  },
  footerContact: {
    color: '#BDC3C7',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
});
