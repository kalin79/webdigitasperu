import {useRef, useEffect} from 'react'

import styles from  '../../styles/sass/home.module.sass'
import { gsap } from "gsap"
export default function Reel() {
     const newsRef = useRef()
     useEffect( () => {
          const elements = newsRef.current.children
          let _stagger = 8
          let animation = gsap.timeline({
               repeat: -1
          })
          // console.log(elements)
          animation
               .fromTo(elements,{opacity: 0, y: 40}, {opacity: 1, y: 0, stagger: _stagger, delay: 1} )
               .to(elements, {y:-40, opacity: 0, stagger: _stagger} , '-=.5' )
     }, [])
     return (
          <>
               <div
                    ref={newsRef}
                    className={styles.newsContainer}
               >
                    <div 
                         className={styles.content}
                    >
                         <div className={styles.conentElements}>
                              <p>Bienvenido a Digitas Peru, conoce nuestras proyectos</p>
                         </div>
                    </div>
                    <div
                         className={styles.content}
                    >
                         <div className={styles.conentElements}>
                              <p>Te inivtamos conocer a nuestro Directores</p>
                         </div>
                    </div>
               </div>
          </>
     )
}
