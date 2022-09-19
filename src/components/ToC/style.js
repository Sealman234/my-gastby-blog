import styled from "styled-components";

export const FullHeightWrap = styled.div`
  position: absolute;
  top: 1.5rem;
  left: 0;
  width: 100%;
  max-width: calc((100vw - 792px) / 2);
  height: 100%;
  padding: 0 0.5rem;
  display: none;
  @media (min-width: 1024px) {
    display: block;
  }
`;

export const StickyToC = styled.div`
  position: sticky;
  top: 4rem;
  left: 0;

  & ul {
    list-style: none;
    padding-left: 1rem;
    font-size: 0.875rem;

    li {
      margin: 3px 0;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;

      a {
        color: #767676;
        &:hover {
          color: #000;
          text-decoration: none;
        }
      }
    }
  }
`;
