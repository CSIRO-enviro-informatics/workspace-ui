import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Table } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons/faSpinner';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
import * as actions from "./actions";
import { jupyterhub } from '../api';
import { formatDate, formatTime } from '../utils';

function mapStateToProps(state, ownProps) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

/**
 * Renders a table cell for displaying the status of the server
 *
 * @param {object} server Server status object
 */
function renderStatusCell(server) {
  if (server.pending) {
    return (
      <td><FontAwesomeIcon icon={faSpinner} /> Pending</td>
    );
  }

  if (server.ready) {
    return (
      <td><FontAwesomeIcon icon={faCheck} /> Running</td>
    );
  }

  // If not pending or ready, it is in the process of being terminated or is
  // terminated
  return (
    <td><FontAwesomeIcon icon={faTimes} /> Terminating</td>
  );
}

/**
 * Renders a nicer human readable value for the start date in a table cell
 *
 * @param {string} date Start date value as a string
 */
function renderStartDateCell(date) {
  return (
    <td>{`${formatDate(date)} ${formatTime(date)}`}</td>
  );
}

class ComputeTableBasic extends React.Component {
  static propTypes = {
    servers: PropTypes.arrayOf(PropTypes.any).isRequired,
    username: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  /**
   * Terminates user's JupyterHub server
   *
   * @param {object} username User's username
   */
  terminateServer(username) {
    this.props.dispatch(actions.serverTerminate(username));
  }

  renderServers() {
    const huburl = jupyterhub.getHubUrl();
    const { username } = this.props;

    return this.props.servers.map(server => (
      <tr key={server.name}>
        <td><a href={`${huburl}${server.url}`} target="_blank" rel="noopener noreferrer">{server.name || 'Server'}</a></td>
        { renderStartDateCell(server.started) }
        { renderStatusCell(server) }
        <td className="right-align">
          <a className="btn btn-primary btn-sm" href={`${huburl}${server.url}`} target="_blank" rel="noopener noreferrer">Open</a>
          {
            /*
            {' '}
            <a className="btn btn-danger btn-sm" href="#" onClick={(e) => { this.terminateServer(username); e.preventDefault(); }}>Terminate</a>
            */
          }
        </td>
      </tr>
    ));
  }

  render() {
    return (
      <div>
        <Table className="green-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Started</th>
              <th>Status</th>
              <th />
            </tr>
          </thead>
          <tbody>
            { this.renderServers() }
          </tbody>
        </Table>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ComputeTableBasic);
