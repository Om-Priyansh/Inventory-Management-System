import ScanItems from "./ScanItems";
import "./index.css";
import AddItems from "./AddItems";

const Forms  = ({uuid, socket, setUser}) => {
    return (
    <div className="row h-100 mainpage ">
        <div className="form-box col-md-4 py-3 px-5 mt-1 mx-auto  d-flex flex-column align-items-center"
        
        >
            <h1>Scan Items</h1>  
            <ScanItems />
        </div>
        <div className="form-box col-md-4 py-3 px-5 mt-1 mx-auto d-flex flex-column align-items-center">
            <h1>Add Items</h1>
            <AddItems />
        </div>
    </div>
        
);

};

export default Forms;