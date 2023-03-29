import Background from '../assets/images/bg.jpg'
import DataTable from '../Components/DataTable'

function Dashboard() {
  return (
    <div style={{ backgroundImage: `url(${Background})`}}
    className="mx-auto mt-0 bg-cover bg-fixed h-screen"
    >
      <div className="flex justify-center text-5xl p-6 text-slate-200">
        <h1 className='flex justify-center bg-opacity-50 font-extrabold bg-black p-6 rounded'
        >
        Your Car Inventory </h1>
      </div>
      <div>
        <DataTable />
      </div>
    </div>
  )
}

export default Dashboard