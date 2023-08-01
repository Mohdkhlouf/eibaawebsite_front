'use client'

import React from 'react'
import { SocialMediaLinks } from './components/SocialMediaLinks'
import { Services } from './components/Services'
import { PodcastSection } from './components/PodcastSection'
import { InstagramPosts } from './components/InstagramPosts'



const homePage = () => {

  return (
    <>

<section className="headerSection d-flex">
  <div className="container">
          <div className="headerContent"> 
              <h2>هناك أوقات نتعثر فيها ونحتاج أن نجلب الشمس للعلاقة </h2>
              <h2> إذا كنت مستعداً فأنت في المكان الصحيح! </h2>
              <p> أ.إباء أبوطه مرشدة زواجية وأسرية، أساعد الأزواج على استكشاف ذواتهم بحب وقبول، وتحقيق الأهداف الزوجية بعلاقة صحية وسعيدة وفقاً لرغبتهم؛ عبر فلسفتي الخاصة (النموّ المتأنّي).
                </p>
                <p>
من خلال  تطوير مهارات التواصل مع الذات والآخر بشكل أفضل، ومهارات حل المشكلات، وفهم ديناميكية العلاقة، وأنماط السلوك المؤثرة فيها، وسيكلوجية الآخر.                
                </p>
            
            <SocialMediaLinks />
            </div>
          </div>  
               

  
  
</section>
<Services />
                
<PodcastSection />

<InstagramPosts />

</>
  )
}

export default homePage