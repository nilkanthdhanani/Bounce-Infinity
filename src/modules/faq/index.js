import React, { useEffect, useRef, useState } from 'react'
import './faq.scss';
import minus from "../../assets/images/contact/minus.png";
import plus from "../../assets/images/contact/plus.png";


export default function Faq() {
  const topRef = useRef(null);
  useEffect(() => {
    topRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);


  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    { question: 'Lorem Ipsum is simply dummy text ?', answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.' },
    { question: 'Lorem Ipsum is simply dummy text ?', answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.' },
    { question: 'Lorem Ipsum is simply dummy text ?', answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.' },
    { question: 'Lorem Ipsum is simply dummy text ?', answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.' },
    { question: 'Lorem Ipsum is simply dummy text ?', answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.' },
    { question: 'Lorem Ipsum is simply dummy text ?', answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.' },
    { question: 'Lorem Ipsum is simply dummy text ?', answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.' }
  ];
  return (
    <div>
      <div className="accordian" ref={topRef}>
        <div className="container6">
          <div className="faq-head" data-aos="fade-up" data-aos-duration="1000">
            <h2>Have Any Question?</h2>
          </div>
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-questions-box ${activeIndex === index ? 'active' : ''}`} onClick={() => toggleAccordion(index)}>
              <div className="faq-box-innner">
                <div className="faq-box-name">
                  <h3>{faq.question}</h3>
                  <img src={activeIndex === index ? minus : plus} alt={activeIndex === index ? 'minus' : 'plus'} />
                </div>
                {activeIndex === index && <p>{faq.answer}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}
