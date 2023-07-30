import React from 'react'
import Link from 'next/link'
export const SocialMediaLinks = () => {

    const facebook_link="#";
    const instagram_link="#";
    const telegram_link="#";
    const whatsapp_link="#";
    const tiktok_link="#";
    const spotify_link="#";
    


  return (
    <div className="socialLinks">
        
            <Link href={facebook_link}><i className="fa-brands fa-facebook rounded-circle m-2 text-center " /></Link>
            <Link href={instagram_link}><i className="fa-brands fa-instagram rounded-circle m-2 text-center" /></Link>
            <Link href={telegram_link}><i className="fa-brands fa-telegram rounded-circle m-2 text-center" /></Link>
            <Link href={whatsapp_link}><i className="fa-brands fa-whatsapp rounded-circle m-2 text-center" /></Link>
            <Link href={tiktok_link}><i className="fa-brands fa-tiktok rounded-circle m-2 text-center" /></Link>
            <Link href={spotify_link}><i className="fa-brands fa-spotify rounded-circle m-2 text-center" /></Link>
           
          </div>
  )
}
