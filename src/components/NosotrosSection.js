import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './../styles/NosotrosSection.css'

gsap.registerPlugin(ScrollTrigger);

export const NosotrosSection = () => {

    // const imgTag = process.env.PUBLIC_URL;

    const ref = useRef(null);

    useEffect(() => {
        
        gsap.from(".agility", { 
            scrollTrigger: {
                trigger: ".agility",
                start: "-350px 100%",
                end: "-300px",
                scrub: true,
                // toggleActions: "restart none none none",
                markers: false
            }, x: -600, opacity:-3});
    }, []);

    useEffect(() => {
        
        gsap.from(".usTitle", {
            scrollTrigger: {
                trigger: ".agility",
                start: "-100px 100%",
                end: "-170px",
                scrub: true,
                // toggleActions: "restart none none reset",
                markers: false
            }, y:200, opacity:0})
        }, []);

    useEffect(() => {
        
        gsap.from(".underline", {
            scrollTrigger: {
                trigger: ".agility",
                start: "300px 100%",
                end: "-120px",
                scrub: true,
                // toggleActions: "restart none none none",
                markers: false
            }, x:600, opacity:0});
    }, []); 

    useEffect(() => {
        
        gsap.from(".disc", {
            scrollTrigger: {
                trigger: ".agility",
                start: "100px 100%",
                end: "-150px",
                scrub: true,
                // toggleActions: "restart none none none",
                markers: false
            }, x:600, opacity:-2})
    }, []);

    useEffect(() => {
        
        gsap.from(".square", {
            scrollTrigger: {
                trigger: ".agility",
                start: "-50px 100%",
                end: "-200px",
                scrub: true,
                // toggleActions: "restart none none none",
                markers: false
            }, y:-500, x:-500, opacity:-2})
    }, []);

    useEffect(() => {
        
        gsap.from(".tunnel", { 
            scrollTrigger: {
                trigger: ".agility",
                start: "10px 100%",
                end: "-180px",
                scrub: true,
                // toggleActions: "restart none none none",
                markers: false
            }, x: -600, opacity:-2});
    }, []);

    useEffect(() => {
        
        gsap.from(".paragraph-div", { 
            scrollTrigger: {
                trigger: ".tunnel",
                start: "-300px 50%",
                end: "-490px",
                scrub: true,
                // toggleActions: "restart none none none",
                markers: false
            }, x: 600, opacity: 0});
    }, []);

    return (
        <section id="us" ref={ref} className="nosotros">
            <img className="agility" src="./border-agility-1.jpeg" alt="agility"></img>
            <div className="parag-cont">
                <h2 className="usTitle">Haciendo historia con nuestros amigos...</h2>
                <span className="underline"></span>
            </div>
            <img className="tunnel" src="./border-agility-2.jpeg" alt="tunnel"></img>
            <div className="square"></div>
            <img className="disc" src="./border-flying-disc-1.jpeg" alt="agility"></img>
            <div className="paragraph-div"><p className="paragraph">Con gran diversión</p></div>
        </section>
    )
}
