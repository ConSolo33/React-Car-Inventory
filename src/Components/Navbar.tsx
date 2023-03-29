import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'


function Navbar() {
  const [isVisible, setIsVisible] = useState(false)

  const dropDown = () => {
    setIsVisible(!isVisible)
  }

  const clicked = () => {
    setIsVisible(false)
  }
  return (
    <nav className='flex items-center justify-between flex-wrap bg-blue-900 p-3' >
        <div className='flex items-center flex-shrink-0 mr-6 font-extrabold text-slate-300 
        p-1 rounded bg-opacity-50'>
            <Link to='/'>Cars Worldwide</Link>
        </div>
        <div className="block">
          <button 
            onClick = {dropDown}
            className="flex items-center">
            <i class="fa-sharp fa-solid fa-bars fa-lg" style={{color: "#ffffff",}}></i>
          </button>
        </div>
        { isVisible ? (
          <div className="w-full flex flex-grow pt-2">
            <div className="text-sm lg:flex-grow flex justify-end">
              <Button className='font-extrabold justify-center bg-black bg-opacity-50 text-slate-300 p-2 ml-6 rounded shadow-lg'>
                <div>
                  <Link to='/' onClick={ clicked } >
                    Home
                  </Link>
                </div>
              </Button>
              <Button className='font-extrabold justify-center bg-black bg-opacity-50 text-slate-300 p-2 ml-6 rounded shadow-lg'>
                <div>
                  <Link to='/About' onClick={ clicked } >
                    About
                  </Link>
                </div>
              </Button>
              <Button className='font-extrabold justify-center bg-black bg-opacity-50 text-slate-300 p-2 ml-6 mr-3 rounded shadow-lg'>
                <div>
                  <Link to='/Dashboard' onClick={ clicked } >
                    Dashboard
                  </Link>
                </div>
              </Button>
            </div>
          </div>
        ) : (
        <></>
      )}
    </nav>
  )
}

export default Navbar