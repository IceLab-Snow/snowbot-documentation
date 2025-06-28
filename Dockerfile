FROM node:18-alpine

WORKDIR /app

# Copy and install backend dependencies
COPY backend/package*.json ./backend/
RUN cd backend && npm ci --only=production

# Copy and install frontend dependencies
COPY frontend/package*.json ./frontend/
RUN cd frontend && npm ci

# Copy all source files
COPY . .

# Build frontend
RUN cd frontend && npm run build

# Copy build to backend
RUN mkdir -p backend/public && cp -r frontend/build/* backend/public/

# Set environment
ENV NODE_ENV=production
ENV PORT=5000

# Expose port
EXPOSE 5000

# Start server
CMD ["node", "backend/server.js"]