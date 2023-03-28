import { EXAMPLE } from './service/actionTypes'

const initialState: any = {
  exampleData: 'Test redux example',
}

const example = (state: any = initialState, { type, payload }: any) => {
  switch (type) {
    case EXAMPLE:
      return {
        ...state,
        exampleData: payload.data,
      }
    default:
      return state
  }
}

export default example
