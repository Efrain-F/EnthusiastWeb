import {gsap} from "gsap"

import { createContext, useContext, useEffect, useState} from "react";


const transitionPagesContext = createContext();
const FinishRenderContext = createContext();

export function useTransitionPagesContext() {
  return useContext(transitionPagesContext)
}

export function useStateFinshRender() {
  return useContext(FinishRenderContext)
}


function TransitionPagesAnimationContext({children}) {

  const [animationScrollTweenPagesState,setAnimationScrollTweenPagesState] = useState()
  const [finishRender,setFinishRender] = useState(false)
  
  let transitionPagesCtxGsap = gsap.context((self)=>{
    self.add("renderizacion", ()=>{
      let sectionPages = gsap.utils.toArray(".section");
      let animationScrollTweenPages = gsap.to(sectionPages, {
        xPercent: -100 * 3,
        ease: "none", // <-- IMPORTANT!
        scrollTrigger: {
          trigger: ".container-page",
          pin: true,
          scrub:1,
          snap: 1 / (sectionPages.length - 1),
          end: "+=3000",
        },
        
      });
      setAnimationScrollTweenPagesState(animationScrollTweenPages)
    })
    self.add("showPages", ()=>{
      gsap.to(".container-page",{
        delay:.5,
        opacity:1,
        onComplete:()=>{
          setFinishRender(true)
        }
      })
    })
  }) 
  
  useEffect(()=>{
    transitionPagesCtxGsap.renderizacion()
    transitionPagesCtxGsap.showPages()

    return ()=>{
      transitionPagesCtxGsap.revert()
    };
  
  },[])


  return (
    <transitionPagesContext.Provider value={animationScrollTweenPagesState}>
      <FinishRenderContext.Provider value={finishRender}>
        {children}
      </FinishRenderContext.Provider>
    </transitionPagesContext.Provider>
  );
}

export default TransitionPagesAnimationContext;



