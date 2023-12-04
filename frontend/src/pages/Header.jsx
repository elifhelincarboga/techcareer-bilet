import SearchInput from "../components/ui/SearchInput"
import Api from '../store/api/axios-auth'
import { setLoading } from '../store/modules/loading'
import { useDispatch } from 'react-redux'
import { setEvents } from '../store/modules/event'

function Header() {
  const dispatch = useDispatch()

  const clickHandler = (event) => {
    dispatch(setLoading(true))
    Api().post('/events/filter', { keyword: event}).then(response => {
      dispatch(setEvents(response.data))
      dispatch(setLoading(false))
    }).catch(error => {
      console.error('Error fetching data:', error)
      dispatch(setLoading(false))
    }) 
  }

  return (
    <>
      <SearchInput placeholder="Etkinlik veya Sanatçı arayın" label="Etkinlik veya Sanatçı arayın" clickHandler={clickHandler}></SearchInput>
    </>
  )
}

export default Header