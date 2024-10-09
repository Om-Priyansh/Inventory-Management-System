import "./index.css";

const AddItems = () => {
    return (
    <>
     {/* item name, description, category, purchase date, cost, */}
    <form className="form col-md-12 mt-5">
            <div className="form-group">
                    <input type = "text" className="inputText form-control my-2" placeholder="Item Name" 
                                style={{background:"transparent",
                                    border:"none",
                                    outline:"none",
                                    border: "2px solid black",
                                    borderRadius:"10px",
                                    
                                
                                }} 
                                ></input>
            </div>
            <div className="form-group">
                    <input type = "text" className="inputText form-control my-2" placeholder="Description" 
                                style={{background:"transparent",
                                    border:"none",
                                    outline:"none",
                                    border: "2px solid black",
                                    borderRadius:"10px",
                                    
                                
                                }} 
                                ></input>
            </div>
            <div className="form-group">
                    <input type = "text" className="inputText form-control my-2" placeholder="Category" 
                                style={{background:"transparent",
                                    border:"none",
                                    outline:"none",
                                    border: "2px solid black",
                                    borderRadius:"10px",
                                    
                                
                                }} 
                                ></input>
            </div>
            <div className="form-group">
                    <input type = "text" className="inputText form-control my-2" placeholder="Purchase Date" 
                                style={{background:"transparent",
                                    border:"none",
                                    outline:"none",
                                    border: "2px solid black",
                                    borderRadius:"10px",
                                    
                                
                                }} 
                                ></input>
            </div>
            <div className="form-group">
                    <input type = "text" className="inputText form-control my-2" placeholder="Cost" 
                                style={{background:"transparent",
                                    border:"none",
                                    outline:"none",
                                    border: "2px solid black",
                                    borderRadius:"10px",
                                    
                                
                                }} 
                                ></input>
            </div>
        <button type = "submit"  className="mt-4 mb-4 btn-primary btn-block form-control btn">Generate QR</button>
        </form>
    </>
    )
};

export default AddItems;