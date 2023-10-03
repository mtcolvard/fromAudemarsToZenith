// import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
// import Navbar from '../components/navbar.js'
// import Footer from '../components/footer.js'
// import Header from '../components/header.js'
import Navigation from '../components/navigation.js'
import ImageArray from '../components/images-array.js'

import IMG_3333 from '../../public/webp/IMG_3333.webp'
import IMG_4444 from '../../public/webp/IMG_4444.webp'
import IMG_5555 from '../../public/webp/IMG_5555.webp'
import IMG_1111 from '../../public/webp/IMG_1111.webp'
import IMG_0884 from '../../public/webp/IMG_0884.webp'
import IMG_0915 from '../../public/webp/IMG_0915.webp'
import IMG_0980 from '../../public/webp/IMG_0980.webp'
import IMG_1030 from '../../public/webp/IMG_1030.webp'
import IMG_1031 from '../../public/webp/IMG_1031.webp'
import IMG_1138 from '../../public/webp/IMG_1138.webp'
import IMG_1162 from '../../public/webp/IMG_1162.webp'
import IMG_1168 from '../../public/webp/IMG_1168.webp'
import IMG_1173 from '../../public/webp/IMG_1173.webp'
import IMG_1243 from '../../public/webp/IMG_1243.webp'
import IMG_1248 from '../../public/webp/IMG_1248.webp'
import IMG_1255 from '../../public/webp/IMG_1255.webp'
import IMG_1277 from '../../public/webp/IMG_1277.webp'
import IMG_1294 from '../../public/webp/IMG_1294.webp'
import IMG_1295 from '../../public/webp/IMG_1295.webp'
import IMG_1343 from '../../public/webp/IMG_1343.webp' 


const Sacrifice = () => {
  const imageObject = [
    {
      link: '',
      src: IMG_3333,

      alt: '',
      title: '',
      details: '',
      material: '',
      size: '',
      style: 'medium',
      width: '100%',
      imageFoldernumber: '',
    },
    
    {
      link: '',
      src: IMG_4444,

      alt: '',
      title: '',
      details: '',
      material: '',
      size: '',
      style: 'medium',
      width: '100%',
      imageFoldernumber: '',
    },
    
    {
      link: '',
      src: IMG_5555,

      alt: '',
      title: '',
      details: '',
      material: '',
      size: '',
      style: 'medium',
      width: '100%',
      imageFoldernumber: '',
    },
    
    {
      link: '',
      src: IMG_1111,

      alt: '',
      title: '',
      details: '',
      material: '',
      size: '',
      style: 'medium',
      width: '100%',
      imageFoldernumber: '',
    },
    
    {
      link: '',
      src: IMG_0915,

      alt: '',
      title: '',
      details: '',
      material: '',
      size: '',
      style: 'medium',
      width: '100%',
      imageFoldernumber: '',
    },
    
    {
      link: '',
      src: IMG_0980,

      alt: '',
      title: '',
      details: '',
      material: '',
      size: '',
      style: 'medium',
      width: '100%',
      imageFoldernumber: '',
    },
    
    {
      link: '',
      src: IMG_1030,

      alt: '',
      title: '',
      details: '',
      material: '',
      size: '',
      style: 'medium',
      width: '100%',
      imageFoldernumber: '',
    },
    
    {
      link: '',
      src: IMG_1031,

      alt: '',
      title: '',
      details: '',
      material: '',
      size: '',
      style: 'medium',
      width: '100%',
      imageFoldernumber: '',
    },
    
    {
      link: '',
      src: IMG_1138,

      alt: '',
      title: '',
      details: '',
      material: '',
      size: '',
      style: 'medium',
      width: '100%',
      imageFoldernumber: '',
    },
    
    {
      link: '',
      src: IMG_1162,

      alt: '',
      title: '',
      details: '',
      material: '',
      size: '',
      style: 'medium',
      width: '100%',
      imageFoldernumber: '',
    },
    
    {
      link: '',
      src: IMG_1168,

      alt: '',
      title: '',
      details: '',
      material: '',
      size: '',
      style: 'medium',
      width: '100%',
      imageFoldernumber: '',
    },
    
    {
      link: '',
      src: IMG_1173,

      alt: '',
      title: '',
      details: '',
      material: '',
      size: '',
      style: 'medium',
      width: '100%',
      imageFoldernumber: '',
    },
    
    {
      link: '',
      src: IMG_1243,

      alt: '',
      title: '',
      details: '',
      material: '',
      size: '',
      style: 'medium',
      width: '100%',
      imageFoldernumber: '',
    },
    
    {
      link: '',
      src: IMG_1248,

      alt: '',
      title: '',
      details: '',
      material: '',
      size: '',
      style: 'medium',
      width: '100%',
      imageFoldernumber: '',
    },
    
    {
      link: '',
      src: IMG_1255,

      alt: '',
      title: '',
      details: '',
      material: '',
      size: '',
      style: 'medium',
      width: '100%',
      imageFoldernumber: '',
    },
    
    {
      link: '',
      src: IMG_1277,

      alt: '',
      title: '',
      details: '',
      material: '',
      size: '',
      style: 'medium',
      width: '100%',
      imageFoldernumber: '',
    },
    
    {
      link: '',
      src: IMG_1294,

      alt: '',
      title: '',
      details: '',
      material: '',
      size: '',
      style: 'medium',
      width: '100%',
      imageFoldernumber: '',
    },
    
    {
      link: '',
      src: IMG_1295,

      alt: '',
      title: '',
      details: '',
      material: '',
      size: '',
      style: 'medium',
      width: '100%',
      imageFoldernumber: '',
    },
    
    {
      link: '',
      src: IMG_1343,

      alt: '',
      title: '',
      details: '',
      material: '',
      size: '',
      style: 'medium',
      width: '100%',
      imageFoldernumber: '',
    },
    

  ]

  return (
    <div className="bg-white">
      <Head>
        <title>From Audemars to Zenith</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <div className="site min-h-screen flex flex-col pt-4 px-4 md:pt-1 bg-white text-black">
        <main className="flex-[1_0_auto] px-2.5 md:px-8 text-sm md:text-3xl">
          <div className="leadImageContainer">
            <div className="featured md:px-52">
              <ImageArray imageObject={imageObject.slice(0, 1)} />
            </div>
          </div>
          <div className="content md:px-52 ">
            <ImageArray imageObject={imageObject.slice(1)} />
          </div>
        </main>
      </div>
    </div>
  )
}

export default Sacrifice
