import React from 'react'

const SearchResult = () => {
  return (
    <div className="table-container">
      <table className="table table-bordered text-center">
        <thead className="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">First name</th>
            <th scope="col">Surname</th>
            <th scope="col">Room ID</th>
            <th scope="col">Check in date</th>
            <th scope="col">Check out date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mr.</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>1</td>
            <td>01-01-2020</td>
            <td>11-01-2020</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Mr.</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>2</td>
            <td>02-02-2020</td>
            <td>12-02-2020</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Mr.</td>
            <td>Larry</td>
            <td>the Bird</td>
            <td>3</td>
            <td>03-03-2020</td>
            <td>13-03-2020</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default SearchResult
