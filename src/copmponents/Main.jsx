import styled from "styled-components";
import Search from "./Search";
import ProductList from "./ProductList";
import AddForm from "./AddFrom";
import Bag from "./Bag";
import SendFormOrder from "./SendFormOrder";

function Main() {
  return (
    <MainTag>
      <Search />
      <AddForm />
      <ProductList />
      <Bag />
      <SendFormOrder/>
    </MainTag>
  );
}

export default Main;

const MainTag = styled.main`
  margin-bottom: auto;
`;
