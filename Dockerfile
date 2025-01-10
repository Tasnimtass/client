# Dockerfile pour React 
# Utilise l'image officielle de Node.js
FROM node:18

# Définit le répertoire de travail
WORKDIR /app

# Copie les fichiers package.json et package-lock.json
COPY package*.json ./

# Installe les dépendances
RUN npm install

# Copie tous les fichiers du projet
COPY . .

# Expose le port 3000
EXPOSE 3000

# Commande pour démarrer React
CMD ["npm", "start"]
