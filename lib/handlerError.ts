import { AxiosError } from 'axios'

export const errorAxios = (e: AxiosError): string => {
  console.log('ESTADO DE LA PETICION ===> ', e.response?.status)

  const res = e.response

  if (res?.status && res.status >= 400 && res.status < 500) {
    return e.response?.data as string
  } else if (res?.status && res.status >= 500 && res.status < 600) {
    return 'Error del servidor'
  } else {
    return 'Error desconocido no capturado'
  }
}
