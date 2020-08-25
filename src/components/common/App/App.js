import React, { useState } from "react"

import Spinner from "../../core/Spinner";
import { Chart, ChartItem } from "../../core/Chart";
import Button from "../../core/Button";
import { ChartData, ChartDataItem } from "../ChartData";

import { ChartSection, ChartDataSection, Header, ButtonsSection, AppWrapper, SpinnerWrapper } from "./App.styled";

import { fetchData } from "../../../api/getData";
import { getColor } from "../../../api/getColor";

const App = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [nextId, setNextId] = useState(0);

	const onAddData = () => {
		setLoading(true);
		fetchData().then((value) => {
			setData([...data, {id: nextId.toString(), isActive: true,  value,
				color: getColor(nextId)[0], backgroundColor: getColor(nextId)[1]}]);
			setNextId(nextId + 1);
			setLoading(false);
		});
		
	};
	
	const onChangeActive = (itemId) => {
		setData(data.map((item) => (item.id === itemId) ? {...item, isActive: !item.isActive} : item));
	};
	const onDeleteItem = (itemId) => {
		setData(data.filter((item) => (item.id !== itemId)));
	}

	return (
		<AppWrapper>
			<Header>
				<h1>SuperChart</h1>
			</Header>
			<ChartSection>
				<Chart viewWidth="500" viewHeight="200" backgroundColor="#ffffff">
					{data.map((item, i) =>
						(item.isActive &&
							<ChartItem key={item.id} id={item.id} color={item.color}
								fillColor={item.backgroundColor} data={item.value} />
						)
					)}
				</Chart>
				{loading && (
					<SpinnerWrapper>
						<Spinner />
					</SpinnerWrapper>
				)}
			</ChartSection>
			<ChartDataSection>
				<ChartData>
					{data.map((item, i) =>(<ChartDataItem
						isActive={item.isActive}
						onChangeActive={onChangeActive}
						onDeleteItem={onDeleteItem}
						key={item.id} id={item.id} backgroundColor={item.color}
						data={item.value} />)
					)}
				</ChartData>
			</ChartDataSection>
			<ButtonsSection>
				<Button onClick={() => {setData([])}}>Clear</Button>
				<Button isDisabled={loading} onClick={onAddData}>GetData</Button>
			</ButtonsSection>
		</AppWrapper>
	);
};

export default App;
