
import { LoaderCircle, Play, ShoppingCart } from 'lucide-react'
import playimg from './assets/Play.png'
import circle from './assets/circle.png'
import banner from './assets/banner.png'
import './App.css'
import Toolcard from './Toolcard'
import { Suspense } from 'react'
import UserCard from './UserCard'
import Pricing from './Pricing'
import fb from './assets/Facebook.png'
import x from './assets/Twitter.png'
import insta from './assets/Instagram.png'

const jsonpromise = fetch("/tools.json").then(res => res.json());
console.log(jsonpromise);

const pricingPromise = fetch("/pricing.json").then(res => res.json());

function App() {
  const activeStyle = 'rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] px-6 py-2 text-white font-bold'
  const inactiveStyle = 'text-gray-700 font-medium px-6 py-2'



  return (
    <>
      <div className=' sticky top-0 z-10 bg-white shadow-md border-b border-[#F2F2F2] w-full h-[92px] '>
        <div className='flex justify-between   mx-50'>
          <div>
            <h1 className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent text-4xl font-bold py-6  ">
              DigiTools
            </h1>
          </div>
          <div>
            <ul className="flex items-center gap-8 py-8">
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
      <div className='w-[1600px] h-[760px] grid grid-cols-1 md: grid-cols-2 gap-18 mx-50 mt-12 items-center'>
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
      <div className=' h-[247px] bg-linear-to-r from-[#4F39F6] to-[#9514FA] px-40 py-15'>

        <div class="flex items-center justify-center gap-50 py-7">

          <div>
            <p class="text-6xl font-bold text-white mb-6">50K+</p>
            <p class="text-xl text-white/90">Active Users</p>
          </div>

          <div class="w-px h-14 bg-gray-300"></div>

          <div class="text-center">
            <p class="text-6xl font-bold text-white mb-6">200+</p>
            <p class="text-xl text-white/90">Premium Tools</p>
          </div>

          <div class="w-px h-14 bg-gray-300"></div>

          <div class="text-right">
            <p class="text-6xl font-bold text-white mb-6">4.9</p>
            <p class="text-xl text-white/90">Rating</p>
          </div>

        </div>
      </div>
      <div className='mx-50 '>
        <div className='h-[196px]  flex flex-col justify-center items-center gap-4 mt-25 mb-10'>
          <div className='flex flex-col justify-center items-center text-center'>
            <p className='text-4xl font-black mb-2'>Premium Digital Tools</p>
            <p className='text-[#627382] leading-6 max-w-[500px]'>
              Choose from our curated collection of premium digital products
              designed to boost your productivity and creativity.
            </p>
          </div>
          <div className='flex items-center gap-4'>
            <button className={activeStyle}  >

              Products
            </button>

            <button className={inactiveStyle}   >

              Cart (2)
            </button>
          </div>
        </div>
        <div className=''>
          <Suspense fallback={<LoaderCircle />}>
            <Toolcard jsonpromise={jsonpromise} />
          </Suspense>

        </div>
      </div>

      <div className='w-full h-[700px]  bg-[#F9FAFC] mt-28 mx-auto py-30 px-40'>
        <div className='flex flex-col items-center justify-center'>
          <h2 className='text-3xl font-black'>Get Started In 3 Steps</h2>
          <p className='text-[#627382] mt-7'>Start using premium digital tools in minutes, not hours.</p>
        </div>
        <div className='mt-20'>
          <UserCard />
        </div>

      </div>
      <div className='w-full h-[830px]  mx-auto py-30'>
        <div className='flex flex-col items-center justify-center'>
          <h2 className='text-3xl font-black'>Simple, Transparent Pricing</h2>
          <p className='text-[#627382] mt-7'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
        </div>
        <div className='mt-12'>
          <Pricing pricingPromise={pricingPromise} />
        </div>
      </div>
      <div className='w-full h-[487px] bg-linear-to-r from-[#4F39F6] to-[#9514FA] flex flex-col items-center justify-center text-center gap-6'>
        <h2 className='text-4xl font-bold text-white'>Ready To Transform Your Workflow?</h2>
        <p className='text-white/80 text-center leading-6 max-w-[500px]'>Join thousands of professionals who are already using Digitools to work smarter. Start your free trial today.</p>
        <div className='flex mt-6 gap-4'>
          <button className='w-[165px] h-[52px] rounded-full bg-white items-center '>
            <p className='font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>Explore Products</p>
          </button>
          <button className='w-[165px] h-[52px] rounded-full border border-white items-center justify-center flex gap-2 '>

            <p className=' font-bold text-white items-center'>View Pricing </p>
          </button>
        </div>
        <p className='text-white/80'> 14-day free trial • No credit card required • Cancel anytime</p>
      </div>
      <div className='w-full h-[472px] pt-30 px-40  gap-4 bg-[#101727]'>
        <div className='flex flex-row justify-between'>
          <div className='flex flex-col gap-3'>
            <h2 className='text-4xl text-white font-bold'>DigiTools</h2>
            <p className='text-white/70 hover:text-white leading-6 max-w-[350px]'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-bold text-lg">Product</h3>
            <a className="text-white/60 hover:text-white text-base">Features</a>
            <a className="text-white/60 hover:text-white text-base">Pricing</a>
            <a className="text-white/60 hover:text-white text-base">Templates</a>
            <a className="text-white/60 hover:text-white text-base">Integrations</a>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-bold text-lg">Company</h3>
            <a className="text-white/60 hover:text-white text-base">About</a>
            <a className="text-white/60 hover:text-white text-base">Blog</a>
            <a className="text-white/60 hover:text-white text-base">Careers</a>
            <a className="text-white/60 hover:text-white text-base">Press</a>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-bold text-lg">Resources</h3>
            <a className="text-white/60 hover:text-white text-base">Documentation</a>
            <a className="text-white/60 hover:text-white text-base">Help Center</a>
            <a className="text-white/60 hover:text-white text-base">Community</a>
            <a className="text-white/60 hover:text-white text-base">Contact</a>
          </div>
          <div className='flex flex-col gap-4'>
            <h3 className='text-white font-bold text-lg'>Social Links</h3>
            <div className='flex gap-3'>
              <img src={insta} alt="Instagram" />
              <img src={fb} alt="facebook" />
              <img src={x} alt="X" />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between mt-20 px-8 py-4 border-t border-white/20">


          <p className="text-white/40 text-base">© 2026 Digitools. All rights reserved.</p>


          <div className="flex gap-6">
            <a className="text-white/40 hover:text-white text-base cursor-pointer">Privacy Policy</a>
            <a className="text-white/40 hover:text-white text-base cursor-pointer">Terms of Service</a>
            <a className="text-white/40 hover:text-white text-base cursor-pointer">Cookies</a>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
