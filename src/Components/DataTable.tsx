import { useState } from "react";
import Button from "./Button"
import Modal from "./Modal"
import { server_calls } from "../api/server"
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetData } from "../custom-hooks/FetchData";

const columns: GridColDef[] = [
    { field: 'id', headerName: "ID", width: 90},
    { field: 'make', headerName: "Make", flex: 1},
    { field: 'model', headerName: "Model", flex: 1},
    { field: 'year', headerName: "Year", flex: 1},
    { field: 'color', headerName: "Color", flex: 1},
    { field: 'condition', headerName: "Condition", flex: 1},
    { field: 'miles', headerName: "Miles", flex: 1},
]


function DataTable() {
    const [ open, setOpen ] = useState(false);
    const { carData, getData } = useGetData();
    const [ selectionModel, setSelectionModel ] = useState<string[]>([])

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const deleteData = () => {
        console.log(selectionModel);
        server_calls.delete(selectionModel[0]);
        getData();
        console.log(`Selection model: ${selectionModel}`)
        setTimeout( () => {window.location.reload() }, 500)
        
    }

  return (
    <>
        <Modal
            id={selectionModel} 
            open={open}
            onClose={handleClose}
        />

        <div className="flex flex-row">
            <div>
                <button 
                    className="p-3 bg-slate-300 bg-opacity-50 text-white mx-3 ml-10 rounded hover:bg-slate-800 hover:text-yellow-400"
                    onClick={() => handleOpen()}
                    >
                    Add New Car
                </button>
            </div>
            <Button
                onClick={handleOpen}
                className="p-3 bg-slate-300 bg-opacity-50 text-white mx-3 rounded hover:bg-slate-800 hover:text-yellow-400"
                >
                Update Car
            </Button>
            <Button
                onClick={deleteData}
                className="p-3 bg-slate-300 bg-opacity-50 text-white mx-3 rounded hover:bg-slate-800 hover:text-yellow-400"
                >
                Delete Car
            </Button>
        </div>
        <div className={ open ? "hidden" : "container mx-10 my-5 flex flex-col"}
            style={{ height: 400, width: '100%' }}
            >
            <h2 className="p-3 bg-slate-300 bg-opacity-50 text-white text-2xl font-bold mb-5 rounded">My Cars</h2>
            <DataGrid className="bg-slate-300 bg-opacity-25 text-white" 
            columnVisibilityModel={{id: false}}
            sx={{color: "white"}}
            rows={carData} 
            columns={columns}
            checkboxSelection={true}
            onRowSelectionModelChange={ (item:any) => {
                setSelectionModel(item)
            }}
            />
        </div>
    </>
  )
}

export default DataTable