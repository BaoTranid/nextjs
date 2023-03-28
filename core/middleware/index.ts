import axios from 'axios'

export const apiClients = {
  default: {
    client: axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      responseType: 'json',
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
        Pragma: 'no-cache',
        Expires: -1,
      },
      transformResponse: (data: any) => {
        return data
      },
    }),
  },
}

export const middlewareConfig = {
  interceptors: {
    request: [
      {
        success: function (
          { getState, dispatch, getSourceAction }: any,
          req: any
        ) {
          req.headers.roleId = '99999'
          return req
        },
        error: function (
          { getState, dispatch, getSourceAction }: any,
          error: any
        ) {
          return error
        },
      },
    ],
    response: [
      {
        success: function (
          { getState, dispatch, getSourceAction }: any,
          req: any
        ) {
          return req
        },
        error: function (
          { getState, dispatch, getSourceAction }: any,
          error: any
        ) {
          return error
        },
      },
    ],
  },
  onSuccess: ({ action, next, response }: any, options: any) => {
    const nextAction = {
      type: action?.type,
      payload: response,
      meta: {
        previousAction: action,
      },
    }
    next(nextAction)
    return nextAction
  },
  onError: ({ action, next, error, dispatch }: any, options: any) => {
    const nextAction = {
      type: action?.type,
      error: error,
      meta: {
        previousAction: action,
      },
    }

    next(nextAction)
    return nextAction
  },
}
