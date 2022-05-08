import { SensorDataPostProps, SensorDataProps, veiculoProps, viagemProps } from "./interfaces";

function createCarList(): veiculoProps[] {
  return [{
    id: 1,
    manufacturer: 'Volkswagen',
    model: 'Fusca',
    transmission: 'Automático',
    year: '2021',
    plate: 'ABC-1222',
    fuel: 'Gasolina',
    situacaoIPVA: 'Pago',
    color: 'Preto',
    maxRPMReached: 6
  }, {
    id: 2,
    manufacturer: 'Volkswagen',
    model: 'Fusca',
    transmission: 'Manual',
    year: '2022',
    plate: 'ABC-1111',
    fuel: 'Gasolina',
    situacaoIPVA: 'Pago',
    color: 'Branco',
    maxRPMReached: 4
  }, {
    id: 3,
    manufacturer: 'Toyota',
    model: 'Yaris',
    transmission: 'Automático',
    year: '2023',
    plate: 'ABC-1111',
    fuel: 'Etanol',
    situacaoIPVA: 'Não Pago',
    color: 'Azul',
    maxRPMReached: 9
  }, {
    id: 4,
    manufacturer: 'Toyota',
    model: 'Yaris',
    transmission: 'Manual',
    year: '2018',
    plate: 'ABC-4444',
    fuel: 'Gasolina',
    situacaoIPVA: 'Pago',
    color: 'Branco',
    maxRPMReached: 11
  }]
}

function createViagensList(): viagemProps[] {
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

export default {
  createCarList,
  createViagensList,
}