import * as React from 'react';

export interface IListDataProps { }

export interface IListDataState { }

export class ListData extends React.Component<IListDataProps, IListDataState> {
  public render(): React.ReactElement<IListDataProps> {
    return (
      <ul>
        <li>Data 1</li>
        <li>Data 2</li>
        <li>Data 3</li>
      </ul>
    );
  }
}
