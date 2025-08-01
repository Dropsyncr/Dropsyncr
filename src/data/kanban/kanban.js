import AttachmentImage from 'assets/images/kanban/attachment.webp';
import TaskImage1 from 'assets/images/kanban/task1.webp';
import TaskImage2 from 'assets/images/kanban/task2.webp';
import TaskImage3 from 'assets/images/kanban/task3.webp';
import TaskImage4 from 'assets/images/kanban/task4.webp';
import TaskImage5 from 'assets/images/kanban/task5.webp';
import TaskImage6 from 'assets/images/kanban/task6.webp';
import TaskImage7 from 'assets/images/kanban/task7.webp';
import TaskImage8 from 'assets/images/kanban/task8.webp';
import TaskImage9 from 'assets/images/kanban/task9.webp';
import { users } from 'data/users';

const description = `A Kanban Board is a powerful visual tool that enhances workflow management, boosts
  efficiency, and fosters better team collaboration. This method leverages the simplicity of
  cards, columns, and swimlanes to visually represent tasks and their current statuses. Each
  card symbolizes a task or work item, while columns illustrate the stages of the workflow,
  such as "To Do," "In Progress," and "Done." Swimlanes can be added to further categorize
  tasks by priority, project, or team member, providing a clear and organized view of work.`;

const attachments = [
  {
    id: 1,
    image: AttachmentImage,
    filename: 'Silly_sight_1.png',
    time: '2024-12-21T12:56:00',
    addedBy: 'Sampro',
  },
  {
    id: 2,
    icon: 'material-symbols:video-file-outline-rounded',
    filename: 'Documentation.mp4',
    time: '2024-12-21T12:56:00',
    addedBy: 'Sampro',
  },
  {
    id: 3,
    icon: 'material-symbols:folder-zip-outline-rounded',
    filename: 'All_images.zip',
    time: '2024-12-21T12:56:00',
    addedBy: 'Sampro',
  },
];

const subtasks = [
  {
    id: 1,
    title: 'Planning Phase',
    assignee: [],
    time: '2024-12-21T10:38:00',
    checked: false,
  },
  {
    id: 2,
    title: 'Research and Validation',
    assignee: [users[2], users[5]],
    time: '2024-12-21T10:38:00',
    checked: false,
  },
  {
    id: 3,
    title: 'Create Wireframes',
    assignee: [users[8]],
    time: '2024-12-21T10:38:00',
    checked: false,
  },
  {
    id: 4,
    title: 'Develop Visual Design',
    assignee: [users[3]],
    time: '2024-12-21T10:38:00',
    checked: true,
  },
];

const activities = [
  {
    id: 1,
    date: 'Today',
    items: [
      {
        id: 1,
        title: 'You shared this file with',
        avatars: [...users.slice(2, 8)],
        icon: 'material-symbols:share-outline',
        time: '3:15 PM',
      },
      {
        id: 2,
        title: 'You modified this file',
        icon: 'material-symbols:edit-outline-rounded',
        time: '3:10 PM',
      },
    ],
  },
  {
    id: 2,
    date: '19 Oct, 2024',
    items: [
      {
        id: 1,
        title: 'You uploaded this file',
        description: 'Photography of seashore.jpg',
        icon: 'material-symbols:upload-rounded',
        time: '3:10 PM',
      },
    ],
  },
];

export const boards = ['Abstract Art', 'Northern Light', 'Nature Dance', 'Plasma', 'Version'];
export const taskLabels = ['feature', 'bug', 'issue', 'undefined'];
export const taskPriorities = ['urgent', 'high', 'medium', 'low', 'optional'];

export const kanbanBoard = {
  id: 1,
  name: 'Northern Light',
  assignee: [...users.slice(2, 8)],
  backgroundOption: {
    type: 'color',
    background: null,
  },
  listItems: [
    {
      id: 'list1',
      title: 'To do',
      compactMode: false,
      tasks: [
        {
          id: 'task1',
          label: 'feature',
          title: 'Research for a podcast and video website',
          dueDate: '2024-08-08',
          assignee: [users[3], users[5]],
          completed: false,
          priority: 'medium',
          description,
          attachments,
          subtasks,
          activities,
          progress: {
            total: 25,
            completed: 6,
            showBar: true,
          },
        },
        {
          id: 'task2',
          label: 'bug',
          title: 'Debug checkout process for the e-commerce website',
          assignee: [users[4], users[7], users[2]],
          completed: false,
          priority: 'high',
          description,
          attachments,
          subtasks,
          activities,
          attachmentCount: 43,
          progress: {
            total: 19,
            completed: 10,
            showData: true,
          },
        },
        {
          id: 'task3',
          coverImage: TaskImage1,
          label: 'issue',
          title: 'Research and write a blog about recent landscape architecture',
          dueDate: '2024-08-09',
          assignee: [users[5], users[6]],
          completed: false,
          priority: 'low',
          description,
          attachments,
          subtasks,
          activities,
          progress: {
            total: 15,
            completed: 4,
            showBar: true,
          },
        },
      ],
    },
    {
      id: 'list2',
      title: 'Doing',
      compactMode: false,
      tasks: [
        {
          id: 'task4',
          label: 'feature',
          title: 'Design wireframes for the Aurora landing page revamp',
          dueDate: '2024-08-12',
          assignee: [users[2], users[4]],
          completed: false,
          priority: 'medium',
          description,
          attachments,
          subtasks,
          activities,
          attachmentCount: 12,
          progress: {
            total: 15,
            completed: 6,
          },
        },
        {
          id: 'task5',
          coverImage: TaskImage2,
          label: 'undefined',
          title: 'Install and set up a marketing tool for team operations',
          dueDate: '2024-08-14',
          assignee: [users[7], users[9], users[8]],
          completed: false,
          priority: 'urgent',
          description,
          attachments,
          subtasks,
          activities,
          attachmentCount: 14,
          progress: {
            total: 20,
            completed: 12,
            showBar: true,
            showData: true,
          },
        },
        {
          id: 'task6',
          coverImage: TaskImage3,
          label: 'feature',
          title: 'Prepare and send out a press release for a new collaboration',
          dueDate: '2024-08-09',
          assignee: [users[11], users[14]],
          completed: false,
          priority: 'medium',
          description,
          attachments,
          subtasks,
          activities,
          attachmentCount: 11,
          progress: {
            total: 16,
            completed: 5,
            showBar: true,
          },
        },
        {
          id: 'task7',
          label: 'issue',
          title: 'Develop the color code of the logo and need elaboration',
          dueDate: '2024-08-15',
          assignee: [users[1], users[13]],
          completed: false,
          priority: 'urgent',
          description,
          attachments,
          subtasks,
          activities,
          progress: {
            total: 23,
            completed: 3,
            showData: true,
          },
        },
      ],
    },
    {
      id: 'list3',
      title: 'Review',
      compactMode: false,
      tasks: [
        {
          id: 'task8',
          coverImage: TaskImage4,
          title: 'Create and refine logo designs for the UI brand',
          label: 'issue',
          assignee: [users[15], users[5]],
          completed: false,
          priority: 'urgent',
          description,
          attachments,
          subtasks,
          activities,
          attachmentCount: 52,
          progress: {
            total: 24,
            completed: 19,
            showBar: true,
          },
        },
        {
          id: 'task9',
          label: 'feature',
          title: 'Create an icon library for the project.',
          dueDate: '2024-08-08',
          assignee: [users[9], users[15]],
          completed: false,
          priority: 'low',
          description,
          attachments,
          subtasks,
          activities,
          progress: {
            total: 18,
            completed: 7,
            showBar: true,
            showData: true,
          },
        },
        {
          id: 'task10',
          coverImage: TaskImage5,
          label: 'issue',
          title: 'Resolve styling issues in dark mode theme',
          assignee: [users[7], users[8]],
          completed: false,
          priority: 'medium',
          description,
          attachments,
          subtasks,
          activities,
          attachmentCount: 56,
          progress: {
            total: 20,
            completed: 9,
            showBar: true,
            showData: true,
          },
        },
        {
          id: 'task11',
          coverImage: TaskImage6,
          label: 'feature',
          title: 'Write and edit contents for the e-commerce site',
          dueDate: '2024-08-10',
          assignee: [users[2], users[5], users[9]],
          completed: false,
          priority: 'urgent',
          description,
          attachments,
          subtasks,
          activities,
          attachmentCount: 54,
          progress: {
            total: 19,
            completed: 10,
            showBar: true,
          },
        },
      ],
    },
    {
      id: 'list4',
      title: 'Done',
      compactMode: false,
      tasks: [
        {
          id: 'task12',
          label: 'feature',
          title: 'Create the Email Page layout and necessary components',
          assignee: [users[6], users[9]],
          completed: true,
          priority: 'medium',
          description,
          attachments,
          subtasks,
          activities,
          attachmentCount: 43,
          progress: {
            total: 12,
            completed: 12,
            showBar: true,
          },
        },
        {
          id: 'task13',
          label: 'feature',
          title: 'Enhance website usability through user feedback',
          assignee: [users[2], users[13]],
          completed: true,
          priority: 'medium',
          description,
          attachments,
          subtasks,
          activities,
          attachmentCount: 14,
          progress: {
            total: 18,
            completed: 5,
          },
        },
        {
          id: 'task14',
          coverImage: TaskImage7,
          label: 'issue',
          title: 'Plan and execute training sessions for new hires',
          assignee: [users[1], users[5], users[6]],
          completed: true,
          priority: 'urgent',
          description,
          attachments,
          subtasks,
          activities,
          attachmentCount: 19,
          progress: {
            total: 28,
            completed: 15,
            showBar: true,
          },
        },
        {
          id: 'task15',
          coverImage: TaskImage8,
          label: 'undefined',
          title: 'Organize the meeting for new product ideas',
          assignee: [users[7], users[14]],
          completed: true,
          priority: 'high',
          description,
          attachments,
          subtasks,
          activities,
          attachmentCount: 16,
          progress: {
            total: 24,
            completed: 18,
            showBar: true,
          },
        },
      ],
    },
    {
      id: 'list5',
      title: 'Rework',
      compactMode: false,
      tasks: [
        {
          id: 'task16',
          label: 'feature',
          title: 'Blog Edit Page Modification and Playlist Page Design',
          assignee: [users[1], users[9]],
          dueDate: '2024-08-08',
          completed: false,
          priority: 'medium',
          description,
          attachments,
          subtasks,
          activities,
          attachmentCount: 40,
          progress: {
            total: 22,
            completed: 7,
            showBar: true,
            showData: true,
          },
        },
        {
          id: 'task17',
          coverImage: TaskImage9,
          label: 'issue',
          title: 'Plan and execute training sessions for new hires',
          assignee: [users[4], users[6]],
          dueDate: '2024-08-09',
          completed: false,
          priority: 'urgent',
          description,
          attachments,
          subtasks,
          activities,
          progress: {
            total: 19,
            completed: 5,
            showBar: true,
            showData: true,
          },
        },
        {
          id: 'task18',
          label: 'bug',
          title: 'Analyze Market Trends for Branding Strategies',
          assignee: [users[2], users[13], users[12]],
          completed: false,
          priority: 'urgent',
          description,
          attachments,
          subtasks,
          activities,
          attachmentCount: 13,
          progress: {
            total: 15,
            completed: 7,
            showData: true,
          },
        },
        {
          id: 'task19',
          label: 'feature',
          title: 'Develop and Execute Marketing Campaigns',
          assignee: [users[2], users[5]],
          dueDate: '2024-08-08',
          completed: true,
          priority: 'high',
          description,
          attachments,
          subtasks,
          activities,
          progress: {
            total: 25,
            completed: 16,
            showBar: true,
            showData: true,
          },
        },
      ],
    },
  ],
};
