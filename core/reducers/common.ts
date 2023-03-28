import { COMMON } from '@/core/services/actionTypes'

const initialState: any = {
  commonData: 'Test redux',
}

const common = (state: any = initialState, { type, payload }: any) => {
  switch (type) {
    case COMMON:
      return {
        ...state,
        commonData: payload.data,
      }
    default:
      return state
  }
}

export default common
