export function getBlogHtml(blogObj) {
    let { id, img, alt, date, title, intro, article } = blogObj

    return `<section class="info-container">
                <div class="content-text-container blog">
                    <span class="date">${date}</span>
                    <h1 class="hero-post-title">${intro[0].text}</h1>
                    ${intro.slice(1).map(el => `<p>${el.text}</p>`).join('')}
                </div>
                <div class="blog-image-container">
                    <img class="blog-hero-img" src="${img}" alt="${alt}">
                </div>
                <div class="content-text-container blog-content">
                    ${article.map(el => {
                        const paragraph = el.isTitle ? `<strong>${el.text}</strong>`: el.text;
                        return `<p>${paragraph}</p>`
                    }).join('')}
                </div>
            </section>`

}