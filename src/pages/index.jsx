import React from 'react';
// import { Link } from "react-router-dom";

const IndexPage = () => (
  <main>
    <div className='flex flex-col'>
      <div className='flex flex-col divide-y-2 divide-dotted divide-zinc-800 text-sm sm:text-sm md:text-lg xl:text-xl'>
        <h1 className='flex  justify-center p-4 font-sans text-base font-bold shadow-blue-600/50 drop-shadow-sm sm:p-6 sm:text-xl md:text-3xl xl:text-5xl'>
          Brandon Duque García
        </h1>{' '}
        <div className='p-4'>
          <h2 className='flex justify-center p-4 text-base font-bold sm:text-base md:text-xl xl:text-2xl'>
            Información Académica
          </h2>
          <h3 className='pb-4 pt-4 font-bold'>Bachillerato: </h3>
          <p>
            Institución Educativa Presbítero Ricardo Luis Gutiérrez Tobón, año
            2013.
          </p>
          <h3 className='pb-4 pt-4 font-bold'>Pregrado: </h3>
          <p>Ingeniería de Sistemas, 2017 - actualidad.</p>
        </div>
        <div>
          <h2 className='flex justify-center p-8 text-base font-bold sm:text-base md:text-xl xl:text-2xl'>
            Información Laboral
          </h2>
          <ul className='list-disc'>
            <li className='p-4 '>
              <h3 className='font-bold'>Talent.com: </h3>
              Indexador desde el 02 de Agosto de 2021 - 02 Mayo del 2022
            </li>
            <li className='p-4 '>
              <h3 className='font-bold'>Talent.com: </h3>Organic Team Leader
              desde el 02 Mayo del 2022 - actualidad. <br />
              Tareas específicas con Javascript indexando páginas web, soporte y
              orientacíon.
            </li>
          </ul>
        </div>
        <div>
          <h2 className='flex justify-center p-8 text-base font-bold sm:text-base md:text-xl xl:text-2xl'>
            Hobbies
          </h2>
          <p className='p-4'>
            Me gusa mucho escuchar música tipo LoFi, aprender cosas nuevas, ver
            series de todo tipo, me gusta la música en general, dibujar, pintar,
            tocar el ukulele, aprender inglés, francés y viajar en moto.
          </p>
        </div>
      </div>
    </div>
  </main>
);

export { IndexPage };
