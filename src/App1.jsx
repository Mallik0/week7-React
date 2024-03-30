import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { jobsAtom, messagesAtom, myNetworkAtom, notificationsAtom, totalNotificationSelector } from './atoms1'

function App() {

  return <div>
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  </div>
  
}

function MainApp() {

  const myNetworkAtomCount = useRecoilValue(myNetworkAtom);
  const jobsAtomCount = useRecoilValue(jobsAtom);
  // const [messagesAtomCount, setMessagesAtomCount] = useRecoilState(messagesAtom);
  const messagesAtomCount = useRecoilValue(messagesAtom);
  const notificationsAtomCount = useRecoilValue(notificationsAtom);


  const totalNotificationCountSelector = useRecoilValue(totalNotificationSelector);


  // const totalNotificationCount = useMemo(() => {
  //   return myNetworkAtomCount + jobsAtomCount + messagesAtomCount + notificationsAtomCount;
  // }, [myNetworkAtomCount, jobsAtomCount, messagesAtomCount, notificationsAtomCount])

  return (
    <div>
      <button>Home</button>

      <button>My Network ({myNetworkAtomCount >= 100 ? "99+" : myNetworkAtomCount})</button>
      <button>Jobs ({jobsAtomCount})</button>
      <button>Messages ({messagesAtomCount})</button>
      <button>Notifications ({notificationsAtomCount})</button>

      <button>Me ({totalNotificationCountSelector})</button>

      {/* <ButtonUpdater /> */}
      
    </div>
  )
}

// function ButtonUpdater() {
//   const setMessagesAtomCount = useSetRecoilState(messagesAtom);

//   return (
//     <button onClick = {() => {
//         setMessagesAtomCount(c => c + 1)
//       }}>Me</button>
//   )
// }
export default App
