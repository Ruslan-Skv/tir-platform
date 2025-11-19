import React, { useEffect, useState } from 'react';
import { useTheme } from '@/features/theme';
import styles from './Background.module.css';

export const Background: React.FC = () => {
  const { isDarkTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Избегаем гидратационного mismatch
  //   useEffect(() => {
  //     setMounted(true);
  //   }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  // На сервере используем светлую тему, на клиенте - актуальную
  const backgroundImage =
    mounted && isDarkTheme ? "url('/images/dark-fon.jpg')" : "url('/images/fon.jpg')";

  return <div className={styles.background} style={{ backgroundImage }} />;
};

// import React from 'react';
// import { useTheme } from '@/features/theme';
// import styles from './Background.module.css';

// export const Background: React.FC = () => {
//   const { isDarkTheme } = useTheme();

//   const backgroundImage = isDarkTheme
//     ? "url('/images/dark-fon.jpg')"
//     : "url('/images/fon.jpg')";

//   return (
//     <div
//       className={styles.background}
//       style={{ backgroundImage }}
//     />
//   );
// };
