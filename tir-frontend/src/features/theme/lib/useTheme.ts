import { useAppDispatch, useAppSelector } from '@/shared/lib/redux/hooks';
import { toggleTheme } from '../model/themeSlice';

export const useTheme = () => {
  const { isDarkTheme } = useAppSelector(state => state.theme);
  const dispatch = useAppDispatch();

  return {
    isDarkTheme,
    toggleTheme: () => dispatch(toggleTheme()),
  };
};
