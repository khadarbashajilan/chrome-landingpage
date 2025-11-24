// animation function for the gallery images
export function animation(tl, images, scrollRef) {
  tl.fromTo(
    images[0],
    {
      x: -475,
      y: -100,
    },
    {
      x: -700,
      y: 0,
      scrollTrigger: {
        trigger: images[0],
        start: "top 80%",
        end: "top 50%",
        scrub: 2,
        markers: false,
      },
      ease: "power2.inOut",
    }
  );

  // Animation for second image
  tl.fromTo(
    images[1],
    {
      x: -550,
      y: 500,
      // scale: 0.8
    },
    {
      x: -715,
      y: 0,
      // scale: 1.1,
      scrollTrigger: {
        trigger: images,
        start: "top 80%",
        end: "top 50%",
        scrub: 1.5,
        markers: false,
      },
      ease: "power2.inOut",
      duration: 1.5,
    }
  );

  // Animation for third image
  tl.fromTo(
    images[2],
    {
      x: -525,
      y: 250,
    },
    {
      x: -725,
      y: 0,
      scrollTrigger: {
        trigger: images,
        start: "top 80%",
        end: "top 50%",
        scrub: 1.5,
        markers: false,
      },
      ease: "power2.inOut",
      duration: 1.5,
    }
  );

  // Animation for fourth image
  tl.fromTo(
    images[3],
    {
      x: -560,
      y: -100,
      scale: 1.2,
    },
    {
      x: -730,
      scale: 1,
      y: 0,
      scrollTrigger: {
        trigger: images,
        start: "top 80%",
        end: "top 50%",
        scrub: 1.5,
        markers: false,
      },
      ease: "power2.inOut",
      duration: 1.5,
    }
  );

  // Animation for fifth image
  tl.fromTo(
    images[4],
    {
      x: -525,
      y: 250,
    },
    {
      x: -730,
      y: 0,
      // opacity: 1,
      scale: 1,
      scrollTrigger: {
        trigger: images,
        start: "top 80%",
        end: "top 50%",
        scrub: 1.5,
        markers: false,
      },
      ease: "power2.inOut",
      duration: 1.5,
    }
  );
  tl.to(scrollRef.current, {
    x: -350,
    scrollTrigger: {
      trigger: scrollRef.current,
      start: "top 60%",
      end: "bottom 1%",
      scrub: 1.5,
    },
  });
}
