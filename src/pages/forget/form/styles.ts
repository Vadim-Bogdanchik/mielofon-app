import styled from '@emotion/styled'

export const FormContainer = styled.div`
	width: 400px;
`

export const ButtonStyled = styled.button`
	width: 100%;
	margin-top: 15px;
	padding: 15px;
	color: white;
	border: 0;
	border-radius: 5px;

	cursor: pointer;

	background: linear-gradient(to bottom right, #62a9fb, #6061fa, #9d8cfe);
	background-size: 200% 200%;
`

// export const TextStyled = styled.div`
// 	text-align: right;
// 	font-size: 16px;
// 	font-weight: 600;
// 	cursor: pointer;

// 	background-image: linear-gradient(to right, red, orange);
// 	-webkit-background-clip: text;
// 	-webkit-text-fill-color: transparent;
// `

export const ErrorText = styled.p`
	width: 100%;
	font-size: 14px;
	font-weight: 500;
	text-align: center;

	color: red;
`
