import styled from "styled-components";

const Footerdiv = styled.div`
  border: 1px solid gray;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Footer() {
  return (
    <>
      <Footerdiv>
        <p>Rights reserved from 2023</p>
      </Footerdiv>
    </>
  );
}
