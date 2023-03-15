import styled from 'styled-components';

export const Container = styled.div`
	@font-face {
		font-family: 'Poppins', sans-serif;
		src: url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;900&display=swap');
	}

	font-family: 'Poppins', sans-serif;
	width: 70%;
	margin: 25px auto;
	border: 1px solid #eee;
	color: #232323;

	input {
		width: 15px;
		height: 15px;
		background-color: #fafafa;
		border: 1px solid #ddd;
		border-radius: 0px;
	}
	.checkbox {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding: 5px;
		padding-left: 5vh;

		div {
			display: flex;
			align-items: center;
		}
	}
	.title {
		font-size: 2.5vh;
		font-weight: 600;
		margin-left: 5vh;
	}
	.color {
		width: 40px;
		height: 40px;
		border: none;
		border-radius: 0px;
		cursor: pointer;
		box-shadow: 5px 5px 5px #e0e0e0;
	}
	.size {
		width: 40px;
		height: 40px;
		background-color: #fff;
		border: 1px solid #ddd;
		border-radius: 0px;
		text-align: center;
		color: #777;
		transition: 0.2s ease;
		cursor: pointer;
	}
	.size:hover {
		background-color: #ffeb28;
		border: 1px solid #ffeb28;
		color: #232323;
	}
`;

export const Title = styled.div`
	font-size: 16px;
	padding: 10px;
	background: #f5f5f5;
	color: #232323;
	font-weight: 400;
	letter-spacing: 0.5px;
	line-height: 18px;
`;
