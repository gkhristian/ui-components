import styled from 'styled-components';

const StyledSwitch = styled.div`
  display: inline-block;

  .ant-switch {
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5;
    list-style: none;
    -webkit-font-feature-settings: 'tnum';
    font-feature-settings: 'tnum';
    position: relative;
    display: inline-block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    min-width: 44px;
    height: 22px;
    line-height: 20px;
    vertical-align: middle;
    background-color: rgba(0, 0, 0, 0.25);
    border: 1px solid transparent;
    border-radius: 100px;
    cursor: pointer;
    -webkit-transition: all 0.36s;
    transition: all 0.36s;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .ant-switch-inner {
    display: block;
    margin-right: 6px;
    margin-left: 24px;
    color: #fff;
    font-size: 12px;
  }
  .ant-switch-loading-icon,
  .ant-switch::after {
    position: absolute;
    top: 1px;
    left: 1px;
    width: 18px;
    height: 18px;
    background-color: #fff;
    border-radius: 18px;
    cursor: pointer;
    -webkit-transition: all 0.36s cubic-bezier(0.78, 0.14, 0.15, 0.86);
    transition: all 0.36s cubic-bezier(0.78, 0.14, 0.15, 0.86);
    content: ' ';
  }
  .ant-switch::after {
    -webkit-box-shadow: 0 2px 4px 0 rgba(0, 35, 11, 0.2);
    box-shadow: 0 2px 4px 0 rgba(0, 35, 11, 0.2);
  }
  .ant-switch:not(.ant-switch-disabled):active::before,
  .ant-switch:not(.ant-switch-disabled):active::after {
    width: 24px;
  }
  .ant-switch-loading-icon {
    z-index: 1;
    display: none;
    font-size: 12px;
    background: transparent;
  }
  .ant-switch-loading-icon svg {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  }
  .ant-switch-loading .ant-switch-loading-icon {
    display: inline-block;
    color: rgba(0, 0, 0, 0.65);
  }
  .ant-switch-checked.ant-switch-loading .ant-switch-loading-icon {
    color: ${props => props.theme.primary};
  }
  .ant-switch:focus {
    outline: 0;
    -webkit-box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }
  .ant-switch:focus:hover {
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  .ant-switch-small {
    min-width: 28px;
    height: 16px;
    line-height: 14px;
  }
  .ant-switch-small .ant-switch-inner {
    margin-right: 3px;
    margin-left: 18px;
    font-size: 12px;
  }
  .ant-switch-small::after {
    width: 12px;
    height: 12px;
  }
  .ant-switch-small:active::before,
  .ant-switch-small:active::after {
    width: 16px;
  }
  .ant-switch-small .ant-switch-loading-icon {
    width: 12px;
    height: 12px;
  }
  .ant-switch-small.ant-switch-checked .ant-switch-inner {
    margin-right: 18px;
    margin-left: 3px;
  }
  .ant-switch-small.ant-switch-checked .ant-switch-loading-icon {
    left: 100%;
    margin-left: -13px;
  }
  .ant-switch-small.ant-switch-loading .ant-switch-loading-icon {
    font-weight: bold;
    -webkit-transform: scale(0.66667);
    -ms-transform: scale(0.66667);
    transform: scale(0.66667);
  }
  .ant-switch-checked {
    background-color: ${props => props.theme.primary};
  }
  .ant-switch-checked .ant-switch-inner {
    margin-right: 24px;
    margin-left: 6px;
  }
  .ant-switch-checked::after {
    left: 100%;
    margin-left: -1px;
    -webkit-transform: translateX(-100%);
    -ms-transform: translateX(-100%);
    transform: translateX(-100%);
  }
  .ant-switch-checked .ant-switch-loading-icon {
    left: 100%;
    margin-left: -19px;
  }
  .ant-switch-loading,
  .ant-switch-disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }
  .ant-switch-loading *,
  .ant-switch-disabled * {
    cursor: not-allowed;
  }
  .ant-switch-loading::before,
  .ant-switch-disabled::before,
  .ant-switch-loading::after,
  .ant-switch-disabled::after {
    cursor: not-allowed;
  }
  @-webkit-keyframes AntSwitchSmallLoadingCircle {
    0% {
      -webkit-transform: rotate(0deg) scale(0.66667);
      transform: rotate(0deg) scale(0.66667);
      -webkit-transform-origin: 50% 50%;
      transform-origin: 50% 50%;
    }
    100% {
      -webkit-transform: rotate(360deg) scale(0.66667);
      transform: rotate(360deg) scale(0.66667);
      -webkit-transform-origin: 50% 50%;
      transform-origin: 50% 50%;
    }
  }
  @keyframes AntSwitchSmallLoadingCircle {
    0% {
      -webkit-transform: rotate(0deg) scale(0.66667);
      transform: rotate(0deg) scale(0.66667);
      -webkit-transform-origin: 50% 50%;
      transform-origin: 50% 50%;
    }
    100% {
      -webkit-transform: rotate(360deg) scale(0.66667);
      transform: rotate(360deg) scale(0.66667);
      -webkit-transform-origin: 50% 50%;
      transform-origin: 50% 50%;
    }
  }
`;

export { StyledSwitch };
