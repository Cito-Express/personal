import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <div className='h-[100dvh] center'>
        <div className='space-y-4 text-center md:w-[480px] w-[90%] mx-auto'>
            <h1 className='text-6xl font-bold'>404</h1>
            <p className='text-muted'>The page you are looking for does not exist or has been moved</p>
            <Link href="/" className='underline text-primary font-medium'>Go back to home</Link>
        </div>
    </div>
  )
}
