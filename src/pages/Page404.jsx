import React from 'react'
import { Link } from 'react-router-dom'

function Page404() {
  return (
    <div className="errorPage">
      <h2>Sorry, the page you were looking for is not found!!</h2>
      <Link to="/">Return to home</Link>
    </div>
  )
}

export default Page404