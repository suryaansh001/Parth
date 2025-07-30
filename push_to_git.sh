#!/bin/bash

# Initialize Git repository
git init

# Add all files
git add .

# Ask user for commit message
read -p "Enter commit message: " commit_message

# Commit with user message
git commit -m "$commit_message"

# Push to main branch
git push origin main
