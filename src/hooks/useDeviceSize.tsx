import { useEffect, useState } from 'react';

const breakpoints = {
	480: 'xs', // mobile
	770: 'sm', // tablet
	1024: 'md', // big tablet
	1280: 'lg', // small pc
	1440: 'xl', // pc
	1920: 'xxl', // large screen
};

const useDeviceSize = () => {
	const [width, setWidth] = useState(1440);
	// const [height, setHeight] = useState(0);
	const [breakpoint, setBreakPoint] = useState('');


	const handleWindowResize = () => {
		setWidth(window.screen.width);
		// setHeight(window.screen.height);
	};

	useEffect(() => {
		// component is mounted and window is available
		handleWindowResize();
		window.addEventListener('resize', handleWindowResize);

		if (0 < width && width <= 480) {
			setBreakPoint(breakpoints[480]);
		}
		if (480 < width && width <= 770) {
			setBreakPoint(breakpoints[770]);
		}
		if (770 < width && width <= 1024) {
			setBreakPoint(breakpoints[1024]);
		}
		if (1024 < width && width <= 1280) {
			setBreakPoint(breakpoints[1280]);
		}
		if (1280 < width && width <= 1700) {
			setBreakPoint(breakpoints[1440]);
		}
		if (1700 < width) {
			setBreakPoint(breakpoints[1920]);
		}

		// unsubscribe from the event on component unmount
		return () => window.removeEventListener('resize', handleWindowResize);
	}, [width]);


	return breakpoint;
};

export default useDeviceSize;
