import React from "react";


const Searchbar = ({
    value,
    islosding,
    handleSubmit,
    onChange


}) =>{
    return(

       <form onSubmit={handleSubmit}>
        <input
        value={value}
        disabled={islosding}
        onChange={onChange}
        placeholder="search recipe"
        className="form-control"
        
        
        
        />
        <input 
        disabled={islosding || !value}
        type="submit"
        className="btn"
        value="Search"
        
        
        />


       </form>
    )
};

export default Searchbar;