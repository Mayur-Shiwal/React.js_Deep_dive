import { useMemo, useState } from 'react'
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import { jobsAtom, messagingAtom, networkAtom, notificationAtom, totalNotificationSelector } from './Atoms'
//RecoilRoot

function App() {
  return <RecoilRoot>
    <MainApp/>
  </RecoilRoot>
}

function MainApp() {
  const networkNotiCount = useRecoilValue(networkAtom);
  const jobsNotiCount = useRecoilValue(jobsAtom);
  const messageNotiCount = useRecoilValue(messagingAtom);
  const notificationCount = useRecoilValue(notificationAtom);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  // const totalNotificationCount = useMemo(()=>{
  //   return networkNotiCount + jobsNotiCount + messageNotiCount + notificationCount;
  // }, [networkNotiCount + jobsNotiCount + messageNotiCount + notificationCount]);

  return (
    <>

      <button>Home</button>

      <button>My Network({networkNotiCount >= 100 ? "99+" : {networkNotiCount}})</button>
      <button>Jobs({jobsNotiCount})</button>
      <button>Messaging({messageNotiCount})</button>
      <button>Notification({notificationCount})</button>

      <button>Me({totalNotificationCount})</button>      

    </>
  )
}

export default App
