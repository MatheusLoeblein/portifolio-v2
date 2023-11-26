import { useScroll, useMotionValueEvent, } from 'framer-motion'
import { useState } from 'react'

export function  useScrollDown(){
    const [scrollLast, setScrollLast] = useState<Number>(0);
    const [scrollUp, setScrollUp] = useState<Boolean>(false);
  
    const { scrollY } = useScroll()
  
    useMotionValueEvent(scrollY, "change", (latest:Number) => {
      console.log("Page scroll: ", latest)
      console.log(scrollY);
  
      setScrollUp(latest > scrollLast)
      console.log(scrollUp)
      
      setScrollLast(latest)
    })

    return scrollUp
}