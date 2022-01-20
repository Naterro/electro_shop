import React from 'react';
/*#TODO add*/
const Add = () => {

    const Save = (e:any) : any => {
        e.preventDefault();

    }
    return (
        <div>
            <form>
                <div className="form-group">
                <input type="text" id="name" required/><label htmlFor="name"></label>
                </div>
                <input type="text" id="brand" required/><label htmlFor="brand"></label>
                <div className="form-group">
                <input type="select" id="category" required/><label htmlFor="category"></label>
                </div>
                <input type="number" id="price" required/><label htmlFor="price"></label>
                <div className="form-group">
                <input type="text" id="desc" required/><label htmlFor="desc"></label>
                </div>
                <input type="submit" onClick={Save} value="submit"/>
            </form>
        </div>
    );
};

export default Add;