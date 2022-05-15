import mongoose from 'mongoose'
import EixoXAcelerometro from './EixoXAcelerometro'
import EixoXGiroscopio from './EixoXGiroscopio'
import EixoYAcelerometro from './EixoYAcelerometro'
import EixoYGiroscopio from './EixoYGiroscopio'
import EixoZAcelerometro from './EixoZAcelerometro'
import EixoZGiroscopio from './EixoZGiroscopio'
import IdViagem from './IdViagem'
import RPMveiculo from './RPMveiculo'
import Velocidade from './Velocidade'

const BrokerDataSchema = new mongoose.Schema({
  id: String,
  type: String,
  EixoXAcelerometro: EixoXAcelerometro,
  EixoXGiroscopio: EixoXGiroscopio,
  EixoYAcelerometro: EixoYAcelerometro,
  EixoYGiroscopio: EixoYGiroscopio,
  EixoZAcelerometro: EixoZAcelerometro,
  EixoZGiroscopio: EixoZGiroscopio,
  IdViagem: IdViagem,
  RPMveiculo: RPMveiculo,
  Velocidade: Velocidade
})

mongoose.model('BrokerData', BrokerDataSchema)