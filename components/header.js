import { useEffect, useRef } from 'react'
import { useRouter } from 'next/router'

import Image from 'next/image'
import Link from 'next/link'

import styles from  '../styles/sass/header.module.sass'

// import { CSSRulePlugin } from "gsap/CSSRulePlugin"


import { gsap } from "gsap"

// import { gsap } from 'gsap/dist/gsap.js'

// import { CSSRulePlugin } from 'gsap/dist/CSSRulePlugin.js'




export default function Header() {
     // gsap.registerPlugin(CSSRulePlugin)

     const btnMenu = useRef(null)
     const btnMenuBool = useRef(false)
     const router = useRouter()
     const curtain = useRef(null)
     const inner = useRef(null)
     const nav = useRef(null)
     const headerNav = useRef(null)
     const handleOpenNav = ( (e) => {
          const tl = gsap.timeline()
          if (!btnMenuBool.current) {
               btnMenuBool.current = true
               headerNav.current.style.overflow = "visible"
               tl.set(curtain.current,{y: "-100vh"})
               tl.set(inner.current,{y: "-100vh"})
               tl.set(nav.current.children,{opacity: 0})
               tl.add('start')
               tl.to(curtain.current,{y: "200vh", duration: 1})
               tl.to(inner.current,{y: "100vh", duration: .5},'start+=.25')
               tl.to(nav.current.children, {opacity: 1, stagger: .2, duration: .2},'start+=.5')
               
               gsap.set(btnMenu.current,{rotation: 45})
               gsap.set(btnMenu.current.children[1],{width: 0})
               gsap.set(btnMenu.current.children[0],{y: 3, x: 6, width: "24px"})
               gsap.set(btnMenu.current.children[2],{y: -9, x: 6, width: "24px"})
               gsap.to(btnMenu.current.children[0],{rotation: 0})
               gsap.to(btnMenu.current.children[2],{rotation: 90})


               
          }else{
               btnMenuBool.current = false  
               
               tl.add('start')
               tl.to(nav.current.children, {opacity: 0, stagger: .2, duration: .2})
               tl.add('end')
               tl.to(inner.current,{y: "-100vh", duration: 1},'end')
               tl.to(curtain.current,{y: "-100vh", duration: 1},'end')
               
               gsap.set(btnMenu.current,{rotation: 0})
               gsap.set(btnMenu.current.children[0],{y: 0, x: 0, width: "2rem"})
               gsap.set(btnMenu.current.children[2],{y: 0, x: 0, width: "2rem"})
               gsap.to(btnMenu.current.children[0],{rotation: 0})
               gsap.to(btnMenu.current.children[2],{rotation: 0})
               gsap.to(btnMenu.current.children[1],{width: "60%"})
               setTimeout( () => {
                    headerNav.current.style.overflow = "hidden"
               },1000)
          }
     })

     


     return (
          <>
               
               <header 
                    className={`containerGrid ${styles.headerMain} headerElement`}
                    ref={headerNav}
               >
                    <div ref={curtain} className={styles.curtain}></div>
                    <div ref={inner} className={styles.inner}></div>
                    <div className={styles.headerLeft}>
                         <Link href="/" className={styles.imgLink}>
                              <Image src="/assets/svg/logo-digitas.svg" height={30} width={30} alt='Digitas Peru :: Logo'  />
                         </Link>
                         <nav
                              ref={nav}
                         >
                              <Link href="/work" className={ router.pathname === '/work' ? styles.active : '' }>
                                   Work
                              </Link>
                              <Link href="/expertise" className={ router.pathname === '/expertise' ? styles.active : '' }>
                                   Expertise
                              </Link>
                              <Link href="/about" className={ router.pathname === '/about' ? styles.active : '' }>
                                   About
                              </Link>
                              <Link href="/careers" className={ router.pathname === '/careers' ? styles.active : '' }>
                                   Careers
                              </Link>
                              <Link href="/Contactenos" className={styles.btnContact}>
                                   Contáctenos
                              </Link>
                         </nav>
                    </div>
                    <div className={styles.headerRight}>
                         <Link href="/Contactenos" className={styles.btnContact}>
                              Contáctenos
                         </Link>
                         <button type="button" className={styles.itemSearch}>
                              <Image src="/assets/svg/icons/search.svg" width={30} height={13} alt='Digitas Peru :: buscar'  />
                         </button>
                         <div 
                              className={styles.navMovil} 
                              onClick={ handleOpenNav }
                              ref={btnMenu}
                         >
                             <div></div> 
                             <div></div> 
                             <div></div> 
                         </div>
                    </div>
               </header>
          </>
     )
}
