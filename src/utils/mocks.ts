import { SensorDataPostProps, SensorDataProps, veiculoProps, viagemProps } from "./interfaces";

export default class Mocks {
  static createCarList(): veiculoProps[] {
    return [{
      id: 1,
      manufacturer: 'Volkswagen',
      model: 'Fusca',
      transmission: 'Manual',
      year: '2020',
      plate: 'ABC-1234',
      fuel: 'Gasolina',
      situacaoIPVA: 'Pago',
      color: 'Preto',
      maxRPMReached: 6
    }, {
      id: 2,
      manufacturer: 'Volkswagen',
      model: 'Fusca',
      transmission: 'Manual',
      year: '2020',
      plate: 'ABC-1234',
      fuel: 'Gasolina',
      situacaoIPVA: 'Pago',
      color: 'Preto',
      maxRPMReached: 4
    }, {
      id: 3,
      manufacturer: 'Toyota',
      model: 'Yaris',
      transmission: 'Manual',
      year: '2020',
      plate: 'ABC-1234',
      fuel: 'Gasolina',
      situacaoIPVA: 'Pago',
      color: 'Preto',
      maxRPMReached: 9
    }, {
      id: 4,
      manufacturer: 'Toyota',
      model: 'Yaris',
      transmission: 'Manual',
      year: '2020',
      plate: 'ABC-1234',
      fuel: 'Gasolina',
      situacaoIPVA: 'Pago',
      color: 'Preto',
      maxRPMReached: 11
    }]
  }

  static createViagensList(): viagemProps[] {
    return [{
      carId: 1,
      eventInfo: {
        dateTime: '2022/01/01 16:13:58',
        duration: '1h:01m:01s'
      },
      eventsCount: {
        curvaEsquerda: 1,
        curvaDireita: 1,
        trocaFaixaEsquerda: 1,
        trocaFaixaDireita: 1,
        aceleracaoBrusca: 1,
        frenagemBrusca: 1,
      }
    }, {
      carId: 2,
      eventInfo: {
        dateTime: '2022/02/02 16:13:58',
        duration: '2h:02m:02s'
      },
      eventsCount: {
        curvaEsquerda: 2,
        curvaDireita: 2,
        trocaFaixaEsquerda: 2,
        trocaFaixaDireita: 2,
        aceleracaoBrusca: 2,
        frenagemBrusca: 2,
      }
    }, {
      carId: 3,
      eventInfo: {
        dateTime: '2022/03/03 16:13:58',
        duration: '3h:03m:03s'
      },
      eventsCount: {
        curvaEsquerda: 3,
        curvaDireita: 3,
        trocaFaixaEsquerda: 3,
        trocaFaixaDireita: 3,
        aceleracaoBrusca: 3,
        frenagemBrusca: 3,
      }
    }, {
      carId: 4,
      eventInfo: {
        dateTime: '2022/04/04 16:13:58',
        duration: '4h:04m:04s'
      },
      eventsCount: {
        curvaEsquerda: 4,
        curvaDireita: 4,
        trocaFaixaEsquerda: 4,
        trocaFaixaDireita: 4,
        aceleracaoBrusca: 4,
        frenagemBrusca: 4,
      }
    }]
  }

  static composeData(
    gyroscopePostData: SensorDataProps[],
    accelerometerPostData: SensorDataProps[],
    data: SensorDataPostProps[]): SensorDataPostProps[] {
    {
      accelerometerPostData.map(accelerometerData => {
        gyroscopePostData.map(gyroscopeData => {
          data.push({
            AceleracaoVeiculo: {
              type: "float",
              value: accelerometerData.x.toString(),
              metadata: {}
            },
            EixoXAcelerometro: {
              type: "float",
              value: accelerometerData.x.toString(),
              metadata: {}
            },
            EixoYAcelerometro: {
              type: "float",
              value: accelerometerData.y.toString(),
              metadata: {}
            },
            EixoZAcelerometro: {
              type: "float",
              value: accelerometerData.z.toString(),
              metadata: {}
            },
            EixoXGiroscopio: {
              type: "float",
              value: gyroscopeData.x.toString(),
              metadata: {}
            },
            EixoYGiroscopio: {
              type: "float",
              value: gyroscopeData.y.toString(),
              metadata: {}
            },
            EixoZGiroscopio: {
              type: "float",
              value: gyroscopeData.z.toString(),
              metadata: {}
            },
            DistanciaCodLimpo: {
              type: "float",
              value: gyroscopeData.z.toString(),
              metadata: {}
            },
            VelocidadeVeiculo: {
              type: "float",
              value: gyroscopeData.z.toString(),
              metadata: {}
            },
            IdViagem: {
              type: "float",
              value: gyroscopeData.z.toString(),
              metadata: {}
            },
            NivelCombustivel: {
              type: "float",
              value: gyroscopeData.z.toString(),
              metadata: {}
            },
            PorcentagemEtanol: {
              type: "float",
              value: gyroscopeData.z.toString(),
              metadata: {}
            },
            RPMveiculo: {
              type: "float",
              value: gyroscopeData.z.toString(),
              metadata: {}
            },
            TipoCombustivel: {
              type: "float",
              value: gyroscopeData.z.toString(),
              metadata: {}
            },
            id: 'urn:ngsi-ld:entity:023',
            type: 'iot'
          })
        })
      })
      return data
    }
  }
}