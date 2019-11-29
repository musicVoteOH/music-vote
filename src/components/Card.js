import React from "react";
import styled from "@emotion/styled";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 400px;
  border: 1px solid ${props => props.theme.tertiary};
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 30px 20px;
`;

const CardDetails = styled.div`
  display: flex;
  justify-content: space-around;
  border-top: 1px solid #efefef;
  margin: 0 30px;
  padding: 30px 0;
`;

function Card() {
  return (
    <CardContainer>
      <CardContent>
        <h2>Song</h2>
        <h3>Artist</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
          harum tempora natus eum minus doloremque, quam consequatur consectetur
          fugiat magni! Vero, sit! Qui, corrupti mollitia! Eveniet modi
          voluptatem harum incidunt.
        </p>
        <CardDetails>
          <button>Details</button>
          <div>Votes</div>
        </CardDetails>
      </CardContent>
    </CardContainer>
  );
}

export default Card;
