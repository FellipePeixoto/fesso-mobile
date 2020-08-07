import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';

import imgLanding from '../../assets/images/landing.png';
import iconStudy from '../../assets/images/icons/study.png';
import iconGiveClasses from '../../assets/images/icons/give-classes.png';
import iconHeart from '../../assets/images/icons/heart.png';

function Landing() {
  const { navigate } = useNavigation();

  function handleNavigateToGiveClassesPage() {
    navigate('GiveClasses');
  }

  return (
    <View style={styles.container}>
      <Image source={imgLanding} style={styles.banner}></Image>
      <Text style={styles.title}>
        Seja bem vindo, {'\n'}
        <Text style={styles.titleBold}>O que deseja fazer</Text>
      </Text>

      <View style={styles.buttonsContainer}>
        <RectButton style={[styles.button, styles.buttonPrimary]}>
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
        Total de X conexões realizadas {' '}
        <Image source={iconHeart} />
      </Text>
    </View>
  );
}

export default Landing;