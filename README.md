# FlowState DevOps App

## Overview
This is a workflow application that helps users manage tasks and training in a structured way. Tasks move through defined states to support productivity and consistency for individuals balancing work and fitness.

## Who It's For
Designed for individuals working a 9–5 while managing training (gym, running, etc.) who need a structured system to stay organized.

## Problem It Solves
Solves the problem of disorganized tasks, forgotten responsibilities, and lack of structure when balancing work and training.

## Core Features
- State-driven task workflow (To Do → In Progress → Done)
- Task and note management
- Structured organization for daily responsibilities and training

## Task States
- To Do → Tasks that have been planned but not started  
- In Progress → Tasks currently being worked on  
- Done → Tasks that have been completed  

## Data Model (Initial)
Task fields:
- id  
- title  
- status  
- note  
- category  
- created_at  
- updated_at  

## Backend Actions (Planned)
- Create task  
- Get tasks  
- Get single task  
- Update task status  
- Edit task  
- Delete task  
- Add note to task  
- Edit note  
- Delete note  

## Tech Stack
- Frontend: React  
- Backend: Node.js / Express  
- Database: (coming soon)  
- DevOps: Docker, CI/CD, Cloud (in progress)

## Status
🚧 In active development — building backend and data flow

## Goals
- Build full-stack application
- Containerize services with Docker
- Implement CI/CD pipeline
- Deploy to cloud (EC2)
- Add observability (health + metrics endpoints)
