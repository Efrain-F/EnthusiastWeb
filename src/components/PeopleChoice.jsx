import { useEffect } from "react";
import { useTransitionPagesContext, useStateFinshRender } from "../context/TransitionPagesAnimationContext";
import gsap from "gsap";



function PeopleChoice() {


  const animationScrollTweenPages = useTransitionPagesContext()
  const stateFinishRender = useStateFinshRender()

  let animationGsapPage = gsap.context((self)=>{
    const delayAnimationLayer1 = 1
    const resoluciones = {
      isMobile: "(max-width: 600px)",
      idDesktop: "(min-width:599px)",
      isTransform: "(max-width: 800px)"
    }
    

    self.add("effectPeopleChoice",()=>{
      let matchMediaAnimationPC = gsap.matchMedia();
      matchMediaAnimationPC.add( resoluciones,(context) => {
        let {isMobile, isTransform} = context.conditions
        

        const leftAnimatioTimeLine = gsap.timeline({
          scrollTrigger: {
            containerAnimation: animationScrollTweenPages,
            trigger: ".peoplechoice-effect-pri",
            start: "left center",
          },
        })
        leftAnimatioTimeLine.fromTo(".pc-effect-5",{
          opacity:1,
          left:isTransform?"-10%":"-20%",
          width:isTransform?"30%":"24%",          
          bottom:isTransform?"130px":"200px",
          rotate:"220deg"
        },{
          duration:1,
          onStart:()=>{
            gsap.fromTo(".pc-effect-5-1",{
              opacity:1,
              left:0,
              bottom:0
            },{
              duration:1,
              ease: "Power1.easeInOut",
              height:isTransform?"60%":"40%",
              onComplete:()=>{
                let animationLayer = gsap.timeline({
                  ease: "Power1.easeOut",
                  repeat:-1,
                })
                animationLayer.to(".pc-effect-5-1",{
                  delay:3,
                  rotate:"-2deg",
                })
                animationLayer.to(".pc-effect-5-1",{
                  delay:2,
                  rotate:"0deg"
                })
              },
            })
            gsap.fromTo(".pc-effect-5-2",{
              opacity:1,
              left:isTransform?"20%":"30px",
              bottom:0
            },{
              duration:1,
              ease: "Power1.easeInOut",
              height: isTransform?"50%":"38%",
              onComplete:()=>{
                let animationLayer = gsap.timeline({
                  ease: "Power1.easeOut",
                  repeat:-1,
                })
                animationLayer.to(".pc-effect-5-2",{
                  delay:3,
                  rotate:"2deg",
                })
                animationLayer.to(".pc-effect-5-2",{
                  delay:2,
                  rotate:"0deg"
                })
              },
            })
            gsap.fromTo(".pc-effect-5-3",{
              opacity:1,
              left:isTransform?"30px":"50px",
              bottom:0
            },{
              duration:1,
              ease: "Power1.easeInOut",
              height: isTransform?"40%":"36%",
              onComplete:()=>{
                let animationLayer = gsap.timeline({
                  ease: "Power1.easeOut",
                  repeat:-1,
                })
                animationLayer.to(".pc-effect-5-3",{
                  delay:3,
                  rotate:"2deg",
                })
                animationLayer.to(".pc-effect-5-3",{
                  delay:2,
                  rotate:"0deg"
                })
              },
            })
          },
        })
        leftAnimatioTimeLine.fromTo(".pc-effect-6",{
          opacity:1,
          left:isTransform?"-10%":"300px",
          bottom:isTransform?"100px":"200px",
          width:isTransform?"30%":"24%",          
          rotate:"110deg"
        },{
          duration:1,
          onStart:()=>{
            gsap.fromTo(".pc-effect-6-1",{
              opacity:1,
              left:0,
              bottom:0
            },{
              duration:1,
              ease: "Power1.easeInOut",
              height:isTransform?"70%":"40%",
              onComplete:()=>{
                let animationLayer = gsap.timeline({
                  ease: "Power1.easeOut",
                  repeat:-1,
                })
                animationLayer.to(".pc-effect-6-1",{
                  delay:3,
                  rotate:"2deg",
                })
                animationLayer.to(".pc-effect-6-1",{
                  delay:2,
                  rotate:"0deg"
                })
              },
            })
            gsap.fromTo(".pc-effect-6-2",{
              opacity:1,
              left:isTransform?"15%":"30px",
              bottom:0
            },{
              duration:1,
              ease: "Power1.easeInOut",
              height: isTransform?"60%":"18%",
            })
            
          },
          
        },"-=1")
        leftAnimatioTimeLine.fromTo(".pc-effect-7",{
          opacity:1,
          left:isTransform?"0%":"20%",
          bottom:isTransform?"-30%":"-20%",
          width:isTransform?"20%":"24%",          
          rotate:"40deg"
        },{
          duration:1,
          onStart:()=>{
            gsap.fromTo(".pc-effect-7-1",{
              opacity:1,
              left:"25%",
              bottom:0,
              rotate:"20deg"
            },{
              duration:1,
              ease: "Power1.easeInOut",
              height:isTransform?"60%":"40%",
              onComplete:()=>{
                let animationLayer = gsap.timeline({
                  ease: "Power1.easeOut",
                  repeat:-1,
                })
                animationLayer.to(".pc-effect-7-1",{
                  delay:3,
                  rotate:"23deg",
                })
                animationLayer.to(".pc-effect-7-1",{
                  delay:2,
                  rotate:"20deg"
                })
              },
            })
            gsap.fromTo(".pc-effect-7-2",{
              opacity:1,
              right:"25%",
              bottom:0,
              rotate:"-20deg"
            },{
              duration:1,
              ease: "Power1.easeInOut",
              height:isTransform?"60%":"40%",
              onComplete:()=>{
                let animationLayer = gsap.timeline({
                  ease: "Power1.easeOut",
                  repeat:-1,
                })
                animationLayer.to(".pc-effect-7-2",{
                  delay:3,
                  rotate:"-23deg",
                })
                animationLayer.to(".pc-effect-7-2",{
                  delay:2,
                  rotate:"-20deg"
                })
              },
            })
            gsap.fromTo(".pc-effect-7-3",{
              opacity:1,
              bottom:0,
              left:"25%"
            },{
              bottom:isTransform?"24%":"15%",
              duration:1,
              ease: "Power1.easeInOut",
            })
          },
        },"-=1")

        const rightAnimatioTimeLine = gsap.timeline({
          scrollTrigger: {
            containerAnimation: animationScrollTweenPages,
            trigger: ".peoplechoice-effect-pri",
            start: "left center",
          },
        })

        rightAnimatioTimeLine.fromTo(".pc-effect-1",{
          xPercent:30,
          yPercent:120,
          rotate:"-70deg",
          opacity:1,
        },{
          yPercent:70,
          xPercent:86,
          rotate:"-10deg",
          duration:1.3,
          onComplete:()=>{
            let animationLayer = gsap.timeline({
              ease: "Power1.easeOut",
              repeat:-1,
            })
            animationLayer.to(".pc-effect-1",{
              delay:delayAnimationLayer1,
              rotate:"-11deg",
            })
            animationLayer.to(".pc-effect-1",{
              rotate:"-10deg",
            })
          },
        })
        rightAnimatioTimeLine.fromTo(".pc-effect-2",{
          xPercent:200,
          yPercent:-100,
          opacity:1,
        },{
          xPercent:150,
          yPercent:-50,
          duration:1.3,
        },"-=1.3")
        rightAnimatioTimeLine.fromTo(".pc-effect-3",{
          opacity:1,
          right:isMobile?"20px":"60px",
          width:isMobile?"30%":"24%",
          bottom:isMobile?"-10px":"-20px",
          rotate:"-10deg"
        },{
          duration:1,
          onStart:()=>{
            gsap.fromTo(".pc-effect-3-1",{
              opacity:1,
              right:0,
              bottom:0
            },{
              ease: "Power1.easeInOut",
              height:"29%",
              onComplete:()=>{
                let animationLayer = gsap.timeline({
                  ease: "Power1.easeOut",
                  repeat:-1,
                })
                animationLayer.to(".pc-effect-3-1",{
                  delay:1,
                  rotate:"3deg",
                })
                animationLayer.to(".pc-effect-3-1",{
                  rotate:"0deg",
                })
              },
            })
            gsap.fromTo(".pc-effect-3-2",{
              opacity:1,
              right:isMobile?"16px":"26px",
              bottom:0
            },{
              ease: "Power1.easeInOut",
              height: "24%",
              onComplete:()=>{
                let animationLayer = gsap.timeline({
                  ease: "Power1.easeOut",
                  repeat:-1,
                })
                animationLayer.to(".pc-effect-3-2",{
                  delay:1,
                  rotate:"2deg",
                })
                animationLayer.to(".pc-effect-3-2",{
                  rotate:"0deg",
                })
              },
            })
            gsap.fromTo(".pc-effect-3-3",{
              opacity:1,
              left:0,
              bottom:0,
            },{
              ease: "Power1.easeInOut",
              height: "20%",
              onComplete:()=>{
                let animationLayer = gsap.timeline({
                  ease: "Power1.easeOut",
                  repeat:-1,
                })
                animationLayer.to(".pc-effect-3-3",{
                  delay:1,
                  rotate:"1deg",
                })
                animationLayer.to(".pc-effect-3-3",{
                  rotate:"0deg",
                })
              },
            })
          },
        },"-=.5")
        
        rightAnimatioTimeLine.fromTo(".pc-effect-4",{
          opacity:1,
          right:isTransform?"10%":"200px",
          width:isTransform?"30%":"24%",          
          bottom:isTransform?"80px":"100px",
          rotate:"220deg",
        },{
          duration:1,
          onStart:()=>{
            gsap.fromTo(".pc-effect-4-1",{
              opacity:1,
              right:0,
              bottom:0
            },{
              duration:1,
              ease: "Power1.easeInOut",
              height:isTransform?"40%":"29%",
              onComplete:()=>{
                let animationLayer = gsap.timeline({
                  ease: "Power1.easeOut",
                  repeat:-1,
                })
                animationLayer.to(".pc-effect-4-1",{
                  delay:1,
                  rotate:"3deg",
                })
                animationLayer.to(".pc-effect-4-1",{
                  rotate:"0deg",
                })
              },
            })
            gsap.fromTo(".pc-effect-4-2",{
              opacity:1,
              right:"14px",
              bottom:0
            },{
              duration:1,
              ease: "Power1.easeInOut",
              height: isTransform?"38%":"24%",
              onComplete:()=>{
                let animationLayer = gsap.timeline({
                  ease: "Power1.easeOut",
                  repeat:-1,
                })
                animationLayer.to(".pc-effect-4-2",{
                  delay:1,
                  rotate:"-2deg",
                })
                animationLayer.to(".pc-effect-4-2",{
                  rotate:"0deg",
                })
              },
            })
          },
        },"-=1.55")

        
      })
    })
  
  }) 

  useEffect(()=>{
    if(animationScrollTweenPages && stateFinishRender){
      animationGsapPage.effectPeopleChoice()
    }

    return ()=>{
      animationGsapPage.revert()
    }
  },[animationScrollTweenPages,stateFinishRender])


  return ( 
    <section className="section peoplechoice">
      <section className="peoplechoice-sect peoplechoice-pri">
        <div className="peoplechoice-effect-pri">
          {/*right*/}
          <span className="comp-anim pc-effect-1 cube-large dark"></span>
          <span className="comp-anim pc-effect-2 circle-med light"></span>
          <span className="container-aniamtion-ofComp pc-effect-3">
            <span className="comp-anim pc-effect-3-1 medium-rect-h light"></span>
            <span className="comp-anim pc-effect-3-2 small-rect-h light"></span>
            <span className="comp-anim pc-effect-3-3 big-rect-h light"></span>
          </span>
          <span className="container-aniamtion-ofComp pc-effect-4">
            <span className="comp-anim pc-effect-4-1 small-rect-h dark"></span>
            <span className="comp-anim pc-effect-4-2 big-rect-h dark"></span>
          </span>
          {/*left*/}
          <span className="container-aniamtion-ofComp pc-effect-6">
            <span className="comp-anim pc-effect-6-1 medium-rect-h light"></span>
            <span className="comp-anim pc-effect-6-2 big-rect-h light"></span>
          </span>
          <span className="container-aniamtion-ofComp pc-effect-5">
            <span className="comp-anim pc-effect-5-1 medium-rect-h dark"></span>
            <span className="comp-anim pc-effect-5-2 small-rect-h light"></span>
            <span className="comp-anim pc-effect-5-3 small-rect-h dark"></span>
          </span>
          <span className="container-aniamtion-ofComp pc-effect-7">
            <span className="comp-anim pc-effect-7-1 medium-rect-h light"></span>
            <span className="comp-anim pc-effect-7-2 medium-rect-h light"></span>
            <span className="comp-anim pc-effect-7-3 medium-cub dark"></span>

          </span>
          
          
        
        </div>
        <div className="peoplechoice-pri-title">
          <h1>PEOPLE´S CHOICE</h1>
        </div>
        <div className="peoplechoice-foot peoplechoice-pri-p">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem omnis vitae provident nesciunt enim! Voluptate, a ducimus? Exercitationem recusandae quas magnam! Voluptates molestias quae laudantium autem cumque amet enim possimus.</p>  
        </div>
        
      </section>
      <section className="peoplechoice-sect peoplechoice-enthusiast">
        <div className="peoplechoice-enthusiast-he">
          <p>Lorem ipsum Laudantium expedita quos? Exercitationem soluta, quibusdam delectus saepe a ratione expedita, hic dolorum accusantium cumque veniam nihil non?</p>
        </div>
        <h2>ENTHUSIAST</h2>
        <div className="peoplechoice-foot peoplechoice-enthusiast-fo">
          <p>Lorem ipsum dolor adipisicing elit. Citae provident nesciunt enim! Voluptate, a ducimus? Exercitationem recusandae quas magnam! Voluptates molestias quae laudantium autem cumque amet enim possimus.</p>  
        </div>
      </section>
    </section>
   );
}
export default PeopleChoice;