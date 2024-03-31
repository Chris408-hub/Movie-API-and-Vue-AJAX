export function animatePoster() {
    gsap.from('.movie-poster', { duration: 1, opacity: 0, scale: 0.5, ease: 'power2.inOut' });
}
    
