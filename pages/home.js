import { posts } from "../data/posts.js"

const { id, img, date, info, intro } = posts[0]

const homeHtml = `
            <section id="${id}" class="hero-post" data-blog="${id}" style="background-image: url('${img}')>
                <span class="date">${date}</span>
                <h1 class="hero-post-title">${intro[0].text}</h1>
                <p class="hero-post-content">${info}</p>
            </section>`

export default homeHtml;