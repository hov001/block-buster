import React from 'react'

export default function FilterBlock() {
  return (
    <div className="topbar-filter fw">
      <p>
        Found <span>1,608 movies</span> in total
      </p>
      <select>
        <option value="popularity">Popularity Descending</option>
        <option value="popularity">Popularity Ascending</option>
        <option value="rating">Rating Descending</option>
        <option value="rating">Rating Ascending</option>
        <option value="date">Release date Descending</option>
        <option value="date">Release date Ascending</option>
      </select>
    </div>
  )
}
