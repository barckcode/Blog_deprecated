import { keyframes } from '@emotion/core'

export const writeEffect = keyframes`
  from {
    width: 100%
  }
  to {
    width: 0
  }
`

export const fadeInKeyframes = keyframes`
  from {
    filter: blur(5px);
    opacity: 0;
  }

  to {
    filter: blur(0);
    opacity: 1;
  }
`