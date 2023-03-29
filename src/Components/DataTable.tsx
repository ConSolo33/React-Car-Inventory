import React, { useState } from "react";
import Button from "./Button"
import Modal from "./Modal"

function DataTable() {
    let [ open, setOpen ] = useState(false);

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }
  return (
    <>
        <Modal 
            open={open}
            onClose={handleClose}
        />

        <div className="flex flex-row">
            <div>
                <button 
                    className="p-3 bg-slate-300 m-3 rounded hover:bg-slate-800 hover:text-white"
                    onClick={() => handleOpen()}
                    >
                    Add New Car
                </button>
            </div>
            <Button
                className="p-3 bg-slate-300 m-3 rounded hover:bg-slate-800 hover:text-white"
                >
                Update Car
            </Button>
            <Button
                className="p-3 bg-slate-300 m-3 rounded hover:bg-slate-800 hover:text-white"
                >
                Delete Car
            </Button>
        </div>
        {/* Data Table Section */}
    </>
  )
}

export default DataTable