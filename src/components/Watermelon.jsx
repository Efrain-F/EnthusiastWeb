import { useEffect } from "react";
import { useTransitionPagesContext, useStateFinshRender } from "../context/TransitionPagesAnimationContext";
import gsap from "gsap";


function Watermelon() {
  const animationScrollTweenPages = useTransitionPagesContext()
  const stateFinishRender = useStateFinshRender()

  let animationGsapPage = gsap.context((self)=>{
    const delayAnimationLayer1 = 1
    const resoluciones = {
      isMobile: "(max-width: 600px)",
      idDesktop: "(min-width:599px)",
      isTransform: "(max-width:1000px)"
    }
    
    self.add("effectWatermelon",()=>{
      let matchMediaAnimationPC = gsap.matchMedia();
      matchMediaAnimationPC.add( resoluciones,(context) => {
        let {isMobile, isTransform} = context.conditions

        const animationWatermelon = gsap.timeline({
          scrollTrigger: {
            containerAnimation: animationScrollTweenPages,
            trigger: ".watermelon-effect",
            start: "left center",
          }
        })
        
        animationWatermelon.fromTo(".wtml-effct-1",{
          opacity:1,
          left:isMobile?"20%":"22%",      
          bottom:isMobile?"-20%":"-10%",
          rotate:"20deg",
          
        },{
          duration:1,
          onStart:()=>{
            gsap.fromTo(".wtml-effct-1-1",{
              opacity:1,
              right:"50%",
              bottom:"-50px",
              rotate:"-90deg",
            },{
              duration:1,
              ease: "Power1.easeInOut",
              height:isTransform?"40%":"40%",
            })
            gsap.fromTo(".wtml-effct-1-2",{
              opacity:1,
              right:0,
              bottom:0
            },{
              duration:1,
              ease: "Power1.easeInOut",
              height:isTransform?"40%":"50%",
            })
          },
        })
        animationWatermelon.fromTo(".wtml-effct-2",{
          opacity:1,
          left:isMobile?"100%":"50%",      
          bottom:isMobile?"20%":"10%",
          rotate:"-40deg",
          
        },{
          duration:1,
          onStart:()=>{
            gsap.fromTo(".wtml-effct-2-1",{
              opacity:1,
              right:0,
              top:0,
            },{
              duration:1,
              ease: "Power1.easeInOut",
              height:isTransform?"40%":"20%",
            })
            gsap.fromTo(".wtml-effct-2-2",{
              opacity:1,
              right:30,
              top:0
            },{
              duration:1,
              ease: "Power1.easeInOut",
              height:isTransform?"40%":"24%",
            })
            gsap.fromTo(".wtml-effct-2-3",{
              opacity:1,
              right:0,
              top:-10,
              rotate:90
            },{
              duration:1,
              ease: "Power1.easeInOut",
              height:isTransform?"40%":"25%",
            })
          },
        },"-=1")
        animationWatermelon.fromTo(".wtml-effct-3",{
          opacity:1,
          right:isMobile?"30%":"30%",      
          top:isMobile?"30%":"30%",
          rotate:-40
        },{
          duration:1,
          onStart:()=>{
            gsap.fromTo(".wtml-effct-3-1",{
              opacity:1,
              right:0,
              bottom:0,
            },{
              duration:1,
              ease: "Power1.easeInOut",
              height:isTransform?"30%":"20%",
            })
            gsap.fromTo(".wtml-effct-3-2",{
              opacity:1,
              right:30,
              bottom:0
            },{
              duration:1,
              ease: "Power1.easeInOut",
              height:isTransform?"34%":"24%",
            })
            gsap.fromTo(".wtml-effct-3-3",{
              opacity:1,
              right:0,
              bottom:"8%",
              rotate:90
            },{
              duration:1,
              ease: "Power1.easeInOut",
              height:isTransform?"10%":"10%",
            })
          },
        },"-=1")
      })
    })
  
  }) 

  useEffect(()=>{
    if(animationScrollTweenPages && stateFinishRender){
      animationGsapPage.effectWatermelon()
    }
    return ()=>{animationGsapPage.revert()}
  },[animationScrollTweenPages,stateFinishRender])

  return ( 
    <section className="section watermelon">
      <div className="watermelon-effect">
        <span className="ctnr-anim-ofcomp wtml-effct-1">
          <span className="comp-anim wtml-effct-1-1 small-rect-h dark"></span>
          <span className="comp-anim wtml-effct-1-2 small-rect-h red"></span>
        </span>
        <span className="ctnr-anim-ofcomp wtml-effct-2">
          <span className="comp-anim wtml-effct-2-1 medium-rect-h dark"></span>
          <span className="comp-anim wtml-effct-2-2 small-rect-h red"></span>
          <span className="comp-anim wtml-effct-2-3 small-rect-h dark"></span>
        </span>
        <span className="ctnr-anim-ofcomp wtml-effct-3">
          <span className="comp-anim wtml-effct-3-1 medium-rect-h dark"></span>
          <span className="comp-anim wtml-effct-3-2 small-rect-h red"></span>
          <span className="comp-anim wtml-effct-3-3 small-rect-h dark"></span>
        </span>
      </div>
      <div className="watermelon-img">
        <img src="./water.png" alt="" />
      </div>
    </section>
   );
}

export default Watermelon;