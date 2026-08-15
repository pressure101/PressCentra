export interface ApiStatus {
  status: 'ok' | 'error'
  service: string
  timestamp?: string
}
