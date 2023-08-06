"use client"

import Link from 'next/link'
import React from "react";
import {  motion } from "framer-motion";


export const SocialMediaLinks = () => {

    const facebook_link="https://www.facebook.com/eibaa.abutaha";
    const instagram_link="https://www.instagram.com/eiba_abutaha";
    const telegram_link="https://t.me/eibaabutaha";
    const whatsapp_link="https://wa.me/+972598183137";
    const tiktok_link="https://www.tiktok.com/@eiba_abutaha";
    const spotify_link="https://open.spotify.com/show/7nDHB7lyMd1GBwz5pxapzy";
    
  return (
    <>
    <motion.div
    className="socialLinks"
    
    initial={{
      y:'50',
      opacity: 0,
      transition:{ ease: "easeIn", type:'tween', duration: 0.5, delay:1.5}
      
    }}

    animate={{
      y:0,
      opacity: 1,
      transition:{ ease: "easeIn",type:'tween', duration: 0.5, delay:1.5}
      
    }}
   
    
    

    whileHover={{
      scale:"1.3",
      transition:{ ease: "easeIn",type:'tween',duration: 0, delay:0}
    }}
    >
        
            <Link href={facebook_link}><i className="fa-brands fa-facebook rounded-circle m-2 text-center " /></Link>
            <Link href={instagram_link}><i className="fa-brands fa-instagram rounded-circle m-2 text-center" /></Link>
            <Link href={telegram_link}><i className="fa-brands fa-telegram rounded-circle m-2 text-center" /></Link>
            <Link href={whatsapp_link}><i className="fa-brands fa-whatsapp rounded-circle m-2 text-center" /></Link>
            <Link href={tiktok_link}><i className="fa-brands fa-tiktok rounded-circle m-2 text-center" /></Link>
            <Link href={spotify_link}><i className="fa-brands fa-spotify rounded-circle m-2 text-center" /></Link>
           
          </motion.div>

    </>
  )
}
