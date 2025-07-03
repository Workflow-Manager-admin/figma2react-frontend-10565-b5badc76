#!/bin/bash
cd /home/kavia/workspace/code-generation/figma2react-frontend-10565-b5badc76/frontend_app
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

