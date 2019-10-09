import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import { GeneralPropTypes, DefaultGeneralPropTypes } from 'utils/propTypes';

import { StyledSpinner } from 'styles/components/StyledSpinner';

const propTypes = {
  ...GeneralPropTypes,
  width: PropTypes.number,
  height: PropTypes.number,
};

const defaultProps = {
  ...DefaultGeneralPropTypes,
  width: 80,
  height: 80,
};

const Spinner = ({ width, height, theme, dataCy }) => {
  return (
    <StyledSpinner
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      width={width}
      height={height}
      theme={theme}
      data-cy={dataCy}
    >
      <rect
        x={47}
        y={24}
        rx={9.4}
        ry={4.8}
        width={6}
        height={12}
        fill="currentColor"
      >
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.9166666666666666s"
          repeatCount="indefinite"
        />
      </rect>
      <rect
        x={47}
        y={24}
        rx={9.4}
        ry={4.8}
        width={6}
        height={12}
        fill="currentColor"
        transform="rotate(30 50 50)"
      >
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.8333333333333334s"
          repeatCount="indefinite"
        />
      </rect>
      <rect
        x={47}
        y={24}
        rx={9.4}
        ry={4.8}
        width={6}
        height={12}
        fill="currentColor"
        transform="rotate(60 50 50)"
      >
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.75s"
          repeatCount="indefinite"
        />
      </rect>
      <rect
        x={47}
        y={24}
        rx={9.4}
        ry={4.8}
        width={6}
        height={12}
        fill="currentColor"
        transform="rotate(90 50 50)"
      >
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.6666666666666666s"
          repeatCount="indefinite"
        />
      </rect>
      <rect
        x={47}
        y={24}
        rx={9.4}
        ry={4.8}
        width={6}
        height={12}
        fill="currentColor"
        transform="rotate(120 50 50)"
      >
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.5833333333333334s"
          repeatCount="indefinite"
        />
      </rect>
      <rect
        x={47}
        y={24}
        rx={9.4}
        ry={4.8}
        width={6}
        height={12}
        fill="currentColor"
        transform="rotate(150 50 50)"
      >
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.5s"
          repeatCount="indefinite"
        />
      </rect>
      <rect
        x={47}
        y={24}
        rx={9.4}
        ry={4.8}
        width={6}
        height={12}
        fill="currentColor"
        transform="rotate(180 50 50)"
      >
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.4166666666666667s"
          repeatCount="indefinite"
        />
      </rect>
      <rect
        x={47}
        y={24}
        rx={9.4}
        ry={4.8}
        width={6}
        height={12}
        fill="currentColor"
        transform="rotate(210 50 50)"
      >
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.3333333333333333s"
          repeatCount="indefinite"
        />
      </rect>
      <rect
        x={47}
        y={24}
        rx={9.4}
        ry={4.8}
        width={6}
        height={12}
        fill="currentColor"
        transform="rotate(240 50 50)"
      >
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.25s"
          repeatCount="indefinite"
        />
      </rect>
      <rect
        x={47}
        y={24}
        rx={9.4}
        ry={4.8}
        width={6}
        height={12}
        fill="currentColor"
        transform="rotate(270 50 50)"
      >
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.16666666666666666s"
          repeatCount="indefinite"
        />
      </rect>
      <rect
        x={47}
        y={24}
        rx={9.4}
        ry={4.8}
        width={6}
        height={12}
        fill="currentColor"
        transform="rotate(300 50 50)"
      >
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.08333333333333333s"
          repeatCount="indefinite"
        />
      </rect>
      <rect
        x={47}
        y={24}
        rx={9.4}
        ry={4.8}
        width={6}
        height={12}
        fill="currentColor"
        transform="rotate(330 50 50)"
      >
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="0s"
          repeatCount="indefinite"
        />
      </rect>
    </StyledSpinner>
  );
};

StyledSpinner.displayName = 'StyledSpinner';

Spinner.propTypes = propTypes;
Spinner.defaultProps = defaultProps;

export default memo(withTheme(Spinner));
