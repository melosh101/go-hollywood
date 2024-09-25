FROM oven/bun:1

WORKDIR /app
COPY . .

RUN bun i
RUN bun run build

CMD ["bun", "run", "start"]