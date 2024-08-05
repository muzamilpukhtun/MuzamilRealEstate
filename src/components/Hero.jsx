import hero from '../assets/hero.jpg'
import { HERO } from './../constants/index';
const Hero = () => {
  return (
    <section className='relative h-screen w-screen flex justify-center items-center'>
    <div className='absolute inset-0 z-20 flex h-full w-full overflow-hidden'>
    <img src={hero} className='h-full w-full object-cover'/>
    </div>

    <div className='absolute bottom-10 left-1/2 transform -translate-x-1/2 p-4 z-20 bg-white w-11/12 md:w-1/2 lg:bottom-28'>
    <h1 className='text-3xl md:text-3xl lg:text-4xl font-thin uppercase tracking-tighter text-center p-4'>{HERO.text1}<br/>{HERO.text2}</h1>

    <div className='flex flex-col justify-center md:flex-row gap-5 mt-3 '>
    <a  className='px-8 py-3 text-center  border border-[#303030] hover:bg-[#303030] hover:text-white ease-in duration-300'>LIST YOUR HOME</a>
    <a  className='px-8 py-3 text-center  border text-white bg-[#303030] hover:bg-white hover:text-[#303030] ease-in duration-300'>BUY A HOME</a>
    </div>


    </div>
    </section>
  )
}

export default Hero