import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/index.module.css'
import Leftbar from '../components/leftbar'
import Middlebar from '../components/middlebar'
import Rightbar from '../components/rightbar'


export default function Home() {
  return (
    <>
    <div className={styles.main}>
      <Leftbar/>
      <Middlebar/>
      <Rightbar/>

    </div>
    </>
  )
    
}
// #181f32 bg
// #0d1019 blck
// #224dbe btn
// #dadbdc text
