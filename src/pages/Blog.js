import React from 'react'
import part1 from '../images/part1.jpg'
import part2 from '../images/part2.jpg'
import part3 from '../images/part3.jpg'
import part4 from '../images/part4.jpg'
import part5 from '../images/part5.jpg'
import part6 from '../images/part6.jpg'
import blog from '../images/blog.jpg'

const Blog = () => {
    var blogStyle = {
        width: "100%",
        height: "2300px",
        backgroundImage: `url(${blog})`
    };
    return (
        <div class="blog" >
            <div class="container-fluid " style={blogStyle} >
                <div class="row blogInner">
                    <div class="col-4">
                        <h3 class="p-3 mb-2 bg-warning text-dark">A blog is only as interesting as the interest shown in others.</h3>
                    </div>
                    <div class="col-4">
                        <div class="card" style={{ width: '22rem' }}>
                            <img src={part1} class="card-img-top" style={{ height: '18rem' }} />
                            <div class="card-body">
                                <h5 class="card-title">1.The Travel Episodes</h5>
                                <p class="card-text">The Travel Episodes does not just take storytelling to the next level with their writings but also with video clips, sound effects, and photography. It's like reading a futuristic storybook that teleported you to the place.</p>
                                <div class="text-center">
                                    <a href="http://en.travelepisodes.com/" target="_blank" class="btn btn-success ">Click Here</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="card" style={{ width: '22rem' }}>
                            <img src={part2} class="card-img-top" style={{ height: '18rem' }} />
                            <div class="card-body">
                                <h5 class="card-title">2. Anywhere We Roam</h5>
                                <p class="card-text">Anywhere We Roam may seem like a typical clean and minimal travel blog but this UK-based travel blog runs by Paul and Mark is a great example of how photos speaks a thousand words.Their has the ability to transport you to the location in question.</p>
                                <div class="text-center">
                                    <a href="https://anywhereweroam.com/" target="_blank" class="btn btn-success ">Click Here</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="row blogInner2">
                    <div class="col-4">
                        <h3 class="p-3 mb-2 bg-warning text-dark"> “All our dreams can come true if we have the courage to pursue them.”- Walt Disney</h3>
                    </div>
                    <div class="col-4">
                        <div class="card" style={{ width: '22rem' }}>
                            <img src={part3} class="card-img-top" style={{ height: '18rem' }} />
                            <div class="card-body">
                                <h5 class="card-title">3. Maptia</h5>
                                <p class="card-text">Another Escape's design shines the best when you are viewing travel stories like "The Road Taken" where the article follows a couple who traded their city lives to live lives on the road. Its white space and simple design of the website make ways for the engaging travel story.</p>
                                <div class="text-center">
                                    <a href="https://maptia.com/" target="_blank" class="btn btn-success ">Click Here</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-4">
                        <div class="card" style={{ width: '22rem' }}>
                            <img src={part4} class="card-img-top" style={{ height: '18rem' }} />
                            <div class="card-body">
                                <h5 class="card-title">4. IFLY Magazine</h5>
                                <p class="card-text">IFLY Magazine is an online travel magazine operated by the Dutch Airlines, KLM, that combines the professionally shot photographs you often come to expect from travel magazines on an airplane, the use of interactive media such as sound and videos.</p>
                                <div class="text-center">
                                    <a href="https://www.iflymagazine.com/en" target="_blank" class="btn btn-success ">Click Here</a>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </div>

                <div class="row blogInner2">
                    <div class="col-4">
                        <h3 class="p-3 mb-2 bg-warning text-dark">“Happiness is not something readymade. It comes from your own actions.”-Dalai Lama</h3>
                    </div>
                    <div class="col-4">
                        <div class="card" style={{ width: '22rem' }}>
                            <img src={part5} class="card-img-top" style={{ height: '18rem' }} />
                            <div class="card-body">
                                <h5 class="card-title">5. Another Escape</h5>
                                <p class="card-text"> As you know, I am a sucker for a well-designed website and one of the travel platform that have always been on my radar is Maptia, a platform for travelers and explorers to document and capture the world around them.</p>
                                <div class="text-center">
                                    <a href="https://anotherescape.com/" target="_blank" class="btn btn-success ">Click Here</a>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                    <div class="col-4">
                        <div class="card" style={{ width: '22rem' }}>
                            <img src={part6} class="card-img-top" style={{ height: '18rem' }} />
                            <div class="card-body">
                                <h5 class="card-title">6. Indie Traveller</h5>
                                <p class="card-text">A crisp and clean colorful layout, water-colored headlines, a well-organized structure, Indie Traveller is an excellent example of a travel blog that maintain its unique identity without sacrificing the usefulness of the content.</p>
                                <div class="text-center">
                                    <a href="https://www.indietraveller.co/" target="_blank" class="btn btn-success ">Click Here</a>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </div>


            </div>

        </div>
    )
}

export default Blog
