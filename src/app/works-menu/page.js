import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import getAirtableWorks from '../utils/get-at-works'

export async function fetch() {
  const allWorks = await getAirtableWorks();
  const theWorks = allWorks.map(e=>{
    return {
      id: e.id,
      linkText: e.fields.Title,
      assignedTo: e.fields.Worker,
    }
  })
  return {
    props: {
      works: theWorks,
    }
  }
}

export default function Home(props) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Hey hey <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <ul>
            {console.log(props.actions)}  
          {props.works.map(work=>{
            return(
              <li><strong>{work.assignedTo[0]}:</strong> {work.linkText}</li>
            )
          }
          )}
        </ul>
      </main>
    </div>
  )
}
