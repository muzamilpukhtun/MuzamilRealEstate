import { TESTIMONIALS } from "../constants"

const Testimonials = () => {
  return (
    <section className="w-full py-20">
    <div className="flex flex-col">
    <h1 className="lg:mt-20 px-4 text-center lg:ml-10 text-4xl lg:text-5xl tracking-tighter font-thin">WHAT OUR CLIENTS SAY</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 p-8 mt-4 gap-4">
    {TESTIMONIALS.map((item,index)=>(
        <div key={index}>
        <p className="text-lg lg:p-8  leading-relaxed">{item.content}</p>
        <span  className="text-xl lg:p-8 font-thin mt-4">{item.name}</span>
        </div>
    ))}
    </div>
    </div>
    </section>
  )
}

export default Testimonials