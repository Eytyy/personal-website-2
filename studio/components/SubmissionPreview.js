import React from 'react';
import PropTypes from 'prop-types';
import FormField from 'part:@sanity/components/formfields/default';
import PatchEvent, {set, unset} from 'part:@sanity/form-builder/patch-event';

const createPatchFrom = (value) =>
  PatchEvent.from(value === '' ? unset() : set(Number(value)));

export default class SubmissionPreivew extends React.Component {
  static propTypes = {
    type: PropTypes.shape({
      title: PropTypes.string,
      options: PropTypes.shape({
        min: PropTypes.number.isRequired,
        max: PropTypes.number.isRequired,
        step: PropTypes.number,
      }).isRequired,
    }).isRequired,
    value: PropTypes.number,
    onChange: PropTypes.func.isRequired,
  };

  render() {
    const {type, value} = this.props;

    return value ? (
      <FormField label={type.title} description={type.description}>
        <div>
          {value.map((field) => (
            <div key={field.key}>
              <h2>{field.field.toUpperCase()}</h2>
              <p>{field.value}</p>
            </div>
          ))}
        </div>
      </FormField>
    ) : null;
  }
}
