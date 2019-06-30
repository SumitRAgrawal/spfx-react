import * as React from 'react';
import styles from './ReactWebpart.module.scss';
import { IReactWebpartProps } from './IReactWebpartProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { ListData } from './ListData';
import { IReactWebpartState } from './IReactWebpartState';
import { SPHttpClient, SPHttpClientResponse } from '@microsoft/sp-http';

export default class ReactWebpart extends React.Component<IReactWebpartProps, IReactWebpartState> {

  constructor(props: IReactWebpartProps) {
    super(props);
    this.state = {
      items: ['item1', 'item2', 'item3', 'item4']
    }
  }

  loadData = () => {
    console.log('loading data...');

    this.props.spHttpClient.get(`${this.props.absoluteUrl}/_api/lists/getByTitle('Test')/items?$select=Title`, SPHttpClient.configurations.v1)
      .then((data: SPHttpClientResponse) => data.json())
      .then((data: any) => {
        console.log(data)
        this.setState({ items: data.value.map(d => d.Title) })
      });

  }

  public render(): React.ReactElement<IReactWebpartProps> {
    return (
      <div className={styles.reactWebpart} >
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <span className={styles.title}>Welcome to SharePoint!</span>
              <p className={styles.subTitle}>Customize SharePoint experiences using Web Parts.</p>
              <a href="#" className={styles.button} onClick={this.loadData}>Load From SP</a>
              <ListData items={this.state.items}> </ListData>
            </div>
          </div>
        </div>
      </div >
    );
  }
}
