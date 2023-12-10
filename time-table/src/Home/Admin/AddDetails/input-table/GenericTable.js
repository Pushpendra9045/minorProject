import React from 'react'
import './GenericTableStyle.css';

function GenericTable() {
  return (
    <div>
      <table className='displayed-table'>
        <tr>
          <th>Subject Name</th>
          <th>Subject Code</th>
          <th>Duration</th>
          <th>Professor Name</th>
         
          
        </tr>
        <tr>
          <td>Unit-1</td>
          <td>BT CS 402</td>
          <td>1</td>
          <td>Dr. Binay</td>
        </tr>

        <tr>
          <td>Unit-1</td>
          <td>BT CS 402</td>
          <td>1</td>
          <td>Dr. Binay</td>
        </tr>
        <tr>
          <td>Unit-1</td>
          <td>BT CS 402</td>
          <td>1</td>
          <td>Dr. Binay</td>
        </tr>

        <tr>
          <td>Unit-1</td>
          <td>BT CS 402</td>
          <td>1</td>
          <td>Dr. Rakesh Dhiman</td>
        </tr>

        <tr>
          <td>Unit-1</td>
          <td>BT CS 402</td>
          <td>1</td>
          <td>Dr. Rakesh Dhiman</td>
        </tr>

        <tr>
          <td>Unit-1</td>
          <td>BT CS 402</td>
          <td>1</td>
          <td>Dr. Rakesh Dhiman</td>
        </tr>
        
      </table>
    </div>
  )
}

export default GenericTable
