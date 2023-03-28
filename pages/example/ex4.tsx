const Ex4 = ({ list }: any) => {
  return (
    <div>
      <h1>Example: Server-Side Rendering</h1>
      <em>getServerSideProps</em>
      <div>
        {list?.map((elm: { id: string; name: string }, index: number) => (
          <div key={index}>
            <li>id: {elm?.id}</li>
            <li>name: {elm?.name}</li>
          </div>
        ))}
      </div>
    </div>
  )
}

export const getServerSideProps = async ({ req, res }: any) => {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )

  const ress = await fetch('http://localhost:3000/api/example/list')
  const list = await ress?.json()
  return {
    props: {
      list,
    },
  }
}

export default Ex4
