
//fuction to intialise locomative js

//fucntion to create hover effect

export function viewMoreEvent(ele,cursor) {
 
  for (var card of ele) {
    card.addEventListener("mouseenter", function () {
      cursor.textContent = text;
      cursor.classList.add("mouse-enter");
    });
    card.addEventListener("mouseleave", function () {
      cursor.textContent = "";
      cursor.classList.remove("mouse-enter");
    });
  }
}



export function Video(ele,cursor) {
 
  for (var _video of ele) {
    _video.addEventListener("mouseenter", function () {
      if( cursor.textContent == 'sound on') {
        cursor.textContent = 'sound off';
      } else {
        cursor.textContent = 'sound on';

      }

      
      cursor.classList.add("mouse-enter");
    });
    _video.addEventListener("mouseleave", function () {
      cursor.textContent = "";
      cursor.classList.remove("mouse-enter");
    });
    _video.addEventListener('click',function() {
     if(_video.muted) {
      _video.muted = false;
      cursor.textContent = 'sound off'
     } else {
      _video.muted = true;
      cursor.textContent = 'sound on'
     }
    })
  }
}

//function trigger when cursor move
export function cursorMove(main,cursor) {
  
main.addEventListener("mousemove", (dets) => {

  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
    duration: 0.4,
    ease: Expo.ease,
  });
});
}


export function Menu(hamburger,bottomNav) {
  
hamburger.addEventListener("click", function () {
  const c = bottomNav.classList;
  if ("expanded" == c[1]) {
      c.remove("expanded")
  } else {
      c.add("expanded")
  }
  
})


}

export function redirectToAnotherPage(ele,url) {
  for(var temp of ele) {
    temp.addEventListener("click",()=> {
        window.location.href = url;
    })
  }
}

const cursor = document.querySelector('.cursor')
const main = document.querySelector('.main')
const hamburger = document.querySelector('.hamburger')
const bottomNav = document.querySelector('.bottom-nav')
const videos = document.querySelectorAll('video')

// init()

cursorMove(main,cursor)

Video(videos,cursor)
Menu(hamburger,bottomNav)



gsap.from('.photo-gallery img',{
    y : 50,
    scrollTrigger: {
        trigger: ".page-heading h1",
        scroller: ".main",
        markers: true,
        start: "top 30%",
        end: "top 0",
        scrub: 3,
    },
});

gsap.from('.photo-gallery video',{
    y : 50,
    scrollTrigger: {
        trigger: ".page-heading h1",
        scroller: ".main",
        markers: true,
        start: "top 30%",
        end: "top 0",
        scrub: 3,
    },
});

