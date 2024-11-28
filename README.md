# Movie Application

## Overview
This is a movie application with both frontend and backend implemented. Users can register, login, and browse movies. The main features include:

- **User Authentication**: Register, login, and logout.
- **Movie Browsing**: Users can view popular, upcoming, top-rated, and now-playing movies.
- **Movie Playback**: Users can click on a movie to play it.
- **Search Functionality**: Users can search for movies.
- **Password Recovery**: Users can reset their password if they forget it.

## Features
1. **Registration & Login**:
   - The user can create a new account on the `/` route and login.
   

2. **Movie Browser**:
   - On `/browser`, users can scroll through and view the following categories of movies:
     - **Popular Movies**
     - **Upcoming Movies**
     - **Top Rated Movies**
     - **Now Playing Movies**
   - The movies can be scrolled horizontally (right to left).
   - Users can click on any movie to play it.
   
4. **Navbar**:
   - Includes a **Logout** button, **Search** button, and a dynamic display of the user’s login status.
   
5. **Search Movies**:
   - Clicking the **Search** button redirects the user to `/search`, where they can search for movies by title.

6. **Password Recovery**:
   - Users can reset their password using the **Forgot Password** feature.
