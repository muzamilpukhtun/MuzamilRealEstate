

const Contact = () => {
  return (
    <section className="w-screen py-28 bg-[#303030] text-white">
    <div className="flex flex-col">
    <div className="flex justify-center items-center"><h4 className="font-semibold text-lg text-start">MUZAMIL<br/>REALESTATE</h4></div>

    <div className='flex flex-col justify-center md:flex-row gap-5 mt-3 '>
    <a  className='px-8 py-3 text-center  border border-[#ffff] hover:bg-[#fff] hover:text-[#303030] ease-in duration-300'>LIST YOUR HOME</a>
    <a  className='px-8 py-3 text-center  border text-[#303030] bg-white hover:bg-[#303030] hover:text-[#ffff] ease-in duration-300'>BUY A HOME</a>
    </div>

    <div className=' text-center space-y-4 md:flex items-center justify-between md:mx-40 md:mt-8'>
    <h1 className='text-4xl font-thin md:text-5xl'>GET IN TOUCH
    <div className="border-b border-1 border-white w-32 mt-4"></div>
    </h1>
    <ul className="text-lg text-start">
    <li>Main Office</li>
    <li>123 Anywhere in Pakistan</li>
    <li>Rawalpindi</li>
    </ul>
    <ul className="text-lg text-start">
    <li>Tel:(123)456-7890</li>
    <li>Email:hello@pakistan.com</li>
    <li>Social:@pakistan</li>
    </ul>
    </div>
    

    </div>
    </section>
  )
}

export default Contact