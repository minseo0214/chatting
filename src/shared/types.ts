export interface MessageToServer {
  name: string
  text: string
}

export interface MessageToClient {
  id: number
  name: string
  text: string
  time: string
}
