import { colors } from '@/styles/colors';
import { Toast } from 'toastify-react-native';

export function handleErrorFeedback(message: string) {
  Toast.show({
    type: 'error',
    text1: message,
    position: 'top',
    backgroundColor: colors.slate,
    textColor: colors.white,
  });
}
