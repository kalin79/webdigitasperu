import {useRef, useEffect} from 'react'
// import Image from 'next/image'

import styles from  '../../styles/sass/reel.module.sass'
import { gsap } from "gsap"

export default function Reel() {
     const reelRef = useRef()
     const boolInitDOM = useRef(true)
     let _totalAncho = useRef(0)
     let _totalAnchoAnterior = useRef(0)
     let _totalItems = useRef(0)
     // let _arrItems = useRef(null)

     const alinearItems = ( (i,item) => {
          if (i===0){
               _totalAnchoAnterior.current = 0
               _totalAncho.current = item[i].clientWidth
               return 0
          }else{
               _totalAncho.current = _totalAncho.current + _totalAnchoAnterior.current
               _totalAnchoAnterior.current = item[i].clientWidth
               return (1 * _totalAncho.current)
          }
     })

     const clonarReel = ( () => {
          const items = (reelRef.current.children[0]).children
          const contenedor = reelRef.current.children[0]
          for (let i=0; i<_totalItems.current ; i++){ 
               const div = document.createElement("div")
               div.innerHTML = (items[i].children[0]).outerHTML
               contenedor.appendChild(div)
          }
          
     })

     const ejecutarReel = ( async () => {
          const anchoContendor = (reelRef.current).clientWidth
          const items = (reelRef.current.children[0]).children
          const primerElemento = (-1) * items[0].clientWidth
          const ultimoElemento = (1) * items[items.length-1].clientWidth
          let anchoItems = 0
          for (let i=0; i<items.length; i++){
               anchoItems = anchoItems + items[i].clientWidth
          }
          
          if (anchoItems > anchoContendor){
               setTimeout(  function(){
                    
                    gsap.set(items,{x: (i) => { return alinearItems(i, items)} })
                    gsap.set(reelRef.current.children[0],{x: primerElemento })
     
                    gsap.to(items, {
                         duration: 40,
                         ease: "none",
                         x: `+=${anchoItems}`, //move each box 500px to right
                         modifiers: {
                              x: gsap.utils.unitize(x => parseFloat(x) % anchoItems ) //force x value to be between 0 and 500 using modulus
                         },
                         repeat: -1
                    })

               }, 100) 
               
               
          }else{
               await clonarReel()
               ejecutarReel()
          }
           
     })
     useEffect( () => {
          // console.log(boolInitDOM.current)
          if (boolInitDOM.current){
               const items = (reelRef.current.children[0]).children
               boolInitDOM.current = false
               _totalItems.current = items.length
               clonarReel()
               setTimeout(  function(){
                    ejecutarReel()
               },200)
          }
          
     }, [])
     return (
          <>
               <div
                    ref={reelRef}
                    className={styles.reelMainContainer}
               >
                    <div 
                         className={styles.reelItems}
                    >
                         <div>
                              <p>Digitas wins best digital network & best media network at campaign us agency of the year awards</p>
                         </div>
                         <div>
                              <h3>New</h3>
                         </div>
                         <div>
                              <p>Welcoming Gareth johson as the new executive account director </p>
                         </div>
                         <div>
                              <h3>Awards</h3>
                         </div>
                    </div>
               </div>
          </>
     )
}
