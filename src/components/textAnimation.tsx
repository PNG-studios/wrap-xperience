'use client';

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TextRevealAnimation() {
  useEffect(() => {
    const elements = gsap.utils.toArray<HTMLParagraphElement | HTMLHeadingElement>(
      "p, h2, h1"
    );

    elements.forEach((el) => {
      const wrapper = document.createElement("div");
      wrapper.style.position = "relative";
      wrapper.style.display = "inline-block";
      el.parentNode?.insertBefore(wrapper, el);
      wrapper.appendChild(el);

      gsap.set(el, { opacity: 0 });

      const overlay = document.createElement("div");
      overlay.classList.add("overlay");
      wrapper.appendChild(overlay);
      gsap.set(overlay, { scaleX: 0, transformOrigin: "left" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper,
          start: "top 90%",
        },
      });

      tl.to(overlay, { scaleX: 1, duration: 0.5, ease: "power2.out" })
        .set(el, { opacity: 1 })
        .to(overlay, { scaleX: 0, transformOrigin: "right", duration: 0.5, ease: "power2.in" });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return null;
}
