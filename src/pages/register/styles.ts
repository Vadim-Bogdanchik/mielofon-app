import styled from '@emotion/styled'

export const Container = styled.div`
	/* position: relative; */
	display: flex;
	margin: 0;
	padding: 0;
	width: 100%;
	height: 100vh;

	font-size: 30px;
	color: #000;

	@media only screen and (max-width: 767px) {
	}
	@media only screen and (orientation: portrait) {
	}

	/* Disable text selection */
	-webkit-touch-callout: none; /* iOS Safari */
	-webkit-user-select: none; /* Safari */
	-khtml-user-select: none; /* Konqueror HTML */
	-moz-user-select: none; /* Old versions of Firefox */
	-ms-user-select: none; /* Internet Explorer/Edge */
	user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
`

export const LeftPart = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	width: 50%;
	padding: 0px 100px 0px 100px;

	@keyframes gradient-animation {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}

	background: linear-gradient(45deg, #ddcbfb, #7abbf5, #9e8efb);
	background-size: 200% 200%;
	animation: gradient-animation 5s ease infinite;

	/* Стили для мобильных устройств */

	@media only screen and (max-width: 767px) {
	}
	@media only screen and (orientation: portrait) {
	}
`
export const LeftContentBlock = styled.div`
	display: flex;
	flex-direction: column;
	align-items: start;
	justify-content: start;
	gap: 30px;

	width: 100%;
	height: max-content;
	padding: 140px 80px;

	background-color: rgba(255, 255, 255, 0.3);
`
export const LeftContentTitle = styled.div`
	font-size: 60px;
	font-weight: 700;
	color: #fff;
	line-height: 1;

	@media only screen and (max-width: 1650px) {
		font-size: 40px;
	}
`

export const LeftContentSubTitle = styled.div`
	font-size: 25px;
	font-weight: 400;
	color: #fff;
	line-height: 1;

	@media only screen and (max-width: 1650px) {
		font-size: 20px;
	}
`

export const RightPart = styled.div`
	display: flex;
	flex-direction: column;
	align-items: start;
	justify-content: center;
	background-color: white;

	width: 50%;
	padding: 0 100px 0 100px;

	@media only screen and (max-width: 767px) {
	}
	@media only screen and (orientation: portrait) {
	}
`

export const RightContentTitle = styled.div`
	font-size: 40px;
	font-weight: 700;
	color: #191b54;
	margin-bottom: 10px;

	@media only screen and (max-width: 1650px) {
	}
`

export const RightContentSubTitle = styled.div`
	font-size: 20px;
	font-weight: 400;
	color: #191b54;
	margin-bottom: 30px;

	@media only screen and (max-width: 1650px) {
	}
`
