import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddBook = () => {
  const [BookName, setBookName] = useState('')
  const [authorName, setauthorName] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/AddBooks', { BookName,authorName , imageUrl })
        .then(res => {
            if (res.data.registered) {
                navigate('dashboard')
            }
            console.log(res)
        })
        .catch(err => console.log(err))
}

  return (
    <div className="student-form-container">
      <form className="student-form" onSubmit={handleSubmit}>
        <h2>Add Book</h2>
        <div className="form-group">
          <label htmlFor="BookName">Book Name:</label>
          <input type="text" id="BookName" name="BookName"
            onChange={(e) => setBookName(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="authorName">Author Name:</label>
          <input type="text" id="authorName" name="authorName"
            onChange={(e) => setauthorName(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="imageUrl">Image URL:</label>
          <input type="text" id="imageUrl" name="imageUrl"
            onChange={(e) => setImageUrl(e.target.value)} />
        </div>
        <button type="submit">Add </button>
      </form>
    </div>
  )
}

export default AddBook