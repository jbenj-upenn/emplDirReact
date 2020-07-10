import React from "react";

function SearchForm(props) {
    return (
        <form>
            <div className="form-group">
                <button onClick={props.handleFormSubmit} className="btn btn-primary mt-3">
                    Search
        </button>
                {/* <label htmlFor="search">Search:</label> */}
                <input
                    onChange={props.handleInputChange}
                    value={props.search}
                    name="search"
                    type="text"
                    className="form-control"
                    placeholder="Search for an employee"
                    id="search"
                />
            </div>
        </form>
    );
}

export default SearchForm;