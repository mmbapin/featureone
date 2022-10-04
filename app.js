const startFunc = (startFunc) => {
  console.log("Done", startFunc)
  document.querySelector(".dvscp").style.backgroundColor = `${startFunc}`
}

gsap.registerPlugin(ScrollTrigger)

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".dvscp",
    markers: true,
    start: "top center",
    end: "bottom 25%",
    toggleActions: "restart none reverse none",
    pin: true,
    pinSpacing: false,
    scrub: 4,
  }
});
tl.fromTo(".square", { y: 300, opacity: 0 }, { y: 0, opacity: 1, duration: 1.5, ease: "ease-in-out", toggleClass: "sadasd", onComplete: () => startFunc("fuchsia") })
tl.fromTo(".square2", { y: 300, opacity: 0 }, { y: 0, opacity: 1, duration: 1.5, ease: "ease-in-out", onComplete: () => startFunc("blue") })
tl.fromTo(".square3", { y: 300, opacity: 0 }, { y: 0, opacity: 1, duration: 1.5, ease: "ease-in-out", onComplete: () => startFunc("green") })
tl.fromTo(".square4", { y: 300, opacity: 0 }, { y: 0, opacity: 1, duration: 1.5, ease: "ease-in-out", onComplete: () => startFunc("black") })


  // .to(".square2", {
  //   x: 1000, opacity: 1, duration: 3
  // })
// gsap.to(".square", {
//   x: 1000,
//   duration: 8,
//   scrollTrigger: {
//     trigger: ".square",
//     start: "top 80%",
//     end: "top 30%",
//     toggleActions: "restart none none none",
//     scrub: 4,
//     pin: true,
//     pinSpacing: false,
//     markers: true,
//     // toggleClass: "red",
//   },
//   // onStart: myFunction,
//   // onStartParams: ["param1", "param2"]
// })

