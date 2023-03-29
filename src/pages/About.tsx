import Background from '../assets/images/bg.jpg'

function About() {
  return (
    <div style={{ backgroundImage: `url(${Background})`}}
    className="flex flex-row justify-center mx-auto mt-0 bg-cover bg-fixed h-screen"
    >
      <div className="text-5xl text-slate-200 mt-10">
        <h1 className='bg-opacity-50 bg-black font-extrabold p-6 rounded'>About </h1>
      </div>
    </div>
  )
}

export default About