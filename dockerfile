# Use the official Node.js image as the base image
FROM node:20 AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Stage for the production image
FROM node:20 AS production

# Set the working directory
WORKDIR /app

# Copy only the necessary files from the builder stage
COPY --from=builder /app/build ./build
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules

# Expose the port the app runs on
EXPOSE 5173

# Command to run the application
CMD ["npm", "start"]
