import styled from "styled-components";
export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 113vh;
`;

export const Logo = styled.img`
  max-width: 200px;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 18px;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  font-size: 16px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const Button = styled.button`
  font-size: 18px;
  padding: 10px 20px;
  background-color: #008e60;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
