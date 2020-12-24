import { NativeModules } from 'react-native';
const { RNNetworkScanner } = NativeModules.NetworkScanner;

const NetworkScanner = {
	scan() {
		RNNetworkScanner.scan();
	}
}

module.exports = NetworkScanner;