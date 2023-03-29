import Button from "./Button"

function DataTable() {
  return (
    <>
        {/* Modal */}
        <div className="flex flex-row">
            <div>
                <button 
                    className="p-3 bg-slate-300 m-3 rounded hover:bg-slate-800 hover:text-white">
                    Create New Contact
                </button>
            </div>
            <Button
                className="p-3 bg-slate-300 m-3 rounded hover:bg-slate-800 hover:text-white"
                >
                Update
            </Button>
            <Button
                className="p-3 bg-slate-300 m-3 rounded hover:bg-slate-800 hover:text-white"
                >
                Delete
            </Button>
        </div>
        {/* Data Table Section */}
    </>
  )
}

export default DataTable