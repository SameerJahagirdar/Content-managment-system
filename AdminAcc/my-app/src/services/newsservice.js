
import axios from 'axios'

export default function newsservice(news) {
    const apiurl = "http://localhost:8080/api/Newsapi"
  return (
    axios.post(apiurl,news)
  )
}

