import React, { useEffect, useState } from 'react'
import Card from '../../components/Card/Card'
import Nav from '../../components/Nav/Nav'
import DefaultLayout from '../../layout/DefaultLayout'

const index = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [cats, setCats] = useState([])

  async function fetchCats() {
    const response = await fetch('/api/cats')
    const data = await response.json()
    console.log(data)

    setCats(data)
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    fetchCats()
  }, [])

  return (
    <DefaultLayout>
      <div className="container mt-5">
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          }}
        >
          {cats.map((cat: any) => (
            <Card
              key={cat.id}
              name={cat.name}
              id={cat.id}
              email={cat.email}
              image={cat.image}
              phone={cat.phone}
            />
          ))}
        </div>
      </div>
    </DefaultLayout>
  )
}

export default index
