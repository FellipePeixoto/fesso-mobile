import React from 'react';
import { View, ImageBackground, Text } from 'react-native';

import backImgGiveClasses from '../../assets/images/give-classes-background.png';

import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

function GiveClasses() {
  const { goBack } = useNavigation();

  function handleNavigationBack(){
    goBack();
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode='contain'
        source={backImgGiveClasses}
        style={styles.content}
      >
        <Text style={styles.title}>Quer ser um fessô?</Text>
        <Text style={styles.description}>Se cadastre na nossa plataforma web</Text>
      </ImageBackground>

      <RectButton style={styles.okButton} onPress={handleNavigationBack}>
        <Text style={styles.okText}>Ok</Text>
      </RectButton>
    </View>
  );
}

export default GiveClasses;
