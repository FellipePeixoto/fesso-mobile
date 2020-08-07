import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { TextInput, BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import styles from './styles';
import api from '../../services/api';
import AsyncStorage from '@react-native-community/async-storage';

function TeacherList() {
  const [isFilterVisible, setFiltersVisible] = useState(false);

  const [favTeachers, setFavTeachers] = useState<number[]>([]);

  const [teachers, setTeachers] = useState([]);
  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  useEffect(() => {

    const response = api.get('classes').then(response => {
      setTeachers(response.data);
    });
  }, []);

  useFocusEffect(() => {
    AsyncStorage.getItem('favorites').then(response => {
      if (response) {
        const favoritedTeachers = JSON.parse(response);
        const favoritedTeachersIds = favoritedTeachers.map((teacher: Teacher) => {
          return teacher.id;
        })

        setFavTeachers(favoritedTeachersIds);
      }
    });
  });

  async function handleFilters() {
    if (subject !== '' && week_day !== '' && time !== '') {
      const response = await api.get('classes', {
        params: {
          subject,
          week_day,
          time,
        }
      });
      setTeachers(response.data);
    }
  }

  function handleToggleFiltersVisible() {
    setFiltersVisible(!isFilterVisible);
  }

  return (
    <View style={styles.container}>
      <PageHeader
        title="Fessores disponíveis"
        headerRight={(
          <BorderlessButton>
            <Feather
              name="filter"
              size={20}
              color="#FFF"
              onPress={handleToggleFiltersVisible}
            />
          </BorderlessButton>
        )}
      >
        {isFilterVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Matéria</Text>
            <TextInput
              style={styles.input}
              value={subject}
              onChangeText={text => setSubject(text)}
              placeholder="Qual a matéria?"
              placeholderTextColor='#c1bccc'
            />

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da semana</Text>
                <TextInput
                  value={week_day}
                  onChangeText={text => setWeekDay(text)}
                  style={styles.input}
                  placeholder="Qual o dia?"
                  placeholderTextColor='#c1bccc'
                >

                </TextInput>
              </View>
            </View>

            <View style={styles.inputBlock}>
              <Text style={styles.label}>Horário</Text>
              <TextInput
                value={time}
                onChangeText={text => setTime(text)}
                style={styles.input}
                placeholder="Qual horário?"
                placeholderTextColor='#c1bccc'
              >

              </TextInput>
            </View>


          </View>)}
      </PageHeader>
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
              favorited={favTeachers.includes(teacher.id)}
            />
          )
        })}
      </ScrollView>
    </View>
  );
}

export default TeacherList;