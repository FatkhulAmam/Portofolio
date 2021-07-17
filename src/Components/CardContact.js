import React from 'react';
import PropsType from 'prop-types';
import {
  Card, CardBody, CardSubtitle, CardText,
} from 'reactstrap';
import { AiFillGoogleCircle, AiFillPhone, AiFillEnvironment } from 'react-icons/ai';

import '../Assets/styles/Home.css';

const cardContact = ({
  email, phone, address, title, content, link,
}) => (
  <div>
    <Card className="rounded card-wrap">
      <CardBody className="text-center p-3">
        {email
          ? <AiFillGoogleCircle size={40} /> : null}
        {phone
          ? <AiFillPhone size={40} /> : null}
        {address
          ? <AiFillEnvironment size={40} /> : null}
        <CardSubtitle tag="h5">{title}</CardSubtitle>
        <hr />
        <CardText tag="h6" className="mb-2 text-muted"><a href={link}>{content}</a></CardText>
      </CardBody>
    </Card>
  </div>
);

cardContact.propsType = {
  email: PropsType.string.isRequired,
  phone: PropsType.string.isRequired,
  address: PropsType.string.isRequired,
};

export default cardContact;
