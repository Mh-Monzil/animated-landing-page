gsap.to(".img-container", {
    ease: Expo.easeInOut,
    width: '100%',
    duration: 2,
    stagger: 3
})

gsap.to('.text h1' ,{
    ease: Expo.easeInOut,
    stagger: 3,
    top: 0,
})
gsap.to('.text h1' ,{
    delay: 2,
    ease: Expo.easeInOut,
    stagger: 3,
    top: '-100%',
})
