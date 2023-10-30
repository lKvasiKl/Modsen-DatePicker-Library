import { styled } from "styled-components";

export const DayOfWeekGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(5, 1fr);
  width: fit-content;
`;
