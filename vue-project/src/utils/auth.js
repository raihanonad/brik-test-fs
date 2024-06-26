export function getToken() {
    return localStorage.getItem('token');
}
  
export function setToken(token) {
    localStorage.setItem('token', token);
}
  
export function removeToken() {
    localStorage.removeItem('token');
}


export const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    return !!token;
};
  