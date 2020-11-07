import React, { useState, useEffect } from 'react';
import { FlatList, Alert } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';

import MensageAlert from '../../components/Alert/index';
import Loading from '../../components/Loading/index';
import Header from '../../components/Header/index';

import api from '../../services/api';

import {
  Parlamentar,
  Content,
  Avatar,
  AlignText,
  Name,
  Partido,
  ArrowRight,
} from './styles';

const Main = () => {
  const [loading, setLoading] = useState(true);
  const [exist, setExist] = useState(true);
  const [parlamentares, setPalamentares] = useState([]);

  const navigation = useNavigation();

  const title = 'Gastos Públicos';
  const description = 'Acompanhe os seus perlamentares';
  const comeback = 'Home';

  const mensage = 'Desculpe, não existe nenhum Parlamentar cadastro.';
  const displaysButton = true;

  useEffect(() => {
    async function loadPartidos() {
      await api
        .get('get_all_parlamentars')
        .then((response) => {
          const { data } = response;

          if (!data[0]) {
            setExist(false);
          }
          setPalamentares(data);
        })
        .catch((err) => {
          Alert.alert(err.mensage);
        });
      setLoading(false);
    }
    loadPartidos();
  }, []);

  function handleParlamentay(id, avatar, name, party, estate, suspicions) {
    AsyncStorage.setItem('ID', JSON.stringify(id));
    AsyncStorage.setItem('Avatar', JSON.stringify(avatar));
    AsyncStorage.setItem('Name', JSON.stringify(name));
    AsyncStorage.setItem('Party', JSON.stringify(party));
    AsyncStorage.setItem('Estate', JSON.stringify(estate));
    AsyncStorage.setItem('Suspicions', JSON.stringify(suspicions));

    navigation.navigate('Parliamentary');
  }

  return (
    <>
      <Header title={title} description={description} comeback={comeback} />

      {loading ? (
        <Loading />
      ) : exist ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={parlamentares.sort((a, b) => a.name.localeCompare(b))}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <RectButton
              onPress={() =>
                handleParlamentay(
                  item.id,
                  item.avatar_url,
                  item.name,
                  item.party,
                  item.estate,
                  item.has_suspicions
                )
              }
            >
              <Parlamentar>
                <Content>
                  <Avatar source={{ uri: item.avatar_url }} />
                  <AlignText>
                    <Name>{item.name}</Name>
                    <Partido>
                      Partido {item.party} - {item.estate}
                    </Partido>
                    <ArrowRight />
                  </AlignText>
                </Content>
              </Parlamentar>
            </RectButton>
          )}
        />
      ) : (
        <MensageAlert mensage={mensage} displaysButton={displaysButton} />
      )}
    </>
  );
};

export default Main;
