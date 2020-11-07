import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import Header from '../../components/Header/index';
import Suspect from './Suspect/Index';
import Updating from './Updating/index';

import {
  Container,
  Avatar,
  View,
  Button,
  Reembolso,
  Alterar,
  TextButtonReembolso,
  TextButtonAlterar,
} from './styles';

const Parliamentary = () => {
  const [transition, setTransition] = useState();
  const [avatar, setAvatar] = useState();
  const [name, setName] = useState();

  const title = 'Reembolsos Suspeitos';
  const description = `Acompanhe os gastos suspeitos do parlamentar ${name}`;
  const comeback = 'Main';
  const marginParl = true;

  useEffect(() => {
    async function loadInfo() {
      setTransition(false);

      const avatar = (await AsyncStorage.getItem('Avatar')).toString();
      const name = (await AsyncStorage.getItem('Name')).toString();

      const avatar_replace = avatar.replace(/[\\"]/g, '');
      const nome_replace = name.replace(/[\\"]/g, '');

      setAvatar(avatar_replace);
      setName(nome_replace);
    }

    loadInfo();
  }, []);

  function handleTransition(transition) {
    if (transition === true) {
      setTransition(false);
    } else {
      setTransition(true);
    }
  }

  return (
    <>
      <Header
        title={title}
        description={description}
        comeback={comeback}
        marginParl={marginParl}
      />

      <Container>
        <Avatar source={{ uri: avatar || null }} />

        <View>
          <Reembolso transition={transition}>
            <Button onPress={() => handleTransition(true)}>
              <TextButtonReembolso transition={transition}>
                Reembolsos
              </TextButtonReembolso>
            </Button>
          </Reembolso>

          <Alterar transition={transition}>
            <Button onPress={() => handleTransition(false)}>
              <TextButtonAlterar transition={transition}>
                Alterar dados
              </TextButtonAlterar>
            </Button>
          </Alterar>
        </View>
      </Container>

      {transition ? <Updating /> : <Suspect />}
    </>
  );
};

export default Parliamentary;
