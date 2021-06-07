import Typed from 'typed.js';
import gsap from 'gsap';
import ScrollTrigger  from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin'

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(TextPlugin)

window.addEventListener('load', ()=>{

    const ghostSubHeader = document.querySelector('.ghost-writing-sub-heading')

    if (ghostSubHeader) {

        const ghostSubHeaderText = ghostSubHeader.textContent
        ghostSubHeader.textContent = ""
        new Typed('.ghost-writing-sub-heading', {
            strings: [ghostSubHeaderText],
            cursorChar: '',
            typeSpeed: 80
        });
    }

    const aboutUsHeader = document.querySelector('.about-us-header')

    if (aboutUsHeader) {

        const aboutUsHeaderText = aboutUsHeader.textContent
        aboutUsHeader.textContent = ""
        new Typed('.about-us-header', {
            strings: [aboutUsHeaderText],
            cursorChar: '',
            typeSpeed: 80
        });
    }

    const ghostWriterHeader = document.querySelector('.ghost-writer')

    if (ghostWriterHeader) {

        const ghostWriterHeaderText = ghostWriterHeader.textContent
        ghostWriterHeader.textContent = ""
        new Typed('.ghost-writer', {
            strings: [ghostWriterHeaderText],
            cursorChar: '',
            typeSpeed: 80
        });
    }


    

    const servicesHeader = document.querySelector('.card-section-heading')

    if (servicesHeader) {

        ScrollTrigger.create({
            trigger:".card-section",
            onEnter:(self)=>{
                const servicesHeaderText = servicesHeader.textContent
                servicesHeader.textContent = ""
                new Typed('.card-section-heading', {
                    strings: [servicesHeaderText],
                    cursorChar: '',
                    typeSpeed: 40
                });
            }
        })
        
    }

    
    const contentHeader = document.querySelector('.feature-type')

    if (contentHeader) {

        const contentHeaderText = contentHeader.textContent
        contentHeader.textContent = ""
        new Typed('.feature-type', {
            strings: [contentHeaderText],
            cursorChar: '',
            typeSpeed: 15
        });
    }


    // Universal Typing Animation
    const typingAnimations = document.querySelectorAll('.typing-animation')
    typingAnimations.forEach((typingAnimation) => {
        const text = typingAnimation.innerHTML
        const textLen = typingAnimation.textContent.length
        const trigger = typingAnimation.dataset.trigger ? typingAnimation.dataset.trigger : typingAnimation;

        typingAnimation.textContent = ''
        gsap.to(typingAnimation, {
            scrollTrigger: trigger,
            text: {
                value: text,
            },
            duration: textLen * 0.08,
            ease: 'none',
        })
    })

        
})