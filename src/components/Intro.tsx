import Image from 'next/image'
import authorImage from '/public/images/authors/devansh.jpg'

export default function Intro() {
  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='title no-underline'>Hey, I&#39;m Devansh.</h1>
        <p className='mt-3 font-light text-muted-foreground'>
          I&#39;m a fullstack developer based in India. I&#39;m
          passionate about learning new technologies and sharing knowledge with
          others.
        </p>
      </div>
      <div className='relative'>
        <Image
          className='flex-1 rounded-lg grayscale'
          src={authorImage}
          alt='Hamed Bahram'
          width={175}
          height={175}
          priority // If not then it will lazy load the image
        />
      </div>
    </section>
  )
}