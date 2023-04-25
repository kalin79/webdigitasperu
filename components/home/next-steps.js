import { useEffect } from 'react'

import Link from 'next/link'
import Image from 'next/image'

import styles from  '../../styles/sass/home.module.sass'

import { gsap } from "gsap"

export default function NextSteps() {

     let animationReel = gsap

     let boolAnimation = false

     let  elementCursor,
          element
     
     let  mouseX = 0,
          mouseY = 0

     const reelDinamic = (texto) => {
         
          document.querySelector('.reelBoxAnimation .reelAnimation').innerHTML = ''
          let node, node2,textnode
          const reel = document.querySelector('.reelBoxAnimation .reelAnimation')
          const pageWidth  = document.documentElement.scrollWidth
          let w_element = 0
          let total_div = 0
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

               animationReel.set('.reelBoxAnimation .reelAnimation', {x: (total_div - w_element) })


          }, 10)

          setTimeout(function(){
               animationReel.set('.reelBoxAnimation .reelAnimation div', {x: (i) => i * -w_element})
               animationReel.set('.reelBoxAnimation', {opacity: 1})
               animationReel.to('.reelBoxAnimation .reelAnimation div', {
                    duration: 10,
                    ease: 'none',
                    x: `-=${total_div}`,
                    modifiers:{
                         x: gsap.utils.unitize(x => parseFloat(x) % total_div)
                    },
                    repeat: -1
               })
          }, 15)
          
     }

     const deletedElementReel = (e) => {
          document.querySelector('.reelBoxAnimation .reelAnimation').innerHTML = ''
          if (typeof animationReel != "undefined"){
               animationReel.killTweensOf('.reelBoxAnimation .reelAnimation')
               animationReel.killTweensOf('.reelBoxAnimation .reelAnimation div')
              
               animationReel.set('.reelBoxAnimation', {opacity: 0})
          }else{
               console.log('no existe')
          }
     }

     const  handleMouseEnter = ( async (texto,id,e) => {
          // console.log(texto)
          await deletedElementReel()
          if (!boolAnimation) {
               boolAnimation = true
               const elem = e.target
               let elemsA =  document.querySelectorAll('.boxNexts a')
               let elmentReel = document.querySelector('.reelBoxAnimation')
               // gsap.set(elem,{zIndex: 10})
               await elemsA.forEach((element) => {
                    element.classList.add('isOpacity')
                    element.style.zIndex = 2
               })
               elem.style.zIndex = 10
               elmentReel.style.zIndex = 3
               // console.log(elemsA)
               reelDinamic(texto)
               

               // animacion del ver
               elementCursor = document.querySelector(`#next-${id} .viewCursor`)

               gsap.set(elementCursor, { opacity: 0, scale: 0 })
               gsap.to(elementCursor, { opacity: 1, scale: 1, duration: .5 })

          }


     })

     const handleMouseMove = ( (id, e) => {
          element = document.querySelector(`#next-${id}`)
          elementCursor = document.querySelector(`#next-${id} .viewCursor`)
          mouseX = (e.clientX - element.getBoundingClientRect().x) - 40
          mouseY = (e.clientY - element.getBoundingClientRect().y) - 40

          // console.log('x',element.getBoundingClientRect().x)
          // console.log('y',element.offsetTop)
          // console.log('bloqueX',element.getBoundingClientRect().x)
          // console.log('bloqueY',element.getBoundingClientRect().y)
          // console.log('clientX',e.clientX)
          // console.log('clientY',e.clientY)

          gsap.to(elementCursor, { x: mouseX, y: mouseY })
          // console.log(id)
     })

     
     const handleMouseLeave = ( (id,e) => {

          if (boolAnimation){
               boolAnimation = false
               const elem = e.target
               let elmentReel = document.querySelector('.reelBoxAnimation')
               // console.log(animationReel)
               elem.style.zIndex = 2
               elmentReel.style.zIndex = 0
               deletedElementReel()
               let elemsA =  document.querySelectorAll('.boxNexts a')
               elemsA.forEach((element) => {
                    element.classList.remove('isOpacity')
               })
               elementCursor = document.querySelector(`#next-${id} .viewCursor`)
               gsap.to(elementCursor, { opacity: 0, scale: 0, duration: .5 })
          }
     })

     return (
          <div className={styles.nextContainer} id="nextContainer">
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
