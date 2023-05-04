import Image from 'next/image'
import Link from 'next/link'

import styles from  '../styles/sass/footer.module.sass'

import { Raleway } from '@next/font/google'

const raleway = Raleway({
  weight: ['300'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})


export default function Footer() {
     return (
          <footer className={styles.footer}>
               <div className={styles.fondoNegro}>
                    <div className="container">
                         <div className={styles.containerGrid}>
                              <div className={styles.formContainer}>
                                   <h3>Make a Connection</h3>
                                   <div className={styles.sedesContainer}>
                                        <div>
                                             <h4>NEW BUSINESS</h4>
                                             <div className={styles.boxInfo}>
                                                  <h2>Michelle Tang</h2>
                                                  <p>CHIEF MARKETING OFFICER</p>
                                             </div>
                                             
                                             <a href="mailto:" target="_blank" className={styles.buttonBox}>
                                                  <div className={styles.btnInfo}>
                                                       <Image  src="/assets/svg/icons/arrow.svg" width={40} height={50} alt='Michelle@digitas.com' />
                                                       <span>Michelle.tang@digitas.com.pe</span>
                                                  </div>
                                             </a>
                                        </div>
                                        <div></div>
                                        <div>
                                             <h4>MEDIA INQUIRIES</h4>
                                             <div className={styles.boxInfo}>
                                                  <h2>Willa Robertson</h2>
                                                  <p>CORPORATE COMMUNICATIONS</p>
                                             </div>
                                             
                                             <a href="mailto:" target="_blank" className={styles.buttonBox}>
                                                  <div className={styles.btnInfo}>
                                                       <Image  src="/assets/svg/icons/arrow.svg" width={40} height={50} alt='Michelle@digitas.com' />
                                                       <span>Willa.Robertson@digitas.com.pe</span>
                                                  </div>
                                             </a>
                                        </div>
                                   </div>
                                   <div className={styles.formBox}>
                                        <form>
                                             <label><span>Let’s connect</span></label>
                                             <input type="text" placeholder="Your Email" />
                                             <div className={styles.boxButton}>
                                                  <button type="submit">
                                                       <div className={styles.btnInfo}>
                                                            <Image  src="/assets/svg/icons/arrow.svg" width={40} height={50} alt='Michelle@digitas.com' />
                                                            <span>Submit</span>
                                                       </div>
                                                  </button>
                                             </div>
                                             <div className={styles.boxLegal}>
                                                  <div>
                                                       <input type="checkbox"  />
                                                       <label>Yes, I would like to receive email communications from Digitas. I can unsubscribe at any time.</label>
                                                  </div>
                                                  <div>
                                                       <p>
                                                       By providing us with your personal data, you agree to the processing of this information by Digitas as described in our <Link href="">Privacy Notice.</Link>
                                                       </p>
                                                  </div>
                                             </div>
                                        </form>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
               <div className={styles.footerMenu}>
                    <div className="container">
                         <div className={styles.navMain}>
                              <div>
                                   <Image  src="/assets/svg/icons/logo-unicorn.svg" width={40} height={50} alt='Digitas Peru 2023' />
                              </div>
                              <div>
                                   <h2 className={raleway.className}>Follow  us</h2>
                                   <ul>
                                        <li>
                                             <a href="" target="_blank">Linkedn</a>
                                        </li>
                                        <li>
                                             <a href="" target="_blank">Twitter</a>
                                        </li>
                                        <li>
                                             <a href="" target="_blank">Instagram</a>
                                        </li>
                                   </ul>
                              </div>
                              <div>
                                   <Link href="" className={raleway.className}>Work</Link>
                                   <Link href="" className={raleway.className}>Expertise</Link>
                                   <Link href="" className={raleway.className}>About</Link>
                                   <Link href="" className={raleway.className}>Careers</Link>
                              </div>
                         </div>
                         <div className={styles.copyBox}>
                              <div>
                                   <Link href="">presroom</Link>
                              </div>
                              <div></div>
                              <div>
                                   <div className={styles.navCopy}>
                                        <p>@2023 Digitas Per&uacute;</p>
                                        <div className={styles.separate}></div>
                                        <p>A publicis groupe company</p>
                                        <div className={styles.separate}></div>
                                        <Link href="">Privacy</Link>
                                        <div className={styles.separate}></div>
                                        <Link href="">Terms of use</Link>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </footer>
     )
}
