import type { NextPage } from 'next'
import React from 'react'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>NextJS, Prisma and GraphQL Template</title>
      </Head>
      <div className="flex items-center justify-center w-full h-screen text-white bg-gray-900">
        <div className="flex flex-col w-full max-w-xl space-y-1">
          <h1 className="font-bold text-3xl">NextJS + Prisma + GraphQL + Apollo Template</h1>
          <h3 className="font-medium text-xl text-zinc-500">My stack boilerplate.</h3>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Home
