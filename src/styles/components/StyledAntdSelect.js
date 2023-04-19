import styled, { createGlobalStyle, css } from 'styled-components';
import { Pagination, Select } from 'antd';
import Button from '../../components/Button';
import Tag from '../../components/Tag';
import Cell from '../../components/Cell';

export const StyledAntDPagination = styled(Pagination)``;

export const StyledPaginationPageWrapper = styled(Cell)`
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  height: 32px !important;
  max-width: 32px;
  border: 1px solid #c9cccf;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-items: center;
`;

export const StyledSelectOption = styled(Select.Option)`
  .ant-select-item-option-content {
    background-color: ${props => props.color};
    // padding: 0;
    // margin: 2px 16px 2px 8px;
    // display: flex;
    // border-radius: 4px;
    // align-items: center;
  }
`;

export const StyledButtonSelectAll = styled(Button)`
  width: 100%;
  font-size: 14px;
  display: block;
`;

export const StyledPaginationSelector = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 4px;
`;

export const StyledAntdSelectDropdown = styled.div`
  .ant-select-item {
    min-height: auto;
  }
  .ant-select-item-option-state {
    display: flex;
    align-items: center;
  }
`;

export const StyledSpanOption = styled.span`
  align-items: center;
  padding: 2px 8px;
  font-weight: 400;
  white-space: nowrap;
  cursor: pointer;
  opacity: 1;
  border-radius: 4px;
  margin: 0px;
`;

export const StyledTagOption = styled(Tag)`
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
`;

const getSelectOptionStyle = css`
  .ant-select-item-option {
    background-clip: content-box;
    border-radius: 4px;
  }
  .ant-select-item,
  .ant-select-item-empty {
    padding: 3px 12px;
  }
`;

export const SelectOptionStyle = createGlobalStyle`
  ${getSelectOptionStyle};
`;
