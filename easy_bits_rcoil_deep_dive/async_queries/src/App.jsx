import './App.css'
import { RecoilRoot, useRecoilValue } from 'recoil'
import { notifications, totalNotificationSelector } from './atoms.jsx'

function App() {
  return <RecoilRoot>
    <MainApp />
  </RecoilRoot>
}

function MainApp() {
  const networkCount = useRecoilValue(notifications);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  // useEffect(() => {
  //   // fetch
  //   axios.get("https://sum-server.100xdevs.com/notifications")
  //     .then(res => {
  //       setNetworkCount(res.data)
  //     })
  // }, [])

  return (
    <>
      <button>Home</button>
      
      <button>My network ({networkCount.network >= 100 ? "99+" : networkCount.network})</button>
      <button>Jobs {networkCount.jobs >= 100 ? "99+" : networkCount.jobs}</button>
      <button>Messaging ({networkCount.messaging >= 100 ? "99+" : networkCount.messaging})</button>
      <button>Notifications ({networkCount.notifications >= 100 ? "99+" : networkCount.notifications})</button>

      <button>Me ({totalNotificationCount})</button>
    </>
  )
}

export default App