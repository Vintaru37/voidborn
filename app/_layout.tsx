// import { View, Text, Image } from 'react-native';
// import { Tabs } from 'expo-router';
// import InventoryIcon from '../src/assets/inventory-icon.png';
// import HatIcon from '../src/assets/hat-icon.png';
// import SwordIcon from '../src/assets/sword-icon.png';
// import TrophyIcon from '../src/assets/trophy-icon.png';

// const RootLayout = () => {
// 	const icons = [
// 		{ name: 'index', icon: InventoryIcon },
// 		{ name: 'magic', icon: HatIcon },
// 		{ name: 'sword', icon: SwordIcon },
// 		{ name: 'trophy', icon: TrophyIcon },
// 	];
// 	return (
// 		<Tabs
// 			screenOptions={{
// 				headerShown: false,
// 				tabBarShowLabel: false,
// 				tabBarStyle: {
// 					height: 60,
// 					backgroundColor: '#f2f2f2',
// 				},
// 			}}>
// 			{icons.map(({ name, icon }) => (
// 				<Tabs.Screen
// 					key={name}
// 					name={name}
// 					options={{
// 						tabBarIcon: ({ focused }) => (
// 							<View>
// 								<Image
// 									source={icon}
// 									style={{
// 										width: 40,
// 										height: 40,
// 										transform: focused
// 											? [{ translateY: -10 }]
// 											: [{ translateY: 0 }],
// 									}}
// 								/>
// 							</View>
// 						),
// 					}}
// 				/>
// 			))}
// 		</Tabs>
// 	);
// };
// export default RootLayout;
