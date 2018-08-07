import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, Row, Col, Alert, UncontrolledTooltip,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons/faExternalLinkSquareAlt';
import { formatDate } from '../utils';

export default
class ResultsList extends React.Component {
  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.any).isRequired,
    license: PropTypes.objectOf(PropTypes.any),
    addDistToSelection: PropTypes.func.isRequired,
  }

  static defaultProps = {
    license: null,
  }

  getLicence(longName) {
    const { license } = this.props;
    const longKey = longName.trim().toLocaleLowerCase();
    if (license) {
      const licenseKeys = Object.keys(license);
      for (let i = 0, len = licenseKeys.length; i < len; i += 1) {
        const key = licenseKeys[i];
        if (key.trim().toLocaleLowerCase() === longKey) {
          return license[key];
        }
      }
    }
    return longName;
  }

  renderResults() {
    const { data } = this.props;

    if (data.length > 0) {
      const results = data.map((record, ridx) => {
        const r = record._source;
        let dists;
        if (r.distributions && r.distributions.length > 0) {
          dists = r.distributions.map((dist, didx) => {
            const url = dist.downloadURL || dist.accessURL;
            return (
              <li key={dist.identifier}><a href={url}>{dist.title}</a>
                <small className="licence-header"> Format </small>
                <small className="format">{dist.format}</small>
                <i className="licence-hover" id={`dist-${ridx}-${didx}`}> <small className="licence-header">  Licence </small>
                  <small className="licence">{dist.license ? this.getLicence(dist.license.name) : 'unknown'}</small>
                </i>
                <UncontrolledTooltip placement="top" target={`dist-${ridx}-${didx}`}>
                  {dist.license ? dist.license.name : 'None'}
                </UncontrolledTooltip>
                <Button className="btn-sm" onClick={() => this.props.addDistToSelection(dist)}>Add To Selection</Button>
              </li>
            );
          });
        }
        return (
          <div className="result" key={record._id}>
            <Row>
              <Col md="12">
                {
                  r.title && r.title.length > 0
                  && <h3>{r.title}</h3>
                }
                {
                  r.publisher.name && r.publisher.name.length > 0
                  && <p className="source">{r.publisher.name}</p>
                }
                <dl className="dates">
                  {
                    r.indexed && r.indexed.length > 0
                    && (
                      <span key={r.indexed}>
                        <dt>Indexed:</dt>
                        <dd>{formatDate(r.indexed)}</dd>
                      </span>
                    )
                  }
                  {
                    r.modified && r.modified.length > 0
                    && (
                      <span key={r.mmodified}>
                        <dt>Modifed:</dt>
                        <dd>{formatDate(r.modified)}</dd>
                      </span>
                    )
                  }
                  {
                    r.issued && r.issued.length > 0
                    && (
                      <span key={r.issued}>
                        <dt>Issued:</dt>
                        <dd>{formatDate(r.issued)}</dd>
                      </span>
                    )
                  }
                </dl>
                {
                  r.description && r.description.length > 0
                  && <p>{r.description}</p>
                }
                {
                  r.catalog && r.catalog.length > 0
                  && <p><strong>Provider:</strong> {r.catalog}</p>
                }
                <ul className="distributions">
                  { dists }
                </ul>
                {
                  r.landingPage && r.landingPage.length > 0
                  && <a className="btn btn-primary btn-sm" href={r.landingPage}>Go to website <FontAwesomeIcon icon={faExternalLinkSquareAlt} /></a>
                }
              </Col>
            </Row>
          </div>
        );
      });
      return results;
    }

    return (
      <div className="no-results">
        <Alert color="danger">
          No results, please try expanding your search criteria.
        </Alert>
      </div>
    );
  }

  render() {
    return (
      <div className="results">
        { this.renderResults() }
      </div>
    );
  }
}
