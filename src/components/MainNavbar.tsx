import { View, Image, TouchableOpacity } from 'react-native';
import InventoryIcon from '../assets/icons/inventory-icon.png';
import HatIcon from '../assets/icons/hat-icon.png';
import SwordIcon from '../assets/icons/shield-sword-icon-1.png';
import QuestIcon from '../assets/icons/quest-icon.png';

type MainNavbarProps = {
	selectedTab: string;
	setSelectedTab: (tab: string) => void;
};

const MainNavbar = ({ selectedTab, setSelectedTab }: MainNavbarProps) => {
	const icons = [
		{ id: 'stats', icon: SwordIcon },
		{ id: 'inventory', icon: InventoryIcon },
		{ id: 'skills', icon: HatIcon },
		{ id: 'quests', icon: QuestIcon },
	];
	return (
		<View className='flex flex-row justify-around w-full py-2 bg-slate-300 z-50'>
			{icons.map(({ id, icon }) => (
				<TouchableOpacity key={id} onPress={() => setSelectedTab(id)}>
					<Image
						source={icon}
						style={{
							width: 45,
							height: 40,
							opacity: selectedTab === id ? 1 : 0.5,
						}}
					/>
				</TouchableOpacity>
			))}
		</View>
	);
};
export default MainNavbar;
