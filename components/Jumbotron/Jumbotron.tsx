import { useRouter } from 'next/router'
import React from 'react'

const Jumbotron = () => {
  const router = useRouter()

  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">Cats World</h1>
        <p className="lead">
          This is a modified jumbotron that occupies the entire horizontal space
          of its parent.
        </p>
        <button
          type="button"
          onClick={() => router.push('/cats')}
          className="btn btn-primary"
        >
          Start Locking
        </button>
      </div>
    </div>
  )
}

export default Jumbotron
