import Typed from 'typed.js';
import gsap from 'gsap';
import ScrollTrigger  from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

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

    // scroll trigger implementation 
    
    const cardHeaders = document.querySelectorAll('.recent-blog-card-title')

    ScrollTrigger.create({
        trigger:".recent-blog",
        onEnter:(self)=>{
            cardHeaders.forEach((cardHeader)=>{
                const cardHeaderText = cardHeader.textContent
                cardHeader.textContent = ""
                new Typed(cardHeader, {
                    strings: [cardHeaderText],
                    cursorChar: '',
                    typeSpeed: 80
                });
            })
        }
    })
    

    const blogHeader = document.querySelector('.recent-blog-heading')

    if (blogHeader) {

        ScrollTrigger.create({
            trigger:".recent-blog",
            onEnter:(self)=>{
                const blogHeaderText = blogHeader.textContent
                blogHeader.textContent = ""
                new Typed('.recent-blog-heading', {
                    strings: [blogHeaderText],
                    cursorChar: '',
                    typeSpeed: 80
                });
            }
        })
        
    }

    const whyChooseUsHeader = document.querySelector('.why-choose-us-left-heading')

    if (whyChooseUsHeader) {

        ScrollTrigger.create({
            trigger:".fire", 
            onEnter:(self)=>{
                const whyChooseUsHeaderText = whyChooseUsHeader.textContent
                whyChooseUsHeader.textContent = ""
                new Typed('.why-choose-us-left-heading', {
                    strings: [whyChooseUsHeaderText],
                    cursorChar: '',
                    typeSpeed: 80
                });
            }
        })
    }

    // form
    const contactUsHeader = document.querySelector('.contact-form-heading')

    if (contactUsHeader) {

        ScrollTrigger.create({
            trigger:".why-choose-us",
            onEnter:(self)=>{
                const contactUsHeaderText = contactUsHeader.textContent
                contactUsHeader.textContent = ""
                new Typed('.contact-form-heading', {
                    strings: [contactUsHeaderText],
                    cursorChar: '',
                    typeSpeed: 80
                });
            }
        })  
    }
    const contactInfoHeader = document.querySelector('.contact-form-address-header')

    if (contactInfoHeader) {

        ScrollTrigger.create({
            trigger:".why-choose-us",
            onEnter:(self)=>{
                const contactInfoHeaderText = contactInfoHeader.textContent
                contactInfoHeader.textContent = ""
                new Typed('.contact-form-address-header', {
                    strings: [contactInfoHeaderText],
                    cursorChar: '',
                    typeSpeed: 80
                });
            }
        })  
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

    const aboutHeader = document.querySelector('.about-us-left-heading')

    if (aboutHeader) {

        ScrollTrigger.create({
            trigger:"about-us",
            onEnter:(self)=>{
                console.log()
                const aboutHeaderText = aboutHeader.textContent
                aboutHeader.textContent = ""
                new Typed('.about-us-left-heading', {
                    strings: [aboutHeaderText],
                    cursorChar: '',
                    typeSpeed: 80
                });
            }
        })
        
    }


        
})