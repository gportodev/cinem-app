import { colors } from '@/styles/colors';
import { Toast } from 'toastify-react-native';
import { ToastType } from 'toastify-react-native/utils/interfaces';

export function handleSuccessFeedback(message: string, type: ToastType) {
  Toast.show({
    type: type,
    text1: message,
    position: 'top',
    backgroundColor: colors.slate,
    textColor: colors.white,
    visibilityTime: 1500,
  });
}
