import {
	View,
	Text,
	ImageBackground,
	Image,
	TouchableOpacity,
	SafeAreaView,
} from 'react-native';
import ForestBg from '@/src/assets/images/backgrounds/forest-1.jpg';
import Wolf from '@/src/assets/images/monsters/wolf.png';
import { useState } from 'react';

const MainMonsterArea = () => {
	const [health, setHealth] = useState(100); // Initial health is 100%

	// Function to decrease health (simulating damage)
	const takeDamage = () => {
		setHealth((prevHealth) => Math.max(prevHealth - 15, 0));
		if (health <= 0) {
			setHealth(100);
		}
	};

	return (
		<View className='flex-1 justify-center items-center'>
			<ImageBackground
				className='w-full h-full -z-20'
				// resizeMode='cover'
				source={ForestBg}>
				<View
					className='flex flex-col items-center'
					style={{
						position: 'absolute',
						bottom: 0,
						left: '50%',
						transform: [{ translateX: -110 }],
						zIndex: 100,
					}}>
					<View className='bg-slate-800 bg-opacity-50 flex items-center py-2 px-4 rounded-lg'>
						<Text className='text-white text-3xl font-semibold'>Forest</Text>
						<Text className='text-white text-xl font-semibold'>The Wolf</Text>
					</View>
					{/* Monster Health Bar */}
					<View className='w-full h-6 mt-2 bg-gray-300 rounded-lg border-2'>
						<View
							style={{ width: `${health}%` }}
							className={`h-full bg-red-700 rounded-md transition-all duration-500`}
						/>
					</View>
					{/* Monster Image */}
					<TouchableOpacity onPress={takeDamage} activeOpacity={1}>
						<Image
							style={{
								width: 200,
								height: 200,
							}}
							resizeMode='contain'
							source={Wolf}
						/>
					</TouchableOpacity>
				</View>
			</ImageBackground>
		</View>
	);
};
export default MainMonsterArea;
