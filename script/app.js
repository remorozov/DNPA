new fullpage("#fullpage", {
    autoScrolling: true,
    anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'sixthPage', 'seventhPage', 'eighthPage'],
    onLeave: (origin, destination, direction) => {
        const section = destination.item
        console.log(destination)
        const title = section.getElementsByClassName('product_title')
        const advertising_text = section.getElementsByClassName('advertising_text') 
        const advertising_autor = section.getElementsByClassName('advertising_autor') 
        
        // timelines
        const tl = new TimelineMax({ delay: 0.5 })
        const tl2 = new TimelineMax({ delay: 0.4 })
        const tl3 = new TimelineMax({ delay: 0.8 })
        // animation for all pages
        tl.fromTo(title, 0.5, { x: '-300', opacity: 0 }, { x: '0', opacity: 1 })
        
        
        if (destination.index === 1) {
            const slider = document.getElementsByClassName('slider')
            tl3.fromTo(slider, 0.5,{opacity:0},{opacity:1})
            tl.fromTo(advertising_text, 0.4, { y: '300', opacity: 0 }, { y: '0', opacity: 1 })
            tl.fromTo(advertising_autor, 0.3, { x: '300', opacity: 0 }, { x: '0', opacity: 1 })
        }
        if (destination.index === 2) {
            const slider1 = document.getElementsByClassName('slider1')
            tl3.fromTo(slider1, 1,{opacity:0},{opacity:1})
            tl.fromTo(advertising_text, 0.5, { y: '300', opacity: 0 }, { y: '0', opacity: 1 })
            tl.fromTo(advertising_autor, 0.5, { x: '300', opacity: 0 }, { x: '0', opacity: 1 })
        }
        if (destination.index === 3) {
            const services_item = document.getElementsByClassName('services_item')
            
            tl2.fromTo(services_item[0], 0.5, { x: '-300', opacity: 0 }, { x: '0', opacity: 1 })
            tl2.fromTo(services_item[1], 0.4, { x: '1300', opacity: 0 }, { x: '0', opacity: 1 })
            tl2.fromTo(services_item[2], 0.4, { x: '-300', opacity: 0 }, { x: '0', opacity: 1 })
        }
    }
});