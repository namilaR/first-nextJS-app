import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Nav from '../../components/Nav/Nav'
import DefaultLayout from '../../layout/DefaultLayout'

const Cat = () => {
  const [cat, setCat] = useState<any>()
  const router = useRouter()
  const { id } = router.query
  const fetchCat = async () => {
    const response = await fetch(`/api/cats/${id}`)
    const data = await response.json()
    setCat(data)
  }

  useEffect(() => {
    fetchCat()
  }, [])

  return (
    <DefaultLayout>
      {cat && (
        <div className="container mt-5">
          <img src={cat.image.url} alt={cat.image.alt} />
          <div className="mx-5">
            <h1>{cat.name}</h1>
            <p>{cat.description}</p>
          </div>
        </div>
      )}
    </DefaultLayout>
  )
}

export default Cat
