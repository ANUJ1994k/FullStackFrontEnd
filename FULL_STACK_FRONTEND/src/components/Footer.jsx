import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black mt-48 text-white '>
        <div className='grid grid-cols-3'>
        <div className='flex flex-col'>
            <h1>Help</h1>
            <a href='#'><p>Help Center</p></a>
            <a href='#'><p>Help Forum</p></a>
            <a href='#'><p>Video Tutorials</p></a>
        </div>
        <div>
            <h1>Community</h1>
            <a href='#'>Blogger Buzz</a>
        </div>
        <div className='flex flex-col'>
            <h1>Developers</h1>
            <a href='#'><p>Blogger API</p></a>
            <a href='#'><p>Developer Forum</p></a>
        </div>
        </div><hr className='bg-gray-400 mt-2'></hr>
        <div className='bg-black mt-5 text-white w-auto h-auto p-10 '>
        <div className='flex gap-5'>
            <a href='#'><p>Terms of Service</p></a>
            <a href='#'><p>Privacy</p></a>
            <a href='#'><p>Content Policy</p></a>
            </div>
            <div className='bg-black w-64 mt-5'>
                <select className='text-white bg-gray-500 float-left'>
                <option defaultValue={0}>English</option>
                <option value={1}>Hindi</option>
                <option value={2}>French</option>
                <option value={3}>Mandrine</option>
                <option value={4}>Russian</option>
                </select>
            </div>
        </div>
    </div>
  )
}

export default Footer