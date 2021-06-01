const themebtn1 = document.querySelector('#themebtn1')
const themebtn2 = document.querySelector('#themebtn2')

themebtn1.addEventListener('click', () => {
    document.body.classList.toggle('dark')
})
themebtn2.addEventListener('click', () => {
    document.body.classList.toggle('dark')
})

const tl = gsap.timeline({ defaults: { ease: 'bouce' } })
tl.from('.group1', {
    opacity: 0,
    duration: 1,
    delay: 1,
}).to('#y1', {
    x: '50px',
    repeat: -1,
    yoyo: true,
    duration: .3
}, '-=5')
    .to('#y2', {
        x: '70px',
        repeat: -1,
        yoyo: true,
        duration: .5
    }, '-=5')
    .to('#r1', {
        x: '50px',
        repeat: -1,
        yoyo: true,
        duration: .3
    }, '-=5')
    .to('#y3', {
        x: '30px',
        repeat: -1,
        yoyo: true,
        duration: .4
    })
const tl2 = gsap.timeline({ defaults: { ease: 'power4' } })

tl2.from('.hero img', {
    opacity: 0,
    y: '-20%',
    duration: 1,
    delay: 2
}).from('.herotittle', {
    opacity: 0,
    y: '100%',
    duration: 1
}, '-=1')
    .from(' .herobtns .btnsec ', {
        opacity: 0,
        y: '100%',
        duration: 1,
       
    }, '-=1')
    .from(' .herobtns .btn ', {
        opacity: 0,
        y: '100%',
        duration:.2,
       
    }, '-=.8')
    .from('.navbar', {
        opacity: 0,
        duration: 2,
        delay: 1
    }, '-=1.5')

const scrollabout = gsap.timeline({
    scrollTrigger: {
        trigger: '.about',

        start: '400px bottom',
        end: 'top top',

    }
})
scrollabout.from('.about .tittle', {
    x: '-100%',
    opacity: 0,
    duration: 0.7
}) 
scrollabout.from('.about .aboutcontent span', {
    y: '50%',
    opacity: 0,
    duration: 0.7,
    stagger:.2
})

    .from('.about .abbtn', {
        y: '100%',
        opacity: 0,
        duration: 0.7,
        stagger: 0.2
    })
const scrollskills = gsap.timeline({
    scrollTrigger: {
        trigger: '.skills',

        start: '400px bottom',
        end: 'top top',

    }
})
scrollskills.from('.skills .tittle', {
    x: '-100%',
    opacity: 0,
    duration: 0.7

}).from('.skills .cardrow .card', {
    x: '-100%',
    opacity: 0,
    duration: 0.5,
    stagger: .1,

}, '-=.6')
const scrollprojects = gsap.timeline({
    scrollTrigger: {
        trigger: '.projects',

        start: '400px bottom',
        end: 'bottom top',
        
    }
})
scrollprojects.from('.projects .tittle', {
    x: '-100%',
    opacity: 0,
    duration: .9,

}).from('.projects .cardrow .card', {
    x: '-100%',
    opacity: 0,
    duration: 0.7,
    stagger: .1
}, '-=.8')


const scrollcontact = gsap.timeline({
    scrollTrigger: {
        trigger: '.contact',
      
        start: 'top bottom',
        end: 'top center',
    
    }
})
scrollcontact.from('.contact .tittle', {
    x: '-100%',
    opacity: 0,
    duration:1,
 
})
    .from('.contact .iconrow .icon', {
        y: '100%',
        opacity: 0,
        duration: .5,
      
    },'-=.9')
   
    const tl3 = gsap.timeline({ defaults: { ease: 'power4' } })

    tl3.from('.ccc1', {
        opacity: 0,
        y: '20%',
        duration: 1,
        delay: 2
    })