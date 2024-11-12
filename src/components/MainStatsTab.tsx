import { View, Text } from 'react-native';
import StatsTabBar from './StatsTabBar';

const MainStatsTab = () => {
	return (
		<View className='flex flex-col items-center bg-yellow-700'>
			<StatsTabBar
				statTitle='Tap Attack'
				statAmount={17.42}
				statCost={25}
				statCanBuy={true}
			/>
			<StatsTabBar
				statTitle='Idle Attack'
				statAmount={21.64}
				statCost={42}
				statCanBuy={false}
			/>
			<StatsTabBar
				statTitle='Crit Chance'
				statAmount={21.64}
				statCost={64}
				statCanBuy={false}
			/>
			<StatsTabBar
				statTitle='Crit Damage'
				statAmount={21.64}
				statCost={27}
				statCanBuy={true}
			/>
		</View>
	);
};
export default MainStatsTab;
