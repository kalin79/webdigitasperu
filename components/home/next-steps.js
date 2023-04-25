import { useEffect, useState, useRef } from 'react'

import Link from 'next/link'
import Image from 'next/image'

import styles from  '../../styles/sass/home.module.sass'

import { gsap } from "gsap"

export default function NextSteps() {

     const [gsapReel, setGsapReel] = useState(null)
     const [hover, setHover] = useState(false)
     const boolAnimation = useRef()     


     const reelDinamic = async (texto) => {
         
          document.querySelector('.reelBoxAnimation .reelAnimation').innerHTML = ''
          let node, node2,textnode
          const reel = document.querySelector('.reelBoxAnimation .reelAnimation')
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
               
               if (document.querySelector('.reelBoxAnimation .reelAnimation div') === null)
                    w_element = 350
               else{
                    w_element = document.querySelector('.reelBoxAnimation .reelAnimation div').clientWidth
               }
               const items = Math.round(pageWidth / w_element)  + 2             
               total_div = w_element * items 
               
               for ( let i=1; i <= (items - 1); i++){
                    node = document.createElement("div")
                    node2 = document.createElement("h4")
                    textnode = document.createTextNode(texto)
                    node.appendChild(node2)
                    node2.appendChild(textnode)
                    reel.appendChild(node)
               }

               _gsapReel.set('.reelBoxAnimation .reelAnimation', {x: (total_div - w_element) })


          }, 10)

          setTimeout(function(){
               _gsapReel.set('.reelBoxAnimation .reelAnimation div', {x: (i) => i * -w_element})
               _gsapReel.set('.reelBoxAnimation', {opacity: 1})
               _gsapReel.to('.reelBoxAnimation .reelAnimation div', {
                    duration: 10,
                    ease: 'none',
                    x: `-=${total_div}`,
                    modifiers:{
                         x: gsap.utils.unitize(x => parseFloat(x) % total_div)
                    },
                    repeat: -1
               })
          }, 15)

          setGsapReel(_gsapReel)
          
     }

     const deletedElementReel = () => {

          document.querySelector('.reelBoxAnimation .reelAnimation').innerHTML = ''
          
          if (gsapReel != null){
               gsapReel.killTweensOf('.reelBoxAnimation .reelAnimation')
               gsapReel.killTweensOf('.reelBoxAnimation .reelAnimation div')
              
               gsapReel.set('.reelBoxAnimation', {opacity: 0})
          }else{
               console.log('no existe')
          }
     }

     const  handleMouseEnter = ( async (texto,id,e) => {
          // console.log(hover)
          await deletedElementReel()
         
          const elementCursor = document.querySelector(`#next-${id} .viewCursor`)
       
          const elem = e.target
          let elemsA =  document.querySelectorAll('.boxNexts a')
          let elmentReel = document.querySelector('.reelBoxAnimation')
          boolAnimation.current.value = "false"

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

     const handleMouseMove = ( (id, e) => {
          const element = document.querySelector(`#next-${id}`)
          const elementCursor = document.querySelector(`#next-${id} .viewCursor`)
          let mouseX = (e.clientX - element.getBoundingClientRect().x) - 40
          let mouseY = (e.clientY - element.getBoundingClientRect().y) - 40
          gsap.to(elementCursor, { x: mouseX, y: mouseY })
     })

     
     const handleMouseLeave = ( async (id,e) => {
          
          await deletedElementReel()
        
          const elementCursor = document.querySelector(`#next-${id} .viewCursor`)
          const elem = e.target
          let elmentReel = document.querySelector('.reelBoxAnimation')
          let elemsA =  document.querySelectorAll('.boxNexts a')

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
     }, [deletedElementReel])

    

     return (
          <div className={styles.nextContainer} id="nextContainer">
               <input type="hidden" ref={boolAnimation} value="true" />
               <div className="container">
                    <div className={styles.titleContainer}>
                         <h2>
                              Always Wondering <br />
                              What's Next
                         </h2>
                    </div>

                    
                    <div className={`reelBoxAnimation ${styles.reelContainer}`}>
                         <div className={`reelAnimation ${styles.reelElement}`}>
                              {/* Contenido Dinamico */}
                         </div>
                    </div>

                    <div 
                         className={`boxNexts ${styles.cardsContainer}`}
                         
                    > 
                         <Link href="/" 
                              className={`linkMouse ${styles.cardItem}`}
                              onMouseEnter={ (e) => handleMouseEnter('Insights', 1, e) }
                              onMouseLeave={ (e) => handleMouseLeave(1,e)}
                              onMouseMove={ (e) =>  handleMouseMove(1, e) }
                              id="next-1"
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
                              onMouseEnter={ (e) => handleMouseEnter('News', 2, e) }
                              onMouseLeave={ (e) => handleMouseLeave(2,e)}
                              onMouseMove={ (e) =>  handleMouseMove(2, e) }
                              id="next-2"
                             
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
                              onMouseEnter={ (e) => handleMouseEnter('Careers', 3, e) }
                              onMouseLeave={ (e) => handleMouseLeave(3,e)}
                              onMouseMove={ (e) =>  handleMouseMove(3, e) }
                              id="next-3"
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
