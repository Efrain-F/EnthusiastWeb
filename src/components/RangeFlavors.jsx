import { useEffect } from "react";
import { useTransitionPagesContext, useStateFinshRender } from "../context/TransitionPagesAnimationContext";
import gsap from "gsap";

function RangeFlavors() {


  const animationScrollTweenPages = useTransitionPagesContext()
  const stateFinishRender = useStateFinshRender()

  let animationGsapPage = gsap.context((self)=>{
    const delayAnimationLayer1 = 1
    const resoluciones = {
      isMobile: "(max-width: 600px)",
      idDesktop: "(min-width:599px)",
      isTransform: "(max-width:1000px)"
    }
    
    self.add("effectRangeFlavors",()=>{
      let matchMediaAnimationPC = gsap.matchMedia();
      matchMediaAnimationPC.add( resoluciones,(context) => {
        let {isMobile, isTransform} = context.conditions


        const tlRangeFlavorsPage = gsap.timeline({
          scrollTrigger: {
            containerAnimation: animationScrollTweenPages,
            trigger: ".rangeflavors-describ",
            start: "center center",
            scrub:1.6,
            duration:1.6
          }
        })
        tlRangeFlavorsPage.to(".rangeflavors-describ", {
          xPercent: isTransform ? 117 : 140,
          duration: 3
        });

        const leftAnimatioTimeLine = gsap.timeline({
          scrollTrigger: {
            containerAnimation: animationScrollTweenPages,
            trigger: ".rangeflavors-effect",
            start: "left center",
          },
        })
        leftAnimatioTimeLine.fromTo(".rgf-effct-1",{
          opacity:1,
          left:isTransform?"25%":"10%",      
          bottom:isTransform?"-12%":"-25px",
          rotate:"24deg"
        },{
          duration:1,
          onStart:()=>{
            gsap.fromTo(".rgf-effct-1-1",{
              opacity:1,
              right:0,
              bottom:0
            },{
              duration:1,
              ease: "Power1.easeInOut",
              height:isTransform?"18%":"24%",
            })
            gsap.fromTo(".rgf-effct-1-2",{
              opacity:1,
              right:isMobile?"30px":"40px",
              bottom:0
            },{
              duration:1,
              ease: "Power1.easeInOut",
              height:isTransform?"20%":"26%",
            })
            gsap.fromTo(".rgf-effct-1-3",{
              opacity:1,
              right:isMobile?"40px":"55px",
              bottom:0
            },{
              duration:1,
              ease: "Power1.easeInOut",
              height:isTransform?"15%":"15%",
            })
          },
        })
        leftAnimatioTimeLine.fromTo(".rgf-effct-2",{
          top:0,
          left:0,
          xPercent:20,
          yPercent:-100,
          opacity:1,
        },{
          opacity:1,
          yPercent:-70,
          duration:1,
        },"-=1")
        leftAnimatioTimeLine.fromTo(".rgf-effct-3",{
          opacity:1,
          left:isTransform?"580px":"530px",      
          bottom:isTransform?"42%":"38%",
          rotate:"80deg",
          
        },{
          duration:1,
          onStart:()=>{
            gsap.fromTo(".rgf-effct-3-1",{
              opacity:1,
              left:0,
              bottom:0,
            },{
              duration:1,
              ease: "Power1.easeInOut",
              height:isTransform?"18%":"24%",
              onComplete:()=>{
                let animationLayer = gsap.timeline({
                  ease: "Power1.easeOut",
                  repeat:-1,
                })
                animationLayer.to(".rgf-effct-3-1",{
                  delay:1,
                  rotate:"-2deg",
                })
                animationLayer.to(".rgf-effct-3-1",{
                  rotate:"0deg"
                })
              },
            })
            gsap.fromTo(".rgf-effct-3-2",{
              opacity:1,
              left:isMobile?"16px":"16px",
              bottom:"-10px"
            },{
              duration:1,
              ease: "Power1.easeInOut",
              height:isTransform?"20%":"24%",
              onComplete:()=>{
                let animationLayer = gsap.timeline({
                  ease: "Power1.easeOut",
                  repeat:-1,
                })
                animationLayer.to(".rgf-effct-3-2",{
                  delay:1,
                  rotate:"2deg",
                })
                animationLayer.to(".rgf-effct-3-2",{
                  rotate:"0deg"
                })
              },
            })
            gsap.fromTo(".rgf-effct-3-3",{
              opacity:1,
              left:isMobile?"40px":"55px",
              bottom:"14px"
            },{
              duration:1,
              ease: "Power1.easeInOut",
              height:isTransform?"15%":"15%",
              onComplete:()=>{
                let animationLayer = gsap.timeline({
                  ease: "Power1.easeOut",
                  repeat:-1,
                })
                animationLayer.to(".rgf-effct-3-3",{
                  delay:1,
                  rotate:"2deg",
                })
                animationLayer.to(".rgf-effct-3-3",{
                  rotate:"0deg"
                })
              },
            })
          },
        },"-=1")

        const rightAnimatioTimeLine = gsap.timeline({
          scrollTrigger: {
            containerAnimation: animationScrollTweenPages,
            trigger: ".rangeflavors-effect",
            start: "left center",
          },
        })
        rightAnimatioTimeLine.fromTo(".rgf-effct-4",{
          zIndex:-1,
          bottom:"-45%",
          right:"16%",
          opacity:1,
        },{
          bottom:isTransform?-200:-100,
          opacity:1,
          duration:1,
        })
        leftAnimatioTimeLine.fromTo(".rgf-effct-5",{
          opacity:1,
          right:isTransform?"20%":"17%",      
          bottom:isTransform?"-30%":"-30%",
          rotate:"-50deg",
          
        },{
          duration:1,
          onStart:()=>{
            gsap.fromTo(".rgf-effct-5-1",{
              opacity:1,
              left:0,
              bottom:0,
            },{
              duration:1,
              ease: "Power1.easeInOut",
              height:isTransform?"38%":"50%",
              onComplete:()=>{
                let animationLayer = gsap.timeline({
                  ease: "Power1.easeOut",
                  repeat:-1,
                })
                animationLayer.to(".rgf-effct-5-1",{
                  delay:1,
                  rotate:"-2deg",
                })
                animationLayer.to(".rgf-effct-5-1",{
                  rotate:"0deg"
                })
              },
            })
            gsap.fromTo(".rgf-effct-5-2",{
              opacity:1,
              right:0,
              bottom:"-10px"
            },{
              duration:1,
              ease: "Power1.easeInOut",
              height:isTransform?"56%":"60%",
              onComplete:()=>{
                let animationLayer = gsap.timeline({
                  ease: "Power1.easeOut",
                  repeat:-1,
                })
                animationLayer.to(".rgf-effct-5-2",{
                  delay:1,
                  rotate:"2deg",
                })
                animationLayer.to(".rgf-effct-5-2",{
                  rotate:"0deg"
                })
              },
            })
          },
        },"-=1")
        leftAnimatioTimeLine.fromTo(".rgf-effct-6",{
          opacity:1,
          right:isTransform?"20%":"20%",      
          top:isTransform?"-30%":"-30%",
          rotate:"24deg",
          
        },{
          duration:1,
          onStart:()=>{
            gsap.fromTo(".rgf-effct-6-1",{
              opacity:1,
              left:0,
              top:0,
            },{
              duration:1,
              ease: "Power1.easeInOut",
              height:isTransform?"40%":"50%",
            })
            gsap.fromTo(".rgf-effct-6-2",{
              opacity:1,
              left:"10px",
              top:0
            },{
              duration:1,
              ease: "Power1.easeInOut",
              height:isTransform?"50%":"60%",
            })
            gsap.fromTo(".rgf-effct-6-3",{
              opacity:1,
              left:"24px",
              top:0,
            },{
              duration:1,
              ease: "Power1.easeInOut",
              height:isTransform?"44%":"50%",
            })
            gsap.fromTo(".rgf-effct-6-4",{
              opacity:1,
              left:"44px",
              top:0
            },{
              duration:1,
              ease: "Power1.easeInOut",
              height:isTransform?"36%":"60%",
            })
          },
        },"-=1")

      })
    })
  
  }) 

  useEffect(()=>{
    if(animationScrollTweenPages && stateFinishRender){
      animationGsapPage.effectRangeFlavors()
    }
    return ()=>{
      animationGsapPage.revert()
    }
  },[animationScrollTweenPages,stateFinishRender])



  return ( 
    <section className="section rangeflavors">
      <div className="rangeflavors-effect">
        <span className="ctnr-anim-ofcomp rgf-effct-1">
          <span className="comp-anim rgf-effct-1-1 big-rect-h red"></span>
          <span className="comp-anim rgf-effct-1-2 small-rect-h red"></span>
          <span className="comp-anim rgf-effct-1-3 medium-rect-h dark"></span>
        </span>
        <span className="comp-anim rgf-effct-2 circle-small red"></span>
        <span className="ctnr-anim-ofcomp rgf-effct-3">
          <span className="comp-anim rgf-effct-3-1 small-rect-h dark"></span>
          <span className="comp-anim rgf-effct-3-2 big-rect-h dark"></span>
          <span className="comp-anim rgf-effct-3-3 medium-rect-h dark"></span>
        </span>

        <span className="comp-anim rgf-effct-4 circle-small red"></span>
        <span className="ctnr-anim-ofcomp rgf-effct-5">
          <span className="comp-anim rgf-effct-5-1 big-rect-h dark"></span>
          <span className="comp-anim rgf-effct-5-2 medium-rect-h dark"></span>
        </span>
        <span className="ctnr-anim-ofcomp rgf-effct-6">
          <span className="comp-anim rgf-effct-6-1 small-rect-h red"></span>
          <span className="comp-anim rgf-effct-6-2 medium-rect-h red"></span>
          <span className="comp-anim rgf-effct-6-3 medium-rect-h dark"></span>
          <span className="comp-anim rgf-effct-6-4 small-rect-h red"></span>
        </span>

      </div>
      <div className="rangeflavors-sect rangeflavors-title">
        <h1>RANGE OF FLAVORS</h1>
      </div>
      <div className="rangeflavors-sect rangeflavors-describ">
        <div className="orinta">
          <span>1/10</span>
          <h3>WATERMELON</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ipsa voluptatibus expedita labore reprehenderit? Tempore maxime fuga suscipit quasi repellendus iusto cupiditate veritatis</p>
        </div>
      </div>
    </section>
   );
}

export default RangeFlavors;