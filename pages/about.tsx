import Link from 'next/link'
import React from 'react'
import Layout from '../components/sites/Layout'

const about = () => {
  return (
    <Layout>
      <div className="flex h-screen flex-col items-center">
        <div className="m-10 text-4xl tracking-widest text-eternal-gray">
          About
        </div>
        <div className="p-10 text-center leading-10">
          <p>Eternal card is a non-depreciable, blockchain powered asset.</p>
          <p>Our mission is to standardize the world’s digital assets.</p>
          <p>In blockchain, we trust.</p>
        </div>
        <span className="text-eternal-gray underline">
          <Link href="/">Go back to main page</Link>
        </span>
      </div>
    </Layout>
  )
}

export default about