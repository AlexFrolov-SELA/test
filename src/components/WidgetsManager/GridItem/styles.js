import styled from "styled-components";

export const Wrapper = styled.div`
  flex: 1;
  height: 100%;
  border: 1px solid black;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
`;
export const Header = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: space-between;
  padding: 5px 7px;
`;
export const Title = styled.span`
  font-weight: bold;
`;
export const Actions = styled.span`
  display: flex;
  & > * {
    margin-right: .5em;
    cursor: pointer;
  }
`;
export const Content = styled.div`
  flex: 1;
  display: flex;
  justify-content: stretch;
  align-items: stretch;
  & > * {
    flex: 1;
  }
`;
export const DragHandle = styled.div`
  flex: 1;
  cursor: grabbing;
`;
