'use client'

import React from 'react'
import { Services } from './components/Services'
import { PodcastSection } from './components/PodcastSection'
import { InstagramPosts } from './components/InstagramPosts'
import { HeaderContent } from './components/HeaderContent'



const homePage = () => {

  return (
    <>
<HeaderContent />

<Services />
                
<PodcastSection />

<InstagramPosts />

</>
  )
}

export default homePage