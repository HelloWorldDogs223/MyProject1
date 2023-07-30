import { MovieData } from "../pages/Home";
import styled from "styled-components";
type Props = {
  data: MovieData;
};

export const TitleP = styled.p`
  color: red;
  border: 1px solid black;
  text-align: center;
  margin: 0px;
  height: 2em;
`;

export const ContentP = styled.p`
  color: black;
  text-align: center;
  margin: 0px;
  height: 3em;
`;

export const ContentA = styled.a`
  display: block;
  color: black;
  text-align: center;
  margin: 0px;
  text-decoration: none;
  &:hover {
    color: blue;
  }
`;

export default function Item({ data }: Props) {
  return (
    <div>
      <TitleP>{data.title}</TitleP>
      <ContentP>{data.description}</ContentP>
      <ContentA href={data.link}>{data.link}</ContentA>
    </div>
  );
}
