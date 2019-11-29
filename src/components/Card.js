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

function Card({ song, artist, comment, vote }) {
  return (
    <CardContainer>
      <CardContent>
        <h2>{song}</h2>
        <h3>{artist}</h3>
        <p>{comment}</p>
        <CardDetails>
          <button>Details</button>
          <div>
            <span role="img" aria-label="star">
              ⭐️
            </span>{" "}
            {vote}
          </div>
        </CardDetails>
      </CardContent>
    </CardContainer>
  );
}

export default Card;
