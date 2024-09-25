FROM bun:1.1.26

WORKDIR /app
COPY . .

RUN bun i
RUN bun run build

CMD ["bun", "run", "start"]