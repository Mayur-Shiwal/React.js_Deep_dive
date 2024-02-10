import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import './App.css'
import { countAtom, evenSelector } from './store/atoms/count';

function App() {
  return (
    <>
      <RecoilRoot>
        <Count/>
      </RecoilRoot>
    </>
  )
}

function Count({setCount}){
  console.log("rerender");
  return <div>
    <Buttons/>
    <CountRenderer/>
  </div>
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return <div>
    {count}
    <EvenRendered/>
  </div>
}

function EvenRendered(){
  const isEven = useRecoilValue(evenSelector);
  return <div>
    {isEven ? "" : "Even Value"}
  </div>
}

function Buttons(){
  console.log("button rerender");
  const setCount = useSetRecoilState(countAtom);
  return <div>
    <button onClick={() => {
      setCount(count => count + 1);
    }}>Increase</button>
    <button onClick={() => {
      setCount(count => count - 1);
    }}>Decrease</button>
  </div>
}

export default App
