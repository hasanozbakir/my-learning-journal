import { posts } from "../data/posts.js"
import { hasMoreBlog } from "../index.js";

export function getBlogsHtml(length) {
    const postsArray = posts.slice(1, length+1)
    let blogs = ""

    postsArray.map(blog => {
        const {id, img, alt, date, title, info } = blog

        blogs += `
                    <div id="${id}" class="blog-container">
                        <img class="article-image" data-blog="${id}" src="${img}" alt="${alt}">
                        <span class="article-date">${date}</span>
                        <h3 class="blog-title">${title}</h3>
                        <p data-blog="${id}" class="blog-content">${info}</p>
                    </div>
                    `
    })

    return  `<section class="container">
                ${blogs}
            </section>
            ${hasMoreBlog ? '<p id="view-more" class="view-more-text">View More</p>': ""}`

}