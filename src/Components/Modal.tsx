import CarForm from "./CarForm";


interface Props {
    open?: boolean;
    onClose: () => void;
}

const Modal = ( props: Props ) => {
    if ( !props.open ) return (<></>);
    return (
        <div
            onClick={ props.onClose }
            className='fixed w-full h-3/5 flex overflow-auto z-1
            justify-center align-middle bg-gray-300 bg-opacity-25 mb-10 p-6'
        >
            <div 
                className="max-w-600px w-2/5 mb-auto flex z-1 bg-white"
                onClick={(e) => {
                    e.stopPropagation()
                }}
            >
                <div className="w-full flex flex-col">
                    <div className="flex flex-row space-apart">
                        <p className="flex justify-start m-3 bg-black text-white
                         hover:text-black hover:bg-slate-300 hover:cursor-pointer rounded p-1"
                        onClick={props.onClose}>
                        <i class="fa-solid fa-xmark"></i>
                        </p>
                    </div>
                    <div className="flex flex-col items-center text-center mt-3 p-2">
                        <CarForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal