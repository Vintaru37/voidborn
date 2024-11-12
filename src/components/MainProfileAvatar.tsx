import { View, Text, Image } from 'react-native';
import AvatarIcon from '../assets/icons/profile-avatar-icon.jpg';

const MainProfileAvatar = () => {
	return (
		<View className='absolute top-4 left-2 flex flex-row items-center gap-2 z-50'>
			<Image
				source={AvatarIcon}
				style={{
					width: 60,
					height: 60,
				}}
				className='rounded-md border-4 border-slate-700'
			/>
			<View>
				<Text className='text-2xl font-semibold text-white'>Karoth</Text>
				<Text className='text-white'>Level 78</Text>
			</View>
		</View>
	);
};
export default MainProfileAvatar;
