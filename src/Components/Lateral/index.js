import { Container, Title } from './style';

function LateralCard() {
	return (
		<Container>
			<Title>
				<h3>Filtro</h3>
			</Title>
			<div>
				<div>
					<p className="title">Marca</p>
					<div className="checkbox">
						<div>
							<input
								className="input"
								type="checkbox"
								id="Zara"
								name="Zara"
								value="Zara"
							/>
							<label>Tzara</label>
						</div>
						<div>
							<input
								type="checkbox"
								id="Zara"
								name="Zara"
								value="Zara"
							/>
							<label>Pumares</label>
						</div>
						<div>
							<input
								type="checkbox"
								id="Zara"
								name="Zara"
								value="Zara"
							/>
							<label>Shennel</label>
						</div>
					</div>
				</div>
				<div>
					<p className="title">Cor</p>
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-around',
							paddingInline: '30px',
						}}
					>
						<button
							className="color"
							style={{ backgroundColor: '#fff' }}
						></button>

						<button
							className="color"
							style={{ backgroundColor: '#ff94fb' }}
						></button>

						<button
							className="color"
							style={{ backgroundColor: '#000' }}
						></button>
					</div>
				</div>
				<div>
					<p className="title">Moda</p>
					<div className="checkbox">
						<div>
							<input
								type="checkbox"
								id="Zara"
								name="Zara"
								value="Zara"
							/>
							<label>Feminina</label>
						</div>
						<div>
							<input
								type="checkbox"
								id="Zara"
								name="Zara"
								value="Zara"
							/>
							<label>Masculina</label>
						</div>
						<div>
							<input
								type="checkbox"
								id="Zara"
								name="Zara"
								value="Zara"
							/>
							<label>Infantil</label>
						</div>
					</div>
				</div>
				<div>
					<p className="title">Tamanho</p>
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-around',
							paddingInline: '30px',
							paddingBottom: '20px',
						}}
					>
						<button className="size">P</button>
						<button className="size">M</button>
						<button className="size">G</button>
					</div>
				</div>
			</div>
		</Container>
	);
}

export default LateralCard;
