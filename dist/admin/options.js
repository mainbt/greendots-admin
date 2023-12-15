import { ComponentLoader } from 'adminjs';
import initializeDb from '../db/index.js';
import { fileURLToPath } from 'url';
import path from 'path';
import bcrypt from 'bcrypt';
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
            parent: menuItems.dataManagement,
            id: 'Participants',
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
        },
    },
    {
        resource: db.table('user'),
        options: {
            parent: menuItems.dataManagement,
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
                        if (record) {
                            await record.update({ role: 1, state: 0 });
                            return {
                                record: {
                                    ...record.toJSON(context.currentAdmin),
                                    role: 'organizer',
                                },
                                redirectUrl: '/admin/resources/Organizer%20Registration%20Request%20Approval/',
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
const options = {
    componentLoader,
    rootPath: '/admin',
    resources: data_resources,
    databases: [],
    branding: {
        companyName: 'Greendots',
    },
};
export default options;
