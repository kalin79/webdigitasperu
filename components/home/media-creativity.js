import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from  '../../styles/sass/home.module.sass'

import { gsap } from "gsap"


export default function MediaCreativity() {
     // const viewCursor = useRef()

     let  element,
          elementLabel,
          elementCursor
     
     let  mouseX = 0,
          mouseY = 0,
          posElementY = 0

     const handleMouseEnter = ( (id, e) => {
          element = document.querySelector(`#card-${id}.linkMouse`)
          elementLabel = document.querySelector(`#card-${id} .labelAnimated`)
          elementCursor = document.querySelector(`#card-${id} .viewCursor`)

          gsap.set(elementCursor, { opacity: 0, scale: 0 })
          gsap.to(elementCursor, { opacity: 1, scale: 1, duration: .5 })
          gsap.to(elementLabel, {opacity: 1})
     })

     const handleMouseMove = ( (id, e) => {
          element = document.querySelector(`#card-${id}`)
          elementCursor = document.querySelector(`#card-${id} .viewCursor`)
          mouseX = (e.clientX - element.getBoundingClientRect().x) - 40
          mouseY = (e.clientY - element.getBoundingClientRect().y) - 40
          posElementY = element.offsetTop
          console.log('x',element.getBoundingClientRect().x)
          console.log('y',element.offsetTop)
          console.log('mx',mouseY)
          console.log('my',e.pageY)
          gsap.to(elementCursor, { x: mouseX, y: mouseY })
          // console.log(id)
     })

     const handleMouseLeave = ( (id,e) => {
          elementLabel = document.querySelector(`#card-${id} .labelAnimated`)
          elementCursor = document.querySelector(`#card-${id} .viewCursor`)
          gsap.to(elementCursor, { opacity: 0, scale: 0, duration: .5 })
          gsap.to(elementLabel, {opacity: 0})
     })
     

     const detectMoveScroll = ( () => {
          window.onscroll = function() {
               let scrollY = window.scrollY + 350
               let moveScrollY = scrollY - posElementY
               if (elementCursor != undefined)
                    gsap.to(elementCursor, { y: moveScrollY })
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
                         <Link href="/"
                              className={`linkMouse ${styles.cardLink}`}
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
                                   <div className={`${styles.boxImg} ${styles.imgmMain}`}>
                                        <Image  src="/assets/card.jpeg" width={1200} height={800} alt={'card 1'} />
                                   </div>
                              </article>
                         </Link>
                         <div className={styles.itemsCards}>
                              <div className={styles.itemBox}>
                                   <Link href="/" className={`${styles.item} ${styles.notSeparate}`}>
                                        <h2>Roll By Good Year</h2>
                                        <p>
                                             We helped Goodyear transform expectations and disrupt their category with a whole new way to shop for, buy, and install new tires.
                                        </p>
                                   </Link>

                                   <Link href="/" 
                                        className={`linkMouse ${styles.item}`}
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
                                             <h2>Roll By Good Year</h2>
                                             <p>
                                                  We helped Goodyear transform expectations and disrupt their category with a whole new way to shop for, buy, and install new tires.
                                             </p>
                                        </article>
                                   </Link>
                              </div>
                              <div className={styles.itemBox}>
                                   <Link href="/" 
                                        className={`linkMouse ${styles.item}`}
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
                                             <h2>Roll By Good Year</h2>
                                             <p>
                                                  We helped Goodyear transform expectations and disrupt their category with a whole new way to shop for, buy, and install new tires.
                                             </p>
                                        </article>
                                   </Link>
                                   <Link href="/" 
                                        className={`linkMouse ${styles.item}`}
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
                                             <h2>Roll By Good Year</h2>
                                             <p>
                                                  We helped Goodyear transform expectations and disrupt their category with a whole new way to shop for, buy, and install new tires.
                                             </p>
                                        </article>
                                   </Link>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )
}