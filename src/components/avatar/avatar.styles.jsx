import styled from "styled-components";

const diameter = "38.4rem";

export const AvatarCircle = styled.div`
  width: ${props => props.theme.gridColWidth};
  height: ${props => props.theme.gridColWidth};
  border-radius: 50%;
  overflow: hidden;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: ${props => props.theme.shadowFlat};

  img {
    width: ${props => props.theme.gridColWidth};
    height: ${props => props.theme.gridColWidth};

    /* safari render bug - need 50% here so no overflow */
    border-radius: 50%;

    position: absolute;
    transition: 1s ease;
  }

  &:hover img {
    transform: scale(1.2);
    transition: 16s linear;
  }
`;
