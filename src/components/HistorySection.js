import gsap from 'gsap/gsap-core';
import React, { useEffect } from 'react'
import { LoremIpsum } from 'react-lorem-ipsum';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './../styles/HistorySection.css'

gsap.registerPlugin(ScrollTrigger);

export const HistorySection = () => {
    
    // const ref = useRef(null);

    useEffect(() => {
        
        gsap.from("#lorem", { 
            scrollTrigger: {
                trigger: ".lorem",
                start: "150px 100%",
                end: "-300px",
                scrub: true,
                // toggleActions: "restart none none none",
                markers: false
            }, opacity:0});
    }, []);

    useEffect(() => {
        
        gsap.from("#lorem2", {
            scrollTrigger: {
                trigger: ".lorem",
                start: "380px 100%",
                end: "-100px",
                scrub: true,
                // toggleActions: "restart none none none",
                markers: false
            }, opacity:0})
    }, []);

    useEffect(() => {
        
        gsap.from("#lorem3", {
            scrollTrigger: {
                trigger: ".lorem",
                start: "580px 100%",
                end: "0px",
                scrub: true,
                // toggleActions: "restart none none none",
                markers: false
            }, opacity:0})
    }, []);

    return (
        <section id="history" className="history">
            <div className="lorem" id="lorem"><LoremIpsum/></div>
            <div className="lorem2" id="lorem2"><LoremIpsum/></div>
            <div className="lorem" id="lorem3"><LoremIpsum/></div>
        </section>
    )
}
