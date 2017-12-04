/*
 * This file is part of the Front Foundation package.
 *
 * Copyright (c) 2017-present LIN3S <info@lin3s.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author Mikel Tuesta <mikeltuesta@gmail.com>
 */

import React from 'react';
import PropTypes from 'prop-types';
import {Ui} from 'lin3s-front-foundation';
import {Patterns} from 'validatory';

class ReactFormInput extends React.PureComponent {

  static propTypes = {
    domNode: PropTypes.any.isRequired
  };

  render() {
    return <Ui.React.FormGroupInput
      id="react-form-group-input-phone"
      label="Phone:"
      required={true}
      type="tel"
      validationEnabled={true}
      validationMessageNotValid="The entered phone is not valid"
      validationMessageRequired="This field is required"
      validationPattern={Patterns.phone}/>;
  }
}

export default ReactFormInput;
