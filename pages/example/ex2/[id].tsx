import { useRouter } from 'next/router'

const Ex2 = ({ data }: any) => {
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1>Example: Dynamic Routes (Tạo trang tĩnh)</h1>
      <em>getStaticPaths</em>
      <div>
        <ul>
          <li>id: {data?.id}</li>
          <li>name: {data?.name}</li>
        </ul>
      </div>
    </div>
  )
}

export const getStaticProps = async ({ params }: any) => {
  const res = await fetch(
    `http://localhost:3000/api/example/detail/${params?.id}`
  )
  const data = await res.json()
  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data: data,
    },
    revalidate: 1,
  }
}

export const getStaticPaths = async () => {
  const res = await fetch('http://localhost:3000/api/example/list')
  const list = await res.json()
  const paths = list?.map((elm: any) => ({
    params: { id: elm?.id?.toString() },
  }))
  return {
    paths,
    fallback: true,
  }
}

export default Ex2
