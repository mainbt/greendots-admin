import AdminJS, { AdminJSOptions } from 'adminjs';
import { ComponentLoader } from 'adminjs';
import initializeDb from '../db/index.js';
import { fileURLToPath } from 'url';
import path from 'path';
import { ValidationError } from 'adminjs';
import bcrypt from 'bcrypt';
import argon2 from 'argon2';
import passwordsFeature from '@adminjs/passwords';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const componentLoader = new ComponentLoader();

const Components = {
  MyCustomAction: componentLoader.add('MyCustomAction', path.resolve(__dirname, '../components/my-custom-action.js')),
};

const { db } = await initializeDb();

const menuItems = {
  dataManagement: {
    name: 'Data Management',
    icon: 'Database',
  },
  dataStructureModification: {
    name: 'Data Structure Modification',
    icon: 'Columns',
  },
  organizerRegistrationRequestApproval: {
    name: 'Organizer Registration Request Approval',
    icon: 'UserCheck',
  },
};

const customBeforeListPaticipant = (request, context) => {
  const { query = {} } = request;
  const newQuery = {
    ...query,
    ['filters.role']: '0',
    ['filters.state']: '0',
  };

  request.query = newQuery;

  return request;
};

const customBeforeCreateAndEditPaticipant = async (request, context) => {
  // const { payload = {}, method } = request;

  // // We only want to validate "post" requests
  // if (method !== 'post') return request;

  // // Payload contains data sent from the frontend
  // const { age = null, lastName = '' } = payload;

  // // We will store validation errors in an object, so that
  // // we can throw multiple errors at the same time
  // const errors = {};

  // // We are doing validations and assigning errors to "errors" object
  // if (!age || age < 18) {
  //   errors.age = {
  //     message: 'A user must be at least 18 years old',
  //   };
  // }

  // if (lastName.trim().length === 0) {
  //   errors.lastName = {
  //     message: 'Last name is required',
  //   };
  // }

  // // We throw AdminJS ValidationError if there are errors in the payload
  // if (Object.keys(errors).length) {
  //   throw new ValidationError(errors);
  // }
  const { password } = request.payload;
  const hashedPassword = await bcrypt.hash(password, 10);

  request.payload.password = hashedPassword;
  request.payload.role = 0;
  request.payload.state = 0;
  console.log(request.payload);

  return request;
};

const customBeforeListOrganizer = (request, context) => {
  const { query = {} } = request;
  const newQuery = {
    ...query,
    ['filters.role']: '1',
    ['filters.state']: '0',
  };

  request.query = newQuery;

  return request;
};

const customBeforeListOrganizerRecord = (request, context) => {
  const { query = {} } = request;
  const newQuery = {
    ...query,
    ['filters.role']: '0',
    ['filters.state']: '1',
  };

  request.query = newQuery;

  return request;
};

const customBeforeCreateAndEditOrganizer = async (request, context) => {
  // const { payload = {}, method } = request;

  // // We only want to validate "post" requests
  // if (method !== 'post') return request;

  // // Payload contains data sent from the frontend
  // const { age = null, lastName = '' } = payload;

  // // We will store validation errors in an object, so that
  // // we can throw multiple errors at the same time
  // const errors = {};

  // // We are doing validations and assigning errors to "errors" object
  // if (!age || age < 18) {
  //   errors.age = {
  //     message: 'A user must be at least 18 years old',
  //   };
  // }

  // if (lastName.trim().length === 0) {
  //   errors.lastName = {
  //     message: 'Last name is required',
  //   };
  // }

  // // We throw AdminJS ValidationError if there are errors in the payload
  // if (Object.keys(errors).length) {
  //   throw new ValidationError(errors);
  // }
  const { password } = request.payload;
  const hashedPassword = await bcrypt.hash(password, 10);

  request.payload.password = hashedPassword;
  request.payload.role = 1;
  request.payload.state = 0;

  return request;
};

const data_resources = [
  {
    resource: db.table('user'),
    options: {
      parent: menuItems.dataManagement, // or navigation: menuItems.dataManagement
      id: 'Participants',
      // href: ({ h, resource }) => {
      //   return h.resourceActionUrl({
      //     resourceId: resource.decorate().id(),
      //     actionName: 'list',
      //     params: {
      //       'filters.role': 0,
      //     },
      //   });
      // },
      // href: '/admin/resources/Participants/?filters.role=0',
      listProperties: ['email', 'userName', 'address', 'phoneNumber', 'bio'],
      filterProperties: ['email', 'userName', 'address', 'phoneNumber', 'bio'],
      editProperties: ['email', 'userName', 'password', 'address', 'phoneNumber', 'bio'],
      showProperties: ['email', 'userName', 'address', 'phoneNumber', 'bio'],
      properties: {
        role: {
          availableValues: [
            { value: 0, label: 'Participant' },
            { value: 1, label: 'Organizer' },
          ],
        },
        state: {
          availableValues: [
            { value: 0, label: 'Approved' },
            { value: 1, label: 'Pending' },
          ],
        },
        address: {
          type: 'textarea',
        },
        bio: {
          type: 'richtext',
        },
        password: {
          type: 'password',
        },
      },
      actions: {
        list: {
          before: [customBeforeListPaticipant],
        },
        edit: {
          before: [customBeforeCreateAndEditPaticipant],
        },
        new: {
          before: [customBeforeCreateAndEditPaticipant],
        },
      },
      // features: [
      //   passwordsFeature({
      //     componentLoader,
      //     properties: {
      //       encryptedPassword: 'password',
      //       password: 'newPassword',
      //     },
      //     hash: argon2.hash,
      //   }),
      // ],
    },
  },
  {
    resource: db.table('user'),
    options: {
      parent: menuItems.dataManagement, // or navigation: menuItems.dataManagement
      id: 'Organizers',
      listProperties: ['email', 'userName', 'address', 'phoneNumber', 'bio', 'website', 'fb_link', 'linkedin_link'],
      filterProperties: ['email', 'userName', 'address', 'phoneNumber', 'bio', 'website', 'fb_link', 'linkedin_link'],
      editProperties: [
        'email',
        'userName',
        'password',
        'address',
        'phoneNumber',
        'bio',
        'website',
        'fb_link',
        'linkedin_link',
      ],
      showProperties: ['email', 'userName', 'address', 'phoneNumber', 'bio', 'website', 'fb_link', 'linkedin_link'],
      properties: {
        role: {
          availableValues: [
            { value: 0, label: 'Participant' },
            { value: 1, label: 'Organizer' },
          ],
        },
        state: {
          availableValues: [
            { value: 0, label: 'Approved' },
            { value: 1, label: 'Pending' },
          ],
        },
        address: {
          type: 'textarea',
        },
        bio: {
          type: 'richtext',
        },
      },
      actions: {
        list: {
          before: [customBeforeListOrganizer],
        },
        edit: {
          before: [customBeforeCreateAndEditOrganizer],
        },
        new: {
          before: [customBeforeCreateAndEditOrganizer],
        },
      },
    },
  },
  {
    resource: db.table('campaign'),
    options: {
      parent: menuItems.dataManagement,
      id: 'Campaigns',
      // listProperties: ['itemName', 'description'],
      // filterProperties: ['itemName'],
      // editProperties: ['itemName', 'description'],
      // showProperties: ['itemName', 'description'],
      properties: {
        description: {
          type: 'richtext',
        },
      },
    },
  },
  {
    resource: db.table('item'),
    options: {
      parent: menuItems.dataManagement,
      id: 'Items',
      listProperties: ['itemName', 'description'],
      filterProperties: ['itemName'],
      editProperties: ['itemName', 'description'],
      showProperties: ['itemName', 'description'],
      properties: {
        description: {
          type: 'richtext',
        },
      },
    },
  },
  {
    resource: db.table('join_campaign'),
    options: {
      parent: menuItems.dataManagement,
      id: 'Joining Campaign',
    },
  },
  {
    resource: db.table('get_item'),
    options: {
      parent: menuItems.dataManagement,
      id: 'Get Item',
    },
  },
  {
    resource: db.table('organizing'),
    options: {
      parent: menuItems.dataManagement,
      id: 'Organizing',
    },
  },
  {
    resource: db.table('user'),
    options: {
      navigation: {
        icon: menuItems.organizerRegistrationRequestApproval.icon,
      },
      // root: true,
      // parent: null,
      id: menuItems.organizerRegistrationRequestApproval.name,
      listProperties: ['email', 'userName', 'address', 'phoneNumber', 'bio', 'website', 'fb_link', 'linkedin_link'],
      filterProperties: ['email', 'userName', 'address', 'phoneNumber', 'bio', 'website', 'fb_link', 'linkedin_link'],
      editProperties: [
        'email',
        'userName',
        'password',
        'address',
        'phoneNumber',
        'bio',
        'website',
        'fb_link',
        'linkedin_link',
      ],
      showProperties: ['email', 'userName', 'address', 'phoneNumber', 'bio', 'website', 'fb_link', 'linkedin_link'],
      properties: {
        role: {
          availableValues: [
            { value: 0, label: 'Participant' },
            { value: 1, label: 'Organizer' },
          ],
        },
        state: {
          availableValues: [
            { value: 0, label: 'Approved' },
            { value: 1, label: 'Pending' },
          ],
        },
      },
      actions: {
        list: {
          before: [customBeforeListOrganizerRecord],
        },
        new: {
          isVisible: false,
        },
        edit: {
          isVisible: false,
        },
        delete: {
          isVisible: false,
        },
        accept: {
          actionType: 'record',
          icon: 'Check',
          label: 'Accept',
          component: false,
          guard: 'Are you sure you want to allow this user account to become an organizer?',
          variant: 'warning',
          handler: async (request, response, context) => {
            const { record, resource, h } = context;
            // const { record, database } = context;
            if (record) {
              await record.update({ role: 1, state: 0 });
              return {
                record: {
                  ...record.toJSON(context.currentAdmin),
                  role: 'organizer',
                },
                redirectUrl: '/admin/resources/Organizer%20Registration%20Request%20Approval/', //replace 'Participant' with resource.id(), h.resourceActionUrl({ resourceId: 'Participants' })
                notice: {
                  message: `Successfully changed role to 'organizer'.`,
                  type: 'success',
                },
              };
            }
          },
        },
        reject: {
          actionType: 'record',
          icon: 'X',
          label: 'Reject',
          component: false,
          guard: 'Are you sure that you want to decline this person from becoming an organizer?',
          variant: 'warning',
          handler: async (request, response, context) => {
            const { record, resource, h } = context;
            if (record) {
              await record.update({ state: 0 });
              return {
                record: {
                  ...record.toJSON(context.currentAdmin),
                  role: 'organizer',
                },
                redirectUrl: '/admin/resources/Organizer%20Registration%20Request%20Approval/',
                notice: {
                  message: `Successfully denied the role as an 'organizer'.`,
                  type: 'success',
                },
              };
            }
          },
        },
      },
    },
  },
];

const options: AdminJSOptions = {
  componentLoader,
  rootPath: '/admin',
  resources: data_resources,
  databases: [],
  branding: {
    companyName: 'Greendots',
  },
  // locale: {
  //   language: 'en',
  //   translations: {
  //     resources: {
  //       Participants: {
  //         messages: {
  //           noRecordsInResource: 'There are no participants to display',
  //         },
  //       },
  //       Organizers: {
  //         messages: {
  //           noRecordsInResource: 'There are no organizers to display',
  //         },
  //       },
  //       Items: {
  //         messages: {
  //           noRecordsInResource: 'There are no items to display',
  //         },
  //       },
  //       'Organizer Registration Request Approval': {
  //         messages: {
  //           noRecordsInResource: 'There are no requests to check for',
  //         },
  //       },
  //     },
  //   },
  // },
};

export default options;
