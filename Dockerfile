#etapa1 
FROM node:20-alpine AS builder

#definir el directorio de trabajo
WORKDIR /app

COPY package*.json ./

#instalar dependencias
RUN npm ci

#copiar el resto de los archivos
COPY . .

RUN npm run build

#etapa2
FROM node:20-alpine

#definir el directorio de trabajo
WORKDIR /app

#activar optimizaciones para producción
ENV NODE_ENV=production

COPY package*.json ./

RUN npm ci --omit=dev

COPY --from=builder /app/dist ./dist

CMD ["node", "dist/main.js"]
