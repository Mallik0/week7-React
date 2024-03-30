import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { notificationsAtom, totalNotificationSelector } from './atoms'
import { useEffect } from 'react';
import axios from 'axios';

function App() {

  return <RecoilRoot>
    <MainApp />
  </RecoilRoot>
  
}

function MainApp() {
  const [networkCount, setNetworkCount] = useRecoilState(notificationsAtom);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  useEffect(() => {
    console.log("useEffect Triggered");

    axios.get("https://sum-server.100xdevs.com/notifications")
      .then(res => {
        console.log(res.data);
        setNetworkCount(res.data);
      });
      // .catch((error) => {
      //   console.log("This is the error", error);
      // });

  }, []);


  return (
    <div>
      <button>Home</button>

      <button>My Network ({networkCount.network >= 100 ? "99+" : networkCount.network})</button>
      <button>Jobs ({networkCount.jobs})</button>
      <button>Messages ({networkCount.messages})</button>
      <button>Notifications ({networkCount.notifications})</button>

      <button>Me ({totalNotificationCount})</button>
    </div>
  )
}

export default App