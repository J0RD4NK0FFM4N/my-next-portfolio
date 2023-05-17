import React from 'react'
import YoutubeEmbed from 'src/app/utils/youtube-embed.js'
import Image from 'next/image'
import Link from 'next/link'
import styles from 'src/app/styles/home.module.css'





  export default function Page() {
    return (<div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            ok,<a href="https://www.taylorswift.com/">Taylor!</a>
          </h1>
          <div className="App">
       
        <YoutubeEmbed embedId="b7QlX3yR2xs" />
      </div>
        </main>
      </div>)
  }