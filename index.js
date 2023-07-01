import { posts } from "./data/posts.js";
import Home from "./pages/home.js";
import About from "./pages/about.js";
import { getBlogHtml } from "./pages/blog.js";
import { getBlogsHtml } from "./pages/blogs.js";
import { getBaseLength, getUnitLength } from "./utils/utils.js";

export let hasMoreBlog = true

const mainEl = document.querySelector("main")
const navEl = document.querySelector("nav")
const homeEl = document.getElementById("home")
const aboutEl = document.getElementById("about")

let blogObj = {}
const unitLength = getUnitLength()
let reviewLength = unitLength

console.log(window.innerWidth)

mainEl.innerHTML = `
            ${ Home }
            ${ getBlogsHtml(reviewLength) }
            `
document.addEventListener("click", (e) => {
    e.preventDefault()

    if(e.target.id === "home") {
        const arr = document.getElementsByClassName("active")
        Array.from(arr).forEach(el => el.classList.remove("active"))
        homeEl.classList.add("active")
        const length = reviewLength
        mainEl.innerHTML = `
            ${ Home }
            ${ getBlogsHtml(length) }
            `
        navEl.classList.remove('open-nav');
    }else if(e.target.id === "about") {
        const arr = document.getElementsByClassName("active")
        Array.from(arr).forEach(el => el.classList.remove("active"))
        aboutEl.classList.add("active")
        const length = getBaseLength()
        mainEl.innerHTML = `
            ${ About }
            ${ getBlogsHtml(length) }
            `
        navEl.classList.remove('open-nav');
    }else if(e.target.id === "menu-btn") {
        navEl.classList.add('open-nav');
    }else if(e.target.id === "exit-btn") {
        navEl.classList.remove('open-nav');
    }else if(e.target.dataset.blog) {
        blogObj = posts.filter(el => el.id === e.target.dataset.blog)[0]
        const length = getBaseLength()
        mainEl.innerHTML = `
            ${ getBlogHtml(blogObj) }
            ${ getBlogsHtml(length) }
            `
    }else if(e.target.id === "view-more") {
        reviewLength +=unitLength
        hasMoreBlog = posts.length > reviewLength + 1
        const length = reviewLength
        mainEl.innerHTML = `
            ${ Home }
            ${ getBlogsHtml(length) }
            `
    }
})
