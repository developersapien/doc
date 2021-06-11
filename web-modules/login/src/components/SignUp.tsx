import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../layout/Layout'
import '../styles.css'
export const SignUp = () => {
  return (
    <Layout bgName="signUp">
      <div>
        <h2>Signup</h2>
        <button>
          <Link to="/login">Login</Link>
        </button>
      </div>
    </Layout>
  )
}

export default SignUp
