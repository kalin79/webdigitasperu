import { useState, useEffect } from 'react'

import Image from 'next/image'


import styles from  '../../styles/sass/home.module.sass'

import { gsap } from "gsap"


export default function OpenBold() {
     
     const [boolAnimation, setBoolAnimation] = useState(true)

     const [totalPage, setTotalPage] = useState(0)
     const [pageActive, setPageActive] = useState(0)
     
 


     const ActualizarGalleria = (()=> {
          const galleryItems = document.querySelectorAll('#homeOpenBold .gallery .item')
          console.log('pageActive',pageActive)
          console.log('totalPage',totalPage)
          if (pageActive <= totalPage ){
               const tl = gsap.timeline()
               tl
                    .to(galleryItems, {opacity: (i) => { return animarImagenes(i,(pageActive-1), 1) } })
                    .to(galleryItems,{opacity: (i) => { return animarImagenes(i,pageActive, 1) } })
          }else{
               setPageActive(1)
               const tl = gsap.timeline()
               tl
                    .to(galleryItems, {opacity: (i) => { return animarImagenes(i,(1), 1) } })
                    .to(galleryItems,{opacity: (i) => { return animarImagenes(i,pageActive, 1) } })
          }
     })

     const handleClickGallery = ( async () => {
          await setPageActive(pageActive+1)
          clearInterval(progress)
          await ActualizarGalleria()
          progressBar()
     })

     function animarImagenes(i,page, opacity){
          if (page === 1){
               if (i < 5){
                    return opacity
               }else{
                    return 0
               }
          }else{
               if ((i >= ((page - 1) * 5) && ( i < (page*5))) ) {
                    return opacity
               }
               else{
                    return 0
               }
          }
          
     }

     const reinicarGallery = ( () => {
          progressBar()
     })

     const progressBar = ( ()=> {

          const circularBoxProgress = document.querySelector('#homeOpenBold .circularBoxProgress')
          const speed = 100
          let progressValue = 0
          let progressEndValue = 100
          
          circularBoxProgress.style.background = `conic-gradient(#ffffff 3.6deg, #d800ba 0deg )`

          let progress = setInterval( async ()=> {
               progressValue++
               if (progressValue === progressEndValue){
                    await clearInterval(progress)
                    await setPageActive(pageActive+1)
                    ActualizarGalleria()
                    setTimeout( ()=>{
                         reinicarGallery()
                    },1000)
               }else{
                    gsap.to(circularBoxProgress, { background: `conic-gradient(#ffffff ${progressValue * 3.6}deg, #d800ba ${progressValue * 3.6}deg )` })
               }
               // console.log(progressValue) 
          },speed)
         
     })

     const initGallery = ( () => {
          const galleryItems =  document.querySelectorAll('#homeOpenBold .gallery .item')
          const elementCursor = document.querySelector('#homeOpenBold .galleryMouse .circularBoxProgress')
          const elementContenedorCursor = document.querySelector('#homeOpenBold .galleryMouse')
          let mouseX = 0
          let mouseY = 0
          setTotalPage(Math.round(galleryItems.length) / 5 )
          gsap.set(galleryItems, {opacity: (i) => { return animarImagenes(i,1, 1) } })
          
          mouseX = Math.round(elementContenedorCursor.clientWidth / 2)
          mouseY = 60
 
          gsap.to(elementCursor, { x: mouseX, y: mouseY })

          progressBar()
     })

     const  handleMouseEnter = ( async (e) => {
          const elementContenedorCursor = document.querySelector('#homeOpenBold .galleryMouse')
          const elementCursor = document.querySelector('#homeOpenBold .galleryMouse .circularBoxProgress')
          let mouseX = Math.round(elementContenedorCursor.clientWidth / 2)
          let mouseY = 60
          gsap.to(elementCursor, { x: mouseX, y: mouseY })
     })

     const handleMouseMove = ( (e) => {
          const elementContenedorCursor = document.querySelector('#homeOpenBold .galleryMouse')
          const elementCursor = document.querySelector('#homeOpenBold .galleryMouse .circularBoxProgress')

          let mouseX = (e.clientX - elementContenedorCursor.getBoundingClientRect().x) - 40
          let mouseY = (e.clientY - elementContenedorCursor.getBoundingClientRect().y) - 40

          gsap.to(elementCursor, { x: mouseX, y: mouseY })
     
     })

     
     const handleMouseLeave = ( (id,e) => {
          const elementContenedorCursor = document.querySelector('#homeOpenBold .galleryMouse')
          const elementCursor = document.querySelector('#homeOpenBold .galleryMouse .circularBoxProgress')
          let mouseX = Math.round(elementContenedorCursor.clientWidth / 2)
          let mouseY = 60 
          gsap.to(elementCursor, { x: mouseX, y: mouseY })
          
     })

     useEffect( () => {
          if (boolAnimation){
               setBoolAnimation(false)
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
                              <div className={`gallery ${styles.gallery}`}>
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
