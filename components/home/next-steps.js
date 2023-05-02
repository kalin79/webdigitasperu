import { useEffect, useState, useRef } from 'react'

import Link from 'next/link'
import Image from 'next/image'

import styles from  '../../styles/sass/home.module.sass'

import { gsap } from "gsap"

export default function NextSteps() {

     const next1 = useRef(null)
     const next2 = useRef(null)
     const next3 = useRef(null)
     const boxNexts = useRef(null)
     const reelBoxAnimation = useRef(null)
     const gsapReel = useRef(null)
     const boolAnimation = useRef(true)     


     const reelDinamic = async (texto) => {
          (reelBoxAnimation.current.children[0]).innerHTML = ''
          let node, node2,textnode
          const reel = reelBoxAnimation.current.children[0]
          const pageWidth  = document.documentElement.scrollWidth
          let w_element = 0
          let total_div = 0
          let _gsapReel = gsap
          node = document.createElement("div")
          node2 = document.createElement("h4")
          textnode = document.createTextNode(texto)
          node.appendChild(node2)
          node2.appendChild(textnode)
          reel.appendChild(node)

          setTimeout(function(){
               if (reel.children.length === 0)
                    w_element = 350
               else{
                    w_element = reel.children[0].clientWidth
               }
               let items = Math.round(pageWidth / w_element)  + 2             
               total_div = w_element * items 
               for ( let i=1; i <= (items - 1); i++){
                    node = document.createElement("div")
                    node2 = document.createElement("h4")
                    textnode = document.createTextNode(texto)
                    node.appendChild(node2)
                    node2.appendChild(textnode)
                    reel.appendChild(node)
               }

               _gsapReel.set(reel, {x: (total_div - w_element) })


          }, 10)

          setTimeout(function(){
               _gsapReel.set(reel.children, {x: (i) => i * -w_element})
               _gsapReel.set(reelBoxAnimation.current, {opacity: 1})
               _gsapReel.to(reel.children, {
                    duration: 10,
                    ease: 'none',
                    x: `-=${total_div}`,
                    modifiers:{
                         x: gsap.utils.unitize(x => parseFloat(x) % total_div)
                    },
                    repeat: -1
               })
          }, 15)

          gsapReel.current = _gsapReel
          
     }

     const deletedElementReel = () => {

          (reelBoxAnimation.current.children[0]).innerHTML = ''
          if (gsapReel.current != null){
               gsapReel.current.killTweensOf(reelBoxAnimation.current.children[0])
               gsapReel.current.set(reelBoxAnimation.current, {opacity: 0})
          }
     }

     const  handleMouseEnter = ( async (texto,id,e,activeRef) => {
          await deletedElementReel()
          const elementCursor = activeRef.current.childNodes[0]
          const elem = activeRef.current
          let elemsA =  boxNexts.current.childNodes
          let elmentReel =reelBoxAnimation.current
          boolAnimation.current = false
          
          await elemsA.forEach((element) => {
               element.classList.add('isOpacity')
               element.style.zIndex = 2
          })

          elem.style.zIndex = 10
          elmentReel.style.zIndex = 3
      
          await reelDinamic(texto)

          gsap.set(elementCursor, { opacity: 0, scale: 0 })
          gsap.to(elementCursor, { opacity: 1, scale: 1, duration: .5 })

     })

     const handleMouseMove = ( (id, e,activeRef) => {
          const element = activeRef.current
          const elementCursor = activeRef.current.children[0]
          let mouseX = (e.clientX - element.getBoundingClientRect().x) - 40
          let mouseY = (e.clientY - element.getBoundingClientRect().y) - 40
          gsap.to(elementCursor, { x: mouseX, y: mouseY })
     })

     
     const handleMouseLeave = ( async (id,e,activeRef) => {
          
          await deletedElementReel()
        
          const elementCursor = activeRef.current.children[0]
          const elem = e.target
          let elmentReel = reelBoxAnimation.current
          let elemsA =  boxNexts.current.childNodes
          elem.style.zIndex = 2
          elmentReel.style.zIndex = 0
          deletedElementReel()
          elemsA.forEach((element) => {
               element.classList.remove('isOpacity')
          })
          gsap.to(elementCursor, { opacity: 0, scale: 0, duration: .5 })
          
     })

     useEffect( () => {
          deletedElementReel()
     }, [])

    

     return (
          <div className={styles.nextContainer} id="nextContainer">
               <div className="container">
                    <div className={styles.titleContainer}>
                         <h2>
                              Always Wondering <br />
                              What's Next
                         </h2>
                    </div>

                    
                    <div 
                         className={`reelBoxAnimation ${styles.reelContainer}`}
                         ref={reelBoxAnimation}
                    >
                         <div className={`reelAnimation ${styles.reelElement}`}>
                              {/* Contenido Dinamico */}
                         </div>
                    </div>

                    <div 
                         className={`boxNexts ${styles.cardsContainer}`}
                         ref={boxNexts}
                    > 
                         <Link href="/" 
                              className={`linkMouse ${styles.cardItem}`}
                              onMouseEnter={ (e) => handleMouseEnter('Insights', 1, e,next1) }
                              onMouseLeave={ (e) => handleMouseLeave(1,e,next1)}
                              onMouseMove={ (e) =>  handleMouseMove(1, e,next1) }
                              id="next-1"
                              ref={next1}
                         >
                              <div 
                                   className={`viewCursor ${styles.viewPointer} ${styles.bgOrange}`}
                              >
                                   <p>ver</p>
                              </div>
                              
                              <div className={styles.cardImg}>
                                   <Image  src="/assets/insights/insight_1.png" width={424} height={568} alt={'card 1'} />
                              </div>
                              <div className={styles.cardSumilla}>
                                   <p>Insights</p>
                              </div>
                              <div className={styles.cardTitle}>
                                   <p>How to Adapt Your Social Strategy to Unpredictable Times</p>
                              </div>
                         </Link>
                         <Link href="/" 
                              className={`linkMouse ${styles.cardItem}`}
                              onMouseEnter={ (e) => handleMouseEnter('News', 2, e,next2) }
                              onMouseLeave={ (e) => handleMouseLeave(2,e,next2)}
                              onMouseMove={ (e) =>  handleMouseMove(2, e,next2) }
                              id="next-2"
                              ref={next2}
                             
                         >
                              <div 
                                   className={`viewCursor ${styles.viewPointer} ${styles.bgAzulClaro}`}
                              >
                                   <p style={{color: styles.colorBlanco}}>ver</p>
                              </div>
                              <div className={styles.cardImg}>
                                   <Image  src="/assets/news/news.jpg" width={424} height={568} alt={'card 1'} />
                              </div>
                              <div className={styles.cardSumilla}>
                                   <p>News</p>
                              </div>
                              <div className={styles.cardTitle}>
                                   <p>Welcoming Gareth Johnson as the new executive account director</p>
                              </div>
                         </Link>
                         <Link href="/" 
                              className={`linkMouse ${styles.cardItem}`}
                              onMouseEnter={ (e) => handleMouseEnter('Careers', 3, e,next3) }
                              onMouseLeave={ (e) => handleMouseLeave(3,e,next3)}
                              onMouseMove={ (e) =>  handleMouseMove(3, e,next3) }
                              id="next-3"
                              ref={next3}
                         >
                              <div 
                                   className={`viewCursor ${styles.viewPointer} ${styles.bgMorado}`}
                              >
                                   <p style={{color: styles.colorBlanco}}>ver</p>
                              </div>
                              <div className={styles.cardImg}>
                                   <Image  src="/assets/news/career.jpg" width={424} height={568} alt={'card 1'} />
                              </div>
                              <div className={styles.cardSumilla}>
                                   <p>Career</p>
                              </div>
                              <div className={styles.cardTitle}>
                                   <p>Digital Art Director</p>
                              </div>
                         </Link>
                    </div>
               </div>
          </div>
     )
}
