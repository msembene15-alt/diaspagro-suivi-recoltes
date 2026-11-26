# DIASPAGRO – Suivi des récoltes (version 1.1)

Application Windows (.exe) pour suivre et planifier les récoltes au Sénégal :
planning Gantt, prévu vs réel, météo (Open-Meteo), calendrier des prix du marché.

## Fabriquer l'.exe avec GitHub (sans rien installer)

1. Créez un compte gratuit sur https://github.com
2. Cliquez sur **New repository**. Nom : `diaspagro-suivi-recoltes`. Choisissez **Private** (privé), puis **Create repository**.
3. Sur la page du dépôt : **uploading an existing file**. Décompressez l'archive, puis glissez **tout le contenu** du dossier dans la page (y compris le dossier `.github`). Cliquez **Commit changes**.
   - Si le dossier `.github` n'apparaît pas dans le dépôt : **Add file > Create new file**, tapez le nom `.github/workflows/build.yml`, collez le contenu du fichier `build.yml` fourni, puis **Commit**.
4. Onglet **Actions** : si GitHub le demande, activez les workflows. Ouvrez « Fabriquer l'application Windows » puis **Run workflow**. Après 3 à 5 minutes, l'installateur `.exe` est disponible en bas de la page de l'exécution (section Artifacts).
5. **Pour un lien de téléchargement permanent** (à mettre plus tard dans la messagerie) : onglet **Releases > Create a new release**, tag `v1.0.0`, **Publish release**. Le workflow se relance et ajoute l'`.exe` à la release.
   Le lien sera :
   `https://github.com/VOTRE-COMPTE/diaspagro-suivi-recoltes/releases/latest/download/DIASPAGRO-Suivi-Recoltes-Setup.exe`
   Attention : un dépôt privé n'est pas téléchargeable par des personnes sans accès GitHub. Pour que chaque membre puisse télécharger avec le lien, passez le dépôt en public (Settings > Danger Zone), ou hébergez l'`.exe` ailleurs.

## Première ouverture sur Windows
Windows peut afficher « Windows a protégé votre PC » car l'application n'est pas signée.
Cliquez sur **Informations complémentaires**, puis **Exécuter quand même**.

## Fonctionnement
- Les données sont enregistrées sur l'ordinateur. Onglet **Données** : sauvegarde (.json), restauration, export CSV.
- La météo nécessite internet. Sans connexion, la dernière météo téléchargée reste affichée.
- Marché : aucun prix n'est préchargé. Ajoutez des lignes ou importez un CSV (produit ; marché ; mois ; prix ; volume ; source).

## Tester sur un ordinateur de développement (facultatif)
Installer Node.js, puis `npm install` et `npm start`. Pour fabriquer l'.exe : `npm run dist`.
