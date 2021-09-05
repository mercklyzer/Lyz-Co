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
    zIndex: -1,
    duration: 0.5
})
.from('.top-header-1', {
    y: '20%',
    opacity: 0,
})
.from('.top-header-2', {
    y: '20%',
    opacity: 0,
})
.from('.hero-wrapper img', {
    yPercent: 10,
    opacity: 0,
    zIndex: 2
})
.from('.bottom-header', {
    yPercent: 10,
    opacity: 0,
})

ScrollTrigger.defaults({
    markers: true
})

gsap.to('.top-header-1', {
    scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1
    },
    yPercent: -100
})
gsap.to('.top-header-2', {
    scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1
    },
    yPercent: -100
})
gsap.to('.bottom-header', {
    scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1
    },
    yPercent: -100
})
gsap.to('.hero-wrapper img', {
    scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1
    },
    scale: 1.2,
    transformOrigin: '50% 50%'
})


console.log("working")