import axios from "axios";

const BASE_URL = "http://localhost:8080/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMjQ3M2FjYzM3YmI5NjE0M2E2YTMzMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NzAxODU5OCwiZXhwIjoxNjQ3Mjc3Nzk4fQ.RHB8ho7thXglyfLgzxG-3p2hMj_srqx9gpJdi5I6TUw";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`},
})