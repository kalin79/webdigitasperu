import { useState, useEffect, useRef } from 'react'

import Image from 'next/image'


import styles from  '../../styles/sass/home.module.sass'

import { gsap } from "gsap"


export default function OpenBold() {
     
     const boolAnimation = useRef(false) 
     const totalPage = useRef(0) 
     const pageActive = useRef(0) 
     const gallery = useRef(null) 
     const galleryMouse = useRef(null)     
     const intervalRef = useRef(null)


     const ActualizarGalleria = (()=> {
          const galleryItems = gallery.current.children
          const tl = gsap.timeline()
          if (pageActive.current <= totalPage.current ){
               tl
                    .to(galleryItems, {opacity: (i) => { return animarImagenes(i) } })
          }else{
               pageActive.current = 1
               tl
                    .to(galleryItems, {opacity: (i) => { return animarImagenes(i) } })
          }
     })

     const handleClickGallery = ( () => {
          pageActive.current = pageActive.current+1
          clearInterval(intervalRef.current)
          ActualizarGalleria()
          progressBar()
     })

     function animarImagenes(i){
          
          const inferior = (pageActive.current === 1) ? 0 : ((pageActive.current*5) - 5)
          const superior = (pageActive.current === 1) ? 5 : (pageActive.current*5) 

          // console.log('inferior', inferior)
          // console.log('superior', superior)
          // console.log('i', i)

          if ((inferior <= i) && (i < superior)){
               return 1
          }else{
               return 0
          }
     }

     const reinicarGallery = ( () => {
          clearInterval(intervalRef.current)
          pageActive.current = pageActive.current + 1
          ActualizarGalleria()
          setTimeout( ()=>{
               progressBar()
          },500)
     })

     const progressBar = ( ()=> {

          const circularBoxProgress = galleryMouse.current.children[0]

          const speed = 100
          let progressValue = 0
          let progressEndValue = 100
          
          circularBoxProgress.style.background = `conic-gradient(#ffffff 3.6deg, #d800ba 0deg )`

          intervalRef.current = setInterval( ()=> {

               progressValue++
               if (progressValue === progressEndValue){
                    reinicarGallery()
               }else{
                    gsap.to(circularBoxProgress, { background: `conic-gradient(#ffffff ${progressValue * 3.6}deg, #d800ba ${progressValue * 3.6}deg )` })
               }
          },speed)
         
     })

     const initGallery = ( () => {
          const galleryItems = gallery.current.children
          
          const circularBoxProgress = galleryMouse.current.children[0]
          const elementContenedorCursor = galleryMouse.current
          
          let mouseX = 0
          let mouseY = 0

          boolAnimation.current = true
          
          pageActive.current = 1

          totalPage.current = Math.round(galleryItems.length) / 5 
          gsap.set(galleryItems, {opacity: (i) => { return animarImagenes(i) } })
          
          mouseX = Math.round(elementContenedorCursor.clientWidth / 2)
          mouseY = 60
 
          gsap.to(circularBoxProgress, { x: mouseX, y: mouseY })

          progressBar()
     })

     const  handleMouseEnter = ( async (e) => {
          const elementContenedorCursor = galleryMouse.current
          const circularBoxProgress = galleryMouse.current.children[0]

          let mouseX = Math.round(elementContenedorCursor.clientWidth / 2)
          let mouseY = 60
          gsap.to(circularBoxProgress, { x: mouseX, y: mouseY })
     })

     const handleMouseMove = ( (e) => {
          const elementContenedorCursor = galleryMouse.current
          const circularBoxProgress = galleryMouse.current.children[0]

          let mouseX = (e.clientX - elementContenedorCursor.getBoundingClientRect().x) - 40
          let mouseY = (e.clientY - elementContenedorCursor.getBoundingClientRect().y) - 40

          gsap.to(circularBoxProgress, { x: mouseX, y: mouseY })
     
     })

     
     const handleMouseLeave = ( (id,e) => {
          const elementContenedorCursor = galleryMouse.current
          const circularBoxProgress = galleryMouse.current.children[0]
          let mouseX = Math.round(elementContenedorCursor.clientWidth / 2)
          let mouseY = 60 
          gsap.to(circularBoxProgress, { x: mouseX, y: mouseY })
          
     })

     useEffect( () => {
          if (!boolAnimation.current){
               initGallery()
          }
     },[])

    

    

     return (
          <>
               <div id="homeOpenBold" className={styles.homeOpenBold}>
                    <div className="container">
                         <div className={styles.titleMain}>
                              <h2>We're Open,<br /> Bold & <span>Curious</span></h2>
                              <h3>Nunc, imperdiet consequat, aliquam mattis. Leo in nulla senectus.</h3>
                         </div>
                         <div 
                              className={`galleryMouse ${styles.galleryMouse}`}
                              onMouseEnter={ (e) => handleMouseEnter(e) }
                              onMouseLeave={ (e) => handleMouseLeave(e)}
                              onMouseMove={ (e) =>  handleMouseMove(e) }
                              ref={galleryMouse}
                         >
                              <div 
                                   className={`circularBoxProgress ${styles.circularBoxProgress}`}
                                   onClick={handleClickGallery}
                              >
                                   <div className={`circularProgress ${styles.circularProgress}`}>
                                        <div className={styles.progressValue}>
                                             <Image src="/assets/svg/icons/refresh.svg" alt="refresh galleria" width={24} height={20} />
                                        </div>
                                   </div>
                              </div>
                              <div 
                                   className={`gallery ${styles.gallery}`}
                                   ref={gallery}
                              >
                                   <div className={`item ${styles.item}`}>
                                        <div className={`${styles.contentImg}`}>
                                             <Image src="/assets/gallery/g1.jpeg" alt="galeria 1" width={800} height={600} />
                                        </div>
                                   </div>
                                   <div className={`item ${styles.item}`}>
                                        <div className={`${styles.contentImg}`}>
                                             <Image src="/assets/gallery/g2.jpeg" alt="galeria 1" width={800} height={600} />
                                        </div>
                                   </div>
                                   <div className={`item ${styles.item}`}>
                                        <div className={`${styles.contentImg}`}>
                                             <Image src="/assets/gallery/g3.jpeg" alt="galeria 1" width={800} height={600} />
                                        </div>
                                   </div>
                                   <div className={`item ${styles.item}`}>
                                        <div className={`${styles.contentImg}`}>
                                             <Image src="/assets/gallery/g4.jpeg" alt="galeria 1" width={800} height={600} />
                                        </div>
                                   </div>
                                   <div className={`item ${styles.item}`}>
                                        <div className={`${styles.contentImg}`}>
                                             <Image src="/assets/gallery/g5.jpeg" alt="galeria 1" width={800} height={600} />
                                        </div>
                                   </div>
                                   <div className={`item ${styles.item}`}>
                                        <div className={`${styles.contentImg}`}>
                                             <Image src="/assets/gallery/g6.jpeg" alt="galeria 1" width={800} height={600} />
                                        </div>
                                   </div>
                                   <div className={`item ${styles.item}`}>
                                        <div className={`${styles.contentImg}`}>
                                             <Image src="/assets/gallery/g7.jpeg" alt="galeria 1" width={800} height={600} />
                                        </div>
                                   </div>
                                   <div className={`item ${styles.item}`}>
                                        <div className={`${styles.contentImg}`}>
                                             <Image src="/assets/gallery/g8.jpeg" alt="galeria 1" width={800} height={600} />
                                        </div>
                                   </div>
                                   <div className={`item ${styles.item}`}>
                                        <div className={`${styles.contentImg}`}>
                                             <Image src="/assets/gallery/g9.jpeg" alt="galeria 1" width={800} height={600} />
                                        </div>
                                   </div>
                                   <div className={`item ${styles.item}`}>
                                        <div className={`${styles.contentImg}`}>
                                             <Image src="/assets/gallery/g10.jpg" alt="galeria 1" width={800} height={600} />
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>    
          </>
     )
}
