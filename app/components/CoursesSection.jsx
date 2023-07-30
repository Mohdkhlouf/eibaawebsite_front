import React from 'react'

export const CoursesSection = () => {
  return (
<section className="courseSection" id="coursesection">
    <div className="container">
    <div className="row">
      <div className='sectionHeader'>
        <h2 className="sectionHeaderTitle">الدورات الإستشارية</h2>
        <p className="sectionHeaderDetails">اقدم العديد من الدورات </p>
      </div>
    </div>

            <div className="row">
                <div className="col-md-4">
                    <div className="course">
                        <div className="courseImage">

                        </div>
                        <div className="courseName sectionChildTitle">
                            دورة الذكاء العاطفي
                        </div>
                    </div>
                </div>

               <div className="col-md-4">
                    <div className="course">
                        <div className="courseImage">

                        </div>
                        <div className="courseName sectionChildTitle">
                            دورة الذكاء العاطفي
                        </div>
                    </div>
                </div>


                <div className="col-md-4">
                    <div className="course">
                        <div className="courseImage">

                        </div>
                        <div className="courseName sectionChildTitle">
                            دورة الذكاء العاطفي
                        </div>
                    </div>
                </div>
            </div>
</div>
</section>  )
}
