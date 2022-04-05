import React, {useState} from 'react'

const AddReview = () => {
    const [name, setName] = useState("")
    const [reviewText, setReviewText] = useState("")
    const [rating, setRating] = useState("Rating")


  return (
    <div className="mb-2">
      <form action="">
        <div className="form-row">
          <div className="form-group col-8">
            <label htmlFor="name">Name</label>
            <input value={name} onChange={e => setName(e.target.value)} id="name" placeholder="name" type="text" className="form-control"/>
          </div>
            <div className="form-group col-4">
              <label htmlFor="rating">Rating</label>
              <select id="rating" className="custom-select">
                <option disabled>Rating</option>
                <option value="1">1</option>
                <option value="1">2</option>
                <option value="1">3</option>
                <option value="1">4</option>
                <option value="1">5</option>
              </select>
            </div>

          <div className="form-group">
            <label htmlFor="Review">Review</label>
            <textarea value={reviewText} onChange={(e) => setReviewText(e.target.value)} id="Review" className="form-control"></textarea>
          </div>
        </div>
        <button className="btn btn-primary">Submit</button>

      </form>
    </div>
  )
}

export default AddReview
