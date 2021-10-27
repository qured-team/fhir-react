import './index.css';

import React from 'react';

export const Header = props => (
  <div className="fhir-ui__Header d-flex w-100 align-items-start justify-content-between align-self-center">
    {!props.children && (
      <>
        <div className="d-flex align-items-center justify-content-between ">
          <div
            className={`fhir-resource__${props.resourceName}__header__title-segment container`}
          >
            <div
              className={`fhir-resource__${props.resourceName}__header__title-segment__row row row-cols-2`}
            >
              <div
                className={`fhir-resource__${props.resourceName}__header__title-segment__icon-column col-auto p-0`}
              >
                {props.icon}
              </div>
              <div
                className={`fhir-resource__${props.resourceName}__header__title-segment__title-column col col-sm-auto`}
              >
                {props.titleSegment}
              </div>
            </div>
          </div>
        </div>
        {props.badgeStatus && (
          <div
            className={`fhir-resource__${props.resourceName}__header-right d-flex align-items-center pe-3 pt-1`}
          >
            {props.badge}
          </div>
        )}
      </>
    )}
    {props.children && props.children}
  </div>
);

export const Title = props => (
  <h4 className="fhir-ui__Title fw-bold fs-4 lh-lg mb-1" data-testid="title">
    {props.children}
  </h4>
);

export const Badge = props => (
  <small
    className={`fhir-ui__Badge px-2 py-1 alert ${props.bootstrapAlertType ||
      'alert-secondary'}`}
    data-testid={props['data-testid']}
  >
    {props.children}
  </small>
);

export const BadgeSecondary = props => (
  <span className="fhir-ui__BadgeSecondary" data-testid={props['data-testid']}>
    {props.children}
  </span>
);

export const Body = props => (
  <div className="fhir-ui__Body ps-3 pe-4">
    <table className="fhir-ui__Body__table table table-borderless table-sm">
      <tbody>{props.children}</tbody>
    </table>
  </div>
);

export const Value = props => (
  <tr>
    <Label>{props.label}</Label>
    <Data data-testid={props['data-testid']}>{props.children}</Data>
  </tr>
);

export const Label = props => (
  <td className="fhir-ui__Label text-secondary fw-light lh-base">
    {props.children}
  </td>
);

export const Data = props => (
  <td
    className="fhir-ui__Data text-break fw-normal lh-base"
    data-testid={props['data-testid']}
  >
    {props.children}
  </td>
);

export const Root = props => (
  <div className={`fhir-resource fhir-resource__${props.name}`}>
    {props.children}
  </div>
);

export const Table = props => (
  <table className="fhir-ui__Table">{props.children}</table>
);

export const TableHeader = props => {
  const { expand, noWordWrap } = props;
  let className = 'fhir-ui__TableHeader';
  if (expand) className += ' fhir-ui__TableHeader--expand';
  if (noWordWrap) className += ' fhir-ui__TableHeader--no-word-wrap';
  return <th className={className}>{props.children}</th>;
};

export const TableRow = props => (
  <tr className="fhir-ui__TableRow">{props.children}</tr>
);

export const TableCell = props => (
  <td className="fhir-ui__TableCell" data-testid={props['data-testid']}>
    {props.children}
  </td>
);

export const ValueSection = props => (
  <div className="fhir-ui__ValueSection" data-testid={props['data-testid']}>
    <label className="fhir-ui__ValueSection-label">{props.label}</label>
    <div className="fhir-ui__ValueSection-body">{props.children}</div>
  </div>
);

export const MissingValue = props => (
  <span className="fhir-ui__MissingValue">-</span>
);

export const NotEnoughData = props => (
  <div data-testid={props['data-testid']} className="fhir-ui__NotEnoughData">
    No additional data
  </div>
);
