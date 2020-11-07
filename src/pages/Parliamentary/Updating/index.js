import React, { useState, useEffect } from 'react';
import { Alert, ActivityIndicator } from 'react-native';
import { Picker } from '@react-native-community/picker';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';
import { showMessage } from 'react-native-flash-message';

import api from '../../../services/api';

import {
  Form,
  Text,
  LayoutDropDownList,
  Button,
  AlterButton,
  AlterButtonText,
  RemoveButton,
  RemoveButtonBorder,
  RemoveButtonText,
  ViewCheck,
  Check,
} from './styles';

const Updating = () => {
  const [id, setId] = useState();
  const [uf, setUf] = useState('');
  const [partido, setPartido] = useState('');
  const [nome, setNome] = useState('');
  const [suspicions, setSuspicions] = useState();
  const [isSelected, setSelection] = useState();
  const [loadingAlt, setLoadingAlt] = useState();
  const [loadingDel, setLoadingDel] = useState();

  const navigation = useNavigation();

  useEffect(() => {
    async function loadInfo() {
      const id = await AsyncStorage.getItem('ID');
      const suspicions = await AsyncStorage.getItem('Suspicions');
      const nome_store = (await AsyncStorage.getItem('Name')).toString();
      const party_store = (await AsyncStorage.getItem('Party')).toString();
      const estate_store = (await AsyncStorage.getItem('Estate')).toString();

      const name = nome_store.replace(/[\\"]/g, '');
      const party = party_store.replace(/[\\"]/g, '');
      const estate = estate_store.replace(/[\\"]/g, '');

      let boolean = false;

      if (suspicions === 'true') {
        boolean = true;
      }

      setSuspicions(boolean);
      setSelection(boolean);

      setId(id);
      setNome(name);
      setPartido(party);
      setUf(estate);
    }

    loadInfo();
  }, []);

  async function handleDelete() {
    setLoadingDel(true);
    await api
      .delete(`remove_parlamentar/${id}`)
      .catch((err) => Alert.alert(err.mensage));

    setLoadingDel(false);
    navigation.navigate('Home');
  }

  async function handleAlterar() {
    setLoadingAlt(true);
    if (suspicions !== isSelected) {
      await api
        .put(`update_parlamentar/${id}`, {
          has_suspicions: isSelected,
        })
        .catch((err) => {
          Alert.alert(err.mensage);
        });

      AsyncStorage.setItem('Suspicions', JSON.stringify(isSelected));
      setSuspicions(isSelected);

      showMessage({
        message: 'Sucesso',
        description: 'Seu cadastro foi atualizado com sucesso',
        type: 'success',
        position: 'top',
      });
    }
    setLoadingAlt(false);
  }

  return (
    <>
      <Form>
        <Text>Partido</Text>

        <LayoutDropDownList>
          <Picker enabled={false}>
            <Picker.Item label={partido} value={partido} color="#C3BABA" />
          </Picker>
        </LayoutDropDownList>

        <Text>Estado</Text>

        <LayoutDropDownList>
          <Picker enabled={false}>
            <Picker.Item label={uf} value={uf} color="#C3BABA" />
          </Picker>
        </LayoutDropDownList>

        <Text>Nome</Text>

        <LayoutDropDownList>
          <Picker enabled={false}>
            <Picker.Item label={nome} value={nome} color="#C3BABA" />
          </Picker>
        </LayoutDropDownList>

        <ViewCheck>
          <Text>Exibir Reembolso Suspeito ?</Text>
          <Check
            value={isSelected}
            onValueChange={setSelection}
            tintColors={{ true: '#0065B7' }}
          />
        </ViewCheck>

        <AlterButton onPress={() => handleAlterar()}>
          {loadingAlt ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <AlterButtonText>Alterar</AlterButtonText>
          )}
        </AlterButton>
      </Form>

      <Button>
        <RemoveButton onPress={() => handleDelete()}>
          <RemoveButtonBorder>
            {loadingDel ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <RemoveButtonText>Remover</RemoveButtonText>
            )}
          </RemoveButtonBorder>
        </RemoveButton>
      </Button>
    </>
  );
};

export default Updating;
