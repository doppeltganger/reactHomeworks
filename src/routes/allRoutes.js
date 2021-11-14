import CreateContest from '../pages/CreateContest/CreateContest';
import Contests from '../pages/Contests/Contests';
import ContestBoard from '../pages/ContestBoard/ContestBoard';
import Error from '../pages/Error';

export const allRoutes = [
    { path: '/', component: Contests },
    { path: '/create', component: CreateContest },
    { path: '/competition/:competitionId', component: ContestBoard },
    { path: '/error', component: Error },
];