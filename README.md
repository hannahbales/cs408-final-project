# Mental Health Journal App

## Project Overview

This project is a full-stack mental health journal application that allows users to document and reflect on their mental health journey. The app aims to provide a safe and accessible way for users to log their mood, record daily thoughts, and practice gratitude. By tracking emotional patterns over time, users can better understand their mental well-being.

## Theme

The theme of this project is mental health tracking and journaling. It’s a mental wellness tool designed for users who want a private and supportive space to reflect on their emotional state. Users can input daily thoughts, moods, and gratitude entries and review their data through visualizations.

## Core Functionality

Landing Page

The landing page introduces the app and its features. It will have an inviting design with clear calls to action to log in or sign up. A brief description of the app’s purpose and how it can benefit users will be presented. The landing page will have a form that allows users to quickly submit a mood log to AWS, helping them start tracking their mental health.

Mood Tracker

Users can submit a form to log their current mood, add a few notes, and save the entry to the AWS database. The form will sanitize input to prevent any malicious data from being stored. Mood entries will include a timestamp, mood rating, and an optional short note.

Daily Journal and Gratitude Logging

A separate page allows users to add journal entries and log things they are grateful for each day. Data is sent to AWS for storage, and users can view and reflect on past entries.

Mood History Visualization

This feature allows users to view mood trends over time, helping them notice patterns in their emotional states. The data visualization page will conditionally retrieve specific mood data from AWS to render a mood graph, allowing users to filter by date range or mood type.

## Target Audience

The primary audience for this app includes:

- Individuals seeking to monitor and improve their mental health.
- Users looking to build daily habits of self-reflection and gratitude.
- People who want a private, digital space to record thoughts and track mood patterns over time.

## Data Management

- Mood Entries: Users will log their daily mood and short notes, saved to the database with timestamps.
- Journal Entries: Users can document daily thoughts, adding more detail than a mood entry.
- Gratitude Logs: Users will note things they’re grateful for, which can be reviewed later for a positive reflection.
- Mood History and Trends: Users can view mood patterns over time, filtered by specific dates or moods.

## Stretch Goals

User Authentication
- Allow users to create individual accounts, so their journal entries and mood data are secure and private.

Daily Reminders
- Send optional notifications encouraging users to log their mood or reflect on gratitude.

Advanced Mood Analytics
- Use statistical insights (like average mood per month) or even sentiment analysis on journal entries to offer more depth to the user’s self-reflection.

Mobile App Compatibility
- Develop mobile compatibility or create a native app version for iOS/Android to improve user accessibility and convenience.

Mood Boost Suggestions
- Based on mood entries, provide suggestions like motivational quotes, breathing exercises, or mindfulness activities tailored to the user’s emotional state.

## Project Wireframe

TODO: Replace the wireframe below with you own design.

![wireframe](wireframe-example.png)
