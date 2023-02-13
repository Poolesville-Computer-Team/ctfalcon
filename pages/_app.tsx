import '../styles/globals.css'
import { AppProps } from 'next/app'
import React from 'react'
import { NavigationBar } from '../components'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="my-4 mx-8">
      <NavigationBar
        items={[
          { title: "Home", route: "/" },
          { title: "Challenges", route: "/challenges" },
          { title: "Teams", route: "/teams" },
          { title: "Leaderboard", route: "/leaderboard" },
          { title: "About", route: "About" },
        ]}
      />
      <Component {...pageProps} />
    </div>
  )
}