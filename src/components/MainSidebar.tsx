import { View, TouchableOpacity, Image } from 'react-native';
import MusicOnIcon from '../assets/icons/music-on-icon.png';
import MusicOffIcon from '../assets/icons/music-off-icon.png';
import SettingsIcon from '../assets/icons/settings-icon.png';
import MoonEventIcon from '../assets/icons/moon-event-icon.png';

const MainSidebar = () => {
	const icons = [
		// { id: 'musicOn', icon: MusicOnIcon },
		{ id: 'musicOff', icon: MusicOffIcon },
		{ id: 'settings', icon: SettingsIcon },
		{ id: 'moonEvent', icon: MoonEventIcon },
	];
	return (
		<View className='absolute top-4 right-2 flex flex-col justify-around gap-2 z-50'>
			{icons.map(({ id, icon }) => (
				<TouchableOpacity key={id}>
					<Image
						source={icon}
						style={{
							width: 40,
							height: 40,
						}}
					/>
				</TouchableOpacity>
			))}
		</View>
	);
};
export default MainSidebar;
