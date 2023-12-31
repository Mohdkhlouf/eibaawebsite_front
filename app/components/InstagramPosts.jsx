import React from 'react'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import {motion} from 'framer-motion'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';




export const InstagramPosts = () => {

  const imageStyle = {
    width: '100%',
    height: '100%',
    
  }


  const stories=[
    {'slideId':'1',
    'slideImages':[
      {'src':'/img/slide/slide1.jpg'},
      {'src':'/img/slide/slide2.jpg'},
      {'src':'/img/slide/slide3.jpg'},
      {'src':'/img/slide/slide4.jpg'},
      {'src':'/img/slide/slide5.jpg'},
      {'src':'/img/slide/slide6.jpg'},
      {'src':'/img/slide/slide7.jpg'}
    ]
  },

  {'slideId':'2',
  'slideImages':[
    {'src':'/img/slide2/slide1.jpg'},
    {'src':'/img/slide2/slide2.jpg'},
    {'src':'/img/slide2/slide3.jpg'},
    {'src':'/img/slide2/slide4.jpg'},
    {'src':'/img/slide2/slide5.jpg'},
    {'src':'/img/slide2/slide6.jpg'}
  ]
  },

{'slideId':'3',
'slideImages':[
  {'src':'/img/slide3/slide1.jpg'},
  {'src':'/img/slide3/slide2.jpg'},
  {'src':'/img/slide3/slide3.jpg'},
  {'src':'/img/slide3/slide4.jpg'},
  {'src':'/img/slide3/slide5.jpg'},
  {'src':'/img/slide3/slide6.jpg'}

]
}
  
  ];
  


  return (
    
<motion.section className="instagramPosts p-5" id="instagramPosts"
 initial={{y:25, opacity:0}}
 whileInView={{y:0, opacity:1}}
 transition={{duration:0.75}}> 
    <div className="container">
       <div className="row">
      <div className='sectionHeader'>
        <h2 className="sectionHeaderTitle ">Stories</h2>
        <p className="sectionHeaderDetails ">من وحي قلمي في انستاجرام</p>
      </div>
    </div>

      <div className="row">
      
      
      
      {stories.map((ele)=>{
       
      return <div className="col-md-4">
          <motion.div
          initial={{opacity:0,scale:0}}
          whileInView={{opacity:1,scale:1}}
          transition={{duration:0.75,type:"tween"}}
          className="album">

       
       <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
       
       

       
       
          {
             ele.slideImages.map((image)=>
                <div className="posts">
                                         
          
                      <SwiperSlide>
                            <Image
                              src={image.src}
                              width={300}
                              height={300}
                              style={imageStyle}
                              alt="Picture of the author"
                              />
                      </SwiperSlide>
                      
                  </div>

              
             )
             }
             </Swiper>
             </motion.div>

             <div className="albumoverlay">
              
             </div>
             </div>



             

             

             })}

             
             
             
          
         

       </div>
      
      
   
    </div>
    </motion.section>
  )
}
