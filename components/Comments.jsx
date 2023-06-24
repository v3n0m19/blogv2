import React,{useState,useEffect} from 'react'
import moment from 'moment'
import parse from 'html-react-parser'

const Comments = () => {
  const [Comments, setComments] = useState([])
useEffect(() => {
  getComments(slug)
}, [])


  return (
    <div>
        <h1>Comments</h1>
    </div>
  )
}

export default Comments