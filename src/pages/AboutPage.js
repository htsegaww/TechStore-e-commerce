import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/about.JPG";
const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="nice desk" />
        <article>
          <div className="title">
            <h2>our story</h2>
            <div className="underline"></div>
          </div>
          <p>
            The company was founded by Henok Tsegaw, in 2013. Since then,
            TechStore has been producing various tech devices, from computers to
            wearables. TechStore is among the job creators in the united states
            with two million jobs in all 50 states. TechStore is one of the most
            popular tech companies in the industry and it will continue to be
            the most popular technology store in the world. we provide easy to
            use and affordable technology devices in the united states.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};
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
export default AboutPage;
