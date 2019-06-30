import * as React from 'react';

export interface IListDataProps {
  items: string[]
}

export interface IListDataState { }

export class ListData extends React.Component<IListDataProps, IListDataState> {
  public render(): React.ReactElement<IListDataProps> {
    return (
      <ul>
        {this.props.items.map((item, i) => React.createElement('li', { key: i }, item))}
      </ul>
    );
  }
}
