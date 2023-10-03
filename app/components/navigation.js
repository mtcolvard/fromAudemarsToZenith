import Link from 'next/link'
import MobileNav from './mobile-nav'

export default function Navigation() {
  return (
    <>
      <MobileNav />
      <div className="bg-white text-black">
        <div className="md:px-20 md:py-11 bg-white hidden sm:block ">
          <div>
            <Link href="/">
              <h1 className='md:my-2 text-lg md:text-3xl lg:text-5xl md:text-center'>From Audemars to Zenith</h1>
            </Link>
          </div>
          <div className='md:my-2 text-lg md:flex md:gap-3 lg:gap-8 justify-center'>
            <div>
              <Link className='flex-1' href="/showcase">
                Showcase
              </Link>
            </div>
            <div>
              <Link className='flex-1' href="/about">
                About
              </Link>
            </div>
            <div>
              <Link className='flex-1' href="/contact">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}