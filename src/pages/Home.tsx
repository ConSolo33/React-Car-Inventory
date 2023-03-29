import Background from '../assets/images/bg.jpg'

function Home() {
  return (
    <div style={{ backgroundImage: `url(${Background})`}}
    className="flex flex-row justify-center mx-auto mt-0 bg-cover bg-fixed h-screen"
    >
      <div className="text-5xl mt-10 text-slate-200">
        <h1 className='bg-opacity-50 bg-black font-extrabold p-6 rounded'>Car Inventory </h1>
      </div>
    </div>
  )
}

export default Home