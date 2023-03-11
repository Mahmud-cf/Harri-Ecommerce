import React from 'react'
import {useState} from 'react'

const slides = [
    {
        id: 1,
        image: 'https://cdn.shopify.com/s/files/1/0031/5352/t/408/assets/our-mission.png?v=85594931058998387601676334839',
        title : 'Our Mission',
        description : `Our mission at Holstee is to help conscious people (like you!) along your journey to live more fully and mindfully. In today’s complicated, fast-paced, hyper-connected, and often overwhelming world, it can be difficult to find perspective — to focus on what’s actually important and not just what is urgent. It’s hard to find the time, it’s hard to know where to begin, and it’s hard to do it alone.

        That’s where we come in :-). We are passionate about bringing more meaning and inspiration into people's lives. Over the years, it has become clear to us that living with intention and reflection is an ongoing practice, not a destination. We’re honored to share that journey with you.`
    },
    {
        id: 2,
        image: 'https://cdn.shopify.com/s/files/1/0031/5352/t/408/assets/founding-story.png?v=47842913970224429341676334781',
        title : 'Founding Story',
        description : `In the summer of 2009, brothers Dave and Mike Radparvar decided to quit their jobs in the heat of the recession to go all-in on their passion project — Holstee, a functional and sustainable t-shirt company they had started with their friend Fabian Pfortmüller. Without a business plan or experience in fashion, they reasoned that in the worst-case scenario, it would be the most memorable summer of their lives.

        More than anything, Dave, Mike, and Fabian were looking to build a company that would allow them to live their dream. They wanted to create a company that aligned with their personal values and allowed them to have a positive impact on the world around them.`
    },
    {
        id: 3,
        image: 'https://cdn.shopify.com/s/files/1/0031/5352/t/408/assets/in-the-news.png?v=159547657839989812331676334813',
        title : 'In the news',
        description : `We are honored that others have found our work as exciting as we do! Here are some nice words from people that we look up to:

        “Most mission statements contain words like value and service but often fail to explain what the founders truly care about, much less inspire anyone else to care. Holstee's mission statement is an exception.”`
    }
]

function AboutOurWork() {
    const [currentSlide , setCurrentSlide] = useState(0)
    const ourMission = () => {
        // setCurrentSlide((item) => item === 0 ? slides.length - 1 : item - 1);
        setCurrentSlide(0)
      };
    
      const foundingStory = () => {
        // setCurrentSlide((item) => item === slides.length - 1 ? 2 : item + 1);
        setCurrentSlide(1)
      };
      const press = () => {
        // setCurrentSlide((item) => item === slides.length - 1 ? 2 : item + 1);
        setCurrentSlide(2)
      };
    console.log(currentSlide)
  return (
    <div>
        <div className="about-nav-wrapper">
            <div className='about-nav-item d-flex' >
                <p onClick={ourMission} className={currentSlide === 0? 'color0':''} >OUR MISSION</p>
                <p onClick={foundingStory} className={currentSlide === 1? 'color1':''}  >FOUNDING STORY</p>
                <p onClick={press} className={currentSlide === 2? 'color2':''}  >PRESS</p>
            </div>
            
            <div className="slide-div-wrapper">
                {slides.map((slide, index) => {
                    return(
                        <div key={slide.id} className={index === currentSlide ? "slide active" : "slide"} >
                            <div key={slide.id} className='slide-item-wrapper' >
                            <div className='text-center' >
                                <img src={slide.image} alt="" />
                                <h2>{slide.title}</h2>
                            </div>
                            <div>
                                <p>{slide.description}</p>
                            </div>
                        </div>
                        </div>
                    )
                })}
            </div>
        </div>

    </div>
  )
}

export default AboutOurWork