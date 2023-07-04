import { useState, useEffect } from 'react'
import InfoList from '../components/InfoList'
import SearchBar from '../components/SearchBar'

const Home = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const myRequest = new Request('https://api.github.com/repos/facebook/react/issues')
  const [data, setData] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }
  const filteredData = data.filter((item) => {
    return item.title.toLowerCase().includes(searchTerm.toLowerCase())
  })
  useEffect(() => {
    fetch(myRequest)
      .then((response) => {
        return response.json()
      }).then((results) => {
        console.log(results)
        setData(results)
      }).catch((error) => {
        console.error(error)
      })
  }, [myRequest])

  return (
    <div className='container'>
      <SearchBar handleSearchChange={handleSearch} />
      <div className='row'>
        {
            filteredData.map((item) => (
              <InfoList key={item.id} {...item} />
            ))
        }
      </div>
    </div>
  )
}
export default Home
