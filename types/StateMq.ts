export enum MqValue {
  Desktop = 'desktop',
  Mobile = 'mobile'
}

export enum MqKey {
  Sm = 'sm',
  Md = 'md',
  Lg = 'lg'
}

export interface MqObject {
  key: MqKey
  value: number
}

export interface StateMq {
  value: MqValue
  mqKey: MqKey
  list: ReadonlyArray<MqObject>
}

export interface MqPayload {
  currentMediaName: MqValue
  currentMediaKey: MqKey
}
