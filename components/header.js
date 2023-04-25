import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from  '../styles/sass/header.module.sass'
export default function Header() {
     const router = useRouter()
     return (
          <>
               <header className={styles.headerMain}>
                    <div className={styles.headerLeft}>
                         <Link href="/" className={styles.imgLink}>
                              <Image src="/assets/svg/logo-digitas.svg" height={30} width={30} alt='Digitas Peru :: Logo'  />
                         </Link>
                         <nav>
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
                         </nav>
                    </div>
                    <div className={styles.headerRight}>
                         <Link href="/Contactenos" className={`btn-rounded btn-bg-black`}>
                              Contáctenos
                         </Link>
                         <button type="button" className={`btn-circle ${styles.itemSearch}`}>
                              <Image src="/assets/svg/icons/search.svg" width={30} height={13} alt='Digitas Peru :: buscar'  />
                         </button>
                    </div>
               </header>
          </>
     )
}
