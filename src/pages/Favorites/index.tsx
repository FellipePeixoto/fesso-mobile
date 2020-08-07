import React, { useState } from 'react';
import { View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';

import PageHeader from '../../components/PageHeader';
import { ScrollView } from 'react-native-gesture-handler';

import styles from './styles';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

function Favorites() {
  const [teachers, setTeachers] = useState([]);

  useFocusEffect(() => {
    AsyncStorage.getItem('favorites').then(response => {
      if (response) {
        const favoritedTeachers = JSON.parse(response);
        setTeachers(favoritedTeachers);
      }
    });
  });

  return (
    <View style={styles.container}>
      <PageHeader title="Meus Fessores favoritos" />
      <ScrollView
        style={styles.teachersList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {teachers.map((teacher: Teacher) => {
          return (
            <TeacherItem
              key={teacher.id}
              teacher={teacher}
              favorited={true}
            />
          )
        })}
      </ScrollView>
    </View>
  );
}

export default Favorites;