import { useEffect } from "react";
import { useTransitionPagesContext, useStateFinshRender } from "../context/TransitionPagesAnimationContext";
import gsap from "gsap";

function Enthusiast() {
  const animationScrollTweenPages = useTransitionPagesContext()
  const stateFinishRender = useStateFinshRender()

  let animationGsapPage = gsap.context((self)=>{
    self.add("effectEnthusiast",()=>{
      let matchMediaAnimation = gsap.matchMedia();
    
      const delayAnimationLayer1 = 1.4
      const delayAnimationLayer2 = 2
      const delayAnimationLayer3 = 3.4

      matchMediaAnimation.add( {
        isMobile: "(max-width: 500px)",
        idDesktop: "(min-width:499px)"
      },(context) => {

      let {isMobile} = context.conditions

      // cubes
      gsap.fromTo(".enthusiast-effect-1",{
        xPercent:50,
        yPercent:-110,
        rotate:"-80deg",
        opacity:1,
      },{
        yPercent:-40,
        rotate:"14deg",
        duration:1,
        onComplete:()=>{
          let animationLayer = gsap.timeline({
            ease: "Power4.easeOut",
            repeat:-1,
          })
          animationLayer.to(".enthusiast-effect-1",{
            delay:delayAnimationLayer1,
            rotate:"17deg",
          })
          animationLayer.to(".enthusiast-effect-1",{
            rotate:"14deg",
          })
        }
      })
      gsap.fromTo(".enthusiast-effect-2",{
        opacity:1,
        xPercent:160,
        yPercent:-110,
        rotate:"-80deg",
      },{
        ease: "Power1.easeInOut",
        yPercent:170,
        rotate:"3deg",
        duration:1,
        onComplete:()=>{
          let animationLayer = gsap.timeline({
            ease: "Power4.easeOut",
            repeat:-1,
          })
          animationLayer.to(".enthusiast-effect-2",{
            delay:delayAnimationLayer1,
            rotate:"20deg",
          })
          animationLayer.to(".enthusiast-effect-2",{
            rotate:"3deg",
          })
        }
      })
      gsap.fromTo(".enthusiast-effect-3",{
        opacity:1,
        xPercent:1350,
        yPercent:-110,
        rotate:"-80deg",
      },{
        duration:3,
        yPercent:740,
        rotate:"12deg",
        duration:1,
        onComplete:()=>{
          let animationLayer = gsap.timeline({
            ease: "Power4.easeOut",
            repeat:-1,
          })
          animationLayer.to(".enthusiast-effect-3",{
            delay:delayAnimationLayer1,
            rotate:"20deg",
          })
          animationLayer.to(".enthusiast-effect-3",{
            rotate:"12deg",
          })
        }
      })
      gsap.fromTo(".enthusiast-effect-22",{
        opacity:1,
        xPercent:3400,
        yPercent:-150,
        rotate:"-60deg",
      },{
        yPercent:100,
        rotate:"40deg",
        duration:1,
        onComplete:()=>{
          let animationLayer = gsap.timeline({
            ease: "Power4.easeOut",
            repeat:-1,
          })
          animationLayer.to(".enthusiast-effect-22",{
            delay:delayAnimationLayer1,
            rotate:"20deg",
          })
          animationLayer.to(".enthusiast-effect-22",{
            rotate:"40deg",
          })
        }
      })
      // effect rect larg
      gsap.fromTo(".enthusiast-effect-4",{
        xPercent: isMobile ?20: 50,
        yPercent:180,
        rotate:"10deg",
        width: "700px",
        opacity:1,  
      },{
        duration:1,
        onStart:()=>{
          gsap.fromTo(".enthusiast-effect-5",{
            width: "0px",
            opacity:4
          },{
            ease: "Power1.easeInOut",
            delay:0.2,
            duration:1,
            width: "700px",
          })
        },
        onComplete:()=>{
          let animationLayer = gsap.timeline({
            ease: "Power4.easeOut",
            repeat:-1,
          })
          animationLayer.to(".enthusiast-effect-5",{
            delay:delayAnimationLayer2,
            rotate:"-1.4deg",
          })
          animationLayer.to(".enthusiast-effect-5",{
            rotate:"0deg",
          })
        }
      })
      gsap.fromTo(".enthusiast-effect-6",{
        xPercent: isMobile ?30: 44,
        yPercent: isMobile ?150:103,
        rotate:"190deg",
        width: "700px",
        opacity:1,  
      },{
        duration:1,
        onStart:()=>{
          gsap.fromTo(".enthusiast-effect-7",{
            width: "0px",
            opacity:4
          },{
            ease: "Power1.easeInOut",
            delay:0.2,
            duration:1,
            width: "840px",
          })

        },
        onComplete:()=>{
          let animationLayer = gsap.timeline({
            ease: "Power4.easeOut",
            repeat:-1,
          })
          animationLayer.to(".enthusiast-effect-7",{
            delay:delayAnimationLayer2,
            rotate:"2deg",
          })
          animationLayer.to(".enthusiast-effect-7",{
            rotate:"0deg",
          })
        }
      })
      gsap.fromTo(".enthusiast-effect-8",{
        xPercent:isMobile ?10:22,
        yPercent:isMobile ?190:190,
        rotate:"10deg",
        width: "700px",
        opacity:1,
      },{
        duration:1,
        onStart:()=>{
          gsap.fromTo(".enthusiast-effect-9",{
            width: "0px",
            opacity:1
          },{
            ease: "Power1.easeInOut",
            delay:0.2,
            duration:1,
            width: "400px",
          })
        },
      })
      gsap.fromTo(".enthusiast-effect-10",{
        xPercent:0,
        yPercent:200,
        rotate:"120deg",
        width: "700px",
        opacity:1,
      },{
        duration:1,
        onStart:()=>{
          gsap.fromTo(".enthusiast-effect-11",{
            width: "0px",
            opacity:4
          },{
            ease: "Power1.easeInOut",
            duration:1,
            width: "600px",
          })
        },
        onComplete:()=>{
          let animationLayer = gsap.timeline({
            ease: "Power4.easeOut",
            repeat:-1,
          })
          animationLayer.to(".enthusiast-effect-11",{
            delay:delayAnimationLayer1,
            rotate:"-2deg",
          })
          animationLayer.to(".enthusiast-effect-11",{
            rotate:"0deg",
          })
        }

      })
      gsap.fromTo(".enthusiast-effect-20",{
        xPercent:60,
        yPercent:140,
        rotate:"10deg",
        width: "700px",
        opacity:isMobile?0:1,
      },{
        duration:1,
        onStart:()=>{
          gsap.fromTo(".enthusiast-effect-21",{
            width: "0px",
            opacity:1
          },{
            ease: "Power1.easeInOut",
            duration:1,
            width: "830px",
          })
        },
        onComplete:()=>{
          let animationLayer = gsap.timeline({
            ease: "Power4.easeOut",
            repeat:-1,
          })
          animationLayer.to(".enthusiast-effect-21",{
            delay:delayAnimationLayer2,
            rotate:"1.2deg",
          })
          animationLayer.to(".enthusiast-effect-21",{
            rotate:"0deg",
          })
        }
      })
      // left
      gsap.fromTo(".enthusiast-effect-12",{
        xPercent:isMobile ?-35:130,
        yPercent:isMobile ?700:200,
        rotate:"50deg",
        width: "700px",
        opacity:1,
      },{
        duration:1,
        onStart:()=>{
          gsap.fromTo(".enthusiast-effect-13",{
            width: "0px",
            opacity:1
          },{
            ease: "Power1.easeInOut",
            duration:1,
            width: "350px",
          })
        },
        onComplete:()=>{
          let animationLayer = gsap.timeline({
            ease: "Power4.easeOut",
            repeat:-1,
          })
          animationLayer.to(".enthusiast-effect-13",{
            delay:delayAnimationLayer3,
            rotate:"-2.2deg",
          })
          animationLayer.to(".enthusiast-effect-13",{
            rotate:"0deg",
          })
        }
      })
      gsap.fromTo(".enthusiast-effect-14",{
        xPercent:isMobile ?-35:133,
        yPercent:isMobile ?670:200,
        rotate:"50deg",
        width: "700px",
        opacity:1,
      },{
        duration:1,
        onStart:()=>{
          gsap.fromTo(".enthusiast-effect-15",{
            width: "0px",
            opacity:1
          },{
            ease: "Power1.easeInOut",
            duration:1,
            width: "290px",
          })
        },
        onComplete:()=>{
          let animationLayer = gsap.timeline({
            ease: "Power4.easeOut",
            repeat:-1,
          })
          animationLayer.to(".enthusiast-effect-15",{
            delay:delayAnimationLayer3,
            rotate:"-2.2deg",
          })
          animationLayer.to(".enthusiast-effect-15",{
            rotate:"0deg",
          })
        }
      })
      gsap.fromTo(".enthusiast-effect-16",{
        xPercent:150,
        yPercent:220,
        rotate:"50deg",
        width: "700px",
        opacity:isMobile?0:1,
      },{
        duration:1,
        onStart:()=>{
          gsap.fromTo(".enthusiast-effect-17",{
            width: "0px",
            opacity:1
          },{
            ease: "Power1.easeInOut",
            duration:1,
            width: "360px",
          })

        },
        onComplete:()=>{
          let animationLayer = gsap.timeline({
            ease: "Power4.easeOut",
            repeat:-1,
          })
          animationLayer.to(".enthusiast-effect-17",{
            delay:delayAnimationLayer3,
            rotate:"2deg",
          })
          animationLayer.to(".enthusiast-effect-17",{
            rotate:"0deg",
          })
        }
      })
      gsap.fromTo(".enthusiast-effect-18",{
        xPercent:isMobile ?-56:110,
        yPercent:isMobile ?600:180,
        rotate:"130deg",
        width: "700px",
        opacity:1,
      },{
        duration:1,
        onStart:()=>{
          gsap.fromTo(".enthusiast-effect-19",{
            width: "0px",
            opacity:1
          },{
            ease: "Power1.easeInOut",
            duration:1,
            width: "320px",
          })

        },
        onComplete:()=>{
          let animationLayer = gsap.timeline({
            ease: "Power4.easeOut",
            repeat:-1,
          })
          animationLayer.to(".enthusiast-effect-19",{
            delay:delayAnimationLayer2,
            rotate:"2deg",
          })
          animationLayer.to(".enthusiast-effect-19",{
            rotate:"0deg",
          })
        }
      })
      // text
      gsap.fromTo(".enthusiast-effect-24",{
        xPercent:-100,
        opacity:1,
      },{
        xPercent:0,
        duration:1.5,
        ease:"Power1.easeOut"
      })
      gsap.fromTo(".enthusiast-effect-25",{
        yPercent:100,
        opacity:1,
      },{
        delay: .6,
        yPercent:0,
        duration:1,
        ease:"Power1.easeOut"
      })
      })
    })
  }) 

  
  useEffect(()=>{
    if(animationScrollTweenPages && stateFinishRender){
      console.log(stateFinishRender)
      animationGsapPage.effectEnthusiast()
    }

    return ()=>{
      animationGsapPage.revert()
    }
  },[animationScrollTweenPages,stateFinishRender])

  return ( 
    <section className="section enthusiast">
      <div className="enthusiast-txt">
        <div className="enthusiast-txt-p">
          <p className="enthusiast-effect-25">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates architecto quas porro ea autem. Velit, amet consequatur tempora temporibus eligendi sit odit commodi maxime</p>
        </div>
        <h1 className="enthusiast-effect-24">ENTHUSIAST</h1>
      </div>
      <div className="enthusiast-effect">
        <span className="comp-anim enthusiast-effect-1 red big-cub"></span>
        <span className="comp-anim enthusiast-effect-2 dark medium-cub"></span>
        <span className="comp-anim enthusiast-effect-3 red small-cub"></span>
        <span className="comp-anim enthusiast-effect-22 dark small-cub"></span>
        <span className="comp-anim enthusiast-effect-4 medium-cub">
          <span className="comp-anim enthusiast-effect-5 dark medium-rect"></span>
        </span>
        <span className="comp-anim enthusiast-effect-6 medium-cub">
          <span className="comp-anim enthusiast-effect-7 dark small-rect"></span>
        </span>
        <span className="comp-anim enthusiast-effect-8 medium-cub">
          <span className="comp-anim enthusiast-effect-9 dark small-rect"></span>
        </span>
        <span className="comp-anim enthusiast-effect-10 medium-cub">
          <span className="comp-anim enthusiast-effect-11 dark small-rect"></span>
        </span>
        <span className="comp-anim enthusiast-effect-12 medium-cub">
          <span className="comp-anim enthusiast-effect-13 dark medium-rect"></span>
        </span>
        <span className="comp-anim enthusiast-effect-14 medium-cub">
          <span className="comp-anim enthusiast-effect-15 dark small-rect"></span>
        </span>
        <span className="comp-anim enthusiast-effect-16 medium-cub">
          <span className="comp-anim enthusiast-effect-17 dark big-rect"></span>
        </span>
        <span className="comp-anim enthusiast-effect-18 medium-cub">
          <span className="comp-anim enthusiast-effect-19 red small-rect"></span>
        </span>
        <span className="comp-anim enthusiast-effect-20 medium-cub">
          <span className="comp-anim enthusiast-effect-21 red small-rect"></span>
        </span>
      </div>
    </section>
   );
}


export default Enthusiast;


