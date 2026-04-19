FlowState DevOps App

Overview

FlowState is a full-stack workflow and hybrid training system designed to help individuals balance a 9–5 job, fitness, and daily responsibilities through a structured, state-driven approach.

This project is being built to simulate a real-world application while demonstrating end-to-end DevOps practices.

Who It’s For

Individuals managing:
	•	full-time work (9–5)
	•	consistent training (gym, running)
	•	daily responsibilities

who need a system to bring structure and execution to their routine.

Problem It Solves

Many people struggle with:
	•	unstructured task management
	•	inconsistent execution
	•	lack of visibility into priorities

FlowState introduces a state-driven workflow system that enforces clarity, progress tracking, and consistency.

Core Features
	•	State-driven task workflow (todo → in_progress → done)
	•	Task and note management
	•	Categorization for daily responsibilities and training
	•	Structured execution system for hybrid lifestyles

Task States
	•	To Do → Planned but not started
	•	In Progress → Actively being worked on
	•	Done → Completed

Data Model (Initial)

Task
	•	id
	•	title
	•	status
	•	category
	•	created_at
	•	updated_at

Note
	•	id
	•	content
	•	updated_at

Backend Actions (Planned)
	•	Create task
	•	Get all tasks
	•	Get single task
	•	Update task status
	•	Edit task
	•	Delete task
	•	Create note
	•	Edit note
	•	Delete note

Tech Stack
	•	Frontend: React
	•	Backend: Node.js (Express)
	•	Database: SQLite (initial) → PostgreSQL (planned)
	•	Containerization: Docker
	•	CI/CD: GitHub Actions
	•	Infrastructure: Terraform
	•	Cloud: AWS (planned)

DevOps Goals

This project is designed to demonstrate:
	•	Containerization of a multi-service application
	•	CI pipeline (linting, testing, Docker image build)
	•	Automated image versioning and registry push
	•	Infrastructure provisioning using Terraform
	•	Cloud deployment and environment configuration
	•	Observability (logs, health checks, metrics)
	•	System reliability and failure recovery

Status

🚧 In active development
	•	Project structure initialized
	•	Git setup in progress
	•	Backend and containerization starting next

Goals
	•	Build full-stack application
	•	Containerize services with Docker
	•	Implement CI/CD pipeline
	•	Deploy to AWS infrastructure
	•	Add observability (health + metrics endpoints)
	•	Simulate failures and document recovery


Built as part of a 3-week DevOps interview preparation plan.

Branching test: updating README from feature branch.