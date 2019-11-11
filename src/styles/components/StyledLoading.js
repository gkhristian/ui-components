import styled from 'styled-components';

import { StyledSpinner } from 'styles/components/StyledSpinner';

const StyledLoading = styled.div`
  width: 100%;
  height: 100%;
  z-index: 999999999;
  display: flex;
  align-items: center;
  ${StyledSpinner} {
    align-self: center;
  }
`;

export { StyledLoading };
