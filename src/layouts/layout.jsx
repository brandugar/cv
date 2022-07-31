import React from 'react';
import { Outlet } from 'react-router-dom';
import foto from 'img/foto.png';
import ProgressBar from 'components/ProgressBar';

const Layout = () => (
  <main className='flex h-full flex-col'>
    <nav className='flex justify-center bg-gray-600 p-7 text-3xl font-bold text-white shadow-black drop-shadow-sm md:drop-shadow-md xl:text-2xl xl:drop-shadow-xl'>
      <h1 className='font-sans text-3xl font-bold text-white shadow-black drop-shadow-lg'>
        HOJA DE VIDA
      </h1>
    </nav>
    <div className='flex h-full flex-row'>
      <aside className='w-40  divide-y-2 divide-dotted divide-zinc-600 bg-gradient-to-r from-slate-300 to-gray-500 text-xs font-semibold shadow-black drop-shadow-lg sm:w-64 sm:text-base md:text-lg xl:w-80 xl:text-xl'>
        <div>
          <img
            src={foto}
            alt='https://mdbootstrap.com//img/Photos/Square/1.jpg'
            className='h-auto max-w-full rounded-full p-4 shadow-black drop-shadow-xl xl:p-12'
          />
        </div>
        <div className='flex-col text-center'>
          <div className='flex justify-center p-4 text-sm font-bold shadow-black drop-shadow-lg sm:text-lg md:text-xl xl:text-2xl'>
            Contacto
          </div>
          <div className='flex justify-center p-2 '>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
              <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
            </svg>
            brandugar@gmail.com
          </div>
          <div className='flex justify-center p-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth='2'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
              />
            </svg>
            <a
              href='https://github.com/brandugar?tab=repositories'
              target='_blank'
              rel='noreferrer'
            >
              github/brandugar/
            </a>
          </div>
          <div className='flex justify-center p-2'>
            <a
              href='https://www.linkedin.com/in/brandon-duque-garcia-3234711b5/'
              target='_blank'
              rel='noreferrer'
            >
              Brandon Duque LinkedIn
            </a>
          </div>

          <div className='flex justify-center p-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
                clipRule='evenodd'
              />
            </svg>
            Medellin-Antioquia
          </div>
          <div className='flex justify-center p-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 fill-black'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth='2'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
              />
            </svg>
            3218977185
          </div>
        </div>
        <div className='flex-col'>
          <div className=' flex justify-center p-2 font-sans text-sm font-bold shadow-black drop-shadow-lg sm:text-lg md:text-xl xl:text-2xl'>
            Skills
          </div>
          <ul className='flex-row p-4'>
            <li className=' mb-6'>
              <div className='flex flex-col'>
                <span className='text-lg'>Inglés</span>
                <ProgressBar progressPercentage='60' />
              </div>
            </li>
            <li className=' mb-6'>
              <div className='flex flex-col'>
                <span className='text-lg'>Java</span>
                <ProgressBar progressPercentage='50' />
              </div>
            </li>
            <li className=' mb-6'>
              <div className='flex flex-col'>
                <span className='text-lg'>Excel</span>
                <ProgressBar progressPercentage='55' />
              </div>
            </li>
            <li className=' mb-6'>
              <div className='flex flex-col'>
                <span className='text-lg'>Word</span>
                <ProgressBar progressPercentage='55' />
              </div>
            </li>
            <li className=' mb-6'>
              <div className='flex flex-col'>
                <span className='text-lg'>JavaScript</span>
                <ProgressBar progressPercentage='60' />
              </div>
            </li>
          </ul>
        </div>
      </aside>
      <div className='flex w-full justify-center scroll-smooth bg-white'>
        <Outlet />
      </div>
    </div>

    <footer className='flex justify-center bg-gray-600 p-1 text-sm font-semibold text-slate-200 lg:text-lg xl:text-xl'>
      Developed by Brandon Duque
    </footer>
  </main>
);

export { Layout };
