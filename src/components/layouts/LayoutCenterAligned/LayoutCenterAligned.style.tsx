import styled from 'styled-components';
import { Text } from 'components/Text/Text';
import { colors, paddingSizes, radiusSizes } from 'services/theme';
import { Box } from '../primitives/Box/Box';

export const LayoutCenterAlignedStyle = {
  Container: styled.div`
    display: grid;
    place-items: center;
    padding: ${paddingSizes.lgPlus} ${paddingSizes.mdPlus};
    min-height: 100vh;
    .wrapper {
      max-width: 640px;
      width: 100%;
    }
  `,
  ProfilePictureWrapper: styled.div`
    width: 100px;
    height: 100px;
    border-radius: ${radiusSizes.circle};
    box-shadow: 0px 4px 6px 0px color-mix(in srgb, ${colors.neutral.l900}, transparent 60%);
    overflow: hidden;
    position: relative;
    img {
      width: 180px;
      height: 180px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-49%, -51%);
    }
  `,
  Label: styled(Text)`
    text-transform: uppercase;
  `,
  Header: styled(Box)`
    background: linear-gradient(90deg, ${colors.emerald.l600} 0%, ${colors.emerald.l800} 100%);
  `,
};
