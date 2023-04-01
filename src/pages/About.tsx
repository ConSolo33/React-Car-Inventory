import Background from '../assets/images/bg.jpg'

function About() {
  return (
    <div style={{ backgroundImage: `url(${Background})`}}
    className="flex flex-row justify-center mx-auto mt-0 bg-cover bg-fixed h-screen"
    >
      <div className="bg-black bg-opacity-50 text-slate-200 mt-10 rounded p-6 w-2/5 h-2/5">
        <h1 className='text-5xl font-extrabold p-6 flex justify-center'>About </h1>
        <p className='text-center font-bold'> Welcome to a full stack application that will allow you to store all of the
          car related information you will ever need all in one place.  Access your
          personalized car database with the ability to add, change, or delete at any
          point.  Enjoy!  
        </p>
      </div>
    </div>
  )
}

export default About