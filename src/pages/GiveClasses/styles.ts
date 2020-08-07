import { StyleSheet } from 'react-native';
import { Poppins_400Regular } from '@expo-google-fonts/poppins';
import { Archivo_700Bold } from '@expo-google-fonts/archivo';

const styles = {

  container: {
    flex: 1,
    backgroundColor: '#8257E5',
    justifyContent: 'center',
    padding: 40,
  },

  content: {
    flex: 1,
    justifyContent: 'center',
  },


  title: {
    fontFamily: 'Archivo_700Bold',
    color: '#FFF',
    fontSize: 32,
    lineHeight: 37,
    marginTop: 180,
  },

  description: {
    fontFamily: 'Poppins_400Regular',
    marginTop: 24,
    color: '#d4c2ff',
    fontSize: 16,
    lineHeight: 26,
  },

  okButton: {
    marginVertical: 40,
    backgroundColor: '#04d361',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },

  okText: {
    color: '#FFF',
    fontSize: 16,
    fontFamily: 'Archivo_700Bold',
  },
};

export default styles;