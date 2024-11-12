import { View, Text, Image, TouchableOpacity } from 'react-native';
import TapAttack from '../assets/icons/stats/tap-attack.png';
import CanBuy from '../assets/icons/stats/can-buy.png';
import CantBuy from '../assets/icons/stats/cant-buy.png';
import Coin from '../assets/icons/stats/coin.png';

type StatsTabBarProps = {
	statTitle: string;
    statAmount: number;
    statCost: number;
    statCanBuy: boolean;
};

const StatsTabBar = ({ statTitle, statAmount, statCost, statCanBuy }: StatsTabBarProps) => {
	return (
		<View className='w-full flex flex-row justify-around items-center py-1 border-b-2'>
			<View className='p-1 border-2 rounded-md bg-amber-400'>
				<Image source={TapAttack} className='w-8 h-8' />
			</View>
			<Text className='text-lg'>{statTitle}</Text>
			<Text className='text-md'>{statAmount}</Text>
			<View>
				<TouchableOpacity>
					<Image source={statCanBuy ? CanBuy : CantBuy} resizeMode='contain' className='w-24 h-10' />
				</TouchableOpacity>
				<View className='flex flex-row justify-center items-center gap-1'>
					<Text className='text-sm'>{statCost}</Text>
					<Image source={Coin} resizeMode='contain' className='w-4 h-4' />
				</View>
			</View>
		</View>
	);
};
export default StatsTabBar;
