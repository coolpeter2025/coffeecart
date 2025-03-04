@echo off
echo Pushing fixes for Vercel deployment issues to GitHub...

git add .
git commit -m "Fix Vercel deployment issues: Remove invalid next.config.js option, add 'use client' directive to error pages, create proper error handling"
git push origin main

echo Done!
