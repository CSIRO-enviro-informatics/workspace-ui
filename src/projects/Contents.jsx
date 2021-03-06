import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';
import ContentRow from './ContentRow';


class Contents extends React.PureComponent {
  static propTypes = {
    project: PropTypes.string,
    path: PropTypes.string,
    contents: PropTypes.arrayOf(PropTypes.any),
    onClick: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    // dispatch: PropTypes.func.isRequired,
  }

  static defaultProps = {
    project: '',
    path: '/',
    contents: [],
  }

  onClick = (item) => {
    const { project, path, onClick } = this.props;
    let newPath;
    if (item.content_type === 'application/directory') {
      if (path.endsWith('/')) {
        newPath = [path.slice(0, -1), item.name].join('/');
      } else {
        newPath = [path, item.name].join('/');
      }
      onClick(project, newPath);
    }
  }

  onDelete = (item) => {
    const { project, path, onDelete } = this.props;
    onDelete(project, path, item);
  }

  render() {
    const {
      contents,
    } = this.props;

    return (
      <Table>
        <thead>
          <tr>
            <th colSpan="2">Name</th>
            <th>Last modifed</th>
            <th>Size</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          { contents.map(item => (
            <ContentRow
              item={item}
              key={item.name}
              onClick={this.onClick}
              onDelete={this.onDelete}
            />))
          }
        </tbody>
      </Table>
    );
  }
}

export default Contents;
