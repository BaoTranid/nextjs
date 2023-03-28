import { COMMON } from './actionTypes'

export const loadApi = () => (dispatch: any) => {
  return dispatch({
    type: COMMON,
    payload: {
      request: {
        url: '/api/hello',
      },
    },
  })
}
