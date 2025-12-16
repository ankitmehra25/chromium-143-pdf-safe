FROM node:22-alpine3.22

RUN apk add --no-cache \
  chromium \
  fontconfig \
  freetype \
  harfbuzz \
  ttf-dejavu \
  noto-fonts \
  noto-fonts-arabic \
  libstdc++ \
  libgcc \
  nss

RUN fc-cache -f -v

WORKDIR /app
COPY package.json ./
RUN npm install

COPY src ./src

CMD ["node", "src/generate-pdf.js"]
