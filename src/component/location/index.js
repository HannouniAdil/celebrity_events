import React from 'react';

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe 
      title="One of the rule is to have a title"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3322.104479642005!2d-112.10569218479606!3d33.628532880723355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b6e8ce876a763%3A0x4220df15f9471a48!2s2026%20W%20Carol%20Ann%20Way%2C%20Phoenix%2C%20AZ%2085023!5e0!3m2!1sen!2sus!4v1610274697001!5m2!1sen!2sus" 
      width="100%" 
      height="650" 
      frameborder="0" 
      allowFullScreen
      >
      </iframe>
    </div>
  );
};

export default Location;