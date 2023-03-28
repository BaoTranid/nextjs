import { useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Head from 'next/head'
import { getExample } from './service/services'

const Ex5 = () => {
  const dispatch = useDispatch()
  const data = useSelector(({ example }: any) => example)

  const fetchData = useCallback(() => {
    dispatch(getExample('This dialogue is taken from redux'))
  }, [dispatch])

  useEffect(() => {
    const getData = setTimeout(() => {
      fetchData()
    }, 0)
    return () => clearTimeout(getData)
  }, [fetchData])

  return (
    <div>
      <Head>
        <title>Redux thunk</title>
      </Head>
      <h1 className="abc">Example: Redux thunk</h1>
      <div>{data?.exampleData}</div>
    </div>
  )
}

export default Ex5
