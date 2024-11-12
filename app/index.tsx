import '../global.css';
import React, { useState } from 'react';
import { View, Image, Text, SafeAreaView, StatusBar } from 'react-native';
import MainNavbar from '@/src/components/MainNavbar';
import MainProfileAvatar from '@/src/components/MainProfileAvatar';
import MainSidebar from '@/src/components/MainSidebar';
import MainStatsTab from '@/src/components/MainStatsTab';
import MainMonsterArea from '@/src/components/MainMonsterArea';

const Index = () => {
	const [selectedTab, setSelectedTab] = useState('stats');

	const renderTabContent = () => {
		switch (selectedTab) {
			case 'stats':
				return <MainStatsTab />;
			case 'inventory':
				return <Text>Inventory Content</Text>;
			case 'skills':
				return <Text>Skills Content</Text>;
			case 'quests':
				return <Text>Quests Content</Text>;
			default:
				return null;
		}
	};

	return (
		<SafeAreaView className='min-h-screen flex-col relative'>
			<MainProfileAvatar />
			<MainSidebar />
			<MainMonsterArea />
			<View className='mt-auto'>{renderTabContent()}</View>
			<MainNavbar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
		</SafeAreaView>
	);
};

export default Index;
