import type { Schema, Attribute } from '@strapi/strapi';

export interface FeaturesShippingInfo extends Schema.Component {
  collectionName: 'components_features_shipping_infos';
  info: {
    displayName: 'ShippingInfo';
    icon: 'cloud';
  };
  attributes: {
    firstName: Attribute.String;
    lastName: Attribute.String;
    address: Attribute.Text;
    address2: Attribute.Text;
    email: Attribute.Email;
    zipCode: Attribute.Integer;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'features.shipping-info': FeaturesShippingInfo;
    }
  }
}
