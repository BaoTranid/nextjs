import { EXAMPLE } from './actionTypes'

export const getExample = (data: any) => (dispatch: any) => {
  return dispatch({
    type: EXAMPLE,
    payload: {
      data: data,
    },
  })
}
