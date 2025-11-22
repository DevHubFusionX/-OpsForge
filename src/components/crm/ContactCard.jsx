// ContactCard component
import React from 'react';
import Card from '../core/Card';
import Avatar from '../core/Avatar';

export const ContactCard = ({ name, email, phone, avatar, tags }) => {
  return (
    <Card className="contact-card">
      <div className="contact-header">
        <Avatar src={avatar} initials={name.charAt(0)} size="md" />
        <div className="contact-info">
          <h4>{name}</h4>
          <p>{email}</p>
        </div>
      </div>
      {phone && <p className="contact-phone">{phone}</p>}
      {tags && (
        <div className="contact-tags">
          {tags.map((tag) => (
            <span key={tag} className="contact-tag">
              {tag}
            </span>
          ))}
        </div>
      )}
    </Card>
  );
};

export default ContactCard;
