import React from 'react'

export const Blog = () => {
  return (
  <div className="pattern">
  <section className="blog mt-5" id="blog">
    <div className="container">
      <div className="section_title text-center py-5">
        <span className="uppertext">مداد قلمي وخلاصة أفكاري</span>
        <h2 className="headingh2">مقالاتي</h2>
      </div>
      <div className="row">
        <ul className="nav nav-tabs justify-content-center" id="myTab" role="tablist">
          <li className="nav-item " role="presentation">
            <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">الأسرة والمرأة</button>
          </li>
          <li className="nav-item " role="presentation">
            <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">التربية</button>
          </li>
          <li className="nav-item " role="presentation">
            <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">الزواج</button>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex={0}>
            <div className="row">
              <div className="col-md-4 text-center">
                <img className="w-100" src="assets/img/article01.jpeg" />
                <span className="date">12,يونيو 2020</span>
                <h3 className="p-2">الاعتراف بالمشاعر.. نحو طفل ذكي "عاطفياً"</h3>
                <p>الرفض الدائم والمستمر لمشاعر الأطفال في مواقف متعددة، يمكن أن يشوشهم ويسخطهم، كما يعلّمهم أن يتجاهلو...</p>
              </div>
              <div className="col-md-4 text-center">
                <img className="w-100" src="assets/img/article02.jpeg" />
                <span className="date">08,يونيو 2020</span>
                <h3 className="p-2">ما لا ندركه حول معيار "التدين" عند اختيار شريك الحياة</h3>
                <p>وصلني سؤال من إحدى الصديقات مؤخرًا على صفحتي الشخصية على الفيس بوك، حول موضوع اختيار شريك الحياة ومم...</p>
              </div>
              <div className="col-md-4 text-center">
                <img className="w-100" src="assets/img/article03.jpeg" />
                <span className="date">08,يونيو 2020</span>
                <h3 className="p-2">ما لا ندركه حول معيار "التدين" عند اختيار شريك الحياة</h3>
                <p>وصلني سؤال من إحدى الصديقات مؤخرًا على صفحتي الشخصية على الفيس بوك، حول موضوع اختيار شريك الحياة ومم...</p>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex={0}>
            <div className="row">
              <div className="col-md-4 text-center">
                <img className="w-100" src="assets/img/article05.jpeg" />
                <span className="date">07,يونيو 2020</span>
                <h3 className="p-2">للأم العاملة: لا تموتي قبل أوانك</h3>
                <p>لا أحد يتكلم كثيرا عن معاناة الأم العاملة ولا يمكن لشخص أن يستشعر إرهاقها وتعبها، وسهوتها على مكتبها...</p>
              </div>
              <div className="col-md-4 text-center">
                <img className="w-100" src="assets/img/article06.jpeg" />
                <span className="date">09,يونيو 2020</span>
                <h3 className="p-2">قال أنت كنز.. ودفنها</h3>
                <p>يبحث الرجل في العادة عن امرأة قوية ذات طموح وعلم وثقافة، وما إن يرتبط بها، يبدأ "بقص أجنحتها"، فيحرم...</p>
              </div>
              <div className="col-md-4 text-center">
                <img className="w-100" src="assets/img/article07.jpeg" />
                <span className="date">09,يونيو 2020</span>
                <h3 className="p-2">
                  الأب الأعزب: ما الذي فعلته التنشئة بأدوارنا؟</h3>
                <p>يبحث الرجل في العادة عن امرأة قوية ذات طموح وعلم وثقافة، وما إن يرتبط بها، يبدأ "بقص أجنحتها"، فيحرم...</p>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabIndex={0}>
            <div className="row">
              <div className="col-md-4 text-center">
                <img className="w-100" src="assets/img/article05.jpeg" />
                <span className="date">07,يونيو 2020</span>
                <h3 className="p-2">للأم العاملة: لا تموتي قبل أوانك</h3>
                <p>لا أحد يتكلم كثيرا عن معاناة الأم العاملة ولا يمكن لشخص أن يستشعر إرهاقها وتعبها، وسهوتها على مكتبها...</p>
              </div>
              <div className="col-md-4 text-center">
                <img className="w-100" src="assets/img/article06.jpeg" />
                <span className="date">09,يونيو 2020</span>
                <h3 className="p-2">قال أنت كنز.. ودفنها</h3>
                <p>يبحث الرجل في العادة عن امرأة قوية ذات طموح وعلم وثقافة، وما إن يرتبط بها، يبدأ "بقص أجنحتها"، فيحرم...</p>
              </div>
              <div className="col-md-4 text-center">
                <img className="w-100" src="assets/img/article07.jpeg" />
                <span className="date">09,يونيو 2020</span>
                <h3 className="p-2">
                  الأب الأعزب: ما الذي فعلته التنشئة بأدوارنا؟</h3>
                <p>يبحث الرجل في العادة عن امرأة قوية ذات طموح وعلم وثقافة، وما إن يرتبط بها، يبدأ "بقص أجنحتها"، فيحرم...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div></section></div>


         
  )
}
