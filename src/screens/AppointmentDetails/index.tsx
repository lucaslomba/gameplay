import React from 'react';
import { ImageBackground, Text, View } from 'react-native'
import { Background } from '../../components/Background';
import { ListHeader } from '../../components/ListHeader';
import { Header } from '../../components/Header';
import { BorderlessButton } from 'react-native-gesture-handler'
import { Fontisto } from '@expo/vector-icons'

import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import BannerImg from '../../assets/banner.png'

export function AppointmentDetails(){
  return (
    <Background>
        <Header 
          title="Detalhes" 
          action={
            <BorderlessButton>
              <Fontisto
                name="share"
                size={24}
                color={theme.colors.primary}
              />
            </BorderlessButton>
          }
        />

      <ImageBackground 
        source={BannerImg}
        style={styles.banner}
      >
        <View style={styles.bannerContent}>
          <Text style={styles.title}>
            Lendários
          </Text>

          <Text style={styles.subtitle}>
            É hoje que vamos chegar ao challenger sem perder uma partida da md10
          </Text>
        </View>
      </ImageBackground>

      <ListHeader title="Jogadores" subtitle="Total 3"/>
    </Background>
  )
}