import styled from "styled-components";
import { Loading } from "../assets/svgComponents/icon";

const LoadingContainer = () => {
  return (
    <LoadingWrapper>
      <Loading />
    </LoadingWrapper>
  )
}

export default LoadingContainer;

const LoadingWrapper = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;