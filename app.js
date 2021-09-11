//copy
console.clear()

const overlay = () => {
    let tl = gsap.timeline()

    tl.from('.header-1', {
        yPercent:-100,
        ease:"power3.out",
        duration: 0.3,
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
        duration: 0.5,
        onStart: () => {
            window.scrollTo(0,0);
            document.querySelector('body').style.overflow = 'auto';
        },
    })
    .from('.hero-wrapper img', {
        yPercent: 10,
        opacity: 0,
        zIndex: 2
    }, 7)
    .from('.top-header-1', {
        y: '20%',
        opacity: 0,
    }, 7.3)
    .from('.top-header-2', {
        y: '20%',
        opacity: 0,
    }, 7.6)
    .from('.bottom-header', {
        yPercent: 10,
        opacity: 0,
    }, 7.9)
}

// overlay()



ScrollTrigger.defaults({
    // markers: true
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


// animations for about section

let hrWrappers = document.querySelectorAll('.hr-wrapper')
hrWrappers.forEach((hrWrapper, index) => {

    console.log(hrWrapper);
    gsap.to(hrWrapper, {
        scrollTrigger: {
            trigger: hrWrapper,
            start: 'center bottom',
        },
        width: '100%',
        transformOrigin: 'left center',
        ease: Power1.easeOut,
        duration: 2,
    })
})

gsap.to('.left-col .image-wrapper img', {
    scrollTrigger: {
        trigger: '.left-col .image-wrapper img',
        start: '+=20% bottom',
    },
    paddingTop: '0%',
    duration: 1,
    onComplete: () => ScrollTrigger.refresh() // to adjust markers below because of change in padding
})

gsap.to('.left-col .image-wrapper img', {
    scrollTrigger: {
        trigger: '.left-col .image-wrapper img',
        start: 'center bottom',
        scrub: 1
    },
    scale: 1.2,
})

gsap.to('.about .right-col', {
    scrollTrigger: {
        trigger: '.right-col',
        start: 'center bottom',
        scrub: 1
    },
    y: '-10%',
})

gsap.to('.right-col .image-wrapper', {
    scrollTrigger: {
        trigger: '.right-col .image-wrapper img',
        start: 'center bottom',
        scrub: 1
    },
    y: '-10%',
})

gsap.to('.right-col .image-wrapper img', {
    scrollTrigger: {
        trigger: '.right-col .image-wrapper img',
        start: 'center bottom',
        scrub: 1
    },
    scale: 1.2,
})

gsap.from('.infinity', {
    scrollTrigger: {
        trigger: '.infinity',
        start: "top 80%",
        // markers: true
    },
    opacity: 0
})

gsap.to('.infinity .line-1', {
    scrollTrigger: {
        trigger: '.infinity',
        start: "top 80%",
        scrub: 1,
    },
    x: '-80%'
})

gsap.to('.infinity .line-2', {
    scrollTrigger: {
        trigger: '.infinity',
        start: "top 80%",
        scrub: 1
    },
    x: '80%'
})


let expertiseAnim = gsap.from('.expertise', {
    scrollTrigger: {
        trigger: '.expertise',
        start: 'top 90%',
        // markers:true
    },
    y: '20%',
    opacity: 0,
    onComplete: () => ScrollTrigger.refresh()
})





let expertiseItems = document.querySelectorAll('.expertise-item')

expertiseItems.forEach((expertiseItem, i) => {
    console.log(expertiseItem);
    let subLabel = expertiseItem.querySelector('.item-sub-label')
    let itemButton = expertiseItem.querySelector('.item-button')

    let itemDetails = expertiseItem.querySelectorAll('.item-detail')

    let itemTimeline = gsap.timeline({
        paused: true
    })

    itemTimeline.fromTo(subLabel, {
        opacity: 0,
        y: '20%',
    }, {
        opacity: 1,
        y: 0,
        duration: 0.4
    }, 0)
    .to(itemButton, {
        rotation: '90deg',
        duration: 0.4,
    }, 0)

    itemDetails.forEach( (itemDetail, index) => {
        itemTimeline.from(itemDetail, { 
            
            y: '20%',
            duration: 0.4,
        }, 0.1*(index+1))

        itemTimeline.from(itemDetail, {
            opacity: 0,
        }, 0.1*(index+2))

    })

    // start code of toggling animation
    itemTimeline.reverse()
    itemTimeline.reversed(true)

    expertiseItem.addEventListener('click', () => {
        itemTimeline.reversed(!itemTimeline.reversed());
    })
    // end code of toggling animation

})

const darken = () => {
    let partnersTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '.partners',
            start: 'top +=80%',
            toggleActions: 'play none none reverse'
        }
    })

    partnersTimeline.to('body, .hr:not(.contact .hr)', {
        backgroundColor: '#171614',
        color: '#171614',
        duration: 0.4
    })
    .to('.item-counter, .item-label, .item-sub-label, .item-detail, .item-button ion-icon', {
        color: '#171614',
        duration: 0.4
    }, 0)
    
    gsap.from('.wrapper img', {
        scrollTrigger: {
            trigger: '.wrapper img',
            start: '30% bottom',
            toggleActions: 'play none none reverse'
        },
        y: '20%'
    })

    gsap.from('.wrapper .right-col h1', {
        scrollTrigger: {
            trigger: '.wrapper .right-col',
            start: 'top bottom',
            scrub: 1,
        },
        y: '30%'
    })

}

darken()

let circleContainer = document.querySelector('.contact-body .left-col')

gsap.set('.circle', {
    xPercent: 50,
    yPercent: 50
})

circleContainer.addEventListener('mousemove', (e) => {
    gsap.to('.circle', 0.3, {
        left: e.offsetX,
        top: e.offsetY,
    })
})

circleContainer.addEventListener('mouseout', () => {
    gsap.to('.circle', {
        top: '50%',
        left: '50%',
        duration: 0.4,
    })
})

let showContact = () => {
    gsap.from('.contact-header', {
        scrollTrigger: {
            trigger: '.contact-header',
            start: 'top 70%'
        },
        y: '20%',
        opacity: 0,
        duration: 0.4
    })

    gsap.from('.contact-body', {
        scrollTrigger: {
            trigger: '.contact-body',
            start: 'top 80%',
        },
        opacity: 0,
        ease: Power1.easeOut,
        duration: 1,
        onComplete: () => ScrollTrigger.refresh()
    })
}

showContact()
