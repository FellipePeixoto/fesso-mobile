import React, { useEffect, useState } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import api from '../../services/api';

import imgLanding from '../../assets/images/landing.png';
import iconStudy from '../../assets/images/icons/study.png';
import iconGiveClasses from '../../assets/images/icons/give-classes.png';
import iconHeart from '../../assets/images/icons/heart.png';

import styles from './styles';

function Landing() {
  const { navigate } = useNavigation();
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get('connections').then(response => {
      const data = response.data;

      setTotalConnections(data.total)
    })
  }, []);

  function handleNavigateToGiveClassesPage() {
    navigate('GiveClasses');
  }

  function handleNavigateToStudy() {
    navigate('Study');
  }

  return (
    <View style={styles.container}>
      <Image source={imgLanding} style={styles.banner}></Image>
      <Text style={styles.title}>
        Seja bem vindo, {'\n'}
        <Text style={styles.titleBold}>O que deseja fazer</Text>
      </Text>

      <View style={styles.buttonsContainer}>
        <RectButton style={[styles.button, styles.buttonPrimary]} onPress={handleNavigateToStudy}>
          <Image source={iconStudy} />
          <Text>Quero estudar</Text>
        </RectButton>

        <RectButton
          onPress={handleNavigateToGiveClassesPage}
          style={[styles.button, styles.buttonSecondary]}>
          <Image source={iconGiveClasses} />
          <Text>Quero ensinar</Text>
        </RectButton>
      </View>

      <Text style={styles.totalConnections}>
        Total de {totalConnections} conexões realizadas {' '}
        <Image source={iconHeart} />
      </Text>
    </View>
  );
}

export default Landing;