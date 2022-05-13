
import axios from 'axios'
export default function getNews() {
    const apiurl = "http://localhost:8080/api/Newsapi"
    return (
      axios.get(apiurl)
    )
}
