import { useContext } from "react";
import styled from "styled-components";
import { MyContext } from "../App";

function SendFormOrder() {
  let { stateForm,stateBag, dispatchForm } = useContext(MyContext);

  return (
    <FormBox>
      <SendForm onSubmit={(ev)=>dispatchForm({type:'SEND ORDER',payload:ev,bag:stateBag.bag})}>
        <NameInput type="text" name="name" placeholder="name" />
        <NumberInput type="number" name="number" placeholder="number" />
        <AddressInput type="text" name="address" placeholder="address" />
        <SendFormButton>SEND</SendFormButton>
      </SendForm>
    </FormBox>
  );
}
export default SendFormOrder;
const FormBox = styled.div`
  width: 300px;
  height: 350px;
  border: solid, black, 1px;
  border-radius: 10px;
  background-color: grey;
`;

const SendForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin: 30px;
`;
const NameInput = styled.input`
  padding: 10px;
  border-radius: 10px;
`;
const NumberInput = styled.input`
  padding: 10px;
  border-radius: 10px;
`;
const AddressInput = styled.input`
  padding: 10px;
  border-radius: 10px;
`;
const SendFormButton = styled.button`
  padding: 10px;
  border-radius: 10px;
`;
const ConfirmationMessage=styled.div` 
  margin-top: 20px;
  padding: 10px;
  background-color: lightgreen;
  border-radius: 10px;
  text-align: center;
  color: green;`
