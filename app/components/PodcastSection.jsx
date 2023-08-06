import React from 'react'
import Image from 'next/image'
import {motion} from 'framer-motion'
export const PodcastSection = () => {
  const imageStyle = {
    width: '100%',
    height: '100%',
    
  }



  return (
   <motion.section className="podcastsection" id="podcastsection"
   initial={{y:25, opacity:0}}
   whileInView={{y:0, opacity:1}}
   transition={{duration:0.75}}>
    <div className="container"> 
    
    <div className="row">
      <div className='sectionHeader'>
        <h2 className="sectionHeaderTitle">Podcast موجة حب</h2>
        <p className="sectionHeaderDetails">
         موجات حب.. اليكم مباشرة
           </p>
      </div>
    </div>

    <div className="row">

         <div className="col-md-12">
      <iframe width="100%" height="350" scrolling="no" frameborder="no" allow="autoplay"
  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/1176891079&amp;">
</iframe>


      </div>

      




</div>
</div>
   </motion.section>
  )
}
