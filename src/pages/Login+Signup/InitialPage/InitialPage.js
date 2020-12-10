import React from 'react'
import LogoImagem from "../../../assets/logoBranco.png"
import { Logo , ContainerInitial } from "../../../components/StyledComponents/styles";


const InitialPage = () => {
	return (
		<ContainerInitial>
			<Logo
				src={LogoImagem}
				alt="logo FutureEats Branco"
				/>
		</ContainerInitial>
	)
}

export default InitialPage
