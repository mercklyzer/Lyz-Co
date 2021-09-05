let tl = gsap.timeline()

tl.from('.header-1', {
    yPercent:-100,
    ease:"power3.out",
    duration: 0.3
}, 1)
.to('.header-1', {
    yPercent:100,
    ease:"power3.out",
    duration: 0.5
}, 4)
.from('.header-2', {
    yPercent: -100,
    ease:"power3.out",
    duration: 0.3
}, 4.5)
.to('.header-2', {
    yPercent: 100,
    ease:"power3.out",
    duration: 0.5
}, 6)
.to('.intro-overlay', {
    opacity: 0,
    zIndex: -1
})



console.log("working")