import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

const FirstPost = () => {
  return (
    <>
    <Head>
      <title>First My Post</title>
      
    </Head>
      <h1>First Posst</h1>
      <Image src="/images/profile.jpg" alt="Your name" height={404} width={404}/>

      <h2>
        <Link href='/'>
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  )
}

export default FirstPost;