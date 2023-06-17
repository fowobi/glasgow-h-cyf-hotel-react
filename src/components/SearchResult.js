import React, { useState } from 'react'
import moment from 'moment'

const NumberOfNights = (entryDate, leavingDate) => {
  const daysStayed = moment(leavingDate).diff(entryDate, 'days')
  return daysStayed
}

const SearchResult = ({ results }) => {
  const tableHeadings = Object.keys(results[0])

  const splitAndCapitalise = (str) => {
    return str
      .replace(/([A-Z])/g, ' $1')
      .trim()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  }

  const [selectedRows, setSelectedRows] = useState([])

  const handleClick = (index) => {
    const newSelectedRows = [...selectedRows]
    if (newSelectedRows.includes(index)) {
      const rowIndex = newSelectedRows.indexOf(index)
      newSelectedRows.splice(rowIndex, 1)
    } else {
      newSelectedRows.push(index)
    }
    setSelectedRows(newSelectedRows)
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
          </tr>
        </thead>
        <tbody>
          {results.map((booking, index) => (
            <tr
              key={booking.id}
              onClick={() => handleClick(index)}
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default SearchResult
