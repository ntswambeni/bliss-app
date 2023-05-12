import { Link } from "react-router-dom";
import { ContainerFluid } from "../../styled-components/Containers";

const NotFound = () => {
  return (
    <>
      <ContainerFluid>
        <h1>404</h1>
        <h2>Ops! the page was not found</h2>
        <Link to="/questions">go to questions list</Link>
      </ContainerFluid>
    </>
  );
};

export default NotFound;
