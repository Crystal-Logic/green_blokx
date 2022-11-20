import { Global } from '@emotion/react';

export const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Orbitron';
        font-weight: 400;
        font-display: swap;
        src: url('/fonts/Orbitron-Regular.ttf') format('ttf');
      }
      @font-face {
        font-family: 'Orbitron';
        font-weight: 500;
        font-display: swap;
        src: url('/fonts/Orbitron-Medium.ttf') format('ttf');
      }
      @font-face {
        font-family: 'Orbitron';
        font-weight: 600;
        font-display: swap;
        src: url('/fonts/Orbitron-SemiBold.ttf') format('ttf');
      }
      @font-face {
        font-family: 'Orbitron';
        font-weight: 700;
        font-display: swap;
        src: url('/fonts/Orbitron-Bold.ttf') format('ttf');
      }
      @font-face {
        font-family: 'Orbitron';
        font-weight: 800;
        font-display: swap;
        src: url('/fonts/Orbitron-ExtraBold.ttf') format('ttf');
      }
      @font-face {
        font-family: 'Orbitron';
        font-weight: 900;
        font-display: swap;
        src: url('/fonts/Orbitron-Black.ttf') format('ttf');
      }
      `}
  />
);
