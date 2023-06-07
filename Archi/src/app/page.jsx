'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react';
import Bridge from './components/Bridge'
import {images} from './work'

export default function Home() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const Modal = ({ image, onClose }) => {
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="absolute inset-0 bg-black opacity-75" onClick={onClose}></div>
        <div className="relative">
          <Image
            src={image.images}
            alt="Archi Graphix photo"
            width={1100}
            height={800}
          />
          <button
            className="absolute top-4 right-4 text-white bg-black bg-opacity-50 px-2 py-1 rounded"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    );
  };
  return (
    <>
    <main className="mx-auto max-w-[1960px] p-4">
        <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">
          <div className="after:content relative mb-5 flex h-[629px] flex-col items-center justify-end gap-4 overflow-hidden rounded-lg bg-white/10 px-6 pb-16 pt-64 text-center text-white shadow-highlight after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight lg:pt-0">
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <span className="flex max-h-full max-w-full items-center justify-center">
              <Image
                  alt="Archi Graphix photos"
                  className="transform rounded-lg brightness-90 h-full transition will-change-auto group-hover:brightness-110"
                  style={{ transform: 'translate3d(0, 0, 0)' }}
                  src={'/images/matt-gross-9aCkSl6YcXg-unsplash.jpg'}
                  width={720}
                  height={480}
                  sizes="(max-width: 640px) 100vw,
                    (max-width: 1280px) 50vw,
                    (max-width: 1536px) 33vw,
                    25vw"
                />
              </span>
              <span className="absolute left-0 right-0 bottom-0 h-[400px] bg-gradient-to-b from-black/0 via-black to-black"></span>
            </div>
            <h1 className="mt-8 mb-4 text-xl font-bold uppercase tracking-widest">
              Archi Graphixs
            </h1>
            <p className="max-w-[40ch] text-white/75 sm:max-w-[32ch]">
            ⚠️Warning: This website may cause sudden burst of inspiration, uncontrollable giggles, and an urgent need to hire a designer.
            </p>
            <a
              className="pointer z-10 mt-6 rounded-lg border border-white bg-white px-3 py-2 text-sm font-semibold text-black transition hover:bg-white/10 hover:text-white md:mt-4"
              href="https://wa.me/message/OLMHFQLIULFIJ1"
              rel="noreferrer"
            >
              WhatsApp Me
            </a>
          </div>
          {images.map((image) => (
            <div key={image.id} className="after:content group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight">
              <Image
                alt="Archi Graphix photos"
                className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
                style={{ transform: 'translate3d(0, 0, 0)' }}
                src={image.images}
                width={720}
                height={480}
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, (max-width: 1536px) 33vw, 25vw"
                onClick={() => handleImageClick(image)}
              />
            </div>
          ))}
        </div>
        <div className='border-t border-gray-700 mt-16'>
          <h1 className="mt-8 mb-4 text-xl md:text-6xl font-bold uppercase tracking-widest">
                Brands I have worked with
          </h1>
        </div>
        <div className="after:content my-8 flex flex-col md:flex-row items-center justify-between gap-4 overflow-hidde rounded-lg bg-wh px-6 pb-4 pt-4 text-center text-white shadow-highlight after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight lg:pt-0">
              <Link
                key={''}
                href={`#`}
                onClick={(event) => event.preventDefault()}
                shallow
                className="after:content group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
              >
                <Image
                  alt="Archi Graphix photos"
                  className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
                  style={{ transform: 'translate3d(0, 0, 0)' }}
                  src={'/images/Shenice/Artboard 1.jpg'}
                  width={720}
                  height={480}
                  sizes="(max-width: 640px) 100vw,
                    (max-width: 1280px) 50vw,
                    (max-width: 1536px) 33vw,
                    25vw"
                />
              </Link>
              <Link
                key={''}
                onClick={(event) => event.preventDefault()}
                href={`#`}
                shallow
                className="after:content group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
              >
                <Image
                  alt="Archi Graphix photos"
                  className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
                  style={{ transform: 'translate3d(0, 0, 0)' }}
                  src={'/images/Bernasan Coontruction/1.jpg'}
                  width={720}
                  height={480}
                  sizes="(max-width: 640px) 100vw,
                    (max-width: 1280px) 50vw,
                    (max-width: 1536px) 33vw,
                    25vw"
                />
              </Link>
          </div>
      </main>
      {selectedImage && (
        <Modal image={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
      <footer className="p-6 text-center text-white/80 sm:p-12">
      &copy; Copyright 2023. All Rights Reserved,{' '}
        Archi Graphixs.
      </footer>
      </>
  )
}
