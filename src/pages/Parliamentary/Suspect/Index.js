import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import Timeline from 'react-native-timeline-flatlist';
import AsyncStorage from '@react-native-community/async-storage';

import Loading from '../../../components/Loading/index';
import MensageAlert from '../../../components/Alert/index';
import api from '../../../services/api';

import { View } from './styles';

const Suspect = () => {
  const [timeline, setTimeline] = useState([]);
  const [loading, setLoading] = useState();
  const [exist, setExist] = useState();
  const [suspicions, setSuspicions] = useState();

  const mensage = 'Desculpe, não encontramos nenhum reembolso';
  const displaysButton = false;

  useEffect(() => {
    async function loadInfo() {
      setLoading(true);
      setExist(true);

      const id = await AsyncStorage.getItem('ID');

      await api
        .get(`parlamentar/${id}`)
        .then((response) => {
          const { data } = response;

          if (!data.reimbursements[0]) {
            setExist(false);
          } else {
            const suspicions = data.parlamentar_data.has_suspicions;

            setSuspicions(suspicions);

            const index = data.reimbursements.length;

            let timeline = [];

            for (let i = 0; i < index; i += 1) {
              const information = data.reimbursements[i];
              let reason = 'Motivo: ';

              if (suspicions) {
                if (information.suspicions.meal_price_outlier)
                  reason += 'Preço de refeição muito incomum ';

                if (information.suspicions.over_monthly_subquota_limit)
                  reason += 'Extrapolou limite da (sub)quota ';

                if (information.suspicions.suspicious_traveled_speed_day)
                  reason +=
                    'Muitas despesas em diferentes cidades no mesmo dia ';

                if (information.suspicions.invalid_cnpj_cpf)
                  reason += 'CPF ou CNPJ inválidos ';

                if (information.suspicions.election_expenses)
                  reason += 'Gastos com campanha eleitoral ';

                if (information.suspicions.irregular_companies_classifier)
                  reason += 'CNPJ irregular ';
              }

              timeline = [
                ...timeline,
                {
                  title: information.subquota_description,
                  description: `${
                    suspicions ? reason : `${reason} não existe `
                  } ${'\n'}Fornecedor: ${information.supplier} ${'\n'}CNPJ: ${
                    information.cnpj_cpf
                  } ${'\n'}Documento: ${
                    information.document_id
                      ? information.document_id
                      : 'não encontrado'
                  } ${'\n'}Data: ${information.issue_date} ${'\n'}Valor: ${
                    information.document_value
                  }`,
                  linkText: information.document_id,
                  linkUrl: information.receipt,
                  color_suspicions: suspicions,
                },
              ];
            }

            setTimeline(timeline);
          }
        })
        .catch((err) => {
          Alert.alert(err.message);
        });

      setLoading(false);
    }

    loadInfo();
  }, []);

  return (
    <View>
      {loading ? (
        <Loading />
      ) : exist ? (
        <Timeline
          data={timeline}
          circleSize={15}
          circleColor={suspicions ? '#F57706' : 'rgb(45,156,219)'}
          lineColor={suspicions ? '#F57706' : 'rgb(45,156,219)'}
          showTime={false}
          descriptionStyle={{
            color: 'gray',
            fontFamily: 'Glegoo-Regular',
            fontSize: 12,
            lineHeight: 15,
          }}
          options={{
            style: { marginTop: 20 },
          }}
        />
      ) : (
        <MensageAlert mensage={mensage} displaysButton={displaysButton} />
      )}
    </View>
  );
};

export default Suspect;
