import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import logo from  '../public/logo.jpg';
import home from  '../public/home.jpg';
import teenage from  '../public/teenage.jpg';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className='flex flex-row w-full justify-between px-24' >
      <div>
        <Image src={logo} alt='' width={200} height={200} className='w-1/2'></Image>
      </div>
      <nav className='flex flex-row w-1/2 justify-end'>
      <div className={styles.topnav}>
        <Link  href="/">Home</Link>
        <Link  href="/about">About</Link>
      </div>

      </nav>
      </header>
      <main className={styles.main}>

      <section className='flex flex-row w-full pb-36' >
          <article className='flex justify-around w-1/2'>
          <hr className={styles.highlighter + ' w-1/12'}/>
          <p className={'w-10/12'}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
              It has survived not only five centuries, but 
           </p>
          </article>
          <aside className='w-1/2'>
          <figure>
          <Image src={teenage} alt='' width={1000} height={600}  className={styles.image} />
          </figure>
          <h2 className={styles.subTitle}> WHAT IS LOREM IPSUM?</h2>
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          It has survived not only five centuries, but 
          </p>
          </aside>
      </section>
      <section className='flex flex-row w-full pb-6'>
      <aside className='w-1/2'>
          <figure>
          <Image src={home} alt='' width={1000} height={600} className={styles.image}></Image>
          </figure>
          <h2 className={styles.subTitle}> WHAT IS LOREM IPSUM?</h2>
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          It has survived not only five centuries, but 
          </p>
          </aside>
          <article className='flex justify-around w-1/2'>
          <hr className={styles.highlighter + ' w-1/12'}/>
          <p className={'w-10/12'}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
              It has survived not only five centuries, but 
           </p>
          </article>
      </section>
      </main>
      <footer className={styles.footer + ' flex w-full items-center	px-24'}>
        Footer
      </footer>
    </>
  )
}
