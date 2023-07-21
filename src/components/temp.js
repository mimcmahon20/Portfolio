let timelineArrows = gsap.timeline({
    scrollTrigger: {
        trigger: ".hero",
        start: "bottom bottom",
        end: "bottom center",
        scrub: 1,
        markers: false,
    }});
    timelineArrows.to(".arrow", {
        duration: 1,
        opacity: 0,
        y: -600,
        stagger: 0.5,
    });
    
    let timelineText = gsap.timeline({
        scrollTrigger: {
            trigger: ".hero",
            start: "bottom+=100 bottom",
            end: "bottom center",
            scrub: 1,
            pin: true,
            markers: false,
        }});
        timelineText.to(".congratulations", {
            duration: 1,
            opacity: 0,
            x: -100,
        });
        timelineText.to(".first-line", {
            duration: 1,
            opacity: 0,
            x: +100,
        });
        timelineText.to(".second-line", {
            duration: 1,
            opacity: 0,
            x: -100,
            scale: 2,
        });