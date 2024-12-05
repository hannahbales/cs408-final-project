# Mental Health Journal App

## Project Overview

This project is a full-stack mental health journal application that allows users to document and reflect on their mental health journey. The app aims to provide a safe and accessible way for users to log their mood, record daily thoughts, and practice gratitude. By tracking emotional patterns over time, users can better understand their mental well-being.

## Theme

The theme of this project is mental health tracking and journaling. It’s a mental wellness tool designed for users who want a private and supportive space to reflect on their emotional state. Users can input daily thoughts, moods, and gratitude entries and review their data through visualizations.

## Core Functionality

Landing Page

The landing page introduces the app and its features. It will have an inviting design and will show the user's most recent journal entry. A brief description of the app’s purpose and how it can benefit users will be presented. 

Mood Tracker

Users can submit a form to log their current mood, add a few notes, and save the entry to the AWS database. Mood entries will include a timestamp, mood rating, and an optional short note.

Daily Journal 

A separate page allows users to add journal entries and save the entry to the AWS database. Journal entries will include a timestamp and an optional photo upload.

Gratitude Logging

The gratitude page will allow users to answer a new gratitude prompt each day. Data is sent to AWS for storage, and users can view and reflect on past entries. There will also be a daily, ever-changing inspirational quote displayed on this page.

History Visualization

This feature allows users to view their entries over time, helping them notice patterns in their emotional states. The data visualization page will conditionally retrieve specific data from AWS to show their history, of which they can filter through by entry type or date.

## Target Audience

The primary audience for this app includes:

- Individuals seeking to monitor and improve their mental health.
- Users looking to build daily habits of self-reflection and gratitude.
- People who want a private, digital space to record thoughts and track mood patterns over time.

## Data Management

- Mood Entries: Users will log their daily mood and short notes, saved to the database with timestamps.
- Journal Entries: Users can document daily thoughts, adding more detail than a mood entry.
- Gratitude Logs: Users will note things they’re grateful for, which can be reviewed later for a positive reflection.
- History: Users can view entry patterns over time, filtered by specific dates or entry type.

## Stretch Goals

User Authentication
- Allow users to create individual accounts, so their journal entries and mood data are secure and private.

Daily Reminders
- Send optional notifications encouraging users to log their mood or reflect on gratitude.

Advanced Mood Analytics
- Use statistical insights (like average mood per month) or even sentiment analysis on journal entries to offer more depth to the user’s self-reflection.

Mood Boost Suggestions
- Based on mood entries, provide suggestions like motivational quotes, breathing exercises, or mindfulness activities tailored to the user’s emotional state.

## Project Wireframe

TODO: Replace the wireframe below with you own design.

![wireframe](/img/final1.png)
![wireframe](/img/final2.png)
![wireframe](/img/final3.png)