import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Sepehr</title>
        <link rel="icon" href="/1F425.ico" />
      </Head>

      <main>
        <Header title="Sepehr Haghighat" />
        <p className="description">
         
        </p>
      </main>

      <Footer />
    </div>
  )
}
