import React from 'react'

 const BookMark = ({status, onClick}) => {
    return (
        <button onClick={onClick}>
            <i className={"bi bi-bookmark" + (status ? "-fill" : "")}></i>
        </button>
    )
}
export default BookMark





