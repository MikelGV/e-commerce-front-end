import { BehaviorSubject } from "rxjs";
import getConfig from "next/config";
import Router from "next/dist/server/router";

import {fetchWrapper} from "helpers";


const {publicRuntimeConfig} = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}/users`;
const userSubject = new BehaviorSubject(process.browser && JSON.parse(localStorage.getItem('user')));

export const userService = {}