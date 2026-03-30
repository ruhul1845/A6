
import { Play, ShoppingCart } from 'lucide-react'
import playimg from './assets/Play.png'
import circle from './assets/circle.png'
import banner from './assets/banner.png'
import './App.css'

function App() {


  return (
    <>
      <div className='border-b border-[#F2F2F2] w-full h-[92px] '>
        <div className='flex justify-between   mx-50'>
          <div>
            <h1 className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent text-4xl font-bold py-6  ">
              DigiTools
            </h1>
          </div>
          <div>
            <ul class="flex items-center gap-8 py-8">
              <li>Products</li>
              <li>Features</li>
              <li>Pricing</li>
              <li>Testimonials</li>
              <li>FAQ</li>
            </ul>
          </div>

          <div className="flex gap-4 items-center">
            <ShoppingCart />
            <p >Login</p>
            <button className='w-[122px] h-[44px] rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] items-center '>
              <p className='text-white'>Get Started</p>
            </button>
          </div>
        </div>
      </div>
      <div className='w-[1600px] h-[760px] flex gap-18 mx-50 mt-12 items-center'>
        <div className='w-[640px] h-[406px]'>

          <div className='w-[294px] h-[38px]  rounded-full bg-[#E1E7FF] flex items-center justify-center gap-2'>
            <img src={circle} alt="" />
            <p className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-bold'>New: Ai-Powered Tools Available</p>
          </div>
          <div>
            <p className='font-black text-7xl leading-tight mb-5'>
              Supercharge Your Digital Workflow
            </p>
            <p className='text-[#627382] leading-6 max-w-[500px]'>
              Access premium AI tools, design assets, templates, and productivity
              software—all in one place. Start creating faster today.
            </p>
            <p className='text-[#627382] mt-2 mb-5 cursor-pointer hover:underline'>
              Explore Products
            </p>
          </div>
          <div className='flex gap-4'>
            <button className='w-[165px] h-[52px] rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] items-center '>
              <p className='text-white font-bold'>Explore Products</p>
            </button>
            <button className='w-[165px] h-[52px] rounded-full border border-purple-600 items-center justify-center flex gap-2 '>
              <img src={playimg} alt="Play Button" />
              <p className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-bold'>Watch Demo</p>
            </button>
          </div>
        </div>
        <div className='w-[600px] h-[690px]'>

          <img src={banner} alt="" />
        </div>
      </div>
    </>
  )
}

export default App
