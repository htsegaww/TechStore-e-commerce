import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/heroImage1.jpeg";

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page-section section-center">
        <img src={aboutImg} alt="desk" />
        <article>
          <div className="title">
            <h2>Our Story</h2>
            <div className="underline"></div>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis
            qui quibusdam harum eaque eligendi et enim natus a beatae illum,
            quae earum, quas, aspernatur ab. Suscipit aperiam facilis inventore
            atque.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};
export default AboutPage;
