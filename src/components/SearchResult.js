import React, { useState } from 'react'
import moment from 'moment'
import CustomerProfile from './CustomerProfile'

const NumberOfNights = (entryDate, leavingDate) => {
  const daysStayed = moment(leavingDate).diff(entryDate, 'days')
  return daysStayed
}

const SearchResult = ({ results }) => {
  const [selectedRows, setSelectedRows] = useState([])
  const [selectedCustomerId, setSelectedCustomerId] = useState(null)

  const handleClick = (index, customerId) => {
    const newSelectedRows = [...selectedRows]
    if (newSelectedRows.includes(index)) {
      const rowIndex = newSelectedRows.indexOf(index)
      newSelectedRows.splice(rowIndex, 1)
    } else {
      newSelectedRows.push(index)
    }
    setSelectedRows(newSelectedRows)
    setSelectedCustomerId(customerId)
  }

  if (!results || results.length === 0) {
    return <div>No results found.</div>
  }

  const tableHeadings = Object.keys(results[0])

  const splitAndCapitalise = (str) => {
    return str
      .replace(/([A-Z])/g, ' $1')
      .trim()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  }

  return (
    <div className="table-container">
      <table className="table table-bordered text-center">
        <thead className="thead-dark">
          <tr>
            {tableHeadings.map((heading) => (
              <th key={heading}>{splitAndCapitalise(heading)}</th>
            ))}
            <th>Night</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {results.map((booking, index) => (
            <tr
              key={booking.id}
              onClick={() => handleClick(index, booking.id)}
              className={
                selectedRows.includes(index)
                  ? 'highlighted bg-secondary text-white'
                  : ''
              }
            >
              {tableHeadings.map((key) => (
                <td key={key}>{booking[key]}</td>
              ))}
              <td>
                {NumberOfNights(booking.checkInDate, booking.checkOutDate)}
              </td>
              <td>
                <button
                  role="button"
                  className={'showProfileBtn btn btn-outline-primary'}
                >
                  Show profile
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedCustomerId && <CustomerProfile id={selectedCustomerId} />}
    </div>
  )
}

export default SearchResult
