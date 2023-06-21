import React from 'react'
import styles from '@/components/adopt_carousel/adoptcarousel.module.css'
import AdoptCard from '@/components/adopt_card/AdoptCard'
import {useRef, useEffect, useState} from 'react'


const AdoptCarousel = () => {
  const cards = [
    /*
    {
      imageURL: 'assets/icons/dog.svg',
      adoptTitle: 'Adopt a Dog',
      imageAlt: 'dog icon',
      routeURL: 'adopt/dog'
    },
    {
      imageURL: 'assets/icons/cat.svg',
      adoptTitle: 'Adopt a Cat',
      imageAlt: 'cat icon',
      routeURL: 'adopt/cat'

    },
    */
    {
      imageURL: 'assets/icons/bird.svg',
      adoptTitle: 'Adopt a Bird',
      imageAlt: 'bird icon',
      routeURL: 'adopt/bird'
    },
    {
      imageURL: 'assets/icons/fish.svg',
      adoptTitle: 'Adopt a Fish',
      imageAlt: 'fish icon',
      routeURL: 'adopt/fish'      
    },
    {
      imageURL: 'assets/icons/cutie.svg',
      adoptTitle: 'Adopt a Cutie',
      imageAlt: 'cutie icon',
      routeURL: 'adopt/cutie'      
    },
  ];

  const materialIcons = "material-icons-outlined";

  {/* script */}
  const carouselRef = useRef(null);
  const arrowBackRef = useRef(null);
  const arrowForwardRef = useRef(null);

  {/* stop card from clicking when draggin occurs */}
  const [clickState, setClickState] = useState(styles.disable);
  const [draggingState, setDraggingState] = useState(styles.dragging);

  {/* dragging effect */}
  useEffect(() => {
    const carousel = carouselRef.current;
    const arrowBack = arrowBackRef.current;
    let isDragStart = false, prevPageX, prevScrollLeft; 

    const dragStart = (e) => {
      isDragStart = true; 
      prevPageX = e.pageX || e.touches[0].pageX;
      prevScrollLeft = carousel.scrollLeft;
    }
    const dragging = (e) => {
      if (!isDragStart) return; 
      e.preventDefault();
      setDraggingState(styles.dragging);
      let positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
      carousel.scrollLeft = prevScrollLeft - positionDiff;
      setClickState(styles.disable);
    }

    const dragStop = () => {
      isDragStart = false;
      setClickState('');
      setDraggingState('');
    }
    
    {/* event listeners for dragging */}
    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener('touchstart', dragStart);

    carousel.addEventListener("mousemove", dragging);
    carousel.addEventListener("touchmove", dragging);

    carousel.addEventListener("mouseup", dragStop);
    carousel.addEventListener('mouseleave', dragStop);
    carousel.addEventListener('touchend', dragStop);
    
  }, []);

  {/* arrowIcons scroll effect */}
  useEffect(() => {
    {/* get first card element for horizontal scroll offset */}
    let carousel = carouselRef.current;
    let card = carouselRef.current;
    let arrowBack = arrowBackRef.current;
    let arrowForward = arrowForwardRef.current;

    card = card.querySelector('div');
    let cardWidth = card.clientWidth;

    arrowBack.addEventListener('click', () => {
      carousel.scrollLeft += -cardWidth;
    });

    arrowForward.addEventListener('click', () => {
      carousel.scrollLeft += cardWidth;
    });

  }, []);

  {/* display adopt cards */}
  return (
    <div className={styles.wrapper}>
      <span className={`${materialIcons} ${styles.back_icon}`} ref={arrowBackRef}>arrow_back_ios</span>
      <div className={`${styles.carousel} ${draggingState}`} ref={carouselRef}>
        {cards.map((card, i) => (
        <AdoptCard key={card.routeURL} imageURL={card.imageURL} adoptTitle={card.adoptTitle} imageAlt={card.imageAlt} routeURL={card.routeURL} disable={clickState}/>
        ))}
      </div>
      <span className={`${materialIcons} ${styles.forward_icon}`} ref={arrowForwardRef}>arrow_forward_ios</span>
    </div>
  )
}

export default AdoptCarousel