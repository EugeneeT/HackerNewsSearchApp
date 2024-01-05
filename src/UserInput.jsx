import React from "react";

const UserInput = ({ searchTerm, onSearch, onInputChange }) => {
    return (
        <div>
            <input type="text"
                placeholder="Search for some news!"
                value={searchTerm}
                onChange={onInputChange} />
            <button onClick={onSearch}>Search</button>
        </div>
    );
};

export default UserInput;