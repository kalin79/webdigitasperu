import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import styles from  '../../styles/sass/home.module.sass'
import { gsap } from "gsap"


export default function MediaCreativity() {
     let posElementY = useRef(0)
     let cursorScroll = useRef(null)
     let elementCardY = useRef(null)
     let moveScrollY = useRef(0)

     const handleMouseEnter = ( async (id, e) => {
          const elementLabel = document.querySelector(`#card-${id} .labelAnimated`)
          const elementCursor = document.querySelector(`#card-${id} .viewCursor`)
          elementCardY.current = (document.querySelector(`#card-${id}`)).getBoundingClientRect().y
          cursorScroll.current = elementCursor
          gsap.set(elementLabel, { opacity: 0, scale: 0 })
          gsap.to(elementLabel, { opacity: 1, scale: 1, duration: .5 })
          gsap.to(elementCursor, {opacity: 1})
     })

     const handleMouseMove = ( async (id, e) => {
          const element = document.querySelector(`#card-${id}`)
          const elementCursor = document.querySelector(`#card-${id} .viewCursor`)
          let mouseX =  (e.clientX - element.getBoundingClientRect().x) - 40
          let mouseY =  (e.clientY - element.getBoundingClientRect().y) - 40
          posElementY.current = e.clientY
          cursorScroll.current = elementCursor
          moveScrollY.current = mouseY
          gsap.to(elementCursor, { x: mouseX, y: mouseY })
     })

     const handleMouseLeave = ( async (id,e) => {
          const elementCursor = document.querySelector(`#card-${id} .labelAnimated`)
          const elementLabel = document.querySelector(`#card-${id} .viewCursor`)
          gsap.to(elementCursor, { opacity: 0, scale: 0, duration: .5 })
          gsap.to(elementLabel, {opacity: 0})
          cursorScroll.current = null
          elementCardY.current = null
          moveScrollY.current = 0
     })

     const moveViewScroll = () => {
          if (elementCardY.current != null){
               gsap.to(cursorScroll.current, { y: moveScrollY.current })
          }
     }

     const detectMoveScroll = ( () => {
          let scrollPos = 0
          let velocidadScroll = 4
          window.onscroll = function() {
               if ((document.body.getBoundingClientRect()).top > scrollPos){
                    moveScrollY.current = moveScrollY.current - velocidadScroll
                    moveViewScroll()
               }else{
                    moveScrollY.current = moveScrollY.current + velocidadScroll
                    moveViewScroll()
               }
               scrollPos = (document.body.getBoundingClientRect()).top
          }
     })

     useEffect( () => {
          detectMoveScroll()
     }, [])

     return (
          <div className={styles.creativeContainer}>
               <div className='container'>
                    <div className={styles.headerContenedor}>
                         <div>
                              <h2>
                                   Where <br />
                                   Media + Creativity <br />
                                   Work As One.
                              </h2>
                         </div>
                         <div>
                              <p>
                                   In this ad-blocked, always distracted
                                   world, brands that seamlessly connect 
                                   with their audiences at the right time 
                                   and place with the right message are 
                                   the brands that win hearts and minds.
                              </p>
                         </div>
                    </div>

                    <div className={styles.listCard}>
                         <Link
                              href="/"
                              className={`${styles.cardLink}`}
                              onMouseEnter={ (e) => handleMouseEnter(1, e)}
                              onMouseMove={ (e) =>  handleMouseMove(1, e) }
                              onMouseLeave={ (e) => handleMouseLeave(1,e) }
                              id="card-1"
                         >
                              <div 
                                   className={`viewCursor ${styles.viewPointer}`}
                              >
                                   <p>ver</p>
                              </div>
                              <article className={styles.cardMain}>
                                   <div className={`labelAnimated ${styles.labelCard}`}>
                                        <div>
                                             <h3>Connected Campaigns</h3>
                                        </div>
                                        <div>
                                             <h3>Brand Experience</h3>
                                        </div>
                                   </div>
                                   <div className={styles.boxImg}>
                                        <Image  src="/assets/card.jpeg" width={1200} height={800} alt={'card 1'} />
                                   </div>
                                   <div className={styles.bodyCard}>
                                        <div>
                                             <h2>Roll By Good Year</h2>
                                             <p>
                                                  We helped Goodyear transform expectations and disrupt their category with a whole new way to shop for, buy, and install new tires.
                                             </p>
                                        </div>
                                   </div>
                              </article>
                         </Link>
                         <Link
                              href="/"
                              className={`${styles.cardLink}`}
                              onMouseEnter={ (e) => handleMouseEnter(2, e)}
                              onMouseMove={ (e) =>  handleMouseMove(2, e) }
                              onMouseLeave={ (e) => handleMouseLeave(2,e) }
                              id="card-2"
                         >
                              <div 
                                   className={`viewCursor ${styles.viewPointer} ${styles.bgOrange}`}
                              >
                                   <p>ver</p>
                              </div>
                              <article className={styles.cardMain}>
                                   <div className={`labelAnimated ${styles.labelCard}`}>
                                        <div>
                                             <h3>Connected Campaigns</h3>
                                        </div>
                                        <div>
                                             <h3>Brand Experience</h3>
                                        </div>
                                   </div>
                                   <div className={styles.boxImg}>
                                        <Image  src="/assets/card.jpeg" width={1200} height={800} alt={'card 1'} />
                                   </div>
                                   <div className={styles.bodyCard}>
                                        <div>
                                             <h2>Roll By Good Year</h2>
                                             <p>
                                                  We helped Goodyear transform expectations and disrupt their category with a whole new way to shop for, buy, and install new tires.
                                             </p>
                                        </div>
                                   </div>
                              </article>
                         </Link>
                         <Link
                              href="/"
                              className={`${styles.cardLink}`}
                              onMouseEnter={ (e) => handleMouseEnter(3, e)}
                              onMouseMove={ (e) =>  handleMouseMove(3, e) }
                              onMouseLeave={ (e) => handleMouseLeave(3,e) }
                              id="card-3"
                         >
                              <div 
                                   className={`viewCursor ${styles.viewPointer} ${styles.bgMorado}`}
                              >
                                   <p style={{color: styles.colorBlanco}}>ver</p>
                              </div>
                              <article className={styles.cardMain}>
                                   <div className={`labelAnimated ${styles.labelCard}`}>
                                        <div>
                                             <h3>Connected Campaigns</h3>
                                        </div>
                                        <div>
                                             <h3>Brand Experience</h3>
                                        </div>
                                   </div>
                                   <div className={styles.boxImg}>
                                        <Image  src="/assets/card.jpeg" width={1200} height={800} alt={'card 1'} />
                                   </div>
                                   <div className={styles.bodyCard}>
                                        <div>
                                             <h2>Roll By Good Year2</h2>
                                             <p>
                                                  We helped Goodyear transform expectations and disrupt their category with a whole new way to shop for, buy, and install new tires.
                                             </p>
                                        </div>
                                   </div>
                              </article>
                         </Link>
                         <Link
                              href="/"
                              className={`${styles.cardLink}`}
                              onMouseEnter={ (e) => handleMouseEnter(4, e)}
                              onMouseMove={ (e) =>  handleMouseMove(4, e) }
                              onMouseLeave={ (e) => handleMouseLeave(4,e) }
                              id="card-4"
                         >
                              <div 
                                   className={`viewCursor ${styles.viewPointer} ${styles.bgAzulClaro}`}
                              >
                                   <p style={{color: styles.colorBlanco}}>ver</p>
                              </div>
                              <article className={styles.cardMain}>
                                   <div className={`labelAnimated ${styles.labelCard}`}>
                                        <div>
                                             <h3>Connected Campaigns</h3>
                                        </div>
                                        <div>
                                             <h3>Brand Experience</h3>
                                        </div>
                                   </div>
                                   <div className={styles.boxImg}>
                                        <Image  src="/assets/card.jpeg" width={1200} height={800} alt={'card 1'} />
                                   </div>
                                   <div className={styles.bodyCard}>
                                        <div>
                                             <h2>Roll By Good Year2</h2>
                                             <p>
                                                  We helped Goodyear transform expectations and disrupt their category with a whole new way to shop for, buy, and install new tires.
                                             </p>
                                        </div>
                                   </div>
                              </article>
                         </Link>
                    </div>
               </div>
          </div>
     )
}
