import React from 'react'
import './AddLectureStyle.css';
import TakeInput from './input-table/TakeInput';
import GenericTable from './input-table/GenericTable';
function AddLectures() {
  return (
    <div className='Add-Lecture-section'>
      <div className="Lecture-section-heading-container">
        <h2 className='lecture-heading'>Add Lectures</h2>
      </div>
      <div className="lecture-container">

     
      <div className="add-lecture-item lecture-item-1">
      <TakeInput/>
      </div>
      <div className="add-lecture-item">
        <GenericTable/>
        </div>
         </div>
    </div>
  )
}

export default AddLectures
