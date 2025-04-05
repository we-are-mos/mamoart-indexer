# ---- Base image with Bun runtime ----
  FROM oven/bun:1.0.25

  # Set working directory
  WORKDIR /app
  
  # Copy everything
  COPY . .
  
  # Install dependencies
  RUN bun install
  
  # Expose port
  EXPOSE 3000
  
  # Run start script from package.json
  CMD ["bun", "start"]