import { RouteComponentProps, RouteProps } from 'react-router-dom';
import * as URLS from '../constants/url.constants';
import Lobby from '../pages/lobby';
import CreateTeam from '../pages/create-team';
import Menu from '../pages/menu';
import TeamRoom from '../pages/team-room';
import Authorization from '../pages/authorization';
import React from 'react';

export interface RouteInterface extends RouteProps {
  path: string;
  component: React.ComponentType<RouteComponentProps<any> | {}>;
  isPrivate: boolean;
}

export const routes: RouteInterface[] = [
  {
    path: URLS.LOBBY_URL,
    component: Lobby,
    isPrivate: true,
  },
  {
    path: URLS.CREATE_TEAM_URL,
    component: CreateTeam,
    isPrivate: true,
  },
  {
    path: URLS.TEAM_ROOM_URL,
    component: TeamRoom,
    isPrivate: true,
  },
  {
    path: URLS.BASE_URL,
    component: Menu,
    isPrivate: true,
  },
  {
    path: URLS.AUTH_URL,
    component: Authorization,
    isPrivate: false,
  },
];