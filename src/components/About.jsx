import { ABOUT } from '../constants'

const About = () => {
  return (
    <section className="w-screen bg-[#303030] text-white">
    
    <div className="flex flex-wrap xs:pt-24">
    
    <div className='w-full p-10 lg:w-1/2 flex flex-col justify-center items-center'>
    <h2 className='text-xl font-thin tracking-tighter lg:text-2xl text-center'>{ABOUT.heading}</h2>
    <p className='tracking-tighter font-thin leading-relaxed lg:mx-8 my-4  text-xl lg:text-md lg:max-w-xl'>{ABOUT.content}</p>
    </div>
    
    <div className="w-full p-4 lg:w-1/2 flex items-center justify-center">
    <img  src={ABOUT.pic}/>
    </div>
    
    </div>
    </section>
  )
}

export default About