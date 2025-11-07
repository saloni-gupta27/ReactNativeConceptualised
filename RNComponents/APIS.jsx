import { useEffect, useRef } from "react";

function Counter() {
    const [count, setCount] = React.useState(0);
    const ref = useRef(count);
   
useEffect(() => {
  const intervalId = setInterval(() => {

    console.log(count); 
  }, 1000);
  return () => clearInterval(intervalId);
}, []);

useEffect(()=>{
    ref.current=count;

},[count])
    return <div >{count}</div>;
  }
   
   