# Establece la imagen base de Node.js con la versión 18.17.1
FROM node:18.17.1

# Establece el directorio de trabajo dentro de la imagen
WORKDIR /app

# Copia los archivos de la aplicación Angular
COPY package*.json ./
COPY . .

# Instala las dependencias
RUN npm install

# Compila la aplicación Angular para producción
RUN npm run build --prod

# Utiliza un servidor HTTP simple para servir la aplicación

CMD ["npx", "http-server", "dist/file-upload-app","-p 4200"]
# Expone el puerto en el que se ejecutará el servidor HTTP
EXPOSE 4200


