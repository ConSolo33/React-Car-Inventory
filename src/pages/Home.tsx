import Background from '../assets/images/bg.jpg'

function Home() {
  return (
    <div style={{ backgroundImage: `url(${Background})`}}
    className="flex flex-row justify-center mx-auto mt-0 bg-cover bg-fixed h-screen"
    >
      <div className="mt-10 text-slate-200 bg-opacity-50
       bg-black p-6 rounded h-1/4">
        <h1 className='font-extrabold text-5xl p-3'>Cars Worldwide </h1>
        <h3 className='italic font-bold text-xl text-center'>The home of your car inventory.</h3>
      </div>
    </div>
  )
}

export default Home