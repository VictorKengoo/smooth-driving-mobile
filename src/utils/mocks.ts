import { veiculoProps, viagemProps } from "./interfaces";

export default class Mocks {
  static createCarList(): veiculoProps[] {
    return [{
      id: 1,
      manufacturer: 'Volkswagen',
      model: 'Fusca',
      transmission: 'Manual',
      year: '2020',
      plate: 'ABC-1234',
      maxRPMReached: 6
    }, {
      id: 2,
      manufacturer: 'Volkswagen',
      model: 'Fusca',
      transmission: 'Manual',
      year: '2020',
      plate: 'ABC-1234',
      maxRPMReached: 4
    }, {
      id: 3,
      manufacturer: 'Toyota',
      model: 'Yaris',
      transmission: 'Manual',
      year: '2020',
      plate: 'ABC-1234',
      maxRPMReached: 9
    }, {
      id: 4,
      manufacturer: 'Toyota',
      model: 'Yaris',
      transmission: 'Manual',
      year: '2020',
      plate: 'ABC-1234',
      maxRPMReached: 11
    }]
  }

  static createViagensList(): viagemProps[] {
    return [{
      carId: 1,
      eventInfo: {
        date: '2020-01-01',
        time: '10:36:09',
      },
      eventCounts: {
        curvaEsquerda: 1,
        curvaDireita: 1,
        trocaFaixaEsquerda: 1,
        trocaFaixaDireita: 1,
        aumentoRPM: 1,
        frenagem: 1,
      }
    }, {
      carId: 2,
      eventInfo: {
        date: '2020-01-01',
        time: '10:36:09',
      },
      eventCounts: {
        curvaEsquerda: 2,
        curvaDireita: 2,
        trocaFaixaEsquerda: 2,
        trocaFaixaDireita: 2,
        aumentoRPM: 2,
        frenagem: 2,
      }
    }, {
      carId: 3,
      eventInfo: {
        date: '2020-01-01',
        time: '10:36:09',
      },
      eventCounts: {
        curvaEsquerda: 3,
        curvaDireita: 3,
        trocaFaixaEsquerda: 3,
        trocaFaixaDireita: 3,
        aumentoRPM: 3,
        frenagem: 3,
      }
    }, {
      carId: 4,
      eventInfo: {
        date: '2020-01-01',
        time: '10:36:09',
      },
      eventCounts: {
        curvaEsquerda: 4,
        curvaDireita: 4,
        trocaFaixaEsquerda: 4,
        trocaFaixaDireita: 4,
        aumentoRPM: 4,
        frenagem: 4,
      }
    }, {
      carId: 1,
      eventInfo: {
        date: '2020-01-01',
        time: '10:36:09',
      },
      eventCounts: {
        curvaEsquerda: 1,
        curvaDireita: 1,
        trocaFaixaEsquerda: 1,
        trocaFaixaDireita: 1,
        aumentoRPM: 1,
        frenagem: 1,
      }
    }, {
      carId: 2,
      eventInfo: {
        date: '2020-01-01',
        time: '10:36:09',
      },
      eventCounts: {
        curvaEsquerda: 2,
        curvaDireita: 2,
        trocaFaixaEsquerda: 2,
        trocaFaixaDireita: 2,
        aumentoRPM: 2,
        frenagem: 2,
      }
    }, {
      carId: 3,
      eventInfo: {
        date: '2020-01-01',
        time: '10:36:09',
      },
      eventCounts: {
        curvaEsquerda: 3,
        curvaDireita: 3,
        trocaFaixaEsquerda: 3,
        trocaFaixaDireita: 3,
        aumentoRPM: 3,
        frenagem: 3,
      }
    }, {
      carId: 4,
      eventInfo: {
        date: '2020-01-01',
        time: '10:36:09',
      },
      eventCounts: {
        curvaEsquerda: 4,
        curvaDireita: 4,
        trocaFaixaEsquerda: 4,
        trocaFaixaDireita: 4,
        aumentoRPM: 4,
        frenagem: 4,
      }
    },
    ]
  }
}