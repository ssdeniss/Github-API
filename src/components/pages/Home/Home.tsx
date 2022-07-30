import React from 'react'
import { useSearchUsersQuery } from '../../../store/github/github.api'

const Home = () => {
   const {isLoading, isError, data}= useSearchUsersQuery('vlad')
  return (
    <div>Home</div>
  )
}

export default Home