let pageData = {
    productName: 'Book a Cruise to the Moon',
    productDescription: 'Cruise to the moon in our luxurious shuttle. Watch the astronauts working outside the International Space Station.',
    imageSrc:[
    "images/asteroid.jpg",
    "images/fantasy.jpg",
    "images/space.jpg",
    "images/spaceship.jpg"
    ],
    h2ClassController:{
    centered:true,
    colorFont:false
    }
    };
    const app = Vue.createApp({
    data(){
    return pageData;
    }
    });
    app.mount("#app");