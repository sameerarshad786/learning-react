import { FaTrashAlt } from "react-icons/fa";
import React from 'react'

const LineItem = ({ item, handleCheckbox, handleDelete }) => {
  return (
    <li className="item">
        <input
          type="checkbox"
          onChange={() => handleCheckbox(item.id)}
          checked={item.checked}
        />
        <label
          style={item.checked ? { textDecoration: "line-through" } : null}
        >
          {item.item}
        </label>
        <FaTrashAlt
          role="button"
          tabIndex="0"
          onClick={() => handleDelete(item.id)}
          aria-label={`Delete ${item.item}`}
        />
      </li>
  )
}

export default LineItem
