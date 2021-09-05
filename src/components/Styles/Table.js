import { Table } from "antd";
import styled from "styled-components/macro";

export const TableStyled = styled(Table)`
    padding-top:20px;
  & .ant-table-content {
    background: ${({ theme }) => theme.colors.black1};
    color: white;
  }

  & .ant-table-thead > tr > th {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white1};
    border: none;
  }

  & .ant-table-tbody > tr > td {
    border-bottom: 1px solid ${({ theme }) => theme.colors.black2};
  }
  & .ant-table-thead th.ant-table-column-has-sorters:hover {
    background: ${({ theme }) => theme.colors.red1};
  }
  & .ant-table-column-sorter {
    color: white;
  }
  & .ant-table-column-sorter-up.active,
  .ant-table-column-sorter-down.active {
    color: white;
  }
  & .ant-table-filter-trigger {
    color: white;
  }

  & .ant-table-tbody > tr.ant-table-row:hover > td {
    background: ${({ theme }) => theme.colors.black2};
  }
  & td.ant-table-column-sort {
    background: ${({ theme }) => theme.colors.black3};
  }

  //page
  &&& .ant-pagination-item-link .ant-pagination-item-ellipsis {
    color: white!important;
  }

  & .ant-pagination-item,
  &&& .ant-pagination-item-link,
  &&& ant-pagination-options {
    background: ${({ theme }) => theme.colors.black2};
    color: white;
  }
  &&& .ant-select:not(.ant-select-customize-input) .ant-select-selector,
  .ant-select-arrow {
    background: ${({ theme }) => theme.colors.black2};
    color: white;
  }
  & .ant-pagination-item a {
    color: white !important;
  }
  & .ant-pagination-item-active {
    color: white;
    background: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }
  & .ant-pagination-item-active a {
    color: ${({ theme }) => theme.colors.primary};
  }
  &&& .ant-pagination-item-link-icon {
    color: ${({ theme }) => theme.colors.primary};
  }
  & .ant-pagination-item:focus-visible,
  .ant-pagination-item:hover,
  &&& .ant-pagination-item-link:hover,
  .ant-select:not(.ant-select-disabled):hover .ant-select-selector,
  .ant-select:not(.ant-select-disabled):active .ant-select-selector {
   {
    border: 1px solid ${({ theme }) => theme.colors.primary};
    box-shadow: none;
    background: ${({ theme }) => theme.colors.primary};

  }


 

`;
