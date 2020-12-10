import React from "react";
import TopBarLogin from "../../../components/TopBar/TopBarLogin";
import { Container } from "../../../components/StyledComponents/styles";
import logo from "../../../assets/logoBranco.png"
import { P , Logo , FormInputsLogin , AreaButton ,  } from "../../../components/StyledComponents/styles";
import { TextField, Button } from '@material-ui/core'

const Login = () => {
  return ( 
  <Container>
      <TopBarLogin  />
      <Logo
				src={logo}
				alt="logo FutureEats Branco"
				/>
      <P><b>Entrar</b></P>

    <FormInputsLogin >
      <TextField
        variant='outlined'
        label='E-mail'
        placeholder='email@email.com'
        name='email'
        type='email'
        pattern='[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}'
        required
      />
      <br/>
      <TextField
        variant= 'outlined'
        label='Senha'
        placeholder='Mínimo 6 caracteres'
        minlength="6"
        name='password'
        required
        />
        
      <AreaButton>
      <Button 
        variant='contained'
        color="#5CB646"
        type="submit"
      >
        LOGIN
      </Button>
      <Button 
        color= "#5CB646"
      >
        Não possui cadastro? 
        Clique aqui.
      </Button>
      </AreaButton>
      </FormInputsLogin>
  </Container>
  )}
export default Login
