import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const enableLog = true;

export default function Constants() {
    var constants = {
        width: width,
        height:height,
        enableLog: enableLog
    }

    

    return constants;
}