import React from 'react'
import Image from 'next/image'
export const PodcastSection = () => {
 



  return (
   <section className="podcastsection" id="podcastsection">
    <div className="container"> 
    <div className="row">
      <div className='sectionHeader'>
        <h2 className="sectionHeaderTitle">Podcast موجة حب</h2>
        <p className="sectionHeaderDetails">اقدم العديد من الدورات </p>
      </div>
    </div>

    <div className="row">

    <div className="col-md-6">
      <Image
      src="/podcast.jpg"
      width={400}
      height={400}
      alt="Picture of the author"
    />
      </div>



      <div className="col-md-6">
      <iframe width="100%" height="350" scrolling="no" frameborder="no" allow="autoplay"
  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/1176891079&amp;">
</iframe>


      </div>

      




</div>
</div>
   </section>
  )
}
