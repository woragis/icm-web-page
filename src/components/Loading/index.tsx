import { StyledLoadingComponent } from "./style";

const LoadingComponent = () => {
  return (
    <StyledLoadingComponent>
      <div className="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </StyledLoadingComponent>
  );
};

export default LoadingComponent;
