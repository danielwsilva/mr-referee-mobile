/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable no-sequences */
import React, { useState, useEffect } from 'react';
import { Alert, ActivityIndicator } from 'react-native';
import { Picker } from '@react-native-community/picker';
import { showMessage } from 'react-native-flash-message';

import Header from '../../components/Header/index';
import api_camara from '../../services/apiCamara';
import api_uf from '../../services/apiUF';
import api from '../../services/api';

import {
  AlignPhoto,
  Photo,
  Form,
  Text,
  LayoutDropDownList,
  Button,
  SubmitButton,
  RegisterButtonText,
  BackButton,
  BackButtonBorder,
  BackButtonText,
} from './styles';

const Register = ({ navigation }) => {
  const [uf, setUf] = useState([]);
  const [auxUf, setAuxUf] = useState();

  const [partidos, setPartidos] = useState([]);
  const [partido, setPartido] = useState('');

  const [membros, setMembros] = useState([]);
  const [deputado, setDeputado] = useState('');

  const [enable, setEnable] = useState();

  const [name, setName] = useState('');
  const [document, setDocument] = useState('');
  const [party, setParty] = useState('');
  const [estate, setEstate] = useState('');
  const [avatar_url, setAvatar] = useState('');

  const [loading, setLoading] = useState();

  const title = 'Dados do Parlamentar';
  const description =
    'Precisamos saber algumas informações para ser possível análisar os gastos do parlamentar';
  const comeback = 'Home';
  const heightRegister = true;

  useEffect(() => {
    setLoading(false);
    setEnable(false);
    async function loadPartidos() {
      await api_camara
        .get('partidos', { params: { itens: 40 } })
        .then((response) => {
          setPartidos(response.data.dados);
        })
        .catch((err) => {
          Alert.alert(err.mensage);
        });
    }

    async function loadEstados() {
      await api_uf
        .get('estados')
        .then((response) => {
          setUf(response.data);
        })
        .catch((err) => {
          Alert.alert(err.mensage);
        });
    }

    loadPartidos();
    loadEstados();
  }, []);

  async function handleNome(id_partido, uf) {
    if (id_partido) {
      handleValid('mebros');

      await api_camara
        .get(`partidos/${id_partido}/membros`, { params: { itens: 100 } })
        .then((response) => {
          const data = response.data.dados.filter((e) =>
            e.siglaUf.includes(uf)
          );
          setMembros(data);
        })
        .catch((err) => {
          Alert.alert(err.mensage);
        });
    } else {
      setAvatar('');
    }
  }

  async function handleParlamentar(id) {
    if (id) {
      const response = await api_camara.get(`deputados/${id}`);

      const name = response.data.dados.ultimoStatus.nome;
      const document = response.data.dados.cpf;
      const party = response.data.dados.ultimoStatus.siglaPartido;
      const estate = response.data.dados.ultimoStatus.siglaUf;
      const avatar = response.data.dados.ultimoStatus.urlFoto;

      setName(name);
      setDocument(document);
      setParty(party);
      setEstate(estate);
      setAvatar(avatar);
    } else {
      setAvatar('');
    }
  }

  function handleEnable(id) {
    if (!id) {
      return setEnable(false);
    }
    return setEnable(true);
  }

  function handleValid(tipo) {
    setDeputado('');
    setName('');
    setDocument('');
    setParty('');
    setEstate('');
    setAvatar('');
    if (tipo === 'register' || tipo === 'partido' || tipo === 'partido_null') {
      setAuxUf('');
    }
    if (tipo === 'register') {
      setPartido('');
    }
    if (tipo === 'partido_null' || tipo === 'register') {
      setEnable(false);
    }
  }

  async function handleSubmit() {
    try {
      setLoading(true);

      await api.post('add_parlamentar', {
        name,
        document,
        party,
        estate,
        avatar_url,
      });

      setLoading(false);

      showMessage({
        message: 'Sucesso',
        description: 'Seu cadastro foi realizado com sucesso',
        type: 'success',
        position: 'top',
      });

      handleValid('register');
    } catch (err) {
      showMessage({
        message: 'Falha no cadastro',
        description:
          'Parlamentar já cadastrado ou as informações não foram informadas corretamente',
        type: 'warning',
        position: 'top',
      });
      setLoading(false);
    }
  }

  return (
    <>
      <Header
        title={title}
        description={description}
        comeback={comeback}
        heightRegister={heightRegister}
      />

      <AlignPhoto>
        {avatar_url ? (
          <Photo source={{ uri: avatar_url }} />
        ) : (
          <Photo source={require('../../assets/photo.jpg')} />
        )}
      </AlignPhoto>

      <Form>
        <Text>Partido</Text>

        <LayoutDropDownList>
          <Picker
            enabled
            selectedValue={partido}
            onValueChange={(itemValue, itemIndex) => {
              setPartido(itemValue),
                handleEnable(itemValue),
                itemValue
                  ? handleValid('partido')
                  : handleValid('partido_null');
            }}
          >
            <Picker.Item label="Ex: PSB" value="" color="#C3BABA" />

            {partidos.map((partido) => (
              <Picker.Item
                key={partido.id}
                label={partido.sigla}
                value={partido.id}
                color="#5B5B5B"
              />
            ))}
          </Picker>
        </LayoutDropDownList>

        <Text>Estado</Text>

        <LayoutDropDownList>
          <Picker
            enabled={enable}
            selectedValue={auxUf}
            onValueChange={(itemValue, itemIndex) => {
              handleNome(partido, itemValue), setAuxUf(itemValue);
            }}
          >
            <Picker.Item label="Ex: São Paulo" value="" color="#C3BABA" />

            {uf.map((uf) => (
              <Picker.Item
                key={uf.sigla}
                label={uf.nome}
                value={uf.sigla}
                color="#5B5B5B"
              />
            ))}
          </Picker>
        </LayoutDropDownList>

        <Text>Nome</Text>

        <LayoutDropDownList>
          <Picker
            enabled={enable}
            selectedValue={deputado}
            onValueChange={(itemValue, itemIndex) => {
              setDeputado(itemValue), handleParlamentar(itemValue);
            }}
          >
            <Picker.Item
              label="Ex: Jefferson Campos"
              value=""
              color="#C3BABA"
            />
            {partidos ? (
              membros.map((nome) => (
                <Picker.Item
                  key={nome.id}
                  label={nome.nome}
                  value={nome.id}
                  color="#5B5B5B"
                />
              ))
            ) : (
              <Picker.Item
                label="Ex: Jefferson Campos"
                value=""
                color="#C3BABA"
              />
            )}
          </Picker>
        </LayoutDropDownList>

        <SubmitButton onPress={handleSubmit}>
          {loading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <RegisterButtonText>Cadastrar</RegisterButtonText>
          )}
        </SubmitButton>
      </Form>

      <Button>
        <BackButton onPress={() => navigation.navigate('Home')}>
          <BackButtonBorder>
            <BackButtonText>Voltar</BackButtonText>
          </BackButtonBorder>
        </BackButton>
      </Button>
    </>
  );
};

export default Register;
