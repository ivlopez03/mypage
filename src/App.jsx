
import './App.css'
import { FaGithub, FaTwitterSquare } from 'react-icons/fa'

function App() {
  

  return (
    <div className='p-6 w-full h-screen sm:p-16  '>
     
      <div className=''>
        <span className='  p-3 rounded-md'>@Ivan</span>
      </div>
      <div className='flex gap-10 flex-wrap'>
        <div className='mt-20 flex-1 '>
          <p className='text-9xl'> Hi !</p>
          <p className='text-4xl'> I'm a Software Developer.</p>
          <p className='text-5xl sm:text-6xl py-1'>I enjoy building things.</p>
          <p className='text-4xl'>Hope to be an <span className='text-info'>Indie Hacker </span>someday.</p>
          <div className='flex text-[#acacac] mt-9'>
          <div className='mr-5'>
              <a href="https://github.com/ivlopez03" className='flex items-center gap-1 hover:text-primary' target='_blank'>
                <FaGithub />
                Github
                </a>
            </div>
            <div className=''>
              <a href="https://x.com/IvlopezDev" className='flex items-center gap-1 hover:text-primary' target='_blank'>
                <FaTwitterSquare />
                Twitter</a>
            </div>
        </div>
        </div>
        <div className='mt-10  sm:mt-20 mb-20 flex-1  '>
          <a href='https://marketplace.visualstudio.com/items?itemName=Redimvs.redim' target='_blank' className='flex gap-4 p-1 mb-2  border border-white  rounded-xl hover:shadow-md hover:border-base-300 transition duration-300'>
            <div>
              <img src="/redim_logo.png" alt="redim" className='w-[104px] min-w-[80px] ' />
            </div>
            <div className='mt-1 sm:mt-2  '>
              <p className='sm:text-xl'>Redim Optimizer</p>
              <p className='text-sm sm:text-md'>Redim is visual studio code extension to optimize images by using simple commands.</p>
            </div>
          </a>

          <div className='flex gap-4 p-1 border border-white  rounded-xl hover:shadow-md hover:border-base-300  transition duration-300'>
            <div>
              <img src="/icon.png" alt="redim" className='w-[104px] min-w-[80px]' />
            </div>
            <div className='mt-1 sm:mt-2 text-wrap '>
              <p className='sm:text-xl flex items-center gap-2'>tasqie <span className='bg-base-200 px-1 text-[11px] rounded-md text-nowrap '>Coming soon </span> </p>
              <p className='text-sm sm:text-md'>tasqie is a cool application to boost your productivity and manage your personal projects.</p>
            </div>
          </div>
          
        </div>

      </div>
      

      
      
    </div>
  )
}

export default App
