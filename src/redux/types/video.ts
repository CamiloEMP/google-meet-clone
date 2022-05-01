export interface videoRoom {
  name: string
  idOrg?: string
}

export interface videoCrateRoom extends Omit<videoRoom, 'idOrg'> {
  uid: string
}
