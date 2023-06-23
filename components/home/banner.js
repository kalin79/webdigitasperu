import {useRef, useEffect} from 'react'
// import Image from 'next/image'
import styles from  '../../styles/sass/home.module.sass'

import { gsap } from "gsap"

export default function Banner() {
     return (
          <>
               <div className={styles.heroBanner}>
                    <div className="containerGrid fullHeight">
                         <div className={styles.heroContainer}>
                              <div className={styles.contentCenter}>
                                   <h1>Somos Digitas<br /> <span>Perú</span></h1>
                              </div>
                         </div>
                    </div>
               </div>
          </>
     )
}
