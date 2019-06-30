import * as React from 'react';
import styles from './ReactWebpart.module.scss';
import { IReactWebpartProps } from './IReactWebpartProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { ListData } from './ListData';

export default class ReactWebpart extends React.Component<IReactWebpartProps, {}> {
  public render(): React.ReactElement<IReactWebpartProps> {
    return (
      <div className={styles.reactWebpart} >
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <span className={styles.title}>Welcome to SharePoint!</span>
              <p className={styles.subTitle}>Customize SharePoint experiences using Web Parts.</p>
              <ListData> </ListData>
            </div>
          </div>
        </div>
      </div >
    );
  }
}
