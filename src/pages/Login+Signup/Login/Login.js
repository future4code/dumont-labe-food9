import React from "react";
import InputForm from "../../components/MaterialUI/Forms";
import { Button } from "../../components/MaterialUI/Buttons";
import Checkboxs from "../../../components/MaterialUI/Checkboxs";
const Login = () => {
  return (
    <div>
      <InputForm />
      <Button>Enviar</Button>
      <Checkboxs />
    </div>
  );
};

export default Login;
